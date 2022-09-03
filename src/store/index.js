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

const bandInTownAPI = "https://rest.bandsintown.com/";
const appID = "?app_id=ConcerTrack v0.0.1";

const apiURL = "https://io.lhax.xyz:5000/"
// const apiURL = "http://localhost:5000/"

let getRequest = function(resource) {
    return new Promise((resolve, reject) => {
        fetch(resource, {
            method: "GET",
            headers: {
                "accept": "application/json",
            }
        }).then(response => {
            return response.json()
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });
};

let postRequest = function(resource, body) {
    return new Promise((resolve, reject) => {
        fetch(resource, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
            },
            body: body,
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });
};

let deleteRequest = function(resource, body) {
    return new Promise((resolve, reject) => {
        fetch(resource, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
            },
            body: body,
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });
}

// Check if we get a response from BIT API for supplied artist name
store.getArtist = function(artist) {
    if (artist.toLowerCase() == "leon grasmeijer") {
        this.$router.push({ path: "/" + "artists/" + "Leon Grasmeijer" })
        return;
    }

    artist = artist.replace("'", "");

    let resource = bandInTownAPI + "artists/" + artist + appID;

    return new Promise((resolve, reject) => {
        getRequest(resource).then(artistInfo => {
            if (artistInfo.name) {
                resolve(artistInfo);
            } else {
                reject("Artist not found");
            }
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
    artist = artist.replace("'", "");

    let resource = bandInTownAPI + "artists/" + artist + "/events" + appID;

    return getRequest(resource);
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
    artist = artist.replace("'", "");

    let resource = bandInTownAPI + "artists/" + artist + appID;

    return getRequest(resource);
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

    let lastFmAPI = "https://ws.audioscrobbler.com/2.0/"
    let apiParams = "?method=artist.getinfo&api_key=a4629fdacfd93267704f599b874a59bf&format=json&artist="

    let resource = lastFmAPI + apiParams + artistName;

    return getRequest(resource);
}


// Save tracked artists to save data usage
store.saved = {
    loaded: false,
    allLocalEvents: [],
    trackedArtists: [],
    countrySet: false,
    artistImages: []
}

// Reset saved tracked artists
store.resetSaved = function() {
    store.saved = {
        loaded: false,
        allLocalEvents: [],
        trackedArtists: [],
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

store.trackArtist = function(artist, trackCode) {
    let resource = apiURL + "tracked/" + trackCode;

    return postRequest(resource, artist);
};

store.removeTrackedArtist = function(artist, trackCode) {
    let resource = apiURL + "tracked/" + trackCode;

    return deleteRequest(resource, artist);
}

store.getTrackedArtists = function(trackCode) {
    let resource = apiURL + "tracked/" + trackCode;

    return getRequest(resource);
};

// Generate a random alphabetical string of length 32 to be used as trackCode
store.makeTrackCode = function() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let trackCode = "";
    for (let i = 0; i < 32; i++) {
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        let next = alphabet[randomIndex];
        trackCode += next;
    }

    return trackCode;
}

store.migrateArtists = async function(newTrackCode, artists) {
    const promises = [];

    for (let artist of artists) {
        let trackArtist = store.trackArtist(artist, newTrackCode);
        promises.push(trackArtist);
    }

    try {
        await Promise.all(promises);
        console.log("Migrating done");
    } catch (errors) {
        console.error("Promise errors", errors);
    }
}
