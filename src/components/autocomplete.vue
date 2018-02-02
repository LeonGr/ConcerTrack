<template>
    <div id="autocomplete-container">
        <form v-on:submit.prevent id="autocomplete-form">
            <h1 id="title">{{ title }}</h1>
            <input id="input-field" v-on:input="inputChanged" v-on:focus="selectInput" v-model="inputValue" type="text" :placeholder="placeholder" autocomplete="off">
            <button id="submitButton" v-on:click="submitForm" v-html="submitText"></button>
            <h1 v-if="errorMessage" id="errorMessage" v-on:click="hideError">{{ errorMessage }}</h1>
            <h1 v-else style="color: transparent; user-select: none;" id="filler">Filler</h1>
        </form>
        <ul id="search-results" v-if="showMatching.length">
            <li v-for="match in showMatching" v-on:click="clickSearchResult($event)" v-on:mouseover="hoverSearchResult($event)">{{ match }}</li>
        </ul>
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

    props: {
        title: '',
        placeholder: '',
        data: '',
        callback: '',
        submitText: ''
    },

    mounted: function() {
        let deselectInput = (event) => {
            // Get inputfield from current autocomplete
            let formChildren = Array.prototype.slice.call(this.$el.children[0].children);

            if (!(event.target.localName == "li" || formChildren.indexOf(event.target) == 1)) {
                this.deselectInput();
            }
        }

        window.addEventListener("mousedown", function(event) {
            deselectInput(event);
        })

        let inputField = this.$el.children[0].children[1];
        // Should happen when search-view is loaded the first time:

        // Listen for arrowkey events to select search results


        // Extra function because we can't use `this` in eventlistener function
        let callSelectFuncion = (key) => {
            if (key == 'ArrowDown' || key == 'Tab')
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
            if (e.key.includes("ArrowUp") || e.key.includes("ArrowDown") || e.key.includes('Tab')) e.preventDefault();
        });

//        let pressedEscape = () => {
//            this.deselectInput();
//        }
//
//        inputField.addEventListener("focusout", function(e) {
//            console.log('focusout')
//            pressedEscape();
//        });
    },

    methods: {
        selectInput: function() {
            // Load artist list from json file when user selects the input field
            // If it has been loaded return
            if (this.listOfData.length) return;

            let fetchArtistList = () => {
                return new Promise((resolve, reject) => {
                    fetch(window.location.origin + "/" + this.data, {
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

        deselectInput: function() {
            this.showMatching = this.allMatching = this.startMatching = [];
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
                    let index = this.showMatching.length;

                    suggestions[index - 1].classList.add('selected');
                    this.selectedSuggestion = index - 1;
                } else {
                    this.selectedSuggestion--;
                    suggestions[this.selectedSuggestion].classList.add('selected');
                }
            } else if (direction == 'down') {
                // If it is null select the first one
                if (this.selectedSuggestion == null) {
                    this.selectedSuggestion = 0;
                    suggestions[this.selectedSuggestion].classList.add('selected');
                } else if (this.selectedSuggestion == this.showMatching.length - 1) {
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
            this.selectedSuggestion = null;
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

            this.showMatching = this.allMatching = this.startMatching = [];
            this.$parent.callBackForm(this.callback, this.inputValue);
            this.inputValue = "";
            this.errorMessage = "";
        },

        hideError: function() {
            this.errorMessage = '';
        }
    }
}
</script>
