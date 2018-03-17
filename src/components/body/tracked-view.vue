<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;
#output-container {
    height: calc(100vh - 100px);
    width: 100%;
    justify-content: center;
    color: #222;
    position: relative;

    #undo-notification {
        border-left: 5px solid $orange-yellow;
        padding: 15px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        width: 300px;
        box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
        border-radius: 3px;

        position: absolute;

        background-color: white;
        bottom: 20px;
        left: 20px;

        p {
            margin-left: 10px;
        }

        a {
            color: $orange-red;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    #main-content {
        width: 100%;
        height: 100%;

        padding-left: 30px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;

        h1 {
            font-size: 32px;
            align-self: flex-start;
            margin-top: 50px;
            text-decoration: underline;
            text-decoration-color: $orange-yellow;
        }

        #local-events {
            margin-top: 20px;
            align-self: flex-start;
            width: 300px;
            font-size: 16px;

            button {
                margin-top: 20px;
                background: none;
                text-decoration: underline;
                color: $orange-yellow;
                cursor: pointer;
                font-size: 18px;
            }
        }

        #ask-location {
            margin-top: 20px;
            width: 300px;
            align-self: flex-start;
            font-size: 16px;
        }

        #export-button-container {
            align-self: flex-start;
            width: 300px;
            height: 120px;

            button {
                margin-top: 20px;
                background: none;
                text-decoration: underline;
                color: $orange-yellow;
                cursor: pointer;
                font-size: 18px;
            }

            textarea {
                width: 260px;
                height: 20px;
                margin-top: 20px;
                border: 1px solid #ccc;
            }
        }

        #all-artists-button {
            background-color: $orange-yellow;
            width: calc(100% - 40px);
            height: 50px;
            margin-top: 20px;
            box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
            color: white;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            outline: none;
            border-radius: 3px;

            display: none;

            transition: all 0.2s;

            &:hover {
                background-color: $orange;
            }
        }

        .artist-image {
            width: 80px;
            height: 80px;
            border-radius: 50px;
        }

        #tracked-artist-list-container {
            height: 100%;
            //width: calc(50% - 350px);
            width: 350px;
            align-self: flex-end;

            #artist-list-header {
                height: 50px;
                display: flex;
                align-items: center;
                font-weight: bold;
                font-size: 18px;
                box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.3);
                box-sizing: border-box;
                padding-left: 5px;
                border-bottom: 5px solid $orange-yellow;

                .fa-times {
                    display: none;
                }
            }

            #tracked-artist-list {
                height: calc(100% - 50px);
                overflow-y: scroll;

                span {
                    display: block;
                    padding: 5px;
                    font-size: 16px;

                    i {
                        color: $orange-red;
                        margin-right: 10px;
                        cursor: pointer;
                    }

                    a {
                        color: $orange;
                    }

                    &:nth-of-type(even) {
                        background-color: #EEE;
                    }
                }
            }
        }

        .message-div {
            height: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #tracked-artist-events-list {
            overflow-y: scroll;
            width: calc(100% - 700px);
            height: 100%;
            padding-left: 50px;

            .tracked-artist-event {
                height: 120px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ccc;

                .artist-image {
                    margin-right: 20px;
                }

                .artist-name {
                    a {
                        font-size: 20px;
                        color: #333;
                        text-decoration: none;
                    }
                }

                .event-info-wrapper {
                    height: 80px;
                    display: flex;
                    flex-wrap: wrap;
                    width: calc(100% - 100px);
                    font-size: 16px;

                    .event-date {
                        width: 100%;
                        font-weight: bold;
                        color: $orange-yellow;
                    }

                    .event-city {
                        width: 40%;
                        padding-right: 10px;
                        box-sizing: border-box;
                    }

                    .event-venue {
                        width: 40%;
                        padding-right: 10px;
                        box-sizing: border-box;
                    }

                    .event-combined {
                        display: none;
                    }

                    .event-tickets {
                        width: 20%;
                    }
                }

            }
        }
    }
}
@media (max-width: 1300px) {
    #output-container {
        #main-content {
            flex-direction: row;

            #not-list-container {
                align-self: flex-start;
                box-sizing: border-box;
            }

            h1 {
                margin-top: 30px;
                height: 40px;
            }

            #tracked-artist-events-list {
                width: calc(100% - 660px);
                padding-left: 10px;
            }

            #tracked-artist-list-container {
                #tracked-artist-list {
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    #output-container {
        overflow-y: hidden;

        #main-content {
            #not-list-container {
                #all-artists-button {
                    display: block;
                }
            }

            #tracked-artist-events-list {
                width: calc(100% - 310px);
            }

            #tracked-artist-list-container {
                height: calc(100vh - 50px);
                position: absolute;
                top: 1px;
                right: 0;
                z-index: 3;
                display: none;
                background-color: white;
                box-shadow: -2px 0px 20px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);

                #artist-list-header {
                   // box-shadow: -6px 8px 6px -6px rgba(0, 0, 0, 0.3);
                    box-shadow: -0px 2px 6px 2px rgba(0, 0, 0, 0.3);

                    p {
                        width: 100%;
                    }

                    .fa-times {
                        display: block;
                        padding: 20px;
                    }
                }
            }
        }
    }
}

