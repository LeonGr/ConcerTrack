<style lang="scss">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

header {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
    background-color: white;
    position: absolute;
    z-index: 2;

    #header-title-link {
        position: absolute;
        left: 20px;
        text-decoration: none;
        color: #333;

        h2 {
            color: #333;
            font-size: 30px;
        }
    }

//    #header-title-link.dark {
//        color: #EEE;
//    }

    .square {
        float: right;
        width: 50px;
        height: 50px;
        //transition: transform 0.5s;

        //&:hover {
            //transform: rotate(180deg);
        //}
    }

    .square:nth-of-type(1) {
        background-color: $orange-yellow;
    }
    .square:nth-of-type(2) {
        background-color: $orange;
    }
    .square:nth-of-type(3) {
        background-color: $orange-red;
    }
    .square:nth-of-type(4) {
        background-color: $red;
    }
    .square:nth-of-type(5) {
        background-color: $purple-red;
    }
}

//header.dark {
//    background-color: #333;
//}
</style>

<style lang="scss">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;
#search-tracked-view {
    position: absolute;
    right: 250px;
    height: 50px;
    z-index: 5;

    #autocomplete-container {
        h1 {
            font-size: 20px;
            font-weight: 300;
        }

        #errorMessage {
            border-left: 5px solid $orange-red;
            padding: 15px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
            width: 300px;
            box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
            border-radius: 3px;

            position: absolute;

            cursor: pointer;

            background-color: white;
            top: calc(100vh - 160px);
            right: calc(100vw - 600px)
        }

        form {
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
        }

        #input-field {
            background: #eee;
            padding: 10px;
            height: 40px;
            margin-top: 5px;
            margin-right: 5px;
            border-radius: 3px;
            font-size: 16px;
            //border: 1px solid $orange-yellow;
            box-sizing: border-box;
            outline: none;
            width: 300px;
        }

        #search-results {
            border-bottom: 5px solid $orange-yellow;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
            //border: 1px solid $orange-yellow;
            position: absolute;
            top: 40px;
            right: 5px;
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
            right: 8px;
            margin-top: 2px;
            border-radius: 3px;
            background-color: $orange-yellow;
            padding: 5px 18px;
            color: white;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);

            cursor: pointer;
            transition: all 0.2s;
            outline: none;

            &:hover {
                background-color: $orange;
                box-shadow: 0 5px 9px 0 rgba(0,0,0,.3);
            }

            &:active {
                background-color: $orange-yellow;
                box-shadow: none;
            }
        }
    }
}
</style>

<template>
    <header>
        <!--link back to search-view-->
        <router-link :to="'/'" id="header-title-link">
            <h2>ConcerTrack</h2>
        </router-link>

        <div id="search-tracked-view">
            <autocomplete
                title=""
                placeholder="Search for another artist"
                data="static/AllList.json"
                callback="artistSearch"
                submitText="<i class='fa fa-search' aria-hidden='true'></i>">
            </autocomplete>
        </div>

        <!--spans for coloured squares-->
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>
    </header>
</template>

<script>
import store from '@/store/index.js'

export default {
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
                        console.log(this.$children)
                        this.$children[1].errorMessage = "Sorry, we couldn't find that artist :(";
                    }
                })
            }
        }
    }
}
</script>
