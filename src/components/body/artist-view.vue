<style lang="scss" scoped>
#output-container {
    height: calc(100vh - 100px);
    width: 100%;
    //display: flex;
    justify-content: center;
    color: #222;
    position: absolute;
    top: 50px;

    #output {
        //width: 700px;
        width: 100%;
        height: 100%;
        display: flex;

        #left-side {
            height: 100%;
            width: 50%;

            h1 {
                margin-top: 50px;
                //line-height: 0.7
            }

            img {
                width: 50%;
                //margin: 30px;
                padding: 0 30px 0 30px;
                box-sizing: border-box;
                margin-top: 50px;
                //position: absolute;
                left: 50px;
                top: 50px;
            }

            p {
                margin-top: 20px;

            }

            a {
                color: #17A1FF;
            }

            #info-container {
                float: right;
                width: 50%;

                .link-icon {
                    color: inherit;

                    i {
                        margin: 20px 3px 0 0;
                        font-size: 25px;
                    }
                }
            }
        }

        #right-side {
            height: 100%;
            width: 50%;

            #local-events {
                margin: 20px;
                margin-bottom: 0;

                p {
                    font-weight: bold;
                }
            }

            #ask-location {
                margin: 20px;
                margin-bottom: 0;
            }


            #event-container {
                overflow: auto;
                width: 100%;

                p {
                    margin-left: 20px;
                    margin-top: 50px;
                    font-weight: bold;
                }

                #event-list {
                    .event-div {
                        margin: 20px;
                    }
                }
            }
        }
    }
}
</style>

