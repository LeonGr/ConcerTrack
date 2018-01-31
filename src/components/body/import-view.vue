<style lang="scss" scoped></style>

<style lang="scss"></style>

<template></template>

<script>
import store from '@/store/index.js'

export default {
    data: function() {
        console.log('data')
        return {
            // Init local variables
            importCode: '',
            trackedArtists: {"list": []}
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            console.log('route')
        }
    },

    mounted: function() {
        this.loadImport();
    },

    methods: {
        loadImport: function() {
            this.importCode = this.$route.params.importCode;
            localStorage.setItem("Tracked", atob(this.importCode));
            this.$router.push({ path: "/tracked" })
            alert("Import Successful")
        }
    }
}
</script>
