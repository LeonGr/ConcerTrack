let Vue = require('vue')
let App = require('./app.vue');
let VueRouter = require('vue-router')

Vue.use(VueRouter);

Vue.config.debug = true;

import ArtistView from './components/body/artist-view.vue'
import SearchView from './components/body/search-view.vue'

let router = new VueRouter({
    history: true,
    routes: [
        { path: '/artists/:artist', component: ArtistView },
        { path: '/', component: SearchView },
        { path: '*', redirect: '/' }
    ]
})
