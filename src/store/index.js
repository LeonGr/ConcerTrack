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

store.saved = {
    loaded: false,
    allLocalEvents: [],
    trackedArtists: {"list": []},
    countrySet: false,
    artistImages: []
}
