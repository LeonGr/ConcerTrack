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

    artist = artist.replace("'", "");

    const apiURL = "https://rest.bandsintown.com/"
    const apiExtension = "?app_id=ConcerTrack v0.0.1"
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

/* Data:
Array containing all events:

artist_id: artist ID
datetime: ISO format date of event
id: event ID
lineup: Artists present at event
offers: array of ticket info
    status: if tickets are available
    type: what type of offer (seems to be tickets always)
    url: link to tickets redirect through BIT
on_sale_datetime: when tickets go on sale
ticketUrl: another url to tickets
venue: object with information about venue
    city: the city
    country: the country
    latitude: the latitude
    longitude: the longitude
    name: name of the venue
    region: state or province (or some random number)
*/

store.getEvents = (artist) => {
    const apiURL = "https://rest.bandsintown.com/"
    const apiExtension = "?app_id=ConcerTrack v0.0.1"

    artist = artist.replace("'", "");

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

/* Data:
facebook_page_url: url to facebook page
id: artist ID
image_url: url to image of artist
name: artist name
thumb_url: url to thumbnail image
tracker_count: number of BIT trackers
upcoming_event_count: number of upcoming events
url: link to BIT page of artist
*/
store.getArtistInfo = (artist) => {
    const apiURL = "https://rest.bandsintown.com/"
    const apiExtension = "?app_id=ConcerTrack v0.0.1"

    artist = artist.replace("'", "");

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


/* Data:
bio: short description of artist
image: url to artist image
name: artist name
ontour: 1 if artist is on tour otherwise 0
similar: object with similar artists
    artists: array of artists
        image: image of similar artist
        name: name of similar artist
        url: url to last fm page of similar artist
stats: object with lastfm stats
    listeners: number of listeners
    playcount: number of plays from listeners
    streamable: 1 if you can stream from lastfm 0 otherwise
    tags: object with array of tags
        tags: array of tags
*/
store.getLastFMData = (artist) => {
    // Encode so lastfm doesn't get trouble with names with for example &
    let artistName = encodeURIComponent(artist);

    let apiUrl = "https://ws.audioscrobbler.com/2.0/"
    let apiParams = "?method=artist.getinfo&api_key=a4629fdacfd93267704f599b874a59bf&format=json&artist="

    return new Promise((resolve, reject) => {
        fetch(apiUrl + apiParams + artistName, {
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
