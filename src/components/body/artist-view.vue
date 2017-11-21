<style lang="scss" scoped>
#output-container {
    height: calc(100vh - 100px);
    width: 100%;
    //display: flex;
    justify-content: center;
    color: #222;

    #output {
        //width: 700px;
        width: 100%;
        height: 100%;
        display: flex;

        #left-side {
            height: 100%;
            width: 50%;

            h1 {
                margin-top: 50px;
                //line-height: 0.7
            }

            img {
                width: 50%;
                //margin: 30px;
                padding: 0 30px 0 30px;
                box-sizing: border-box;
                margin-top: 50px;
                //position: absolute;
                left: 50px;
                top: 50px;
            }

            p {
                margin-top: 20px;
            }

            #info-container {
                float: right;
                width: 50%;

                a {
                    color: inherit;

                    i {
                        margin: 20px 3px 0 0;
                        font-size: 25px;
                    }
                }
            }
        }


        #event-container {
            overflow: auto;
            height: 100%;
            width: 50%;

            p {
                margin-left: 20px;
                margin-top: 50px;
                font-weight: bold;
            }

            #event-list {
                .event-div {
                    margin: 20px;
                }
            }
        }
    }
}
</style>

<template>
    <div id="output-container">
        <div id="output">
            <div id="left-side">
                <!--<img :src="artistInfo.image_url" alt="">-->
                <img :src="imageUrl" alt="" v-if="imageUrl">
                <img :src="artistInfo.image_url" alt="" v-else>
                <div id="info-container">
                    <h1>{{ artistInfo.name }}</h1>


                    <a :href="artistInfo.facebook_page_url" v-if="artistInfo.facebook_page_url">
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    </a>

                    <a :href="bandcampUrl" v-if="bandcampUrl">
                        <i class="fa fa-bandcamp" aria-hidden="true"></i>
                    </a>


                    <a :href="lastFMData.url" v-if="lastFMData.url">
                        <i class="fa fa-lastfm-square" aria-hidden="true"></i>
                    </a>

                    <p v-if="lastFMData" v-html="artistBio">
                        {{ artistBio }}
                    </p>
                </div>
            </div>

            <div id="event-container">
                <p v-if="onTour">
                    Currently on tour!
                    <br>
                    {{ artistInfo.upcoming_event_count }} upcoming events:
                </p>

                <div id="event-list">
                    <div  v-for="event in events" :key="event.datetime" class="event-div">
                        {{ event.datetime }}
                        {{ event.venue.name }}
                        {{ event.venue.city }}
                        {{ event.venue.country }}
                        <a v-if="event.ticketUrl" :href="event.ticketUrl">Tickets</a>
                        <a v-else :href="event.searchUrl">Search for tickets online</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//TODO: find missing spaces in artist name
export default {
    data: function() {
        return {
            artist: '',
            artistInfo: {},
            bandcampUrl: '',
            events: {},
            lastFMData: {},
            artistBio: '',
            onTour: false,
            imageUrl: ''
        }
    },

    watch: {
        '$route' () {
            this.getAllInformation();
        }
    },

    mounted: function() {
        this.getAllInformation();
    },

    methods: {
        getAllInformation: function() {
            this.getArtistEvents();
            this.checkBandcampAccount();
            this.getLastFMInfo();
        },

        getArtistEvents: function() {
            this.artist = this.$route.params.artist

            const apiURL = "https://rest.bandsintown.com/"
            const apiExtension = "?app_id='ConcerTrack v0.0.1'"

            let getArtistInfo = (artist) => {
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

            let getEvents = (artist) => {
                return new Promise((resolve, reject) => {
                    fetch(apiURL + "artists/" + artist + "/events" + apiExtension, {
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

            getEvents(this.artist).then(data => {
                this.events = data;
                this.events.forEach((event) => {
                    let date = new Date(event.datetime);
                    let months = ["Jan","Feb","Mar","Apr","May", "June","July","Aug","Sept","Oct","Nov","Dec"];
                    event.datetime = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

                    if(event.offers.length){
                        event.ticketUrl = event.offers[0].url;
                    } else {
                        event.searchUrl = "https://duckduckgo.com/?q=" + this.artistInfo.name + " " + event.datetime;
                    }
                })
            })

            getArtistInfo(this.artist).then(data => {
                this.artistInfo = data;
                console.log(this.artistInfo);
            })
        },

        checkBandcampAccount: function() {
            let checkBandcampUrl = () => {
                return new Promise((resolve, reject) => {
                    fetch("https://" + this.artist.toLowerCase() + ".bandcamp.com", {
                        method: 'GET',
                        mode : 'no-cors',
                    }).then(response => {
                        return response
                    }).then(response => {
                        resolve(response);
                    }).catch(error => {
                        console.log(error);
                    })
                })
            }

            //this.bandcampUrl = "https://" + this.artist.toLowerCase() + ".bandcamp.com";
            this.bandcampUrl = "https://bandcamp.com/search?q=" + this.artist.toLowerCase();
        },

        getLastFMInfo: function() {
            let getData = () => {
				let apiUrl = "https://ws.audioscrobbler.com/2.0/"
				let apiParams = "?method=artist.getinfo&api_key=a4629fdacfd93267704f599b874a59bf&format=json&artist="
                return new Promise((resolve, reject) => {
                    fetch(apiUrl + apiParams + this.artist, {
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

            getData().then(data => {
                if (data.error){
                    throw data.message;
                    return;
                }
                this.lastFMData = data.artist;
                this.artistBio = data.artist.bio.summary;
                this.onTour = data.artist.ontour == 1 ? true : false;
                this.imageUrl = data.artist.image[data.artist.image.length - 1]["#text"];
                console.log(data.artist);
            })
        }
    }
}
</script>
