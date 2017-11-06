<style lang="css" scoped>
button.reserve {
    background-color: rgb(255, 0, 0, 0.5);
    line-height: 1;
    margin: 1vh auto;
    padding: 1vh 2.5vw;
    display: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: #f9f9f9;
    border-radius: 1vh;
    border: solid 1px #f39c12;
    background: rgba(230, 126, 34, 0.8);
    text-align: center;
    justify-content: center;
}

.autofix {
    margin: auto;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    font-weight: bold;
}

</style>
<template>
    <div class="container">
        <vue-event-calendar :events="slots">
            <template slot-scope="props">
                <div v-for="(item,index) in props.showEvents" class="event-item autofix">
                    <button class="reserve" :disabled="item.available.length === 0 ? true : false" @click="goToMasseuse(index)">{{item.title}}</button>
                    <p>{{item.desc}}</p>
                </div>
            </template>
        </vue-event-calendar>
    </div>
</template>
<script>
import {
    getSlots
} from '@/api/data'

export default {

    name: 'DatePicker',

    data() {
        return {
            events: [],
            slots: [],
            time: new Date(),
            range: [new Date(), new Date()],
            emptyTime: '',
            emptyRange: [],
            local: {
                dow: 0, // Sunday is the first day of the week
                hourTip: 'Select Hour', // tip of select hour
                minuteTip: 'Select Minute', // tip of select minute
                secondTip: 'Select Second', // tip of select second
                yearSuffix: '', // suffix of head year
                monthsHead: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // months of head
                months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), // months of panel
                weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_') // weeks
            }
        }
    },
    methods: {
        goToMasseuse(index) {
            const item = this.slots[index]
            this.$emit('goToMasseuse', item)
        }
    },
    created() {
        getSlots().then(slots => {
            this.slots = slots.sort((a, b) => parseInt(a.slot.split(':')[0]) - parseInt(b.slot.split(':')[0]))
            this.slots.forEach(el => el.date = el.date.split('T')[0].split('-').join('/'))
            this.slots.forEach(el => {
                el.title = el.slot
                el.available = el.masseuse.filter(el => !el.isbooked).map(el => el._id.name).join(',')
                el.desc = el.available.length === 0 ? 'Tous nos masseurs sont occupés pour ce crénau' : 'Masseurs disponibles : ' + el.available
            })
        })
    },
    components: {}
}

</script>
