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
        height: 100%;
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

<style lang="scss"></style>

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
                <div v-for="artist in addedArtists">
                    <p>{{ artist.name }}</p>
                    <img :src="artist.imageUrl" :alt="artist.name">
                </div>
            </div>

            <h2>Similar to added artists:</h2>
            <div id="similar-artists">
                <div v-for="artist in similarArtists">
                    <p>{{ artist.name }}</p>
                    <img :src="artist.imageUrl" :alt="artist.name">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'

export default {
    data: function() {
        console.log('data')
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
                let artist = value;

                // Check if we get a response from BIT API before we redirect
                store.doesArtistExist(artist).then(data => {
                    let result = this.getLastFMInfo(artist);
                    console.log(result);
                }).catch(error => {
                    // If we get an error that means the artist has not been found
                    if (error.toString().includes("SyntaxError")) {
                        for(let i = 0, x = this.$children.length; i < x; i++) {

                            let child = this.$children[i];

                            if (child.$el.id == "autocomplete-container") {
                                child.inputValue = artist;
                                child.errorMessage = "Sorry, we couldn't find that artist :("
                            }
                        }                    }
                })
            }
        },

        getLastFMInfo: function(artist) {
            console.log(artist)
            let getData = () => {
                // Encode so lastfm doesn't get trouble with names with for example &
                artist = encodeURIComponent(artist);

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

                let artistObject = {};

                let similarArtists;

                artistObject.name = data.artist.name;
                artistObject.imageUrl = data.artist.image[data.artist.image.length - 1]["#text"];

                similarArtists = data.artist.similar.artist;

                for(let i = 0, x = similarArtists.length; i < x; i++) {
                    let artist = similarArtists[i];

                    let similarArtistObject = {};

                    similarArtistObject.name = artist.name;
                    similarArtistObject.imageUrl = artist.image[data.artist.image.length - 1]["#text"];

                    this.similarArtists.push(similarArtistObject);
                }

                this.addedArtists.push(artistObject);
            })
        }
    }
}
</script>
