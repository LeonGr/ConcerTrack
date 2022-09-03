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

#newhere {
    position: relative;
    min-height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #newhere-body {
        width: 100%;
        min-height: calc(100vh - 100px);
        padding: 30px;
        box-sizing: border-box;
        color: #333;

        h1 {
            font-size: 32px;
            text-decoration: underline;
            text-decoration-color: $orange-yellow;
        }

        p {
            color: #444;
            margin-top: 20px;
        }

        #added-artists, #similar-artists {
            display: flex;
            width: 100%;
            overflow-x: scroll;
        }
    }
}
@media (max-width: 600px) {
    #newhere {
        #newhere-body {
            h1 {
                font-size: 25px;
            }
        }
    }
}

@media (max-height: 600px) {
    #newhere {
        #newhere-body {
            h1 {
                font-size: 25px;
            }

            height: 100%;
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
#newhere-body {
#autocomplete-container {
    background-color: white;
    //border-left: 5px solid $orange-yellow;
    //box-shadow: 0 4px 9px 0 rgba(0,0,0,.3);
    border-radius: 5px;
    //padding: 20px;

    width: 440px;
    height: 120px;


    #title {
        font-weight: bold;
        font-size: 23px;
        color: #333;
    }

    #errorMessage {
        border-left: 5px solid $orange-red;
        padding: 15px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        width: 250px;
        box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
        border-radius: 3px;

        position: fixed;

        background-color: white;
        bottom: 70px;
        left: 20px;

        cursor: pointer;
    }

    #filler {
        display: none;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        //position: relative;
    }

    #input-field {
        box-sizing: border-box;
        padding: 20px;
        font-size: 18px;
        //border: 1px solid $orange-yellow;
        outline: none;
        margin: 10px 0 10px 0;
        //box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        border-radius: 3px;
        background: #eee;
        color: #333;

        transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);

        &:focus, &:hover {
            //box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
        }
    }

//    #autocomplete-form::after {
//        content: "Note: the autocomplete list is still 'Work In Progress'. Please contact us with any mistakes.";
//        color: black;
//        font-size: 15px;
//        font-weight: 100;
//    }

    #submitButton {
        display: none;
        position: absolute;
        right: 8px;
        //margin-top: 12px;
        top: 45px;
        padding: 10px;
        background-color: $orange-yellow;
        color: white;
        font-size: 20px;
        font-weight: bold;
        //box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
        border-radius: 3px;

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            background-color: $orange;
            //box-shadow: 0 5px 9px 0 rgba(0,0,0,.3);
        }
    }

    #search-results {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        position: absolute;
        top: 200px;
        list-style: none;
        background-color: #eee;
        box-sizing: border-box;
        width: 440px;
        border-bottom: 5px solid $orange-yellow;
        margin-bottom: 10px;

        li {
            padding: 6px 20px;

            &:hover {
                cursor: pointer;
            }
        }

        .selected {
            background-color: $orange-yellow;
        }
    }

}
}
</style>

<template>
    <div id="newhere">
        <div id="newhere-body">
            <h1>New Here?</h1>
            <h2>We can help you find artists to track</h2>

            <autocomplete
                title="Search for an artist:"
                placeholder="Artist name"
                data="static/AllList.json"
                callback="artistSearch"
                submitText="Search">
            </autocomplete>

            <h2>Added artists:</h2>
            <div id="added-artists">
                <!--{{ addedArtists }}-->
                <div v-for="artist in addedArtists" v-bind:key="artist">
                    <p>{{ artist.name }}</p>
                    <img :src="artist.imageUrl" :alt="artist.name">
                </div>
            </div>

            <h2>Similar to added artists: (click to track)</h2>
            <div id="similar-artists">
                <!--{{ similarArtists }}-->
                <div v-for="artist in similarArtists" v-bind:key="artist">
                    <p>{{ artist.name }}</p>
                    <img :src="artist.imageUrl" :alt="artist.name" v-on:click="getLastFMInfo(artist.name)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'

