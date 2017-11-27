<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

// change colour of input placeholder text
*::-webkit-input-placeholder {
    color: #ccc;
}
*:-moz-placeholder {
    /* FF 4-18 */
    color: #ccc;
}
*::-moz-placeholder {
    /* FF 19+ */
    color: #ccc;
}
*:-ms-input-placeholder {
    /* IE 10+ */
    color: #ccc;
}

#search-body {
    position: absolute;
    top: 50px;
    width: 100%;
    min-height: calc(100% - 100px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    background-color: #F54;

    img {
        width: 400px;
    }

    #autocomplete-container {
        width: 480px;
        height: 200px;
    }
}
</style>

<template>
    <div id="search-body">
        <autocomplete title="Search for events from an artist:">
        </autocomplete>

        <img src="static/map.svg" alt="">
    </div>
</template>

<script>
export default {
    data: function() {
        // Declare local data variables
        return {
        }
    },

    watch: {
    },

    mounted: function() {
    },

    methods: {
    }
}
</script>
