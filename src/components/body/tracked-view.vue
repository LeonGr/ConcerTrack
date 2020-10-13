<!--This file is part of ConcerTrack.

    ConcerTrack is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ConcerTrack is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with ConcerTrack.  If not, see <http://www.gnu.org/licenses/>.
-->

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
        cursor: pointer;

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
                margin: 10px 0;
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
                scroll-behavior: smooth;

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

        #tracked-artist-events-list, #tracked-artist-events-placeholder {
            overflow-y: scroll;
            width: calc(100% - 700px);
            height: 100%;
            padding-left: 50px;
            padding-bottom: 10px;
        }

        #tracked-artist-events-list {
            .tracked-artist-event:not(:last-child) {
                border-bottom: 1px solid #ccc;
            }

            .tracked-artist-event {
                height: 120px;
                display: flex;
                align-items: center;

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
            #not-list-container {
                align-self: flex-start;
                box-sizing: border-box;
                min-height: 90px;
            }

            h1 {
                margin-top: 30px;
                height: 40px;
            }

            #tracked-artist-events-list, #tracked-artist-events-placeholder {
                width: calc(100% - 660px);
                padding-left: 10px;
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

            #tracked-artist-events-list, #tracked-artist-events-placeholder {
                width: calc(100% - 310px);
            }

            #tracked-artist-list-container {
                height: calc(100vh);
                height: calc(var(--vh, 1vh) * 100);
                position: fixed;
                top: 0;
                right: 0;
                z-index: 3;
                display: none;
                background-color: white;
                box-shadow: -2px 0px 20px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);

                #artist-list-header {
                    box-shadow: -0px 2px 6px 2px rgba(0, 0, 0, 0.3);

                    p {
                        width: 100%;
                    }

                    .fa-times {
                        display: block;
                        padding: 20px;
                        cursor: pointer;
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

        #undo-notification {
            position: fixed;
            z-index: 10;
        }

        #main-content {
            padding: 0;

            #not-list-container {
                width: 400px;
                display: flex;
                align-items: center;
                padding-left: 20px;
                flex-wrap: wrap;

                h1 {
                    font-size: 25px;
                    margin-top: 10px;
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
                    //position: absolute;

                    width: calc(100% - 40px);
                    display: flex;
                    flex-wrap: wrap;

                    box-sizing: border-box;

                    //top: 50px;
                    margin-top: 0px;

                    p {
                        display: none;
                    }
                }

                #export-button-container {
                    button {
                        margin-top: 5px;
                        font-size: 15px;
                    }

                    p {
                        font-size: 15px;
                    }

                    br {
                        display: none;
                    }
                }


                #all-artists-button {
                    position: absolute;
                    font-size: 15px;
                    width: 100px;
                    margin: 0;
                    right: 5px;
                    top: 0;
                    height: 90px;
                    background: none;
                    color: #333;
                    box-shadow: none;
                    text-decoration: underline;
                    font-weight: 300;
                }
            }

            .message-div {
                height: calc(90vh - 190px);
            }

            #tracked-artist-events-list, #tracked-artist-events-placeholder {
                width: 100%;
                overflow: auto;
            }

            #tracked-artist-events-list {
                min-height: calc(100vh - 190px);

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
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;

                            br {
                                margin: 5px;
                            }
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
                    margin: 10px 0;
                }

                #export-button-container {
                    width: calc(100% - 90px);

                    button {
                        text-align: left;
                    }
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

