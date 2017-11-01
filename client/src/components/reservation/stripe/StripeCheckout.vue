<template>
    <div>
        <button @click="checkout">Checkout</button>
    </div>
</template>
<script>
import {
    storeStripeToken
} from '@/api/stripe'
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
                    storeStripeToken(token).then(r => this.wentWell = true)
                }
            });
        }
    }
}
</script>
export default { } }
</script>
<style lang="css" scoped>
</style>
