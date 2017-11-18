<style lang="scss" scoped>
#output-container {
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;

    #output {
        width: 700px;
        display: flex;

        #left-side {
            height: 100%;
            width: 50%;

            img {
                width: 200px;
                margin: 30px;
                position: absolute;
                left: 100px;
                top: 150px;
            }
        }


        #event-container {
            overflow: auto;
            height: 100%;
            width: 50%;
        }
    }
}
</style>

<template>
    <div id="output-container">
        <pre id="output">
            <div id="left-side">
                <img :src="artistInfo.image_url" alt="">
                <h1>{{ artistInfo.name }}</h1>

{{ artistInfo.upcoming_event_count }} upcoming events:
            </div>

            <div id="event-container">
                <div  v-for="event in events" :key="event.datetime">
{{ event.datetime }}
{{ event.venue.name }}
{{ event.venue.city }}
{{ event.venue.country }}
<a :href="event.ticketUrl">Tickets</a>
                </div>
            </div>
        </pre>
    </div>
</template>

<script>
//TODO: Fix ticket output when there are no offers
export default {
    data: function() {
        return {
            artist: '',
            artistInfo: {},
            events: {},
        }
    },

    watch: {
        '$route' () {
            this.getArtistEvents();
        }
    },

    mounted: function() {
        this.getArtistEvents();
    },

    methods: {
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
                    if(event.offers.length){
                        event.ticketUrl = event.offers[0].url;
                    }

                    let date = new Date(event.datetime);
                    let months = ['Jan','Feb','Mar','Apr','May',
'June','July','Aug','Sept','Oct','Nov','Dec'];
                    event.datetime = `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
                })
            })

            getArtistInfo(this.artist).then(data => {
                this.artistInfo = data;
                console.log(this.artistInfo);
            })
        }
    }
}
</script>