@media (max-width: 800px) {
    #output-container {
        height: auto;
        min-height: calc(100vh - 100px);

        #main-content {
            padding: 0;

            #not-list-container {
                width: 100%;
                height: 90px;
                display: flex;
                align-items: center;
                padding-left: 20px;
                flex-wrap: wrap;

                h1 {
                    font-size: 25px;
                    margin-top: 0;
                    height: auto;
                    align-self: auto;
                }

                #local-events {
                    margin: 0;
                    width: 100%;

                    b, br {
                        display: none;
                    }

                    button {
                        margin: 0;
                        font-size: 15px;
                    }
                }

                #ask-location {
                    position: absolute;

                    width: calc(100% - 40px);
                    display: flex;
                    flex-wrap: wrap;

                    box-sizing: border-box;

                    top: 50px;

                    p {
                        display: none;
                    }
                }

                #export-button-container {
                    display: none;
                }


                #all-artists-button {
                    position: absolute;
                    font-size: 15px;
                    width: 100px;
                    margin: 0;
                    right: 5px;
                    background: none;
                    color: #333;
                    box-shadow: none;
                    text-decoration: underline;
                    font-weight: 300;
                }
            }

            #tracked-artist-events-list {
                width: 100%;
                min-height: calc(100vh - 190px);
                overflow: auto;

                .message-div {
                    height: calc(90vh - 190px);
                }

                .tracked-artist-event {
                    padding: 0 10px;

                    .artist-image {
                        width: 60px;
                        height: 60px;
                        margin-right: 10px;
                    }

                    .event-info-wrapper {
                        width: calc(100% - 70px);
                        align-items: center;

                        .artist-name {
                            height: 20px;
                            width: 100%;

                            a {
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                height: 100%;
                                width: 100%;
                                font-size: 15px;
                                display: block;
                            }
                        }

                        .event-venue, .event-city {
                            display: none;
                        }

                        .event-combined {
                            width: 100%;
                            display: block;
                        }

                        .event-tickets {
                            position: absolute;
                            top: 0;
                            right: 0;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 400px) {
    #output-container {
        #main-content{
            #tracked-artist-list-container {
                width: 100%;
            }
        }
    }
}

@media (max-width: 350px) {
    #output-container {
        #main-content {
            #not-list-container {
                h1 {
                    font-size: 22px;
                }

                #all-artists-button {
                    right: 0;
                    width: 90px;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>

<style lang="scss">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;
#country-tracked-view {
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
            background: #eee;
            padding: 5px;
            padding-left: 10px;
            margin-top: 5px;
            height: 50px;
            font-size: 16px;
            //border: 1px solid $orange-yellow;
            box-sizing: border-box;
            outline: none;
            width: 300px;
            border-radius: 3px;
        }

        #search-results {
            border-bottom: 5px solid $orange-yellow;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
            //border: 1px solid $orange-yellow;
            position: absolute;
            top: 245px;
            list-style: none;
            background-color: #eee;
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
            display: none;
            position: absolute;
            margin-left: 206px;
            margin-top: 2px;
            padding: 10px;
            background-color: $orange-yellow;
            border-radius: 3px;
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

    @media (max-width: 1200px) {
        #autocomplete-container {
            #search-results {
                top: 230px;
            }
        }
    }

    @media (max-width: 750px) {
        width: 100%;

        #autocomplete-container {

            #title {
                font-size: 18px;
            }

            #input-field {
                width: 100%;
                height: 30px;
            }

            #search-results {
                position: relative;
                top: 0;
                width: 100%;

                li {
                    padding: 2px 10px;
                }
            }
        }
    }
}
</style>

