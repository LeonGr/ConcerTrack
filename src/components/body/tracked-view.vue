<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;
#output-container {
    height: calc(100vh - 100px);
    width: 100%;
    //display: flex;
    justify-content: center;
    color: #222;
    position: absolute;
    top: 50px;

    #main-content {
        width: 100%;
        height: 100%;

        padding: 50px 30px;
        box-sizing: border-box;
    }
}
</style>

<style lang="scss">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;
#search {
    position: absolute;
    top: -50px;
    right: 250px;
    height: 50px;
    z-index: 5;

    #autocomplete-container {

        h1 {
            font-size: 20px;
            font-weight: 300;
        }

        #errorMessage {
            color: $orange;
            margin-right: 5px;
        }

        form {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
        }

        #input-field {
            padding: 10px;
            height: 50px;
            font-size: 20px;
            border: 1px solid $orange-yellow;
            box-sizing: border-box;
            outline: none;
            width: 300px;
        }

        #search-results {
            border: 1px solid $orange-yellow;
            position: absolute;
            top: 49px;
            right: 0px;
            list-style: none;
            background-color: white;
            box-sizing: border-box;
            width: 300px;

            li {
                padding: 4px 20px;

                &:hover {
                    cursor: pointer;
                }
            }

            .selected {
                background-color: $orange-yellow;
            }
        }

        #submitButton {
            position: absolute;
            right: 10px;
            background-color: $orange-yellow;
            padding: 5px 18px;
            color: white;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);

            cursor: pointer;
            transition: all 0.2s;
            outline: none;

            &:hover {
                background-color: $orange;
                box-shadow: 0 5px 9px 0 rgba(0,0,0,.3);
            }

            &:active {
                background-color: $orange-yellow;
                box-shadow: none;
            }
        }
    }
}

#country {
    #autocomplete-container {
        h1 {
            margin-top: 5px;
            font-size: 20px;
            font-weight: bold;
        }

        #errorMessage {
            color: $orange;
        }

        form {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        #input-field {
            padding: 5px;
            margin-top: 5px;
            height: 50px;
            font-size: 20px;
            border: 1px solid $orange-yellow;
            box-sizing: border-box;
            outline: none;
            width: 250px;
        }

        #search-results {
            border: 1px solid $orange-yellow;
            position: absolute;
            top: 210px;
            list-style: none;
            background-color: white;
            box-sizing: border-box;
            width: 250px;

            li {
                padding: 4px 20px;

                &:hover {
                    cursor: pointer;
                }
            }

            .selected {
                background-color: $orange-yellow;
            }
        }

        #submitButton {
            position: absolute;
            margin-left: 260px;
            padding: 10px;
            background-color: $orange-yellow;
            color: white;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);

            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                background-color: $orange;
                box-shadow: 0 5px 9px 0 rgba(0,0,0,.3);
            }
        }
    }
}
</style>

<template>
    <div id="output-container">
        <span id="search">
            <autocomplete
                title=""
                placeholder="Search another artist"
                data="http://localhost:8080/static/AllList.json"
                callback="artistSearch"
                submitText="<i class='fa fa-search' aria-hidden='true'></i>">
            </autocomplete>
        </span>
        <div id="main-content">
            <h1>Tracked Artists:</h1>
            <div id="local-events" v-if="countrySet">
                {{ countrySet }}
                <button v-on:click="resetCountry">Change location</button>
            </div>
            <div id="ask-location" v-else>
                <p>
                    No location set, do you want to set it now so we can show you events in your country?
                </p>

                <div id="country">
                    <autocomplete
                     title="Select country:"
                     placeholder="Country name"
                     data="http://localhost:8080/static/countries.json"
                     callback="countrySearch"
                     submitText="Select">
                    </autocomplete>
                </div>
            </div>

            <code>
                <p v-for="artist in trackedArtists.list">{{ artist }}</p>
            </code>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'

