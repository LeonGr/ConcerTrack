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
    font-family: Montserrat, Verdana, Helvetica, Arial;
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
    data () {
        return {}
    },

    components: {
        SiteHeader,
        SiteBody,
        SiteFooter
    },

//    watch: {
//        // If the route changes (user types other artist into url) we renew the information
//        '$route' () {
//            function allDescendants (node) {
//                for (var i = 0; i < node.childNodes.length; i++) {
//                    var child = node.childNodes[i];
//                    allDescendants(child);
//                    if (child.classList) {
//                        child.classList.add('dark')
//                    }
//                }
//            }
//
//            allDescendants(document.getElementById('app'))
//        }
//    },
//
//    mounted: function() {
//        function allDescendants (node) {
//            for (var i = 0; i < node.childNodes.length; i++) {
//                var child = node.childNodes[i];
//                allDescendants(child);
//                if (child.classList) {
//                    child.classList.add('dark')
//                }
//            }
//        }
//
//        allDescendants(document.getElementById('app'))
//    }
}
</script>
