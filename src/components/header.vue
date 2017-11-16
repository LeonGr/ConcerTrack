<style lang="scss">
$purple-red: #530030;
$red: #7E0030;
$orange-red: #CA283D;
$orange: #F0443A;
$orange-yellow: #FF7E4A;

header {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: 0 0 9px 0 rgba(0,0,0,.3);

    h2 {
        position: absolute;
        left: 20px;
        font-size: 30px;
        color: #333;
    }

    span {
        float: right;
        width: 50px;
        height: 50px;
        //transition: transform 0.5s;

        //&:hover {
            //transform: rotate(180deg);
        //}
    }

    span:nth-of-type(1) {
        background-color: $orange-yellow;
    }
    span:nth-of-type(2) {
        background-color: $orange;
    }
    span:nth-of-type(3) {
        background-color: $orange-red;
    }
    span:nth-of-type(4) {
        background-color: $red;
    }
    span:nth-of-type(5) {
        background-color: $purple-red;
    }
}
</style>

<template>
    <header>
        <h2>ConcerTrack</h2>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </header>
</template>
