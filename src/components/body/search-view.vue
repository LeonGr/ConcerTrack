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

#tracked-link {
    position: absolute;
    top: -50px;
    z-index: 3;
    display: flex;
    align-items: center;
    height: 50px;
    right: 270px;
    text-decoration: none;

    p {
        font-weight: bold;
        color: $orange-yellow;
        font-size: 16px;

        transition: 0.2s all;

        &:hover {
            color: #F0443A;
        }
    }
}

#search-body {
    position: absolute;
    top: 50px;
    width: 100%;
    min-height: calc(100% - 100px);
    height: calc(100% - 100px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    background-color: #F54;

    #website-description {
        position: absolute;
        top: 0px;
        height: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {

        }

        h2 {
            font-size: 50px;
            font-family: sans-serif;
            text-align: center;
        }
    }

    #not-description {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 400px;
        height: 300px;
        margin-top: -100px;
    }


}

@media (min-width: 1300px) {
    body {
        width: 100%;
    }
}
</style>

<style lang="scss">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

#search-body {
#autocomplete-container {
    background-color: white;
    //border: 1px solid #ccc;
    box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
    border-radius: 5px;
    padding: 20px;

    color: #333;
    width: 440px;
    height: 110px;

    #title {
        font-weight: bold;
        font-size: 23px;
    }

    #errorMessage {
            color: $orange-red;
            margin-right: 5px;
            position: absolute;
            bottom: 20px;
            left: 20px;
            background: white;
            border-left: 5px solid $orange-red;
            border-radius: 3px;
            font-weight: bold;
            width: 250px;
            box-sizing: border-box;
            padding: 5px 5px;
            cursor: pointer;
            font-size: 20px;
            font-weight: 400;
            box-shadow: 0 0 9px 0 rgba(0,0,0,.3);

//        width: 440px;
//        color: $orange;
//        font-size: 20px;
//        font-weight: bold;
//        background: white;
//        border: 1px solid $orange;
//        padding: 10px 5px;
//        box-sizing: border-box;
//        text-align: center;
//        position: absolute;
//        top: 115px;
//        box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
//        cursor: pointer;
//        border-radius: 3px;
    }

    #filler {
        display: none;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
    }

    #input-field {
        box-sizing: border-box;
        padding: 20px;
        font-size: 18px;
        //border: 1px solid $orange-yellow;
        outline: none;
        margin: 10px 0 10px 0;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        border-radius: 3px;
        background: #eee;

        transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);

        &:focus, &:hover {
            //box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
            box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
        }
    }

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
        box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
        border-radius: 3px;

        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            background-color: $orange;
            box-shadow: 0 5px 9px 0 rgba(0,0,0,.3);
        }
    }

    #search-results {
        //border: 1px solid $orange-yellow;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        position: absolute;
        top: 100px;
        list-style: none;
        background-color: #eee;
        box-sizing: border-box;
        width: 440px;
        border-bottom: 5px solid $orange-yellow;

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
    <div id="search-body">
        <div id="website-description">
            <h2>
                Find concerts
                <br>
                Track artists
                <br>
                No hassle
            </h2>
        </div>

        <div id="not-description">
            <autocomplete
                title="Search for events from an artist:"
                placeholder="Artist name"
                data="static/AllList.json"
                callback="artistSearch"
                submitText="Search">
            </autocomplete>

            <img src="static/map.svg" alt="">
        </div>

        <router-link :to="'/tracked'" id="tracked-link">
            <p>Tracked Artists</p>
        </router-link>
    </div>
</template>

<script>
import store from '@/store/index.js'

export default {
    data: function() {
        // Declare local data variables
        return {
        }
    },

    watch: {
    },

    mounted: function() {
        document.getElementById('input-field').focus();
    },

    methods: {
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
            }
        },
    }
}
</script>
