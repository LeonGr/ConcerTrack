<!--This file is part of ConcerTrack.

    ConcerTrack is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ConcerTrack is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with ConcerTrack.  If not, see <http://www.gnu.org/licenses/>.
-->

<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

#error-container {
    position: relative;
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    font-size: 18px;

    flex-direction: column;

    #error-message-container {
        width: 600px;
        height: 300px;

        h1 {
            font-size: 30px;
            color: #333;
        }

        p {
            margin-top: 20px;
            color: #444;
        }
    }

    a {
        color: $orange-yellow;
        cursor: pointer;
        position: relative;
        width: 100%;
        text-align: center;
        display: block;
        top: 40px;
        text-decoration: underline;
    }

    @media (max-width: 700px) {
        #error-message-container {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;

            overflow-wrap: break-word;
            word-wrap: break-word;

        }
    }
}

</style>

<style lang="scss"></style>

<template>
    <div id="error-container">
        <div id="error-message-container">
            <h1 v-if="errorMessage">Whoopsie daisy!</h1>

            <p v-html="errorMessage"></p>

            <a v-on:click="goBack">Go back to previous page</a>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // Init local variables
            errorMessage: '',
            trackedArtists: {"list": []}
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            console.log('route')
            window.location.reload()
        }
    },

    mounted: function() {
        this.loadImport();
    },

    methods: {
        loadImport: function() {
            let importCode = this.$route.params.importCode;

            // let plain = atob(this.importCode);
            // try {
            //     JSON.parse(plain);
            // } catch (e) {
            //     this.errorMessage = "Invalid import code. Are you sure you copied the correct URL? <br> It should look something like this: <a href='" + window.location.origin + "/import/eyJsaXN0IjpbInJpY2sgYXN0bGV5Il19'>" + window.location.origin + "/import/eyJsaXN0IjpbInJpY2sgYXN0bGV5Il19</a>"
            //     return;
            // }

            // localStorage.setItem("Tracked", plain);

            localStorage.setItem("trackCode", importCode);

            this.$router.push({ path: "/tracked" });
            alert("Import Successful");

            location.reload();
        },

        goBack: function() {
            console.log(this.$router.back())
        }
    }
}
</script>
