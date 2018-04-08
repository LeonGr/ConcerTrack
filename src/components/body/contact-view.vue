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
                You can contact us at <a href="mailto:contact@ConcerTrack.com">contact@ConcerTrack.com</a>.
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
        window.document.title = 'ConcerTrack - Contact'
    },

    mounted: function() {
    },

    methods: {
    }
}
</script>
