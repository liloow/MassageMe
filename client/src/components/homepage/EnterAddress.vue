<style lang="css" scoped>
.appointment {
    margin: 5rem;
}

.validator {
    text-align: center;
    padding: 5vh,
}

.card-footer {
    text-align: center;
    margin: 3vh;
}

.input {
    padding-top: 3vh;
}

</style>
<template>
    <section>
        <div class="card" v-if="$root.reservation">
            <p class="title is-5">Date de réservation : Le <strong>{{$root.reservation.date}}</strong> à <strong>{{$root.reservation.slot}}</strong></p>
        </div>
        <div class="card appointment">
            <header class="card-header">
                <h2 class="card-header-title title is-3 is-centered">
                    Entrez votre addresse pour recevoir votre massage à domicile !
                </h2>
            </header>
            <div class="card-content">
                <div class="row">
                    <div class="column">
                        <b-field grouped position="is-centered">
                            <b-field label="Indiquez votre ville">
                                <b-autocomplete id="searchAuto" v-model="name" :data="filteredDataArray" icon="search" placeholder="Liège, Brussels, ..." @select="el=> el ? checkCity(el) : el" size="is-large">
                                    <template @keyup.enter="log('q')" slot="empty">No results found</template>
                                </b-autocomplete>
                            </b-field>
                        </b-field>
                        <div class="validator" position="is-centered">
                            <button disabled="selected" class="btn button is-large" :class="state===0 ? false : state===1 ? 'is-loading' : false " @click="fakeSearch(0)">
                                <span class="text">Vérifier</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <div v-if="message" class="validator">
                    <p>{{message}}</p>
                    <form @submit.prevent="registerEmail">
                        <b-field>
                            <b-input type="email" v-model="guestmail" label="Votre Email" placeholder="Enter your email"></b-input>
                        </b-field>
                        <b-field>
                            <button type="submit" class="button">Valider</button>
                        </b-field>
                    </form>
                </div>
                <p v-if="successAdd">Merci pour votre intérêt ! Nous vous recontactons dès aue possible.</p>
            </footer>
        </div>
    </section>
</template>
<script>
import {
    getCities
} from "@/api/data"
export default {
    name: 'EnterAddress',
    data() {
        return {
            data: [
                'Aalst',
                'Leuven',
                'Namur',
                'Tournai',
                'Antwerp',
                'Arlon',
                'Ath',
                'Bastogne',
                'Thuin',
                'Dinant',
                'Hasselt',
                'Tongeren',
                'Bruges',
                'Neufchâteau',
                'Soignies',
                'Maaseik',
                'Brussels-Capital',
                'Charleroi',
                'Virton',
                'Mouscron',
                'Philippeville',
                'Ghent',
                'Dendermonde',
                'Diksmuide',
                'Marche-en-Famenne',
                'Eeklo',
                'Verviers',
                'Turnhout',
                'Nivelles',
                'Aalst',
                'Ostend',
                'Halle-Vilvoorde',
                'Waremme',
                'Kortrijk',
                'Huy',
                'Roeselare',
                'Liège',
                'Mechelen',
                'Sint-Niklaas',
                'Ypres',
                'Mons',
                'Veurne',
                'Oudenaarde',
                'Tielt',

            ],
            name: '',
            selected: null,
            citiesWeOperate: [],
            state: 0,
            message: null,
            guestmail: '',
            successAdd: false,


        }
    },
    methods: {
        checkCity(o) {
            console.log(o)
            console.log(this.citiesWeOperate)
            let res = this.citiesWeOperate.indexOf(o) !== -1
            this.fakeSearch(res)
            console.log(res)
        },
        fakeSearch(res = 0) {
            this.state = 1


            let t = setTimeout(() => {
                this.state = !res ? 3 : 2
                if (this.state === 2) this.$router.push('/reserve')
                if (this.state === 3) this.message = 'Malheureusement, nous ne sommes pas encore présents dans votre ville. Laissez-nous votre e-mail via le formulaire ci-dessous et nous vous previendrons dès que seront présents près de chez vous !'
            }, 3000)



        },
        registerEmail() {
            addToMailList(this.guestmail).then(r => {
                this.successAdd = true
            })
        }
    },
    computed: {
        filteredDataArray() {
            function ignore(s) {
                return s
                    .replace(/á/g, 'a')
                    .replace(/é/g, 'e')
                    .replace(/è/g, 'e')
                    .replace(/í/g, 'i')
                    .replace(/ó/g, 'o')
                    .replace(/ú/g, 'u')
            }

            return this.data.filter((option) => {
                return ignore(option)
                    .toString()
                    .toLowerCase()
                    .indexOf(ignore(this.name).toLowerCase()) === 0
            }).sort()
        }
    },
    created() {
        getCities().then(r => {
            console.log(r)
            this.citiesWeOperate = r.map(el => el.name)
        })
    }
}

</script>
