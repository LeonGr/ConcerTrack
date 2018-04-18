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

    #output {
        width: 100%;
        height: 100%;
        display: flex;

        #left-side {
            height: 100%;
            width: 50%;

            h1 {
                color: #333;
                margin-top: 30px;
            }

            #artist-image {
                width: calc(50% - 60px);
                box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.3);
                margin: 30px 30px 0 30px;
            }

            #img-container {
                display: none;
            }

            .normal-button {
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

            #normal-bio {
                margin-top: 20px;
                color: #444;
            }

            .mobile-button {
                display: none;
            }

            #mobile-bio {
                display: none;
            }

            a {
                color: #17A1FF;
            }

            #info-container {
                float: right;
                width: 50%;
                font-size: 16px;
                padding-right: 30px;
                box-sizing: border-box;

                .link-icon {
                    color: #444;

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
            font-size: 16px;
            color: #333;

            #local-event-container {
                box-sizing: border-box;
                padding-left: 20px;
                margin-top: 30px;

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

                    #change-location-button {
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

                    #country-artist-view {
                        margin-top: 5px;
                    }
                }
            }


            #event-container {
                box-sizing: border-box;
                padding: 10px 0 0 20px;
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
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
    border-top: 5px solid $orange-yellow;
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

.list-header-mobile {
    display: none;
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

.event-venue-location {
    display: none;
}

.event-div {
    display: flex;
    align-items: center;

    //text-align: center;

    a {
        width: 10%;
    }
}

.show-more-less-button {
    height: 60px;
    width: 100%;
    outline: none;
    background-color: #EEE;
    color: $orange-red;
    text-decoration: underline;
    cursor: pointer;
}

@media (max-width: 1200px) {
    #output-container {
        height: auto;
        min-height: calc(100vh - 100px);

        #output {
            flex-direction: column;
            align-items: center;

            #left-side, #right-side {
                width: 700px;
            }

            #right-side {
                height: calc(100vh - 100px);

                #local-event-container, #event-container {
                    padding: 0;
                }

                #event-container {
                    margin-top: 20px;
                }
            }
        }
    }
}

@media (max-width: 750px) {
    #output-container {

        #output {
            margin-bottom: 30px;

            #left-side, #right-side {
                width: 100%;
            }

            #left-side {
                #info-container {
                    h1 {
                        font-size: 28px;
                    }
                }
            }

            #right-side {
                height: auto;

                #local-event-container, #event-container {
                    max-height: none;
                    padding: 0 30px;

                    #local-events {
                        #local-events-list {
                            max-height: none;
                            overflow: auto;
                        }
                    }

                    #event-list {
                        overflow: auto;
                    }
                }
            }
        }
    }
}

