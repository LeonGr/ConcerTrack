<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

// change colour of input placeholder text
*::-webkit-input-placeholder {
    color: #ccc;
}
*:-moz-placeholder {
    /* FF 4-18 */
    color: #ccc;
}
*::-moz-placeholder {
    /* FF 19+ */
    color: #ccc;
}
*:-ms-input-placeholder {
    /* IE 10+ */
    color: #ccc;
}

#search-body {
    position: absolute;
    top: 50px;
    width: 100%;
    min-height: calc(100% - 100px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    background-color: #F54;

    img {
        width: 400px;
    }

    #search-container {
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        h1 {
            color: #333;
            margin-top: 20px;
            font-size: 22px;
            width: 100%;
            font-weight: 300;
            margin-left: 20px;
        }

        #errorMessage {
            height: 25px;
            color: $orange;
            font-weight: 300;
            margin-left: 20px;
            margin-bottom: 20px;
        }

        form {
            margin: 20px;
        }

        input {
            width: 400px;
            height: 30px;
            padding: 20px;
            border: 1px solid $orange-yellow;
            //border-radius: 5px;
            font-size: 25px;

            outline: none;
            box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
        }

        #search-results {
            border: 1px solid $orange-yellow;
            width: 440px;
            position: absolute;
            list-style: none;
            margin: 20px;
            margin-top: 47px;
            background-color: white;
            top: 88px;
            box-shadow: 0 3px 9px 0 rgba(0,0,0,.3);

            li {
                margin: 4px 20px;
            }
        }
    }
}
</style>

<template>
    <div id="search-body">
        <div id="search-container">
            <h1>Search for events from an artist:</h1>
            <form v-on:submit.prevent="submitForm">
                <input v-on:input="inputChanged" v-on:focus="selectInput" v-model="artist" type="text" placeholder="Artist name">
            </form>
            <ul id="search-results" v-if="showMatching.length">
                <li v-for="match in showMatching">{{ match }}</li>
            </ul>
            <h2 id="errorMessage">{{ errorMessage }}</h2>
        </div>

        <img src="static/map.svg" alt="">
    </div>
</template>

<script>
export default {
    data: function() {
        // Declare local data variables
        return {
            artist: '',
            errorMessage: '',
            artistList: [],
            matching: [],
            startMatching: [],
            showMatching: [],
            lastInputLength: 0
        }
    },

    mounted: function() {
        // Should happen when search-view is loaded the first time:
        console.log("Mounted")
    },

    methods: {
        // Load artist list from json file when user selects the input field
        selectInput: function() {
            // If it has been loaded return
            if (this.artistList.length) return;

            let fetchArtistList = () => {
                return new Promise((resolve, reject) => {
                    fetch("http://localhost:8080/static/AllList.json", {
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

            fetchArtistList().then(data => {
                this.artistList = data;
            });
        },

        inputChanged: function() {

            // Start giving suggestions when input is more than minimal amount of characters
            const MIN_CHARS = 1;

            let input = this.artist.toLowerCase();//.replace(/[^a-zA-Z]/g, ""); <- uncomment to filter special characters

            if (input.length > MIN_CHARS) {

                // If the user adds more text to the input field and we already have more than 0 results
                // Show matching artists from current matching list
                if (input.length > this.lastInputLength && this.matching.length > 0) {

                    // Create temporary arrays to store new results
                    let newMatching = [];
                    let newStartMatching = [];

                    // Store everything that starts with the input in a different array than just matching input
                    // We do this because it's more common to begin typing the whole name from the start
                    for(let i = 0, x = this.startMatching.length; i < x; i++) {

                        if (this.startMatching[i].toLowerCase().startsWith(input))
                            newStartMatching.push(this.startMatching[i]);
                    }

                    // Add all artists that contain the input but don't start with it to matching array
                    for (let i = 0, x = this.matching.length; i < x; i++) {

                        let artistFromMatchingList = this.matching[i];

                        if (artistFromMatchingList.toLowerCase().includes(input) && !artistFromMatchingList.startsWith(input))
                            newMatching.push(this.matching[i]);
                    }

                    // Copy to main arrays
                    this.matching = newMatching;
                    this.startMatching = newStartMatching;
                } else {
                    // If the user removes input or it was empty before look through the whole list of artists

                    // Remove old results
                    this.matching = [];
                    this.startMatching = []

                    for (let i = 0, x = this.artistList.length; i < x; i++) {
                        let artistFromList = this.artistList[i];

                        if (artistFromList.toLowerCase().startsWith(input))
                            this.startMatching.push(artistFromList)

                        else if (artistFromList.toLowerCase().includes(input) && !artistFromList.startsWith(input))
                            this.matching.push(artistFromList);
                    }
                }

                // We dont want a huge list so we only show a specified amount of results
                this.showMatching = [];
                let maxResults = 10;

                // First we try to fill the results with results that start with the imput
                for(let i = 0, x = maxResults; i < x; i++) {
                    if (i < this.startMatching.length)
                        this.showMatching.push(this.startMatching[i]);
                }

                // If it has not reached the specified amount add more from the matching array
                if (this.showMatching.length < maxResults) {
                    let stillNeeded = maxResults - this.showMatching.length;

                    for(let i = 0, x = stillNeeded; i < x; i++) {

                        if (i < this.matching.length)
                            this.showMatching.push(this.matching[i]);
                    }
                }
            } else {
                // If the imput is less than MIN_CHARS empty all results
                this.matching = this.startMatching = this.showMatching = [];
            }

            // Store input length to compare if we have more or less input than last time
            this.lastInputLength = this.artist.length;
        },

        submitForm: function() {
            // Check if we get a response from BIT API before we redirect
            this.doesArtistExist(this.artist).then(data => {
                // If the response contains an ID redirect to artist-view
                if (data.id) {
                    this.$router.push({ path: "/" + "artists/" + this.artist })
                }
            })
        },

        // Check if we get a response from BIT API for supplied artist name
        doesArtistExist: function(artist) {
            const apiURL = "https://rest.bandsintown.com/"
            const apiExtension = "?app_id='ConcerTrack v0.0.1'"
            const output = document.getElementById("output");

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
                    this.actOnError(error);
                })
            })
        },

        actOnError: function(error) {
            // If we get an error that means the artist has not been found
            if (error.toString().includes("SyntaxError")) {
                this.errorMessage = "Sorry, we couldn't find that artist :(";
            }
        }
    }
}
</script>
