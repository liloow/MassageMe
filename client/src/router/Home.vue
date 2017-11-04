<style lang="css" scoped>
.address-row{
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

.columns > .column.background-image {
    background-size: cover;
    background-position: center;
}

.columns-2 > .column.background-image {
    background-image: url(https://images.unsplash.com/photo-1509677054381-5e011cdf03fd?auto=format&fit=crop&w=2250&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
}

.columns-3 > .column.background-image{
    background-image: url(https://images.unsplash.com/photo-1464332552705-055aab4ff2aa?auto=format&fit=crop&w=3300&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D);
}

.columns > .content {
    padding: 60px;
}
</style>
<template>
    <div class="">
        <div class="">
            <announcement-bar v-if="$root.announcement">
            </announcement-bar>
        </div>

        <div class="columns address-row">
        
            <div class="column is-5">
                <enter-address></enter-address>
            </div>
            <div class="column">Auto</div>
            <div class="column">Auto</div>
        </div>

        <div class="columns columns-2">
            <div class="column is-6 background-image"></div>
            <div class="column is-6 content white">
                <h3 class="title is-3">Trouvez le massage qui vous convient</h3>
                <div class="columns">
                    <div class="column is-4">
                        <h4 class="title is-4">Relaxation</h4><p>Le massage classique parfait pour se détendre</p><button class="button is-primary">Choisir</button>
                    </div>
                    <div class="column is-4">
                        <h4 class="title is-4">Deep Tissue</h4><p>Le massage pour aller en profondeur</p><button class="button is-primary">Choisir</button>
                    </div>
                    <div class="column is-4">
                        <h4 class="title is-4">Sportif</h4><p>L'idéal pour récupérer après un effert</p><button class="button is-primary">Choisir</button>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="columns columns-3">
            <div class="column is-6 content white">
                <h3 class="title is-3">Offrez un massage</h3>
                <p>Envie d'offrir un massage à un ami ou à un proche ? Offrez lui l'expérience MassageMe à domicile.</p>
                <p><button class="button is-primary">Offrir un massage</button></p>

            <static-info></static-info>
            <stripe-checkout></stripe-checkout>
                
            </div>
            <div class="column is-6 background-image"></div>
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
