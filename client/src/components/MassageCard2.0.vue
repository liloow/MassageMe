<style lang="css" scoped>

.flipper,
.card {
    cursor: pointer;
    height: 390px;
    margin: 0 auto 10px;
}

.back .button {
    padding: 10px 20px;
}

.is-centered-ver-hor {
    height: 100px;
    width: 50%;
    padding: 20px;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}


/* 3D FLIP CARD */

.flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
}

.flipper.flip {
    transform: rotateY(180deg);
}

.front,
.back {
    margin: 0;
    display: block;
   
    position: relative;
    top: 0;
    left: 0;
    backface-visibility: hidden;
}

.front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
}

.back {
    transform: rotateY(180deg);
}


/* STYLING SCROLLBAR */

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #9e9e9e;
}

@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);
.snip1336 {
    font-family: 'Roboto', Arial, sans-serif;
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 1%;
    min-width: 230px;
    max-width: 315px;
    width: 100%;
    color: #ffffff;
    text-align: left;
    line-height: 1.4em;
    background-color: #141414;
}

.snip1336 * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
}

 img {
    max-width: 100%;
    vertical-align: top;
    opacity: 0.85;
}

.snip1336 figcaption {
    width: 100%;
    background-color: #141414;
    padding: 25px;
    position: relative;
}

.snip1336 figcaption:before {
    position: relative;
    content: '';
    bottom: 100%;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 55px 0 0 400px;
    border-color: transparent transparent transparent #141414;
}

.snip1336 figcaption a {
    padding: 5px;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-size: 0.7em;
    text-transform: uppercase;
    margin: 10px 0;
    display: inline-block;
    opacity: 0.65;
    width: 47%;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1px;
}

.snip1336 figcaption a:hover {
    opacity: 1;
}

.snip1336 .profile {
    border-radius: 50%;
    position: absolute;
    bottom: 100%;
    left: 25px;
    z-index: 1;
    max-width: 90px;
    opacity: 1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.snip1336 .follow {
    margin-right: 4%;
    border-color: #2980b9;
    color: #2980b9;
}

.snip1336 h2 {
    margin: 0 0 5px;
    font-weight: 300;
}

.snip1336 h2 span {
    display: block;
    font-size: 0.5em;
    color: #2980b9;
}

.snip1336 p {
    margin: 0 0 10px;
    font-size: 0.8em;
    letter-spacing: 1px;
    opacity: 0.8;
}


/* Demo purposes only */

body {
    background-color: #212121;
}
</style>
<template>
    <section v-if="massages">
        <div class="container rowS">
            <div v-for="item in massages" class="flipper" :class="{'flip': item.flip}" @click="letsFlip(item)">
                <figure class="card front">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="item.picture" :alt="item.name">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-5">{{item.name}}</p>
                                    <p class="subtitle is-6">{{item.city}}</p>
                                </div>
                            </div>
                            <div class="content">
                                {{item.desc}}
                            </div>
                        </div>
                    </div>
                </figure>
                <figure class="card back">
                    <div class="card-content is-centered">
                        <div class="media">
                              <div class="media-left">
                                        <figure class="image is-32x32">
                                            <img v-bind:src="item.picture" alt="Image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-5">{{item.name}}</p>
                                        <p class="subtitle is-6">{{item.ssn}}</p>
                                    </div>
                                </div>
                                <a class="button is-info is-outlined" v-on:click="viewCard()">
                                    <h3 class="title is-3">Book me</h3>
                                </a>
                            </div>
                </figure>
            </div>
            <div class="row">
                <figure class="snip1336" v-for="item in massages">
                    <img src="item.picture" alt="sample87" />
                    <figcaption>
                        <img src="item.picture" alt="profile-sample4" class="profile" />
                        <h2>{{item.name}}</h2>
                        <a href="#" class="follow">Report</a>
                        <a href="#" class="info">More Info</a>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>
<script>
import {
    getMassages
} from '@/api/data'
export default {

    name: 'MassageCard',

    data() {
        return {
            massages: []
        }
    },
    methods: {
        letsFlip: function(item) {
            this.posts.filter(function(v, k) {
                return v.id != item.id;
            }).forEach(function(v, k) {
                v.flip = false;
            })
            window.setTimeout(function(v, k) {
                item.flip = !item.flip;
            }, 100)
        },
        viewCard: function() {
            window.alert('view card!')
        }
    },
    created() {
        getMassages().then(massages => this.massages = massages)


    }

}
</script>
