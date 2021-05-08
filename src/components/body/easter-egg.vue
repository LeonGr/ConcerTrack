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
#output-container {
    min-height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222;
    position: relative;

    #output {
        #left-side {
            margin: 0 auto;
            margin-bottom: 100px;
            width: 600px;

            h1 {
                margin-top: 50px;
            }

            img {
                width: 50%;
                padding: 0 30px 0 30px;
                box-sizing: border-box;
                margin-top: 50px;
                left: 50px;
                top: 50px;
            }

            p {
                margin-top: 20px;

                a {
                    color: #17A1FF;
                }
            }

            #info-container {
                float: right;
                width: 50%;

                .link-icon {
                    color: inherit;

                    i {
                        margin: 20px 3px 0 0;
                        font-size: 25px;
                    }
                }
            }
        }
    }

    @media (max-width: 700px) {
        #output {
            #left-side {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    padding: 0px;
                    width: 80%;
                }

                #info-container {
                    width: 80%;
                    float: none;
                }
            }
        }
    }
}
</style>

<template>
    <div id="output-container">
        <div id="output">
            <div id="left-side">
                <!--If we get an image from lastFM show it. Otherwise use the one from BIT-->
                <img src="static/lg.png" alt="">

                <div id="info-container">
                    <h1>Leon Grasmeijer</h1>

                    <a href="https://github.com/LeonGr" class="link-icon">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>

                    <a href="mailto:ConcerTrack@leongr.nl" class="link-icon">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>

                    <a href="https://codepen.io/LeonGr/" class="link-icon">
                        <i class="fa fa-codepen" aria-hidden="true"></i>
                    </a>

                    <p>
                        Leon Grasmeijer is the developer of this website,
                        he is studying Computer Science & Engineering at the Eindhoven University of Technology
                        and loves mechanical keyboards and pizza. Read more on his <a href="http://leongr.nl">website</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
        }
    },

    watch: {
    },

    created: function() {
        window.document.title = 'ConcerTrack - The Creator'
    },

    mounted: function() {
    },

    methods: {
    }
}
</script>
