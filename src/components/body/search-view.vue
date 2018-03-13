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
    position: relative;
    width: 100%;

    min-height: calc(100vh - 100px);

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    background:linear-gradient(0deg,rgba(240, 68, 58, 0.7),rgba(240, 68, 58, 0.7)), url("/static/musician.jpg");
    background-size: cover;
    background-repeat: no-repeat;

    #website-description {
        position: absolute;
        top: 0px;
        height: calc(50% - 100px);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: 50px;
            font-family: sans-serif;
            text-align: center;
            font-weight: 200;
        }
    }

    #not-description-wrapper {
        width: 100%;
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

@media (max-width: 1000px) {
    #search-body {
        #website-description {
            height: 150px;
            position: relative;

            h2 {
                font-size: 35px;
            }
        }

        #not-description-wrapper {
            width: auto;
            height: calc(100vh - 250px);
            display: flex;
            align-items: center;
        }

        #not-description {
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            #img-container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 400px;
            }

            img {
                width: 80%;
                max-width: 400px;
                height: auto;
                margin-top: 1px;
            }
        }
    }
}

@media (max-width: 500px) {
    #search-body {
        //background: #F54;

        #website-description {
            height: 100px;
            top: 10px;

            h2 {
                font-size: 30px;
            }
        }

        #not-description-wrapper {
            width: 100%;
            height: calc(100% - 100px);
        }

        #not-description {
            #autocomplete-container {
                width: 100%;
                box-sizing: border-box;
                height: auto;

                border: none;
               // border-top: 5px solid $orange-yellow;
                border-radius: 0px;
            }

            #img-container {
                height: 40vh;
            }

            img {
                //margin-top: 10px;
            }
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
#search-body {
#autocomplete-container {
    background-color: white;
    border-left: 5px solid $orange-yellow;
    box-shadow: 0 4px 9px 0 rgba(0,0,0,.3);
    border-radius: 5px;
    padding: 20px;

    width: 440px;
    height: 110px;

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

        position: absolute;

        background-color: white;
        bottom: 20px;
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
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
        position: absolute;
        top: 100px;
        list-style: none;
        background-color: #eee;
        box-sizing: border-box;
        width: 100%;
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

@media (max-width: 500px) {
    #autocomplete-container {
        top: 0;
        position: relative;
        padding: 10px;
        margin-top: 1px;

        #autocomplete-form {
            h1 {
                font-size: 18px;
            }
        }

        #errorMessage {
            position: relative;
            box-shadow: none;
            bottom: 0;
            left: 0;
            padding: 5px 10px;
            font-size: 15px;
        }

        #input-field {
            padding: 10px;
        }

        #search-results {
            top: 0;
            margin-top: -10px;
            position: relative;
        }
    }
}
}
</style>


<template>
    <div id="search-body">
        <div id="website-description">
            <h2>
                Find concerts, track artists. No hassle.
            </h2>
        </div>

        <div id="not-description-wrapper">
            <div id="not-description">
                <autocomplete
                    title="Search for events from an artist:"
                    placeholder="Artist name"
                    data="static/AllList.json"
                    callback="artistSearch"
                    submitText="Search">
                </autocomplete>

                <div id="img-container">
                    <img src="static/map.svg" alt="">
                </div>
            </div>
        </div>
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
        '$route' () {
            document.getElementById('input-field').focus();
        }
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
    }
}
</script>