export default {
    data: function() {
        return {
            addedArtists: [],
            similarArtists: []
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            console.log('route')
        }
    },

    created: function() {
        window.document.title = 'ConcerTrack - New Here'
    },

    mounted: function() {
    },

    methods: {
        callBackForm: function(callback, value) {
            if (callback == "artistSearch") {
                console.log(value)
                let showErrorMessage = (message) => {
                    for(let i = 0, x = this.$children.length; i < x; i++) {

                        let child = this.$children[i];

                        if (child.$el.id == "autocomplete-container") {
                            console.log(child)
                            child.inputValue = artist;
                            child.errorMessage = message;
                        }
                    }
                }

                let artist = value.toLowerCase();

                // Check if we get a response from BIT API before we redirect
                store.getArtist(artist).then(() => {
                    this.getLastFMInfo(artist);
                }).catch(error => {
                    // If we get an error that means the artist has not been found
                    if (error.toString().includes("SyntaxError") || error === "Artist not found") {
                         showErrorMessage("Sorry, we couldn't find that artist :(");
                    }
                })
            }
        },

        getLastFMInfo: function(artist) {
            store.getLastFMData(artist).then(data => {
                if (data.error){
                    throw data.message;
                }

                console.log(data)

                let artistInfo = {
                    name: data.artist.name,
                    imageUrl: data.artist.image[data.artist.image.length - 1]["#text"],
                    similarArtists: []
                }

                let similarArtists = data.artist.similar.artist;

                for(let i = 0, x = similarArtists.length; i < x; i++) {
                    let artist = similarArtists[i];

                    let similarArtist = {
                        name: artist.name,
                        imageUrl: artist.image[data.artist.image.length - 1]["#text"]
                    };

                    artistInfo.similarArtists.push(similarArtist);
                }

                return artistInfo;
            }).then(artistInfo => {
                this.addToAddedArtists(artistInfo);
            })
        },

        addToAddedArtists: function(artistInfo) {
            console.log(artistInfo);

            let artistToAddName = artistInfo.name.toLowerCase();

            for(let i = 0, x = this.addedArtists.length; i < x; i++) {
                let currentComparingArtistName = this.addedArtists[i].name.toLowerCase();

                if (artistToAddName == currentComparingArtistName) {
                    // Artist already added
                    console.log(`${artistToAddName} already added to addedArtists`)
                    return
                }
            }

            this.addedArtists.push(artistInfo)

            this.addToSimilarArtists(artistInfo.similarArtists);

            let artistInSimilarArtistsIndex = (artistToCheck) => {
                for(let i = 0, x = this.similarArtists.length; i < x; i++) {
                    let currentComparingArtistName = this.similarArtists[i].name.toLowerCase();

                    if (artistToCheck == currentComparingArtistName) {
                        // Artist already added
                        console.log(`${artistToCheck} already added to similarArtists`)
                        return i;
                    }
                }

                return -1;
            }

            let indexOfArtist = artistInSimilarArtistsIndex(artistToAddName);
            if (indexOfArtist > -1) {
                console.log(`should remove ${artistToAddName} from similarArtists at index ${indexOfArtist}`);
                this.similarArtists.splice(indexOfArtist, 1);
            }
        },

        addToSimilarArtists: function(similarArtistsList) {
            console.log(similarArtistsList)

            let artistAlreadyAdded = (artistToCheck) => {
                for(let i = 0, x = this.similarArtists.length; i < x; i++) {
                    let currentComparingArtistName = this.similarArtists[i].name.toLowerCase();

                    if (artistToCheck == currentComparingArtistName) {
                        // Artist already added
                        console.log(`${artistToCheck} already added to similarArtists`)
                        return true;
                    }
                }

                for(let i = 0, x = this.addedArtists.length; i < x; i++) {
                    let currentComparingArtistName = this.addedArtists[i].name.toLowerCase();

                    if (artistToCheck == currentComparingArtistName) {
                        // Artist already added
                        console.log(`${artistToCheck} already added to addedArtists`)
                        return true;
                    }
                }

                return false;
            }

            for(let i = 0, x = similarArtistsList.length; i < x; i++) {
                let similarArtistToAddName = similarArtistsList[i].name.toLowerCase();

                if (!artistAlreadyAdded(similarArtistToAddName)) {
                    this.similarArtists.push(similarArtistsList[i]);
                }
            }
        }
    }
}
</script>