<template>
    <div id="output-container">
        <span id="undo-notification" v-if="removedArtist" class="animated lightSpeedIn">
            <p>
            {{ removedArtist }} removed from tracked artists, <a v-on:click="undoRemove">undo?</a>
            </p>
        </span>

        <div id="main-content">

            <div id="not-list-container">
                <h1>Tracked Artists</h1>

                <div id="local-events" v-if="countrySet">
                    <b>Showing events in: '{{ countrySet }}'</b>
                    <br>
                    <button v-on:click="resetCountry">Change location</button>
                </div>
                <div id="ask-location" v-else>
                    <p>
                        No location set, do you want to set it now so we can show you events in your country?
                    </p>

                    <div id="country-tracked-view">
                        <autocomplete
                         title="Select country:"
                         placeholder="Country name"
                         data="static/countries.json"
                         callback="countrySearch"
                         submitText="Select">
                        </autocomplete>
                    </div>
                </div>

                <div id="export-button-container">
                    <button v-on:click="getExportLink">Get link to export tracked artists:</button>
                    <br>
                    <textarea id="" name="" cols="30" rows="10" v-if="shortUrl">{{ shortUrl }}</textarea>
                    <br>
                    <p v-if="shortUrl">Open this URL in any other browser to share your tracked artists.</p>
                </div>

                <button id="all-artists-button" v-on:click="showAllTrackedArtists">All Tracked Artists</button>

            </div>

            <div id="tracked-artist-events-list" class="scrollable">
                <div class="message-div" v-if="loading && countrySet">
                    Loading events...
                </div>

                <div
                    v-for="(event, index) in orderedEvents"
                    v-if="showEvents && !showAllEvents"
                    class="tracked-artist-event animated fadeInLeft"
                    :style="{ animationDelay: index * 0.1 + 's' }">

                    <img :src="event.imageUrl" :alt="event.lineup[0]" class="artist-image">
                    <div class="event-info-wrapper">
                        <h2 class="artist-name"><a v-bind:href="'#/artists/' + event.lineup[0]">{{ event.lineup[0] }}</a></h2>
                        <p class="event-date">{{ event.datetime }}</p>
                        <p class="event-city">{{ event.venue.city }}</p>
                        <p class="event-venue">{{ event.venue.name }}</p>
                        <p class="event-combined">{{ event.venue.city }}<br>{{ event.venue.name }}</p>
                        <a class="event-tickets" :href="event.ticketUrl" v-if="event.ticketUrl">Tickets</a>
                        <a class="event-tickets" :href="event.searchUrl" v-else>Search for tickets</a>
                    </div>
                </div>

                <div class="message-div" v-if="showEvents && !orderedEvents.length && countrySet">
                    No local events :(
                </div>

                <div class="message-div" v-if="!countrySet">
                    Choose a location to see local events.
                </div>

                <div class="message-div" v-if="countrySet && !trackedArtists.list.length">
                    No tracked artists.
                </div>

                <!--<p v-for="event in allEvents" v-if="showEvents && showAllEvents">-->
                    <!--{{ event.lineup[0] }} {{ event.datetime }} {{ event.venue.country }} {{ event.venue.city }} {{ event.venue.name }}-->
                <!--</p>-->
            </div>

            <!--Show list of all tracked artists if there's any.-->
            <div id="tracked-artist-list-container" class="animated">
                <div id="artist-list-header"><p>All tracked artists:</p> <i class="fa fa-times" v-on:click="hideAllTrackedArtists"></i></div>

                <div id="tracked-artist-list">
                    <span v-for="artist in trackedArtists.list">
                        <i class="fa fa-times" v-on:click="removeFromTracked(artist)"></i><a v-bind:href="'#/artists/' + artist" > {{ artist }} </a>
                    </span>
                </div>
            </div>

            <!--<div>-->
                <!--<img v-for="image in artistImages" :src="image.url" class="artist-image" :alt="image.artist">-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import store from '@/store/index.js'

export default {
    data: function() {
        return {
            // Init local variables
            events: {},
            allEvents: [],
            allLocalEvents: [],
            countrySet: false,
            localEvents: [],
            showEvents: false,
            showAllEvents: false,
            artistImages: [],
            encodedLink: '',
            loading: true,
            lastFMlast: false,
            BITlast: false,
            startTime: 0,
            trackedArtists: {"list": []},
            removedArtist: '',
            shortUrl: ''
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
        }
    },

    computed: {
        orderedEvents: function() {
            return _.orderBy(this.allLocalEvents, function(event) {
                return new Date(event.datetime);
            })
        }
    },

    mounted: function() {
        console.log(store.saved);

        if (store.saved.loaded) {
            this.allLocalEvents = store.saved.allLocalEvents;
            this.trackedArtists = store.saved.trackedArtists;
            this.countrySet = store.saved.countrySet || localStorage.getItem('Country') || false;
            this.artistImages = store.saved.artistImages;
            this.loading = false;
            this.showEvents = true;
            console.log(this.orderedEvents)
            return;
        }

        this.startTime = new Date();
        // If the page loads for the first time get all information

        let trackedInfo = localStorage.getItem('Tracked')
        if (trackedInfo) {
            this.trackedArtists = JSON.parse(trackedInfo);
            store.saved.trackedArtists = this.trackedArtists;
        } else
            this.loading = false;

        this.sortTrackedArtists();

        let userCountry = localStorage.getItem('Country');
        if (userCountry) {
            this.countrySet = userCountry;
            store.saved.countrySet = this.countrySet;
        } else {
            return;
        }

        // Get events for each artists
        for(let i = 0, x = this.trackedArtists.list.length; i < x; i++) {
            let artist = this.trackedArtists.list[i];
            this.getLastFMInfo(artist);
            this.getArtistEvents(artist);
        }

        store.saved.loaded = true;

    },

    methods: {
        showAllTrackedArtists: function() {
            let artistList = document.getElementById('tracked-artist-list-container');

            artistList.style.display = 'block';
            artistList.classList.add('slideInRight');
            document.body.style.overflow = 'hidden';

            let removeAnimationClass = () => {
                artistList.classList
            }

            artistList.addEventListener("animationend", function() {
                this.classList.remove('slideInRight');
                this.style.display = 'block';
            })
        },

        hideAllTrackedArtists: function() {
            let artistList = document.getElementById('tracked-artist-list-container');

            artistList.classList.add('slideOutRight');
            document.body.style.overflow = 'auto';

            let removeAnimationClass = () => {
                artistList.classList
            }

            artistList.addEventListener("animationend", function() {
                this.classList.remove('slideOutRight');
                this.style.display = 'none';
            })
        },

        getArtistEvents: function(artist) {
            // Store artist from url in local variable
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
            getEvents(artist).then(data => {
                this.events = data;
                //console.log("BIT event data:")
                //console.log(data)

                this.events.forEach((event) => {
                    // Change ISO date to readable date format
                    let date = new Date(event.datetime);
                    let months = ["Jan","Feb","Mar","Apr","May", "June","July","Aug","Sept","Oct","Nov","Dec"];
                    //event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                    event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

                    // If we have a ticket url show it otherwise redirect to search
                    if(event.offers.length){
                        event.ticketUrl = event.offers[0].url;
                    } else {
                        event.searchUrl = "https://duckduckgo.com/?q=" + artist + " " + event.datetime;
                    }

                    if (event.venue.country == this.countrySet) {
                        this.localEvents.push(event);
                        this.allLocalEvents.push(event);
                    }

                    this.allEvents.push(event);
                })


            }).then(() => {
                // If the information we're getting is the last artist from the list start a timeout
                if (artist == this.trackedArtists.list[this.trackedArtists.list.length - 1]) {
                    this.BITlast = true;

                    if (!this.lastFMlast) return;

                    console.log('BITlast')

                    this.showLocalEvents();
                }
            })
        },

        // Get information from Last.fm API
        getLastFMInfo: function(artist) {
            let getData = (artist) => {
                // Encode so lastfm doesn't get trouble with names with for example &
                let artistName = encodeURIComponent(artist);

				let apiUrl = "https://ws.audioscrobbler.com/2.0/"
				let apiParams = "?method=artist.getinfo&api_key=a4629fdacfd93267704f599b874a59bf&format=json&artist="

                return new Promise((resolve, reject) => {
                    fetch(apiUrl + apiParams + artistName, {
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
            getData(artist).then(data => {
                if (data.error){
                    throw data.message;
                    return;
                }

                let imageUrl = data.artist.image[data.artist.image.length - 4]["#text"];
                this.artistImages.push({
                    "artist": artist,
                    "url": imageUrl
                });
            }).then(() => {
                if (artist == this.trackedArtists.list[this.trackedArtists.list.length - 1]) {
                    this.lastFMlast = true;

                    if (!this.BITlast) return;

                    console.log('lastFMlast')

                    this.showLocalEvents();
                }
            })
        },

        // Function that determines what happens with output from autocomplete inputs
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

                this.allLocalEvents = [];
                this.allEvents = [];

                this.startTime = new Date();

                for(let i = 0, x = this.trackedArtists.list.length; i < x; i++) {
                    let artist = this.trackedArtists.list[i];
                    this.getLastFMInfo(artist);
                    this.getArtistEvents(artist);
                }
            }
        },

        resetCountry: function() {
            localStorage.removeItem('Country');
            this.countrySet = false;
            this.showEvents = false;
            this.loading = true;
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
        },

        getExportLink: function() {
            // Convert list of artists to base64 because it looks better I guess
            let encodedArtists = btoa(JSON.stringify({ list: this.trackedArtists.list }));
			console.log(encodedArtists)

            encodedArtists = encodedArtists.split("=").shift();
            this.encodedLink = window.location.origin + "/#/import/" + encodedArtists;

            fetch("https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBNloeeEkS5UZofgsHxbcA-P7gq8XRffMQ", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({
                    longUrl: this.encodedLink
                })
            }).then(response => {
                return response.json()
            }).then(data => {
                console.log(data);
                this.shortUrl = data.id;
            })
        },

        showLocalEvents: function() {
            let endTime = new Date();

            let timeTaken = endTime.getTime() - this.startTime.getTime();

            // Timeout because apis take some time to load
            setTimeout(() => {
                for(let i = 0, x = this.allLocalEvents.length; i < x; i++) {
                    let localEvent = this.allLocalEvents[i];

                    for(let j = 0, y = this.artistImages.length; j < y; j++) {
                        let artistImage = this.artistImages[j];

                        if (artistImage.artist.toLowerCase() == localEvent.lineup[0].toLowerCase()) {
                            this.allLocalEvents[i].imageUrl = artistImage.url;
                        }
                    }
                }

                this.showEvents = true;
                this.loading = false;
            }, timeTaken / 10)

            store.saved.allLocalEvents = this.allLocalEvents;
            store.saved.artistImages = this.artistImages;
        },

        removeFromTracked: function(artist) {
            let index = this.trackedArtists.list.indexOf(artist)
            if (index != -1) {
                this.trackedArtists.list.splice(index, 1);
            }

            localStorage.setItem('Tracked', JSON.stringify(this.trackedArtists));

            this.removedArtist = artist;
        },

        undoRemove: function() {
            let inList = false;

            for(let i = 0, x = this.trackedArtists.list.length; i < x; i++) {
                let artist = this.trackedArtists.list[i]
                if (artist.toLowerCase() == this.removedArtist.toLowerCase()) {
                    inList = true;
                }
            }

            if (!inList) {
                this.trackedArtists.list.push(this.removedArtist);
            }

            localStorage.setItem('Tracked', JSON.stringify(this.trackedArtists));

            let undoNotification = document.getElementById('undo-notification')
            undoNotification.classList.add('lightSpeedOut');

            let clearRemovedArtist = () => {
                this.classList.remove('lightSpeedOut');
                this.removedArtist = ''
            }

            undoNotification.addEventListener("animationend", function() {
                clearRemovedArtist();
            })

            this.sortTrackedArtists();
        },

        sortTrackedArtists: function() {
            // Sort list of artists alphabetically exluding "The"
            this.trackedArtists.list.sort(function(a, b) {
                a = a.replace("The ","").toLowerCase();
                b = b.replace("The ","").toLowerCase();

                if (a < b) {
                    return -1;
                }

                if (a > b) {
                    return 1;
                }

                return 0;
            });
        }
    }
}
</script>
