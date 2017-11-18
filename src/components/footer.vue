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
    position: absolute;
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
}
</style>

<template>
    <footer>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </footer>
</template>