@media (max-width: 600px) {
    #output-container {
        #output {
            #left-side {
                display: flex;
                flex-flow: row wrap;

                #artist-image {
                    display: none;
                }

                #img-container {
                    display: block;
                    width: calc(50% - 60px);
                    margin: 30px 30px 0 30px;

                    #artist-image-mobile {
                        width: 100%;
                    }
                }

                #info-container {
                    #info-wrapper {
                        width: 100%;
                    }

                    display: flex;
                    align-items: center;
                    margin-top: 30px;

                    h1 {
                        flex-basis: 100%;
                        margin: 0;
                        font-size: 24px;
                    }

                    .link-icon {
                        margin-right: 5px;
                    }
                }

                #normal-bio {
                    display: none;
                }

                .normal-button {
                    display: none;
                }

                .mobile-button {
                    display: block;
                    width: calc(100%);
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

                #mobile-bio {
                    display: block;

                    padding: 10px 30px 0 30px;
                }
            }

            #right-side {
                #local-event-container, #event-container {
                    padding: 0;

                    h1, #change-location-button, .amount-upcoming, #ask-location {
                        margin-left: 30px;
                    }

                    .list-header {
                        p:first-child {
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 550px) {
    .list-header {
        display: none;
    }

    .list-header-mobile {
        display: block;

        width: calc(100% - 14px);
        display: block;
        padding: 10px 0;
        padding-right: 14px;
        margin-top: 5px;
        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.3);
        border-top: 5px solid $orange-yellow;
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

    .event-div {
        display: flex;
        justify-content: flex-start;

        .event-venue-location {
            display: block;
            width: 60%;
            margin-left: 20px;
        }

        .event-venue, .event-city {
            display: none;
        }
    }
}

@media (max-width: 350px) {
    .event-div {
        .event-venue-location {
            width: 50%;
        }
    }

    #output-container {
        #output {
            #left-side {
                flex-flow: row-reverse wrap;

                #info-container {
                    #info-wrapper {
                        margin-left: 30px;
                    }
                }

                #track-button-tracked, #track-button {
                    width: calc(100vw - 60px);
                    position: relative;
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
#country-artist-view {
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
            position: relative;
        }

        #input-field {
            background: #eee;
            padding: 5px;
            padding-left: 10px;
            margin-top: 5px;
            height: 50px;
            font-size: 16px;
            box-sizing: border-box;
            outline: none;
            width: 250px;
            border-radius: 3px;
        }

        #search-results {
            border-bottom: 5px solid $orange-yellow;
            //border: 1px solid $orange-yellow;
            position: absolute;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
            top: 80px;
            list-style: none;
            background-color: #eee;
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

            @media (max-width: 1200px) {
                position: absolute;
                top: 80px;
            }
        }


        #submitButton {
            display: none;
            position: absolute;
            margin-left: 260px;
            padding: 10px;
            background-color: $orange-yellow;
            color: white;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
            border-radius: 3px;

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
        <div id="output">
            <div id="left-side">
                <!--If we get an image from lastFM show it. Otherwise use the one from BIT-->
                <img :src="imageUrl" :alt="lastFMData.name" v-if="imageUrl" id="artist-image">

                <div id="img-container">
                    <img :src="imageUrl" alt="" v-if="imageUrl" id="artist-image-mobile">
                </div>

                <div id="info-container">
                    <div id="info-wrapper">
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

                        <p v-if="lastFMData" v-html="artistBio" id="normal-bio">
                            {{ artistBio }}
                        </p>

                        <button id="track-button-tracked" class="mobile-button" v-if="tracking" v-on:click="trackArtist">Stop Tracking</button>
                        <button id="track-button" class="mobile-button" v-else v-on:click="trackArtist">Track Artist</button>
                    </div>
                </div>


                <button id="track-button-tracked" class="normal-button" v-if="tracking" v-on:click="trackArtist">Stop Tracking</button>
                <button id="track-button" class="normal-button" v-else v-on:click="trackArtist">Track Artist</button>
                <p v-if="lastFMData" v-html="artistBio" id="mobile-bio">
                    {{ artistBio }}
                </p>
            </div>

            <div id="right-side">
                <div id="local-event-container">
                    <h1>Local events:</h1>
                    <div id="local-events" v-if="countrySet">
                        <button v-on:click="resetCountry" id="change-location-button">Change location</button>
                        <p v-if="localEvents.length" class="amount-upcoming">
                            {{ localEvents.length }} upcoming events in country '{{ countrySet }}':
                        </p>
                        <div class="list-header"><p>Date</p><p>Venue</p><p>Location</p></div>
                        <div class="list-header-mobile"> <p>Date</p> <p>Venue/Location</p> </div>

                        <div v-if="localEvents.length && showAllLocal" id="local-events-list" class="event-list">
                            <div v-for="event in localEvents" :key="event.datetime" class="event-div">
                                <p class="event-date">{{ event.datetime }}</p>
                                <p class="event-venue">{{ event.venue.name }}</p>
                                <p class="event-city">{{ event.venue.city }}</p>

                                <p class="event-venue-location">
                                    {{ event.venue.name }}
                                    <br>
                                    {{ event.venue.city }}
                                </p>

                                <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                                <a v-else :href="event.searchUrl">Search tickets</a>
                            </div>
                            <button class="show-more-less-button" v-if="localEvents.length > 5" v-on:click="toggleMoreLessLocal">Show Less</button>
                        </div>

                        <div v-if="localEvents.length && !showAllLocal" id="local-events-list" class="event-list">
                            <div v-for="event in firstFiveLocal" :key="event.datetime" class="event-div">
                                <p class="event-date">{{ event.datetime }}</p>
                                <p class="event-venue">{{ event.venue.name }}</p>
                                <p class="event-city">{{ event.venue.city }}</p>

                                <p class="event-venue-location">
                                    {{ event.venue.name }}
                                    <br>
                                    {{ event.venue.city }}
                                </p>

                                <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                                <a v-else :href="event.searchUrl">Search tickets</a>
                            </div>
                            <button class="show-more-less-button" v-if="localEvents.length > 5" v-on:click="toggleMoreLessLocal">Show More</button>
                        </div>

                        <div v-if="!localEvents.length" style="margin-top: 5px">No local upcoming events :(</div>
                    </div>
                    <div id="ask-location" v-else>
                        <p>
                            No location set, do you want to set it now so we can show you events in your country?
                        </p>

                        <div id="country-artist-view">
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

                    <div class="list-header"> <p>Date</p> <p>Venue</p> <p>Location</p> </div>
                    <div class="list-header-mobile"> <p>Date</p> <p>Venue/Location</p> </div>

                    <div id="event-list" class="event-list" v-if="events.length && !showAllGlobal">
                        <div  v-for="event in firstFiveGlobal" class="event-div">
                            <p class="event-date">{{ event.datetime }}</p>
                            <p class="event-venue">{{ event.venue.name }}</p>
                            <p class="event-city">{{ event.venue.city }}, {{ event.venue.country }}</p>

                            <p class="event-venue-location">
                                {{ event.venue.name }}
                                <br>
                                {{ event.venue.city }}, {{ event.venue.country }}
                            </p>

                            <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                            <a v-else :href="event.searchUrl">Search tickets</a>
                        </div>
                        <button class="show-more-less-button" v-if="events.length > 5" v-on:click="toggleMoreLessGlobal">Show More</button>
                    </div>

                    <div id="event-list" class="event-list" v-if="events.length && showAllGlobal">
                        <div  v-for="event in events" class="event-div">
                            <p class="event-date">{{ event.datetime }}</p>
                            <p class="event-venue">{{ event.venue.name }}</p>
                            <p class="event-city">{{ event.venue.city }}, {{ event.venue.country }}</p>

                            <p class="event-venue-location">
                                {{ event.venue.name }}
                                <br>
                                {{ event.venue.city }}, {{ event.venue.country }}
                            </p>

                            <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                            <a v-else :href="event.searchUrl">Search tickets</a>
                        </div>
                        <button class="show-more-less-button" v-if="events.length > 5" v-on:click="toggleMoreLessGlobal">Show Less</button>
                    </div>

                    <div v-if="!events.length" style="margin-top: 5px">No global upcoming events :(</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'
import _ from 'lodash'

export default {
    data: function() {
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
            trackedArtists: {"list": []},
            showAllLocal: false,
            showAllGlobal: false
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            this.localEvents = [];

            this.getAllInformation();

            this.getTrackedArtists();

            //window.document.title = 'ConcerTrack - ' + this.artist
        }
    },

    computed: {
        firstFiveLocal: function() {
            return _.slice(this.localEvents, 0, 5);
        },

        firstFiveGlobal: function() {
            return _.slice(this.events, 0, 5);
        },

    },

    created: function() {
        this.getAllInformation();

        this.getTrackedArtists();

        //window.document.title = 'ConcerTrack - ' + this.artist
    },

    mounted: function() {
        // If the page loads for the first time get all information

        let userCountry = localStorage.getItem('Country');
        if (userCountry) {
            this.countrySet = userCountry;
        }
    },

    methods: {
        toggleMoreLessGlobal: function() {
            let list = document.getElementById('event-list');
            let scrollDistance = list.scrollTop;

            this.showAllGlobal = this.showAllGlobal ? false : true;

            // Scroll back to where user was when they clicked button
            // Small timeout because otherwise with longs lists the browser
            // Would update to the top of the list after setting this
            setTimeout(() => {
                list.scrollTop = scrollDistance;
            }, 1)
        },

        toggleMoreLessLocal: function() {
            let list = document.getElementById('local-events-list');
            let scrollDistance = list.scrollTop;

            this.showAllLocal = this.showAllLocal ? false : true;

            // Idem to above mentioned
            setTimeout(() => {
                list.scrollTop = scrollDistance;
            }, 1)
        },

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
                        response.artist = artist;
                        resolve(response);
                    }).catch(error => {
                        console.log(error);
                    })
                })
            }

            if(store.lastArtistEvents && store.lastArtistEvents.artist.toLowerCase() == this.artist.toLowerCase()) {
                this.events = store.lastArtistEvents;
                this.localEvents = store.lastArtistEventsLocal;
            }

            else {
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

                    this.events.forEach((event) => {
                        // Change ISO date to readable date format
                        let date = new Date(event.datetime);
                        let months = ["Jan","Feb","Mar","Apr","May", "June","July","Aug","Sept","Oct","Nov","Dec"];
                        //event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                        event.datetime = `${date.getDate()} ${months[date.getMonth()]}`;

                        // If we have a ticket url show it otherwise redirect to search
                        if(event.url){
                            //event.ticketUrl = event.offers[0].url;
                            event.ticketUrl = event.url;
                        } else {
                            event.searchUrl = "https://duckduckgo.com/?q=" + data.artist + " " + event.datetime;
                        }

                        if (event.venue.country == this.countrySet) {
                            this.localEvents.push(event);
                        }
                    })

                    store.lastArtistEvents = this.events;
                    store.lastArtistEventsLocal = this.localEvents;
                })
            }

            if (store.lastArtist && store.lastArtist.name.toLowerCase() == this.artist.toLowerCase()){
                this.artistInfo = store.lastArtist;
            } else {
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
                    store.lastArtist = data;
                })
            }
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

            if (store.lastLastFMdata && store.lastLastFMdata.name.toLowerCase() == this.artist.toLowerCase()) {
                this.lastFMData = store.lastLastFMdata;
                this.artist = this.lastFMData.name;
                this.artistBio = this.lastFMData.bio.summary;
                this.imageUrl = this.lastFMData.image[this.lastFMData.image.length - 1]["#text"] || this.artistInfo.image_url;

                window.document.title = 'ConcerTrack - ' + this.lastFMData.name;
            }

            else {
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
                    this.artistBio = this.lastFMData.bio.summary;
                    this.imageUrl = this.lastFMData.image[this.lastFMData.image.length - 1]["#text"] || this.artistInfo.image_url;

                    store.lastLastFMdata = this.lastFMData;

                    window.document.title = 'ConcerTrack - ' + this.lastFMData.name;
                })
            }

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

            store.resetSaved();
        }
    }
}
</script>
