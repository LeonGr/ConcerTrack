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

footer {
    width: 100%;
    height: 50px;
    box-shadow: 0 0 9px 0 rgba(0,0,0,.3);
    position: relative;
    //position: absolute;
    bottom: 0;
    background-color: white;

    span {
        float: left;
        width: 50px;
        height: 50px;
    }

    span:nth-of-type(1) {
        background-color: $purple-red;
    }
    span:nth-of-type(2) {
        background-color: $red;
    }
    span:nth-of-type(3) {
        background-color: $orange-red;
    }
    span:nth-of-type(4) {
        background-color: $orange;
    }
    span:nth-of-type(5) {
        background-color: $orange-yellow;
    }

    #info-wrapper {
        display: flex;
        align-items: center;
        height: 100%;

        #footer-disclaimer {
            padding-left: 10px;
            display: block;
            width: 40%;
            box-sizing: border-box;
        }

        #links {
            width: 60%;
        }
    }


    .footer-link {
        color: $orange-yellow;
        float: right;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
}

@media (max-width: 710px) {
    footer {
        bottom: 5px;

        .square {
            height: 5px;
            position: absolute;
            bottom: -5px;
            width: 20%;
        }


        @for $i from 1 through 5 {
            .square:nth-of-type(#{$i}) {
                left: ($i - 1) * 20%;
            }
        }
    }
}

@media (max-width: 460px) {
    footer {
        #info-wrapper {
            flex-direction: column;

            #footer-disclaimer, #links {
                width: 100%;
                text-align: center;
            }

            #links {
                display: flex;
                justify-content: center;
                flex-direction: row-reverse;
            }
        }
    }
}
</style>

<template>
    <footer>
        <!--spans for coloured squares-->
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>


        <div id="info-wrapper">
             <p id="footer-disclaimer">
                Made possible by <a href="https://bandsintown.com">Bandsintown</a>.<br>
            </p>

            <div id="links">
                <router-link :to="'/contact'" class="footer-link">
                    <p>Contact</p>
                </router-link>
                <router-link :to="'/faq'" class="footer-link">
                    <p>FAQ</p>
                </router-link>
                <router-link :to="'/disclaimer'" class="footer-link">
                    <p>Disclaimer</p>
                </router-link>
                <router-link :to="'/privacy'" class="footer-link">
                    <p>Privacy</p>
                </router-link>
            </div>
        </div>
   </footer>
</template>
