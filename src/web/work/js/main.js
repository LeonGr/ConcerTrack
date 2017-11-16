console.log("Initialize");

const apiURL = "https://rest.bandsintown.com/"
const apiExtension = "?app_id='ConcerTrack v0.0.1'"

const output = document.getElementById("output");

let getEvents = () => {
    return new Promise((resolve, reject) => {
        fetch(apiURL + "artists/pinegrove/events" + apiExtension, {
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

let getEventsHere = () => {
    getEvents().then(response => {
        response.forEach(event => {
            if(event.venue.country == "Netherlands") {
                console.log(event);
                output.innerHTML = JSON.stringify(event, undefined, 2);
            }
        })
    })
}

getEventsHere();