<template>
    <div id="output-container">
        <div id="output">
            <div id="left-side">
                <!--If we get an image from lastFM show it. Otherwise use the one from BIT-->
                <img :src="imageUrl" alt="" v-if="imageUrl">

                <div id="info-container">
                    <h1>{{ artistInfo.name }}</h1>


                    <a :href="artistInfo.facebook_page_url" v-if="artistInfo.facebook_page_url" class="link-icon">
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    </a>

                    <a :href="bandcampUrl" v-if="bandcampUrl" class="link-icon">
                        <i class="fa fa-bandcamp" aria-hidden="true"></i>
                    </a>


                    <a :href="lastFMData.url" v-if="lastFMData.url" class="link-icon">
                        <i class="fa fa-lastfm-square" aria-hidden="true"></i>
                    </a>

                    <p v-if="lastFMData" v-html="artistBio">
                        {{ artistBio }}
                    </p>
                </div>
            </div>

            <div id="right-side">
                <div id="local-events" v-if="locationSet">
                    <p v-if="localEvents">Local events:</p>
                    <p v-else>No local upcoming events :(</p>
                </div>
                <div id="ask-location" v-else>
                    No location set, do you want to set it now so we can show you events in your country?
                </div>
                <div id="event-container">
                    <p v-if="events.length">
                        Currently on tour!
                        <br>
                        {{ artistInfo.upcoming_event_count }} upcoming events:
                    </p>
                    <p v-else>
                        No upcoming events :(
                    </p>

                    <div id="event-list">
                        <div  v-for="event in events" :key="event.datetime" class="event-div">
                            {{ event.datetime }}
                            {{ event.venue.name }}
                            {{ event.venue.city }}
                            {{ event.venue.country }}
                            <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                            <a v-else :href="event.searchUrl">Search for tickets online</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//TODO:
// - Make landing page prettier
// - Add "more results"?
// - Add search to artist-view
// - Make list of events prettier
// - Show related artists in artist-view
// - Save location in localStorage and show that event at the top
// - Add tracked artists to localStorage and make a page to show those
// - Make a page that shows all events at your location from your tracked artists
// - Do security checks
// - Add more artists
// - Make people be able to report wrong artists
export default {
    data: function() {
        this.getAllInformation();
        return {
            // Init local variables
            artist: '',
            artistInfo: {},
            bandcampUrl: '',
            events: {},
            lastFMData: {},
            artistBio: '',
            onTour: false,
            imageUrl: '',
            locationSet: false
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            this.getAllInformation();
        }
    },

    mounted: function() {
        // If the page loads for the first time get all information
    },

    methods: {
        getAllInformation: function() {
            this.getArtistEvents();
            this.checkBandcampAccount();
            this.getLastFMInfo();
        },

        getArtistEvents: function() {
            // Store artist from url in local variable
            this.artist = this.$route.params.artist

            const apiURL = "https://rest.bandsintown.com/"
            const apiExtension = "?app_id='ConcerTrack v0.0.1'"

            // Get artist information from API
            let getArtistInfo = (artist) => {
                return new Promise((resolve, reject) => {
                    fetch(apiURL + "artists/" + artist + apiExtension, {
                        method: 'GET',
                        headers: {
                            'accept': "application/json"
                        }
                    }).then(response => {
                        return response.json()
                    }).then(response => {
                        resolve(response);
                    }).catch(error => {
                        console.log(error);
                    })
                })
            }

            // Get artist's events from API
            let getEvents = (artist) => {
                return new Promise((resolve, reject) => {
                    fetch(apiURL + "artists/" + artist + "/events" + apiExtension, {
                        method: 'GET',
                        headers: {
                            'accept': "application/json"
                        }
                    }).then(response => {
                        return response.json()
                    }).then(response => {
                        resolve(response);
                    }).catch(error => {
                        console.log(error);
                    })
                })
            }

            /* Data:
            Array containing all events:
                artist_id: artist ID
                datetime: ISO format date of event
                id: event ID
                lineup: Artists present at event
                offers: array of ticket info
                    status: if tickets are available
                    type: what type of offer (seems to be tickets always)
                    url: link to tickets redirect through BIT
                on_sale_datetime: when tickets go on sale
                ticketUrl: another url to tickets
                venue: object with information about venue
                    city: the city
                    country: the country
                    latitude: the latitude
                    longitude: the longitude
                    name: name of the venue
                    region: state or province (or some random number)
            */
            getEvents(this.artist).then(data => {
                this.events = data;
                //console.log("BIT event data:")
                //console.log(this.events)

                this.events.forEach((event) => {
                    // Change ISO date to readable date format
                    let date = new Date(event.datetime);
                    let months = ["Jan","Feb","Mar","Apr","May", "June","July","Aug","Sept","Oct","Nov","Dec"];
                    event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

                    // If we have a ticket url show it otherwise redirect to search
                    if(event.offers.length){
                        event.ticketUrl = event.offers[0].url;
                    } else {
                        event.searchUrl = "https://duckduckgo.com/?q=" + this.artistInfo.name + " " + event.datetime;
                    }
                })
            })

            /* Data:
            facebook_page_url: url to facebook page
            id: artist ID
            image_url: url to image of artist
            name: artist name
            thumb_url: url to thumbnail image
            tracker_count: number of BIT trackers
            upcoming_event_count: number of upcoming events
            url: link to BIT page of artist
            */
            getArtistInfo(this.artist).then(data => {
                this.artistInfo = data;
                //console.log("BIT data: ")
                //console.log(this.artistInfo);
            })
        },

        checkBandcampAccount: function() {
            // Cant get results from bandcamp yet so we just redirect to the search page
            this.bandcampUrl = "https://bandcamp.com/search?q=" + this.artist.toLowerCase();
        },

        // Get information from Last.fm API
        getLastFMInfo: function() {

            let getData = () => {
                // Encode so lastfm doesn't get trouble with names with for example &
                let artist = encodeURIComponent(this.artist);

				let apiUrl = "https://ws.audioscrobbler.com/2.0/"
				let apiParams = "?method=artist.getinfo&api_key=a4629fdacfd93267704f599b874a59bf&format=json&artist="

                return new Promise((resolve, reject) => {
                    fetch(apiUrl + apiParams + artist, {
                        method: 'GET',
                        headers: {
                            'accept': "application/json"
                        }
                    }).then(response => {
                        return response.json()
                    }).then(response => {
                        resolve(response);
                    }).catch(error => {
                        console.log(error);
                    })
                })
            }

            /* Data:
            bio: short description of artist
            image: url to artist image
            name: artist name
            ontour: 1 if artist is on tour otherwise 0
            similar: object with similar artists
                artists: array of artists
                    image: image of similar artist
                    name: name of similar artist
                    url: url to last fm page of similar artist
            stats: object with lastfm stats
                listeners: number of listeners
                playcount: number of plays from listeners
                streamable: 1 if you can stream from lastfm 0 otherwise
                tags: object with array of tags
                    tags: array of tags
            */
            getData().then(data => {
                if (data.error){
                    throw data.message;
                    return;
                }

                this.lastFMData = data.artist;
                this.artistBio = data.artist.bio.summary;
                this.imageUrl = data.artist.image[data.artist.image.length - 1]["#text"] || this.artistInfo.image_url;
                //console.log("Last FM data: ");
                //console.log(data.artist);
            })
        }
    }
}
</script>
