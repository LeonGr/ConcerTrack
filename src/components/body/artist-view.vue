<style lang="sass">

</style>

<template>
    <pre id="output">
		Artist: {{ artist }}

        <div v-for="event in events" :key="event.datetime">
            {{ event.datetime }}
            {{ event.venue.name }}
            {{ event.venue.city }}
            {{ event.venue.country }}
            <a :href="event.ticketUrl">Tickets</a>
        </div>
    </pre>
</template>

<script>
//TODO: Fix ticket output when there are no offers
export default {
    data: function() {
        return {
            artist: '',
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
            const output = document.getElementById("output");

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
					console.log(event);
                    if(event.offers.length){
                        event.ticketUrl = event.offers[0].url;
                    }

                    let date = new Date(event.datetime);
                    let months = ['Jan','Feb','Mar','Apr','May',
'June','July','Aug','Sept','Oct','Nov','Dec'];
                    event.datetime = `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
                })
            })


            let getEventsHere = () => {
                getEvents().then(response => {
//                    response.forEach(event => {
//                        if(event.venue.country == "Netherlands") {
//                            console.log(event);
//                            output.innerHTML += JSON.stringify(event, undefined, 4);
//                        }
//                    })
                })
            }

//            getEventsHere();
        }
    }
}
</script>
