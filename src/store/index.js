//This file is part of ConcerTrack.
//
//    ConcerTrack is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    ConcerTrack is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with ConcerTrack.  If not, see <http://www.gnu.org/licenses/>.

let store = {}

export default store;

// Check if we get a response from BIT API for supplied artist name
store.doesArtistExist = function(artist) {
    if (artist.toLowerCase() == "leon grasmeijer") {
        this.$router.push({ path: "/" + "artists/" + "Leon Grasmeijer" })
        return;
    }

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
            reject(error);
        })
    })
}

// Save tracked artists to save data usage
store.saved = {
    loaded: false,
    allLocalEvents: [],
    trackedArtists: {"list": []},
    countrySet: false,
    artistImages: []
}

// Reset saved tracked artists
store.resetSaved = function() {
    store.saved = {
        loaded: false,
        allLocalEvents: [],
        trackedArtists: {"list": []},
        countrySet: false,
        artistImages: []
    }
}

// Last loaded artist information
store.lastArtist;
store.lastArtistEvents;
store.lastArtistEventsLocal;
store.lastLastFMdata;

// Artist list
store.autocompleteList = {};
