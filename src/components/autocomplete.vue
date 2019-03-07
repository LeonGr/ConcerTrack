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

<template>
    <div id="autocomplete-container">
        <form v-on:submit.prevent id="autocomplete-form">
            <h1 id="title">{{ title }}</h1>
            <input id="input-field" v-on:input="inputChanged" v-on:focus="selectInput" v-model="inputValue" type="text" :placeholder="placeholder" autocomplete="off">
            <button id="submitButton" v-on:click="submitForm" v-html="submitText"></button>

            <ul id="search-results" v-if="showMatching.length">
                <li
                    v-for="(match, index) in showMatching"
                    v-on:click="clickSearchResult($event)"
                    v-on:mouseover="hoverSearchResult($event)"
                    class="animated fadeIn"
                    :style="{ animationDelay: index * 0.03 + 's' }"
                    >{{ match }}</li>
            </ul>
        </form>
        <h1 v-if="errorMessage" id="errorMessage" v-on:click="hideError" class="animated lightSpeedIn">{{ errorMessage }}</h1>
    </div>
</template>

<script>
import _ from 'lodash'
import store from '@/store/index.js'

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
            errorMessage: '',
            partlyTyped: '',
            waiting: null
        }
    },

    // Variables from autocomplete element in parent
    props: {
        title: '',
        placeholder: '',
        data: '',
        callback: '',
        submitText: ''
    },

    watch: {
        '$route' () {
            this.errorMessage = '';
        }
    },

    mounted: function() {
        let deselectInput = (event) => {
            // Get inputfield from current autocomplete
            let formChildren = Array.prototype.slice.call(this.$el.children[0].children);

            if (!(event.target.localName == "li" || formChildren.indexOf(event.target) == 1)) {
                this.deselectInput();
            }
        }

        // If user clicks somewhere else than search results or input field clear results
        window.addEventListener("mousedown", function(event) {
            deselectInput(event);
        })

        let inputField = this.$el.children[0].children[1];
        // Should happen when search-view is loaded the first time:

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
            let keyPressed = e.key.includes("ArrowUp") || e.key.includes("ArrowDown") || e.key.includes('Tab')
            if (keyPressed) {
                e.preventDefault();
            }
        });

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

            if (store.autocompleteList && store.autocompleteList[this.data]) {
                this.listOfData = store.autocompleteList[this.data];
            } else {
                fetchArtistList().then(data => {
                    this.listOfData = data;
                    store.autocompleteList[this.data] = this.listOfData;
                });
            }
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

                // When we are at the top and press up go back to input field
                if (!this.selectedSuggestion) {
                    this.selectedSuggestion = null;
                    this.inputValue = this.partlyTyped;
                }

                // Otherwise select previous result
                else {
                    this.selectedSuggestion--;
                    suggestions[this.selectedSuggestion].classList.add('selected');
                }
            } else if (direction == 'down') {

                // If it is null select the first result
                if (this.selectedSuggestion == null) {
                    this.partlyTyped = this.inputValue;
                    this.selectedSuggestion = 0;
                    suggestions[this.selectedSuggestion].classList.add('selected');
                }

                // When we are at the bottom and press down go back to input field
                else if (this.selectedSuggestion == this.showMatching.length - 1) {
                    this.selectedSuggestion = null;
                    this.inputValue = this.partlyTyped;
                }

                // Otherwise select next result
                else {
                    this.selectedSuggestion++
                    suggestions[this.selectedSuggestion].classList.add('selected');
                }

            }

            // Make input value equal to selected input
            // So user can just press enter
            if (suggestions[this.selectedSuggestion]) {
                this.inputValue = suggestions[this.selectedSuggestion].innerText;
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
            // Because on mobile the oninput event might not work until focus is lost or space is pressed
            function getChild(element, localName) {
                let children = element.children;
                for(let i = 0, x = children.length; i < x; i++) {
                    if (children[i].localName == localName) {
                        return children[i];
                    }
                }
            }

            let form = getChild(this.$el, "form")
            let inputField = getChild(form, "input")

            //let realInput = document.getElementById('input-field').value;
            let realInput = inputField.value;

            if (realInput && realInput != this.inputValue) {
                this.inputValue = realInput;
            }

            this.selectedSuggestion = null;
            // Start giving suggestions when input is more than minimal amount of characters
            const MIN_CHARS = 1;

            // Remove last errorMessage when users starts typing again
            this.errorMessage = ''

            let input = this.inputValue.toLowerCase();//.replace(/[^a-zA-Z]/g, ""); <- uncomment to filter special characters

            if (input.length > MIN_CHARS) {
                // If the user adds more text to the input field and we already have more than 0 results
                // Show matching artists from current matching list
                if (input.length > this.lastInputLength && this.allMatching.length > 0) {

                    // Go back to input field after user types more
                    this.selectedSuggestion = null;

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

                // If we are looking for artists and this is also not enough fetch more from the database
                if (this.showMatching.length < maxResults && this.callback == "artistSearch") {
                    // Get list of artists from database containing search input
                    let fetchArtistsFromDatabase = (search_query) => {
                        return new Promise((resolve, reject) => {
                            fetch("https://api.concertrack.com/get_artists/" + search_query, {
                                method: 'GET',
                                headers: {
                                    'accept': 'application/json'
                                }
                            }).then(response => {
                                return response.json()
                            }).then(response => {
                                resolve(response)
                            }).catch(error => {
                                reject(error)
                            })
                        })
                    }

                    let fetchFunction = () => {
                        fetchArtistsFromDatabase(this.inputValue).then(response => {
                            let contains = response.contains;

                            // Make sure there are no duplicates
                            let inArray = (name) => {
                                let isIn = false;

                                name = name.toLowerCase();

                                for(let i = 0, x = this.showMatching.length; i < x; i++) {
                                    let artist = this.showMatching[i].toLowerCase();

                                    if (artist == name) {
                                        isIn = true;
                                        break;
                                    }
                                }

                                return isIn;
                            }

                            let stillNeeded = maxResults - this.showMatching.length;

                            // add from full list until full
                            for(let i = 0, x = stillNeeded; i < x; i++) {

                                if (i < contains.length && !inArray(contains[i]))
                                    this.showMatching.push(contains[i]);
                            }


                            // Sort array, giving priority to elements that start with input
                            this.showMatching.sort((a, b) => {
                                // Exclude "The" from sort
                                a = a.toLowerCase().replace("the ","");
                                b = b.toLowerCase().replace("the ","");
                                input = this.inputValue.toLowerCase().replace("the ", "");

                                let aBeginsWithInput = a.startsWith(input)
                                let bBeginsWithInput = b.startsWith(input)

                                if (aBeginsWithInput && !bBeginsWithInput) {
                                    return -1;
                                }

                                if (!aBeginsWithInput && bBeginsWithInput) {
                                    return 1;
                                }

                                // If neither begin with input sort normally
                                if (!aBeginsWithInput && !bBeginsWithInput) {
                                    if (a > b) {
                                        return 1;
                                    }

                                    if (a < b) {
                                        return -1;
                                    }
                                }

                                return 0;
                            })


                        })
                    }

//                    // Reset timeout every time this function is called
//                    // If it isn't reset for 1s we make a request to the database
//                    clearTimeout(this.waiting)
//                    this.waiting = setTimeout(fetchFunction, 500)

                }
            }

            else {
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
            //this.errorMessage = "";
        },

        hideError: function() {
            let errorMessageElement = document.getElementById('errorMessage')
            errorMessageElement.classList.add('lightSpeedOut');

            let clearErrorMessage = () => {
                errorMessageElement.classList.remove('lightSpeedOut');
                this.errorMessage = '';
            }

            errorMessageElement.addEventListener('animationend', function() {
                clearErrorMessage();
            })
        }
    }
}
</script>