@media (max-height: 550px) {
    #output-container {
        #main-content {
            min-height: 450px;
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

    @media (max-width: 1300px) {
        #autocomplete-container {
            #search-results {
                top: 230px;
            }
        }
    }

    @media (max-width: 800px) {
        #autocomplete-container {
            #search-results {
                position: relative;
                top: 0;
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
        <span
            id="undo-notification"
            v-if="removedArtist"
            class="animated lightSpeedIn"
            v-on:click="hideUndo">
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
                    <button v-on:click="getExportLink">Get link to export tracked artists</button>
                    <br>
                    <textarea id="" name="" cols="30" rows="10" v-if="encodedLink" v-model="encodedLink"></textarea>
                    <br>
                    <p v-if="encodedLink">Open this URL in any other browser to share your tracked artists.</p>
                </div>

                <button id="all-artists-button" v-on:click="showAllTrackedArtists">All Tracked Artists</button>

            </div>

            <div id="tracked-artist-events-list" class="scrollable" v-if="showEvents && !showAllEvents">
                <div
                    v-for="(event, index) in orderedEvents"
                    v-bind:key="event"
                    class="tracked-artist-event animated fadeInLeft"
                    :style="{ animationDelay: index * 0.1 + 's' }">

                    <img :src="event.imageUrl" :alt="event.lineup[0]" class="artist-image">
                    <div class="event-info-wrapper">
                        <h2 class="artist-name">
                            <router-link :to="{ path: 'artists/' + event.lineup[0] }"> {{ event.lineup[0] }}</router-link>
                        </h2>
                        <p class="event-date">{{ event.datetime }}</p>
                        <p class="event-city">{{ event.venue.city }}</p>
                        <p class="event-venue">{{ event.venue.name }}</p>
                        <p class="event-combined">{{ event.venue.city }}<br>{{ event.venue.name }}</p>
                        <a class="event-tickets" :href="event.ticketUrl" v-if="event.ticketUrl">Tickets</a>
                        <a class="event-tickets" :href="event.searchUrl" v-else>Search for tickets</a>
                    </div>
                </div>
            </div>

            <div id="tracked-artist-events-placeholder" v-else>
                <div class="message-div" v-if="loading && countrySet">
                    Loading events...
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

            </div>

            <!--Show list of all tracked artists if there's any.-->
            <div id="tracked-artist-list-container" class="animated">
                <div id="artist-list-header"><p>All tracked artists:</p> <i class="fa fa-times" v-on:click="hideAllTrackedArtists"></i></div>

                <div id="tracked-artist-list">
                    <span v-for="artist in trackedArtists.list" v-bind:key="artist">
                        <i class="fa fa-times" v-on:click="removeFromTracked(artist)"></i>
                        <router-link :to="{ path: 'artists/' + artist }"> {{ artist }}</router-link>
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
            infoResolvedLast: false,
            eventsResolvedLast: false,
            startTime: 0,
            trackedArtists: {"list": []},
            removedArtist: '',
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

    created: function() {
        window.document.title = 'ConcerTrack - Tracked Artists';

        window.onresize = _.debounce(function() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', vh + "px");
            console.log(vh);
        }, 400);

    },

    mounted: function() {
        if (store.saved.loaded) {
            this.allLocalEvents = store.saved.allLocalEvents;
            this.trackedArtists = store.saved.trackedArtists;
            this.countrySet = store.saved.countrySet || localStorage.getItem('Country') || false;
            this.artistImages = store.saved.artistImages;
            this.loading = false;
            this.showEvents = true;
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
            this.getArtistInfo(artist);
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

            artistList.addEventListener("animationend", function() {
                this.classList.remove('slideInRight');
                this.style.display = 'block';
            })
        },

        hideAllTrackedArtists: function() {
            let artistList = document.getElementById('tracked-artist-list-container');

            artistList.classList.add('slideOutRight');
            document.body.style.overflow = 'auto';

            artistList.addEventListener("animationend", function() {
                this.classList.remove('slideOutRight');
                this.style.display = 'none';
            })
        },

        getArtistEvents: function(artist) {
            // Get list of events first then add to list
            store.getEvents(artist).then(data => {
                this.events = data;

                this.events.forEach((event) => {
                    // Change ISO date to readable date format
                    let date = new Date(event.datetime);
                    let months = ["Jan","Feb","Mar","Apr","May", "June","July","Aug","Sept","Oct","Nov","Dec"];
                    //event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                    event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

                    // If we have a ticket url show it otherwise redirect to search
                    if(event.url){
                        event.ticketUrl = event.url;
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
                    this.eventsResolvedLast = true;

                    if (!this.infoResolvedLast) return;


                    this.showLocalEvents();
                }
            })
        },

        getArtistInfo: function(artist) {
            store.getArtistInfo(artist).then(data => {
                let imageUrl = data.thumb_url;
                this.artistImages.push({
                    "artist": artist,
                    "url": imageUrl
                });
            }).then(() => {
                if (artist == this.trackedArtists.list[this.trackedArtists.list.length - 1]) {
                    this.infoResolvedLast = true;

                    if (!this.eventsResolvedLast) return;

                    this.showLocalEvents();
                }
            });
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
                    this.getArtistInfo(artist);
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

            encodedArtists = encodedArtists.split("=").shift();
            this.encodedLink = window.location.origin + "/#/import/" + encodedArtists;
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
                undoNotification.classList.remove('lightSpeedOut');
                this.removedArtist = '';
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
        },

        hideUndo: function() {
            let undoNotificationElement = document.getElementById('undo-notification')
            undoNotificationElement.classList.add('lightSpeedOut');

            let clearErrorMessage = () => {
                undoNotificationElement.classList.remove('lightSpeedOut');
                this.removedArtist = '';
            }

            undoNotificationElement.addEventListener('animationend', function() {
                clearErrorMessage();
            })
        }
    }
}
</script>
