"use strict";

console.log("Initialize");

var apiURL = "https://rest.bandsintown.com/";
var apiExtension = "?app_id='ConcerTrack v0.0.1'";

var output = document.getElementById("output");

var getEvents = function getEvents() {
    return new Promise(function (resolve, reject) {
        fetch(apiURL + "artists/pinegrove/events" + apiExtension, {
            method: 'GET',
            headers: {
                'accept': "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            resolve(response);
        }).catch(function (error) {
            console.log(error);
        });
    });
};

var getEventsHere = function getEventsHere() {
    getEvents().then(function (response) {
        response.forEach(function (event) {
            if (event.venue.country == "Netherlands") {
                console.log(event);
                output.innerHTML += JSON.stringify(event, undefined, 4);
            }
        });
    });
};

getEventsHere();