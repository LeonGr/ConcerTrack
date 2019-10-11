//This file is part of ConcerTrack.
//
//    ConcerTrack is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    ConcerTrack is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with ConcerTrack.  If not, see <http://www.gnu.org/licenses/>.
//

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
    mode: 'hash',
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
