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

    #tracked-link {
        position: absolute;
        top: -50px;
        z-index: 3;
        display: flex;
        align-items: center;
        height: 50px;
        right: 570px;
        text-decoration: none;

        p {
            font-weight: bold;
            color: $orange-yellow;

            transition: 0.2s all;

            &:hover {
                color: #F0443A;
            }
        }
    }

    #output {
        width: 100%;
        height: 100%;
        display: flex;

        #left-side {
            height: 100%;
            width: 50%;

            h1 {
                margin-top: 50px;
            }

            #artist-image {
                width: 50%;
                padding: 0 30px 0 30px;
                box-sizing: border-box;
                margin-top: 50px;
            }

            #track-button-tracked, #track-button {
                width: calc(50% - 60px);
                margin: 0 30px 0 30px;
                height: 50px;
                margin-top: 20px;
                box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
                color: white;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                outline: none;
                border-radius: 3px;
            }

            #track-button-tracked {
                background-color: $orange-yellow;

                transition: all 0.2s;

                &:hover {
                    background-color: $orange;
                    box-shadow: 0 5px 9px 0 rgba(0,0,0,.3);
                }

                &:active {
                    box-shadow: none;
                    background-color: $orange-yellow;
                }
            }

            #track-button {
                background-color: #1D9C73;

                transition: all 0.2s;

                &:hover {
                    background-color: #157757;
                    box-shadow: 0 5px 9px 0 rgba(0,0,0,.3);
                }

                &:active {
                    box-shadow: none;
                    background-color: #1D9C73;
                }
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
            display: flex;
            flex-direction: column;


            #local-event-container {
                box-sizing: border-box;
                padding-left: 20px;
                margin-top: 50px;

                flex: 0 1 auto;
                max-height: 50%;

                h1 {
                    font-size: 22px;
                }

                #local-events {
                    margin-top: 10px;
                    margin-bottom: 0;

                    #local-events-list {
                        overflow-y: scroll;
                        max-height: calc(50vh - 200px);
                        width: 100%;
                    }

                    button {
                        background-color: transparent;
                        color: $orange-red;
                        text-decoration: underline;
                        cursor: pointer;
                        font-size: 15px;
                    }

                    .amount-upcoming {
                        font-weight: bold;
                        padding-top: 10px;
                    }

                    .event-div {
                        margin-top: 5px;
                        padding-bottom: 5px;

                        &:first-child {
                            margin-top: 0;
                        }

                        &:not(:last-child) {
                            border-bottom: 1px solid #ccc;
                        }
                    }
                }

                #ask-location {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;

                    p {
                        height: 40px;
                    }

                    #country {
                        margin-top: 5px;
                    }
                }
            }


            #event-container {
                box-sizing: border-box;
                padding: 50px 0 0 20px;
                width: 100%;
                flex: 1 1 auto;
                //max-height: 50%;
                display: flex;
                flex-direction: column;

                overflow-y: hidden;

                h1 {
                    //flex: 0 1 auto;
                    font-size: 22px;
                }

                .amount-upcoming {
                    padding-top: 10px;
                    font-weight: bold;
                    //flex: 0 1 auto;
                    color: black;
                }

                #event-list {
                    overflow-y: scroll;

                    .event-div {
                        margin-top: 5px;
                        padding-bottom: 5px;

                        &:first-child {
                            margin-top: 0;
                        }

                        &:not(:last-child) {
                            border-bottom: 1px solid #ccc;
                        }
                    }
                }
            }
        }
    }
}

.list-header {
    width: calc(100% - 14px);
    display: block;
    padding: 10px 0;
    padding-right: 14px;
    margin-top: 5px;
    //box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
    //border-bottom: 1px solid #333;
    border-top: 1px solid #333;
    font-size: 0;

    p {
        display: inline-block;
        font-weight: bold;
        font-size: 18px;



        &:nth-of-type(1) {
            width: 60px;
        }

        &:nth-of-type(2) {
            width: 30%;
            margin-left: 20px;
        }

        &:nth-of-type(3) {
            margin-left: 20px;
        }
    }
}

.event-date {
    background-color: $orange-yellow;
    width: 20px;
    height: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    color: white;
}

.event-venue {
    margin-left: 20px;
    width: 30%;
}

.event-city {
    width: 40%;
    margin-left: 20px;
}

