<style lang="css" scoped>
.address-row{
    background: url(https://images.unsplash.com/photo-1461766705442-58d58276121a?auto=format&fit=crop&w=2250&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
    background-size: cover;
    background-position: center;
}
</style>
<template>
    <div class="">
        <div class="">
            <announcement-bar v-if="$root.announcement">
            </announcement-bar>
        </div>
        <div class="row">
            <div class="columns address-row">
            
                <div class="column is-5">
                    <enter-address></enter-address>
                </div>
                <div class="column">Auto</div>
                <div class="column">Auto</div>
            </div>

        </div>
        <div class="row">
            <static-info></static-info>
        </div>
        <div class="row">
            <stripe-checkout></stripe-checkout>
        </div>
    </div>
</template>
<script>
import {
    checkAnnounce
} from '@/api/data'
import StripeCheckout from '@/components/reservation/stripe/StripeCheckout'
import AnnouncementBar from '@/components/AnnouncementBar'
import EnterAddress from '@/components/EnterAddress'
import StaticInfo from '@/components/StaticInfo'
export default {
    name: 'Home',
    data() {
        return {}
    },
    components: {
        AnnouncementBar,
        EnterAddress,
        StaticInfo,
        StripeCheckout
    }
}
</script>
