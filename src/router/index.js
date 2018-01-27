import Vue from 'vue'
import Router from 'vue-router'

import ArtistView from '@/components/body/artist-view.vue'
import TrackedView from '@/components/body/tracked-view.vue'
import SearchView from '@/components/body/search-view.vue'
import EasterEgg from '@/components/body/easter-egg.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/tracked', component: TrackedView },
        { path: '/artists/Leon Grasmeijer', component: EasterEgg },
        { path: '/artists/:artist', component: ArtistView },
        { path: '/', component: SearchView },
        { path: '*', redirect: '/' }
    ]
})
