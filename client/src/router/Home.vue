<style lang="css" scoped>
@import '../assets/stylesheets/typo.css';

</style>
<template>
    <section class="container-fluid">
        <announcement-bar v-if="$root.announcement"></announcement-bar>
        <reservation-row></reservation-row>
        <picto-row></picto-row>
        <static-info></static-info>
        <services></services>
        <gift-row></gift-row>
        <carousel-row></carousel-row>
        <div class="columns columns-2">
        </div>
    </section>
</template>
<script>
import {
    checkAnnounce
} from '@/api/data'
import StripeCheckout from '@/components/reservation/stripe/StripeCheckout'
import AnnouncementBar from '@/components/AnnouncementBar'
import StaticInfo from '@/components/homepage/StaticInfo'
import Services from '@/components/homepage/Services'
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
        Services,
        StaticInfo,
        StripeCheckout,
        ReservationRow,
        PictoRow,
        GiftRow,
        CarouselRow,
    }
}

</script>
