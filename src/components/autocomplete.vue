<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

#autocomplete-container {
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
            padding: 4px 20px;

            &:hover {
                cursor: pointer;
            }
        }

        .selected {
            background-color: $orange;
        }
    }
}
</style>

<template>
    <div id="autocomplete-container">
        <form v-on:submit.prevent>
            <input id="input-field" v-on:input="inputChanged" v-on:focus="selectInput" v-model="inputValue" type="text" placeholder="Artist name" autocomplete="off">
        </form>
        <ul id="search-results" v-if="showMatching.length">
            <li v-for="match in showMatching" v-on:click="clickSearchResult($event)" v-on:mouseover="hoverSearchResult($event)">{{ match }}</li>
        </ul>
        <h2 id="errorMessage">{{ errorMessage }}</h2>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            inputValue: '',
            listOfData: [],
            allMatching: [],
            startMatching: [],
            showMatching: [],
            lastInputLength: 0,
            maxResults: 10,
            selectedSuggestion: null,
            errorMessage: ''
        }
    },

    mounted: function() {
        // Should happen when search-view is loaded the first time:

        // Listen for arrowkey events to select search results

        let inputField = document.getElementById('input-field');

        // Extra function because we can't use `this` in eventlistener function
        let callSelectFuncion = (key) => {
            if (key == 'ArrowDown')
                this.selectSuggestion('down')
            else if (key == 'ArrowUp')
                this.selectSuggestion('up')
            else if (key == 'Enter') {
                this.submitSearch();
            }
        }

        // Listen for keypresses when we selected input
        inputField.addEventListener("keydown", function(e) {
            callSelectFuncion(e.key);

            // Stop the cursor from moving around when we select stuff
            if (e.key.includes("ArrowUp") || e.key.includes("ArrowDown")) e.preventDefault();
        });
    },

    methods: {
        selectInput: function() {
            // Load artist list from json file when user selects the input field
            // If it has been loaded return
            if (this.listOfData.length) return;

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
                this.listOfData = data;
            });
        },

        submitSearch: function() {
            // If we made a selection set artist to that
            if (this.selectedSuggestion != null) {
                let suggestionContainer = document.getElementById('search-results');
                let searchResults = suggestionContainer.children;

                this.inputValue = searchResults[this.selectedSuggestion].innerText;
            }

            // Submit form with current artist in input
            this.submitForm();
        },

        // Highlight selected suggestion
        selectSuggestion: function(direction) {
            let suggestionContainer = document.getElementById('search-results');

            // If there are no search results yet return
            if (!suggestionContainer) return;

            let suggestions = suggestionContainer.children;

            for(let i = 0, x = suggestions.length; i < x; i++) {
                suggestions[i].classList.remove('selected');
            }

            if (direction == 'up') {
                // If it's null or 0 (false values) go to the bottom
                if (!this.selectedSuggestion) {
                    suggestions[this.maxResults - 1].classList.add('selected');
                    this.selectedSuggestion = this.maxResults - 1;
                } else {
                    this.selectedSuggestion--;
                    suggestions[this.selectedSuggestion].classList.add('selected');
                }
            } else if (direction == 'down') {
                // If it is null select the first one
                if (this.selectedSuggestion == null) {
                    this.selectedSuggestion = 0;
                    suggestions[this.selectedSuggestion].classList.add('selected');
                } else if (this.selectedSuggestion == this.maxResults - 1) {
                    suggestions[0].classList.add('selected');
                    this.selectedSuggestion = 0;
                } else {
                    this.selectedSuggestion++
                    suggestions[this.selectedSuggestion].classList.add('selected');
                }

            }
        },

        clickSearchResult: function(event) {
            this.inputValue = event.target.innerText;

            this.submitForm();
        },

        // For consistency we also set the selected suggestion on mouseover
        hoverSearchResult: function(event) {
            let suggestionContainer = document.getElementById('search-results');
            let searchResults = suggestionContainer.children;

            for(let i = 0, x = searchResults.length; i < x; i++) {
                searchResults[i].classList.remove('selected');

                if (event.target == searchResults[i]) {
                    this.selectedSuggestion = i;
                    event.target.classList.add('selected');
                }
            }
        },

        inputChanged: function() {
            // Start giving suggestions when input is more than minimal amount of characters
            const MIN_CHARS = 1;

            let input = this.inputValue.toLowerCase();//.replace(/[^a-zA-Z]/g, ""); <- uncomment to filter special characters

            if (input.length > MIN_CHARS) {

                // If the user adds more text to the input field and we already have more than 0 results
                // Show matching artists from current matching list
                if (input.length > this.lastInputLength && this.allMatching.length > 0) {

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
                    for (let i = 0, x = this.allMatching.length; i < x; i++) {

                        let artistFromMatchingList = this.allMatching[i];

                        if (artistFromMatchingList.toLowerCase().includes(input) && !artistFromMatchingList.startsWith(input))
                            newMatching.push(this.allMatching[i]);
                    }

                    // Copy to main arrays
                    this.allMatching = newMatching;
                    this.startMatching = newStartMatching;
                } else {
                    // If the user removes input or it was empty before look through the whole list of artists

                    // Remove old results
                    this.allMatching = [];
                    this.startMatching = []

                    for (let i = 0, x = this.listOfData.length; i < x; i++) {
                        let artistFromList = this.listOfData[i];

                        if (artistFromList.toLowerCase().startsWith(input))
                            this.startMatching.push(artistFromList)

                        else if (artistFromList.toLowerCase().includes(input) && !artistFromList.startsWith(input))
                            this.allMatching.push(artistFromList);
                    }
                }

                // We dont want a huge list so we only show a specified amount of results
                this.showMatching = [];
                let maxResults = this.maxResults;

                // First we try to fill the results with results that start with the imput
                for(let i = 0, x = maxResults; i < x; i++) {
                    if (i < this.startMatching.length)
                        this.showMatching.push(this.startMatching[i]);
                }

                // If it has not reached the specified amount add more from the matching array
                if (this.showMatching.length < maxResults) {
                    let stillNeeded = maxResults - this.showMatching.length;

                    for(let i = 0, x = stillNeeded; i < x; i++) {

                        if (i < this.allMatching.length)
                            this.showMatching.push(this.allMatching[i]);
                    }
                }
            } else {
                // If the imput is less than MIN_CHARS empty all results
                this.allMatching = this.startMatching = this.showMatching = [];
            }

            // Store input length to compare if we have more or less input than last time
            this.lastInputLength = this.inputValue.length;
        },

        submitForm: function() {
            // If there is no input return
            if (!this.inputValue) return;

            // Check if we get a response from BIT API before we redirect
            this.doesArtistExist(this.inputValue).then(data => {
                // If the response contains an ID redirect to artist-view
                if (data.id) {
                    this.$router.push({ path: "/" + "artists/" + this.inputValue })
                }
            })
        },

        // Check if we get a response from BIT API for supplied artist name
        doesArtistExist: function(artist) {
            if (artist.toLowerCase() == "leon grasmeijer") {
                this.$router.push({ path: "/" + "artists/" + "Leon Grasmeijer" })
                return;
            }

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
