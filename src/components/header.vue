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
    //position: absolute;
    position: relative;
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

        @media (max-width: 440px) {
            h2 {
                font-size: 28px;
                font-size: 7vw;
            }
        }

        @media (max-width: 420px) {
            h2 {
                font-size: 6vw;
            }
        }
    }


    .square {
        float: right;
        width: 50px;
        height: 50px;
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


    #tracked-link {
        display: flex;
        align-items: center;
        height: 50px;
        text-decoration: none;
        margin-right: 5px;

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
}

@media (max-width: 800px) {
    header {
        #tracked-link {
            width: 70px;
            text-align: center;
        }
    }
}

@media (max-width: 650px) {
    header {
        top: 5px;

        .square {
            height: 5px;
            position: absolute;
            top: -5px;
            width: 20%;
        }

        @for $i from 1 through 5 {
            .square:nth-of-type(#{$i}) {
                left: ($i - 1) * 20%;
            }
        }
    }
}

@media (max-width: 340px) {
    header {
        #header-title-link {
            left: 10px;
        }

        #tracked-link {
            p {
                font-size: 14px;
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
#search-tracked-view {
    position: relative;
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

#search-icon {
    display: none;
}

@media (max-width: 1000px) {
    #search-tracked-view {
        display: none;
    }

    #search-icon {
        display: block;
        padding: 10px;
        color: #333;
        cursor: pointer;
        transition: color 0.3s;
        user-select: none;

        &:hover {
            color: #777;
        }
    }
}

#search-mobile {
    position: absolute;
    height: 50px;
    z-index: 5;
    top: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 5px solid $orange-yellow;
    padding-bottom: 5px;

    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);

    background-color: white;

    #search-mobile-close {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        i {
            position: relative;
            top: 2px;
            font-size: 25px;
        }
    }

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
            width: calc(100vw - 50px);
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
            width: calc(100vw - 50px);

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

        <router-link :to="'/tracked'" id="tracked-link">
            <p>Tracked Artists</p>
        </router-link>

        <div id="search-tracked-view" v-if="!hideSearchElements">
            <autocomplete
                title=""
                placeholder="Search for an artist"
                data="static/AllList.json"
                callback="artistSearch"
                submitText="<i class='fa fa-search' aria-hidden='true'></i>">
            </autocomplete>
        </div>

        <div id="search-mobile" v-if="showSearchMobile">
            <div id="search-mobile-close" v-on:click="showSearch">
                <i class="fa fa-times"></i>
            </div>

            <autocomplete
                title=""
                placeholder="Search for an artist"
                data="static/AllList.json"
                callback="artistSearch"
                submitText="<i class='fa fa-search' aria-hidden='true'></i>">
            </autocomplete>
        </div>


        <div id="search-icon" v-if="!hideSearchElements" v-on:click="showSearch">
            Search
            <i class="fa fa-search"></i>
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
    data () {
        return {
            hideSearchElements: false,
            showSearchMobile: false
        }
    },

    mounted () {
        this.hideOrShowSearchElements();
    },

    watch: {
        '$route' () {
            this.hideOrShowSearchElements();
        }
    },

    methods: {
        showSearch: function(close) {
            this.showSearchMobile = this.showSearchMobile ? false : true;

            if (this.showSearchMobile) {
                document.getElementById('input-field').focus();
            }
        },

        hideOrShowSearchElements: function() {
            let path = this.$route.path;
            path = path.split("/").pop()
            if(!path) {
                this.hideSearchElements = true;
            } else {
                this.hideSearchElements = false;
            }
        },

        callBackForm: function(callback, value) {
            if (callback == "artistSearch") {
                let artist = value;

                // Check if we get a response from BIT API before we redirect
                store.doesArtistExist(artist).then(data => {
                    this.showSearchMobile = false;

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
                        }
                    }
                })
            }
        }
    }
}
</script>
