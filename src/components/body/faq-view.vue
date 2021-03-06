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

#faq {
    position: relative;
    min-height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;

    #faq-body {
        width: 600px;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;

        h1 {
            text-decoration: underline;
            text-decoration-color: $orange-yellow;
            color: #333;
            font-size: 32px;
        }

        .question {
            margin: 40px 0;

            h2 {
                color: #333;
                i {
                    font-weight: 200;
                }
            }

            p {
                margin-top: 10px;
                line-height: 1.6;
                color: #555;
            }
        }
    }
}

@media (max-width: 600px) {
    #faq {
        #faq-body {
            h1 {
                font-size: 25px;
            }

            .question {
                h2 {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>

<style lang="scss"></style>

<template>
    <div id="faq">
        <div id="faq-body">
            <h1>Frequently Asked Questions:</h1>

            <div class="question">
                <h2>Why does <i>artist_name</i> not show up in the autocomplete list?</h2>
                <p>We are trying to get as many artists as possible in our autocomplete function. But sometimes the artist just does not exist in any of the lists we are using. This does not always mean that we don't have info on the artist! You can open an issue ticket at <a href="https://github.com/LeonGr/ConcerTrack/issues">https://github.com/LeonGr/ConcerTrack/issues</a> and we'll gladly add them to our list.</p>
            </div>
            <div class="question">
                <h2>Why does <i>artist_name</i> show up in the autocomplete list but gives an "artist not found" error?</h2>
                <p>We use data from other services to retrieve the information we display on this site. However, these services do not provide a full list of available artists. Therefore our autocomplete list does not always correspond to the available artists. More specifically: we are using the <a href="https://bandsintown.com">bandsintown</a> and <a href="https://last.fm">last.fm</a> APIs to get our information. So if they don't have information about the artist, we unfortunately can't provide you with information either.</p>
            </div>
            <div class="question">
                <h2>This site sucks!</h2>
                <p>That's not a question. However, we are always happy to hear suggestions on how to improve our site! You can open an issue ticket at <a href="https://github.com/LeonGr/ConcerTrack/issues">https://github.com/LeonGr/ConcerTrack/issues</a>.</p>
            </div>
            <div class="question">
                <h2>More questions?</h2>
                <p>We can help! Just send us an email and we will try to get back to you as soon as possible: <a href="mailto:ConcerTrack@leongr.nl">click here</a>.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // Init local variables
        }
    },

    watch: {
        // If the route changes (user types other artist into url) we renew the information
        '$route' () {
        }
    },

    created: function() {
        window.document.title = 'ConcerTrack - Frequently Asked Questions'
    },

    mounted: function() {
    },

    methods: {
    }
}
</script>