export default {
    data: function() {
        console.log('data')
        return {
            // Init local variables
            events: {},
            countrySet: false,
            localEvents: [],
            trackedArtists: {"list": []}
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            this.localEvents = [];

            console.log('route')
            let trackedInfo =  JSON.parse(localStorage.getItem('Tracked'))
            if (trackedInfo)
                this.trackedArtists = trackedInfo;

            console.log(this.trackedArtists)
        }
    },

    mounted: function() {
        // If the page loads for the first time get all information

        let userCountry = localStorage.getItem('Country');
        if (userCountry) {
            this.countrySet = userCountry;
        }

        console.log('mounted')
        let trackedInfo =  JSON.parse(localStorage.getItem('Tracked'))
        if (trackedInfo)
            this.trackedArtists = trackedInfo;

        console.log(this.trackedArtists)
    },

    methods: {
        getAllInformation: function() {
            this.getArtistEvents();
            this.checkBandcampAccount();
            this.getLastFMInfo();
            console.log('getAllInformation')
        },

        getArtistEvents: function() {
            console.time("BIT")
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
                //console.log(data)

                this.events.forEach((event) => {
                    // Change ISO date to readable date format
                    let date = new Date(event.datetime);
                    let months = ["Jan","Feb","Mar","Apr","May", "June","July","Aug","Sept","Oct","Nov","Dec"];
                    //event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                    event.datetime = `${date.getDate()} ${months[date.getMonth()]}`;

                    // If we have a ticket url show it otherwise redirect to search
                    if(event.offers.length){
                        event.ticketUrl = event.offers[0].url;
                    } else {
                        event.searchUrl = "https://duckduckgo.com/?q=" + this.lastFMData.name + " " + event.datetime;
                    }

                    if (event.venue.country == this.countrySet) {
                        this.localEvents.push(event);
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
                console.timeEnd("BIT")
            })
        },

        checkBandcampAccount: function() {
            // Cant get results from bandcamp yet so we just redirect to the search page
            this.bandcampUrl = "https://bandcamp.com/search?q=" + this.artist.toLowerCase();
        },

        // Get information from Last.fm API
        getLastFMInfo: function() {
            console.time("Lastfm")
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
                console.timeEnd("Lastfm")
            })
        },

        callBackForm: function(callback, value) {
            if (callback == "artistSearch") {
                let artist = value;

                // Check if we get a response from BIT API before we redirect
                store.doesArtistExist(artist).then(data => {
                    // If the response contains an ID redirect to artist-view
                    if (data.id) {
                        this.$router.push({ path: "/" + "artists/" + artist })
                    }
                }).catch(error => {
                    // If we get an error that means the artist has not been found
                    if (error.toString().includes("SyntaxError")) {
                        this.$children[0].errorMessage = "Sorry, we couldn't find that artist :(";
                    }
                })
            } else if (callback == "countrySearch") {
                let country = value;
                localStorage.setItem('Country', country);
                this.countrySet = country;

                this.localEvents = [];

                for(let i = 0, x = this.events.length; i < x; i++) {
                    let event = this.events[i];
                    if (event.venue.country == country) {
                        this.localEvents.push(event);
                    }
                }
            }
        },

        resetCountry: function() {
            localStorage.removeItem('Country');
            this.countrySet = false;
        },

        trackArtist: function() {
            if (!this.tracking) {
                this.tracking = true;
                if (!this.trackedArtists.list.includes(this.lastFMData.name.toLowerCase())) {
                    this.trackedArtists.list.push(this.lastFMData.name.toLowerCase())
                }
            } else {
                this.tracking = false;
                let index = this.trackedArtists.list.indexOf(this.lastFMData.name)
                if (index != -1) {
                    this.trackedArtists.list.splice(index, 1);
                }
            }

            localStorage.setItem('Tracked', JSON.stringify(this.trackedArtists));
        }
    }
}
</script>
