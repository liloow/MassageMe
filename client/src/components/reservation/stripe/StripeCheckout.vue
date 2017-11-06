<style lang="css" scoped>
.picto {
    display: flex;
    justify-content: space-around;
    flex-grow: 0;
    text-align: center;
    font-weight: bold;
    font-size: 0.9rem;
}

.padding-2 {
    margin: 3vh;
}



.raise:hover,
.raise:focus {
    box-shadow: 1 1.5em 1.5em -0.4em var(--hover);
    -webkit-transform: translateY(-0.25em);
    transform: translateY(-0.25em);
}

.pulse:hover,
.pulse:focus {
    -webkit-animation: pulse 1s;
    animation: pulse 1s;
    box-shadow: 0 0 0 3em rgba(255, 255, 255, 0);
}



@-webkit-keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 var(--hover);
    }
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 var(--hover);
    }
}

.pulse {
    --color: #FCA17D;
    --hover: #FFB27F;
}

.raise {
    --color: #FCA17D;
    --hover: #FFB27F;
}

button {
    color: var(--color);
    -webkit-transition: 0.25s;
    transition: 0.25s;
}

button:hover,
button:focus {
    border-color: var(--hover);
    color: #fff;

    -webkit-transition: all 0.1s;
    -moz-transition: all 0.1s;
    transition: all 0.1s;

    -webkit-box-shadow: 0px 6px 0px #d35400;
    -moz-box-shadow: 0px 6px 0px #d35400;
    box-shadow: 0px 6px 0px #d35400;
}

.reserve:active {
    -webkit-box-shadow: 0px 2px 0px #d35400;
    -moz-box-shadow: 0px 2px 0px #d35400;
    box-shadow: 0px 2px 0px #d35400;
    position: relative;
    top: 4px;
}

button.reserve {
    background-color: rgb(255, 0, 0, 0.5);
    line-height: 1;
    margin: 0vw;
    padding: 1vw 1vh;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    color: #f9f9f9;
    border-radius: 1vh;
    border: solid 1px #f39c12;
    background: rgba(230, 126, 34, 0.8);
    text-align: center;
}

.card {
    border-radius: 1vh;
}

button.reserve {
    background-color: rgb(255, 0, 0, 0.5);
    line-height: 1;
    margin: 0vh;
    padding: 1vh 2.5vw;
    font-size: 1rem;
    font-weight: bold;
    color: #f9f9f9;
    border-radius: 1vh;
    border: solid 1px #f39c12;
    background: rgba(230, 126, 34, 0.8);
    text-align: center;
    justify-content: center;
    align-items: center;
}

.autofix {
    margin: auto;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    display: flex;
}

.card-footer {
    margin-bottom: 2vh;
}

.card-top {
    height: auto;
}

</style>
<template>
    <section>
        <button @click="checkout" class="reserve autofix">Checkout</button>
    </section>
</template>
<script>
import {
    storeStripeToken
}

from '@/api/stripe'
export default {
    name: 'StripeCheckout',

    data() {
        return {
            wentWell: false
        }
    },
    methods: {
        checkout() {
            // this.$checkout.close() 
            // is also available.
            this.$checkout.open({
                name: 'Shut up and take my money!',
                currency: 'EUR',
                amount: 60,
                token: (token) => {
                    storeStripeToken(token).then(r => {
                        this.wentWell = true

                        if (this.wentWell) {
                            this.$emit('valid')
                            alert('Cool beans brotha, your card is valid')
                            this.$router.push('/')
                        } else {
                            alert('Epic failure. the dev messed up, again')
                        }
                    })
                }
            })
        }
    }
}

</script>
