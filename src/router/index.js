import Vue from 'vue'
import Router from 'vue-router'

import ArtistView from '@/components/body/artist-view.vue'
import SearchView from '@/components/body/search-view.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/artists/:artist', component: ArtistView },
        { path: '/', component: SearchView },
        { path: '*', redirect: '/' }
    ]
})
