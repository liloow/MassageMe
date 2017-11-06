<style lang="css" scoped>
.address-row {
    background: url(https://images.unsplash.com/photo-1461766705442-58d58276121a?auto=format&fit=crop&w=2250&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
    background-size: cover;
    background-position: center;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.white {
    background-color: white;
}

.columns>.column.background-image {
    background-size: cover;
    background-position: center;
}

.columns-2>.column.background-image {
    background-image: url(https://images.unsplash.com/photo-1509677054381-5e011cdf03fd?auto=format&fit=crop&w=2250&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
}

.columns-3>.column.background-image {
    background-image: url(https://images.unsplash.com/photo-1464332552705-055aab4ff2aa?auto=format&fit=crop&w=3300&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
}

.columns>.content {
    padding: 60px;
}

</style>
<template>
    <section class="container-fluid">
        <announcement-bar v-if="$root.announcement"></announcement-bar>
        <reservation-row></reservation-row>
        <picto-row></picto-row>
        <static-info></static-info>
        <gift-row></gift-row>
        <carousel-row></carousel-row>
        <div class="columns columns-2">
        </div>
        <div class="columns columns-3">
            <div class="column is-6 content white">
                <h3 class="title is-3">Offrez un massage</h3>
                <p>Envie d'offrir un massage à un ami ou à un proche ? Offrez lui l'expérience MassageMe à domicile.</p>
                <p>
                    <button class="button is-primary">Offrir un massage</button>
                </p>
                <div class="column is-6 background-image">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {
    checkAnnounce
} from '@/api/data'
import StripeCheckout from '@/components/reservation/stripe/StripeCheckout'
import AnnouncementBar from '@/components/AnnouncementBar'
import StaticInfo from '@/components/StaticInfo'
import ReservationRow from '@/components/homepage/ReservationRow'
import PictoRow from '@/components/homepage/PictoRow'
import GiftRow from '@/components/homepage/GiftRow'
import CarouselRow from '@/components/homepage/CarouselRow'

export default {
    name: 'Home',
    data() {
        return {}
    },
    components: {
        AnnouncementBar,
        StaticInfo,
        StripeCheckout,
        ReservationRow,
        PictoRow,
        GiftRow,
        CarouselRow,
    }
}

</script>
