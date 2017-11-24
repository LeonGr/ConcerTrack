<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

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
        //width: 500px;
        //height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;

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
            border-radius: 5px;
            font-size: 25px;

            outline: none;
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
            {{ artist }}
            {{ matching }}
            <h2 id="errorMessage">{{ errorMessage }}</h2>
        </div>
        <img src="static/map.svg" alt="">
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            artist: '',
            errorMessage: '',
            artistList: [],
            matching: [],
            lastInputLength: 0
        }
    },

    mounted: function() {
        console.log("Mounted")
    },

    methods: {
        selectInput: function() {
            if (this.artistList.length) return;

            let fetchArtistList = () => {
                return new Promise((resolve, reject) => {
                    fetch("http://localhost:8080/static/AllListSorted.json", {
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

            console.time("LoadList")
            fetchArtistList().then(data => {
                this.artistList = data;
                console.log(this.artistList)
            })
            console.timeEnd("LoadList")
        },

        inputChanged: function() {
            if (this.artist.length > 1) {
                if (this.artist.length > this.lastInputLength && this.matching.length > 0) {
                    console.log('Added more text filter from current list')
                    console.time("Loop")
                    let newMatching = [];
                    let numberOfMatches = 0;
                    for (let i = 0, x = this.matching.length; i < x; i++) {
                        if (this.matching[i].toLowerCase().includes(this.artist.toLowerCase())) {
                            newMatching.push(this.matching[i]);
                            numberOfMatches++;
                        }
                    }
                    console.log(numberOfMatches);
                    this.matching = newMatching;
                    console.timeEnd("Loop")
                } else {
                    console.log('Else')
                    this.matching = [];

                    console.log('Initial load')
                    console.time("Loop")
                    let numberOfMatches = 0;
                    for (let i = 0, x = this.artistList.length; i < x; i++) {
                        if (this.artistList[i].toLowerCase().includes(this.artist.toLowerCase())) {
                            this.matching.push(this.artistList[i]);
                            numberOfMatches++;
                        }
                    }
                    console.log(numberOfMatches);
                    console.timeEnd("Loop")
                }
            }

            this.lastInputLength = this.artist.length;
        },

        submitForm: function() {
            this.doesArtistExist(this.artist).then(data => {
                if (data.id) {
                    this.$router.push({ path: "/" + "artists/" + this.artist })
                }
            })
        },

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
            if (error.toString().includes("SyntaxError")) {
                this.errorMessage = "Sorry, we couldn't find that artist :(";
            }
        }
    }
}
</script>
