<style lang="sass">

</style>

<template>
    <pre id="output">
Artist: {{ artist }}
    </pre>
</template>

<script>
export default {
    data: function() {
        return {
            artist: ''
        }
    },

    mounted: function() {
        this.artist = this.$route.params.artist
    }
}
</script>
