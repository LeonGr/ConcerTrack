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

<style lang="scss" scoped>
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

#privacy {
    position: relative;
    min-height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #privacy-body {
        width: 600px;
        padding: 30px;
        box-sizing: border-box;
        color: #333;

        h1 {
            font-size: 32px;
            text-decoration: underline;
            text-decoration-color: $orange-yellow;
        }

        h2 {
            margin: 20px 0;
            font-size: 25px;
        }

        p {
            color: #444;
            margin-top: 20px;
        }
    }
}
@media (max-width: 600px) {
    #privacy {
        #privacy-body {
            h1 {
                font-size: 25px;
            }

            h2 {
                font-size: 18px;
            }
        }
    }
}

@media (max-height: 600px) {
    #contact {
        #privacy-body {
            h1 {
                font-size: 25px;
            }

            height: 100%;
        }
    }
}
</style>

<style lang="scss"></style>

<template>
    <div id="privacy">
        <div id="privacy-body">
            <h1>Privacy</h1>

            <p>
            <h2>1 – About ConcerTrack</h2>

            ConcerTrack helps you keep track of upcoming concerts from your favourite artists. We do this by combining data from several websites into an easy to use website.
            We record some of the data to get to know our users better so we can improve our product. We anonimize this data by obfuscating the last part of the IP address so it is not possible to find who visited the website. Example: 192.0.2.0 becomes 192.0.xxx.xxx.

            <h2>2 – Purpose of the processing</h2>

            Matomo is used to analyse the behaviour of the website visitors to identify potential pitfalls; not found pages, search engine indexing issues, which contents are the most appreciated… Once the data is processed (number of visitors reaching a not found pages, viewing only one page…), Matomo is generating reports for website owners to take action, for example changing the layout of the pages, publishing some fresh content… etc.

            Matomo is processing the following personal data:

            IP address, Location of the user, Date and time, Title of the page being viewed, URL of the page being viewed, URL of the page that was viewed prior to the current page, Screen resolution, Link clicks to an outside domain.


            <h2>3 – Recipient of the personal data</h2>

            The personal data received through Matomo are sent to ConcerTrack.

            <h2>4 – Details of transfers to third country and safeguards</h2>

            Matomo data is hosted in the Netherlands.

            <h2>5 – The existence of each of the data subject’s rights</h2>

            If you are processing personal data with Matomo based on legitimate interest:

            As Matomo is processing personal data on legitimate interests, you can exercise the following rights:

                Right of access: you can ask us at any time to access your personal data.
                Right to erasure: you can ask us at any time to delete all the personal data we are processing about you.
                Right to object: you can object to the tracking of your personal data by using the following opt-out feature:

            <br>
            <iframe
                style=""
                src="https://piwik.concertrack.com/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=ffffff&fontColor=333333&fontSize=16px&fontFamily=sans-serif"
             >
            </iframe>

            <h2>6 – The right to lodge a complaint with a supervisory authority</h2>

            If you think that the way we process your personal data with Matomo analytics is infringing the law, you have the right to lodge a complaint with a supervisory authority.

            <h2>7 – Whether the provision of personal data is part of a statutory or contractual requirement; or obligation and possible consequences of failing to provide the personal data</h2>

            If you wish us to not process any personal data with Matomo, you can opt-out from it at any time. There will be no consequences at all regarding the use of our website.

            <h2>8 – The existence of automated decision-making, including profiling and information about how decisions are made, the significance and the consequences</h2>

            Matomo is not doing any profiling.
            </p>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'

export default {
    data: function() {
        console.log('data')
        return {
            // Init local variables
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
            console.log('route')
        }
    },

    created: function() {
        window.document.title = 'ConcerTrack - Privacy'
    },

    mounted: function() {
    },

    methods: {
    }
}
</script>
