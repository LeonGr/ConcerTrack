<style lang="sass">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

html, body, * {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-family: Montserrat, Verdana, Helvetica, Arial;
}

html {
    width: 100%;
    height: 100%;
}

#app {

}
</style>

<template>

<div id="app">
    <site-header></site-header>

    <site-body>
        <router-view></router-view>
    </site-body>
</div>

</template>

<script>
import store from './store'

import SiteHeader from './components/header.vue'
import SiteBody from './components/body.vue'

export default {
    data () {
        return {}
    },

components: {
    SiteHeader,
    SiteBody
    }
}
</script>
