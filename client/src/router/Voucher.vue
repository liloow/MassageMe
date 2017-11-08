<style lang="css" scoped>


</style>
<template>
    <section class="section">
        <div class="row">
            <div class="columns">
                <div class="column">
                    <voucher-form></voucher-form>
                    <voucher-confirm></voucher-confirm>
                    <voucher-pay></voucher-pay>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VoucherForm from '@/components/reservation/voucher/VoucherForm'
import VoucherConfirm from '@/components/reservation/voucher/VoucherConfirm'
import VoucherPay from "@/components/reservation/voucher/VoucherPay"

export default {
    name: 'Voucher',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {},
    created() {
        scrollTo(top)
    }
}

</script>
