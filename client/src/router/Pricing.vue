<style lang="css" scoped>
</style>
<template>
    <section class="section">
        <div class="container">
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
import DateSelection from '@/components/reservation/DateSelection'
import SlotSelection from '@/components/reservation/SlotSelection'
import MasseuseSelection from '@/components/reservation/MasseuseSelection'
import PaymentMode from '@/components/reservation/PaymentMode'
import ConfirmationSelection from '@/components/reservation/ConfirmationSelection'
import RecapInfo from '@/components/reservation/RecapInfo'
import ProgressBar from '@/components/reservation/ProgressBar'
import MassageSelection from '@/components/reservation/MassageSelection'

export default {
    name: 'Pricing',
    data() {
        return {
            steps: [{
                icon: 'date_range',
                name: 'MassageSelection',
                title: 'Massage',
                component: MassageSelection,
                completed: false
            }, {
                icon: 'date_range',
                name: 'DateSelection',
                title: 'Date',
                component: DateSelection,
                completed: false
            }, {
                icon: 'date_range',
                name: 'MasseuseSelection',
                title: 'Masseuse',
                component: MasseuseSelection,
                completed: false
            }, {
                icon: 'date_range',
                name: 'PaymentMode',
                title: 'Payment',
                component: PaymentMode,
                completed: false
            }, {
                icon: 'date_range',
                name: 'ConfirmationSelection',
                title: 'Confirmation',
                component: ConfirmationSelection,
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
