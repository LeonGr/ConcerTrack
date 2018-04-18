import Vue from 'vue'
import Router from 'vue-router'

import ArtistView from '@/components/body/artist-view.vue'
import TrackedView from '@/components/body/tracked-view.vue'
import SearchView from '@/components/body/search-view.vue'
import EasterEgg from '@/components/body/easter-egg.vue'
import ImportView from '@/components/body/import-view.vue'
import ContactView from '@/components/body/contact-view.vue'
import DisclaimerView from '@/components/body/disclaimer-view.vue'
import FAQView from '@/components/body/faq-view.vue'
import PrivacyView from '@/components/body/privacy-view.vue'
import NewHereView from '@/components/body/newhere-view.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/newhere', component: NewHereView },
        { path: '/privacy', component: PrivacyView },
        { path: '/faq', component: FAQView },
        { path: '/contact', component: ContactView },
        { path: '/disclaimer', component: DisclaimerView },
        { path: '/import/:importCode', component: ImportView },
        { path: '/tracked', component: TrackedView },
        { path: '/artists/Leon Grasmeijer', component: EasterEgg },
        { path: '/artists/Leon%20Grasmeijer', redirect: '/artists/Leon Grasmeijer' },
        { path: '/artists/:artist', component: ArtistView },
        { path: '/', component: SearchView },
        { path: '*', redirect: '/' } // Any unknown url locations redirect to landing page
    ]
})
