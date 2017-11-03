<style lang="css" scoped>
.appointment {
    margin: 5rem;
}

h1,
h2,
h3,
h4 {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
}

p {
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 26px;
}

.e-button {
    transform: translate(0%, 0%);
    text-align: center;
}

.e-button .btn {
    position: relative;
    font-size: 20px;
    font-size: 2rem;
    line-height: 28px;
    transition: all .2s ease-in-out;
    padding: 25px 0px;
    height: 78px;
    border: none;
    background: none;
    color: #fff;
    font-weight: 600;
    outline: none;
    width: 260px;
}

.e-button .btn span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    transition: all .3s ease-in-out;
}

.e-button .btn span.success-text {
    visibility: hidden;
    opacity: 0;
}

.e-button .btn:before {
    border-radius: 50px;
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background: #222;
    z-index: -1;
    transition: all .5s ease-in-out, border .3s ease-in-out;
    border: 2px solid #fff;
    box-sizing: border-box;
}

.e-button .btn:after {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: '\f00c';
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0);
    transform-origin: center;
    right: -28px;
    z-index: 0;
    color: #fff;
    transition: all .2s ease-in-out;
}

.e-button .btn:hover {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px) translateZ(0);
}

.e-button .btn:hover:before {
    background: #2f2f2f;
    border-color: transparent;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 15px 20px rgba(0, 0, 0, 0.1);
}

.e-button .btn:active {
    transform: scale(1) translateY(0) translateZ(0);
}

.e-button .btn:active:before {
    box-shadow: none;
}

.e-button .btn.clicked {
    transform: scale(1) translateY(0) translateZ(0);
}

.e-button .btn.clicked:before {
    box-shadow: none;
}

.e-button .btn.success {
    color: #FFF;
}

.e-button .btn.success:hover {
    cursor: default;
}

.e-button .btn.success span.text {
    opacity: 0;
    visibility: hidden;
}

.e-button .btn.success span.success-text {
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
}

.e-button .btn.success:before {
    right: -50px;
    height: 100%;
    width: 78px;
    background: #4db948;
    border-color: #3e9539;
}

.e-button .btn.success:after {
    transition-delay: .3s;
    transform: translateY(-50%) scale(1);
}

.e-button .btn.success:hover,
.e-button .btn.success:active {
    transform: scale(1) translateY(0) translateZ(0);
}

.e-button .btn.success:hover:before,
.e-button .btn.success:active:before {
    box-shadow: none;
}
</style>
<template>
    <section>
        <div class="card appointment">
            <header class="card-header">
                <p class="card-header-title">
                    Réserver un massage
                </p>
            </header>
            <div class="card-content">
                <div class="row">
                    <div class="column">
                        <b-field grouped position="is-centered">
                            <b-field label="Enter your city">
                                <b-autocomplete id="searchAuto" v-model="name" :data="filteredDataArray" placeholder="Check your city" icon="search" @select="el=> el ? checkCity(el) : el" size="is-large">
                                    <template @keyup.enter="log('q')" slot="empty">No results found</template>
                                </b-autocomplete>
                            </b-field>
                        </b-field>
                    </div>
                    <div class="column">
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <div class="column">
                    <div class="e-button">
                        <button class="btn button is-large" :class="state===0 ? false : state===1 ? 'is-loading' : false " @click="fakeSearch(0)">
                            <span class="text">Check</span>
                            <span class="success-text">Yay!</span>
                        </button>
                    </div>
                </div>
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
            citesWeOperate: [],
            state: 0


        }
    },
    methods: {
        checkCity(o) {
            let res = this.citesWeOperate.indexOf(o) !== -1
            this.fakeSearch(res)
            console.log(res)
        },
        fakeSearch(res = 0) {
            this.state = 1
            setTimeout(() => {
                this.state = !res ? 3 : 2
            }, 750)
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
        getCities().then(r => this.citesWeOperate = r)
    }
}
</script>
