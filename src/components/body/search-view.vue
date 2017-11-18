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
    width: 100%;
    min-height: calc(100% - 100px);
    display: flex;
    align-items: center;
    justify-content: center;

    #search-container {
        border: 1px solid #ccc;
        box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
        border-radius: 5px;
        width: 500px;
        height: 200px;

        h1 {
            color: #333;
            margin: 30px 0 0 30px;
            font-size: 22px;
            width: 100%;
            font-weight: 100;
        }

        input {
            width: 400px;
            height: 30px;
            padding: 20px;
            margin: 30px;
            border: 1px solid $orange-red;
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
                <input v-model="artist" type="text" placeholder="Artist name">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            artist: ''
        }
    },

    mounted: function() {
        console.log("Mounted")
    },

    methods: {
        submitForm: function() {
            //this.$router.replace({ path: "/" + "artists/" + this.artist })
            this.doesArtistExist(this.artist).then(data => {
                if (data.id) {
                    this.$router.replace({ path: "/" + "artists/" + this.artist })
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
                })
            })
        }
    }
}
</script>