.event-div {
    display: flex;
    align-items: center;

    //text-align: center;

    a {
        width: 10%;
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
            color: $orange-red;
            margin-right: 5px;
            position: absolute;
            background: white;
            border: 1px solid $orange-red;
            font-weight: bold;
            width: 250px;
            box-sizing: border-box;
            margin-left: 275px;
            padding: 0 5px;
            cursor: pointer;
        }

        form {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
        }

        #input-field {
            margin-top: 5px;
            margin-right: 5px;
            padding: 10px;
            height: 40px;
            font-size: 20px;
            border: 1px solid $orange-yellow;
            box-sizing: border-box;
            outline: none;
            width: 300px;
            border-radius: 3px;
        }

        #search-results {
            border: 1px solid $orange-yellow;
            position: absolute;
            top: 42px;
            right: 5px;
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
            right: 8px;
            margin-top: 3px;
            background-color: $orange-yellow;
            padding: 5px 18px;
            color: white;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);

            border-radius: 3px;

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
        <router-link :to="'/tracked'" id="tracked-link">
            <p>Tracked Artists</p>
        </router-link>
        <span id="search">
            <autocomplete
                title=""
                placeholder="Search another artist"
                data="static/AllList.json"
                callback="artistSearch"
                submitText="<i class='fa fa-search' aria-hidden='true'></i>">
            </autocomplete>
        </span>
        <div id="output">
            <div id="left-side">
                <!--If we get an image from lastFM show it. Otherwise use the one from BIT-->
                <img :src="imageUrl" alt="" v-if="imageUrl" id="artist-image">

                <div id="info-container">
                    <h1>{{ lastFMData.name }}</h1>


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

                <button id="track-button-tracked" v-if="tracking" v-on:click="trackArtist">Stop Tracking</button>
                <button id="track-button" v-else v-on:click="trackArtist">Track Artist</button>
            </div>

            <div id="right-side">
                <div id="local-event-container">
                    <h1>Local events:</h1>
                    <div id="local-events" v-if="countrySet">
                        <button v-on:click="resetCountry">Change location</button>
                        <p class="amount-upcoming">{{ localEvents.length }} upcoming events in country '{{ countrySet }}':</p>
                        <div class="list-header"><p>Date</p><p>Venue</p><p>Location</p></div>
                        <div v-if="localEvents.length" id="local-events-list" class="event-list">
                            <div v-for="event in localEvents" :key="event.datetime" class="event-div">
                                <p class="event-date">{{ event.datetime }}</p>
                                <p class="event-venue">{{ event.venue.name }}</p>
                                <p class="event-city">{{ event.venue.city }}, {{ event.venue.country }}</p>
                                <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                                <a v-else :href="event.searchUrl">Search tickets</a>
                            </div>
                        </div>
                        <div v-else style="margin-top: 5px">No local upcoming events :(</div>
                    </div>
                    <div id="ask-location" v-else>
                        <p>
                            No location set, do you want to set it now so we can show you events in your country?
                        </p>

                        <div id="country">
                            <autocomplete
                             title="Select country:"
                             placeholder="Country name"
                             data="static/countries.json"
                             callback="countrySearch"
                             submitText="Select">
                            </autocomplete>
                        </div>
                    </div>
                </div>

                <div id="event-container">
                    <h1>Global events:</h1>
                    <p v-if="events.length" class="amount-upcoming">
                        {{ artistInfo.upcoming_event_count }} upcoming events worldwide:
                    </p>
                    <div class="list-header">
                        <p>Date</p>
                        <p>Venue</p>
                        <p>Location</p>
                    </div>
                    <hr>
                    <div id="event-list" class="event-list" v-if="events.length">
                        <div  v-for="event in events" :key="event.datetime" class="event-div">
                            <p class="event-date">{{ event.datetime }}</p>
                            <p class="event-venue">{{ event.venue.name }}</p>
                            <p class="event-city">{{ event.venue.city }}, {{ event.venue.country }}</p>
                            <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                            <a v-else :href="event.searchUrl">Search tickets</a>
                        </div>
                    </div>

                    <div v-else style="margin-top: 5px">No global upcoming events :(</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//TODO:
// - Make landing page prettier
//   * Add, what we do and why we're good
// - Add "more results"?
// - Show related artists in artist-view
//   * Do we need this?
// - Do security checks
//   * Probably already pretty secure?
// - Add more artists
//   * Let users submit missing artists

// - Add dark mode
// - Add contact page
// - See if I can get paid for the site
// - Add loading transition
import store from '@/store/index.js'

export default {
    data: function() {
        this.getAllInformation();
        return {
            // Init local variables
            artist: '',
            artistInfo: {},
            bandcampUrl: '',
            events: [],
            lastFMData: {},
            artistBio: '',
            onTour: false,
            imageUrl: '',
            countrySet: false,
            localEvents: [],
            tracking: false,
            trackedArtists: {"list": []}
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            this.localEvents = [];

            this.getAllInformation();


            this.getTrackedArtists();
        }
    },

    mounted: function() {
        // If the page loads for the first time get all information

        let userCountry = localStorage.getItem('Country');
        if (userCountry) {
            this.countrySet = userCountry;
        }

        this.getTrackedArtists();
    },

    methods: {
        getTrackedArtists: function() {
            let trackedInfo =  JSON.parse(localStorage.getItem('Tracked'))
            if (trackedInfo)
                this.trackedArtists = trackedInfo;


            this.tracking = false;

            for(let i = 0, x = this.trackedArtists.list.length; i < x; i++) {
                let artist = this.trackedArtists.list[i]
                if (artist.toLowerCase() == this.$route.params.artist.toLowerCase()) {
                    this.tracking = true;
                }
            }
        },

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
                this.artist = this.lastFMData.name;
                this.artistBio = data.artist.bio.summary;
                this.imageUrl = data.artist.image[data.artist.image.length - 1]["#text"] || this.artistInfo.image_url;
                //console.log("Last FM data: ");
                //console.log(data.artist);
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
                        console.log(this.$children)
                        this.$children[1].errorMessage = "Sorry, we couldn't find that artist :(";
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

                let inList = false;

                for(let i = 0, x = this.trackedArtists.list.length; i < x; i++) {
                    let artist = this.trackedArtists.list[i]
                    if (artist.toLowerCase() == this.lastFMData.name.toLowerCase()) {
                        inList = true;
                    }
                }

                if (!inList) {
                    this.trackedArtists.list.push(this.lastFMData.name)
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
