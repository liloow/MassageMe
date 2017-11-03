<style lang="css" scoped>
</style>
<template>
    <section class="section">
        <div class="row">
            <div class="columns">
                <div class="column">
                    <horizontal-stepper :steps="steps" @completed-step="completeStep" @active-step="isStepActive" @stepper-finished="alert">
                    </horizontal-stepper>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import HorizontalStepper from 'vue-stepper';

// This components will have the content for each stepper step.
import VoucherForm from '@/components/reservation/voucher/VoucherForm'
import VoucherConfirm from '@/components/reservation/voucher/VoucherConfirm'
import VoucherPay from "@/components/reservation/voucher/VoucherPay"

export default {
    name: 'Sandbox',
    data() {
        return {
            steps: [{
                icon: 'date_range',
                name: 'VoucherForm',
                title: 'Form',
                component: VoucherForm,
                completed: false
            }, {
                icon: 'date_range',
                name: 'VoucherConfirm',
                title: 'Confirm',
                component: VoucherConfirm,
                completed: false
            }, {
                icon: 'date_range',
                name: 'VoucherPay',
                title: 'Pay',
                component: VoucherPay,
                completed: false
            }]
        }
    },
    methods: {
        // Executed when @completed-step event is triggered
        completeStep(payload) {
            this.steps.forEach((step) => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            })
        },
        // Executed when @active-step event is triggered
        isStepActive(payload) {
            this.steps.forEach((step) => {
                if (step.name === payload.name) {
                    if (step.completed === true) {
                        step.completed = false;
                    }
                }
            })
        },
        // Executed when @stepper-finished event is triggered
        alert(payload) {
            alert('end')
        }
    },
    components: {
        HorizontalStepper
    },
}
</script>
