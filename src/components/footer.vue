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

@media (max-width: 650px) {
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
</style>

<template>
    <footer>
        <!--spans for coloured squares-->
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>
        <span class="square"></span>

        <!--<p>-->
        <!--Concert information from <a href="bandsintown.com">bandsintown</a>.<br>Huge thanks to them! Visit their site for more information.-->
        <!--</p>-->

        <router-link :to="'/contact'" class="footer-link">
            <p>Contact</p>
        </router-link>
        <router-link :to="'/faq'" class="footer-link">
            <p>FAQ</p>
        </router-link>
        <router-link :to="'/disclaimer'" class="footer-link">
            <p>Disclaimer</p>
        </router-link>
    </footer>
</template>
