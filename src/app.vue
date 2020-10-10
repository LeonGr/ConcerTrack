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
<style lang="scss">
// Declare main colourscheme colours
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

html, body, * {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-family:sans-serif, Verdana, Helvetica, Arial;
}

html {
    width: 100%;
    height: 100%;
}

#app {
    #site-header {
        height: 50px;
    }

    #site-body {
        height: calc(100% - 100px);
    }

    #site-footer {
        height: 50px;
    }
}

// Transition stuff
//.fade-enter-active, .fade-leave-active {
//  transition: opacity .5s ease;
//}
//.fade-enter, .fade-leave-active {
//  opacity: 0
//}
//.child-view {
//  position: absolute;
//  transition: all .5s cubic-bezier(.55,0,.1,1);
//}
//.slide-left-enter, .slide-right-leave-active {
//  opacity: 0;
//  -webkit-transform: translate(30px, 0);
//  transform: translate(30px, 0);
//}
//.slide-left-leave-active, .slide-right-enter {
//  opacity: 0;
//  -webkit-transform: translate(-30px, 0);
//  transform: translate(-30px, 0);
//}
</style>

<template>

<div id="app">
    <site-header></site-header>

    <site-body>
        <router-view></router-view>
    </site-body>

    <site-footer></site-footer>
</div>
</template>

<script>
import store from './store'

import SiteHeader from './components/header.vue'
import SiteBody from './components/body.vue'
import SiteFooter from './components/footer.vue'

export default {
    data() {
        return {}
    },

    components: {
        SiteHeader,
        SiteBody,
        SiteFooter
    },
}
</script>
