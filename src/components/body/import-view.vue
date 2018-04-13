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
            <h1>Whoopsie daisy!</h1>

            <p v-html="errorMessage"></p>

            <a v-on:click="goBack">Go back to previous page</a>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'

export default {
    data: function() {
        console.log('data')
        return {
            // Init local variables
            errorMessage: '',
            importCode: '',
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
            this.importCode = this.$route.params.importCode;
            let plain = atob(this.importCode);
            try {
                JSON.parse(plain);
            } catch (e) {
                this.errorMessage = "Invalid import code. Are you sure you copied the correct URL? <br> It should look something like this: <a href='" + window.location.origin + "/import/eyJsaXN0IjpbInJpY2sgYXN0bGV5Il19'>" + window.location.origin + "/import/eyJsaXN0IjpbInJpY2sgYXN0bGV5Il19</a>"
                return;
            }

            localStorage.setItem("Tracked", plain);
            this.$router.push({ path: "/tracked" })
            alert("Import Successful")
        },

        goBack: function() {
            console.log(this.$router.back())
        }
    }
}
</script>
