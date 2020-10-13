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

#contact {
    position: relative;
    min-height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #contact-body {
        width: 600px;
        height: 400px;
        padding: 30px;
        box-sizing: border-box;
        color: #333;

        h1 {
            font-size: 32px;
            text-decoration: underline;
            text-decoration-color: $orange-yellow;
        }

        p {
            color: #444;
            margin-top: 20px;
        }
    }
}
@media (max-width: 600px) {
    #contact {
        #contact-body {
            h1 {
                font-size: 25px;
            }
        }
    }
}

@media (max-height: 600px) {
    #contact {
        #contact-body {
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
    <div id="contact">
        <div id="contact-body">
            <h1>Contact</h1>

            <p>
                Do you have a question, an idea for improvement or do you just want to thanks us for building this website?
                <br>
                <br>
                You can contact us <a href="mailto:leongrasmeijer+concertrack@gmail.com">here</a>.
            </p>
        </div>
    </div>
</template>

<script>
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
        window.document.title = 'ConcerTrack - Contact'
    },

    mounted: function() {
    },

    methods: {
    }
}
</script>
