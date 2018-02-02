<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

#error-container {
    position: absolute;
    top: 50px;
    height: 80%;
    color: $orange-red;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    text-align: center;

    font-size: 18px;

    flex-direction: column;

    a {
        margin-top: 20px;
        color: $orange-yellow;
        cursor: pointer;
        text-decoration: underline;
    }
}

</style>

<style lang="scss"></style>

<template>
    <div id="error-container">
        <p v-html="errorMessage"></p>

        <a v-on:click="goBack">Go back to previous page</a>
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
                this.errorMessage = "Invalid import code. Are you sure you copied the correct URL? <br> It should look something like this: http://localhost:8080/#/import/eyJsaXN0IjpbInJpY2sgYXN0bGV5Il19"
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
