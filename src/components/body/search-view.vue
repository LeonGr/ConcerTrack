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


}
</style>

<style lang="scss">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

#search-body {
#autocomplete-container {
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
    border-radius: 5px;
    position: relative;
    padding: 20px;

    color: #333;
    width: 420px;

    h1 {
        font-weight: 300;
        font-size: 24px;
    }

    #errorMessage {
        color: $orange;
    }

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #input-field {
        box-sizing: border-box;
        padding: 20px;
        font-size: 18px;
        border: 1px solid $orange-yellow;
        outline: none;
        margin: 10px 0 10px 0;

        box-shadow: 0 1px 9px 0 rgba(0,0,0,.3);
    }

    #search-results {
        border: 1px solid $orange-yellow;
        position: absolute;
        top: 112px;
        list-style: none;
        background-color: white;
        box-sizing: border-box;
        width: inherit;

        li {
            padding: 4px 20px;

            &:hover {
                cursor: pointer;
            }
        }

        .selected {
            background-color: $orange;
        }
    }
}
}
</style>

<template>
    <div id="search-body">
        <autocomplete
            title="Search for events from an artist:"
            placeholder="Artist name">
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
