<style lang="css" scoped>
.triple {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  align-items: center;
}

.center {
  margin: auto;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  overflow: hidden;
}

.raise:hover,
.raise:focus {
  box-shadow: 1 1.5em 1.5em -0.4em var(--hover);
  -webkit-transform: translateY(-0.25em);
  transform: translateY(-0.25em);
}

.pulse:hover,
.pulse:focus {
  -webkit-animation: pulse 1s;
  animation: pulse 1s;
  box-shadow: 0 0 0 3em rgba(255, 255, 255, 0);
}


.massage-thumb {
  overflow: hidden;
  padding: 1vh 2vh;
  height: 100%;
}

@-webkit-keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

.pulse {
  --color: #FCA17D;
  --hover: #FFB27F;
}

.raise {
  --color: #FCA17D;
  --hover: #FFB27F;
}

button {
  color: var(--color);
  -webkit-transition: 0.25s;
  transition: 0.25s;
}

.square {
  padding: 5vh 2vh 5vh;
  margin: center;
}

button:hover,
button:focus {
  border-color: var(--hover);
  color: #fff;

  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  transition: all 0.1s;

  -webkit-box-shadow: 0px 6px 0px #d35400;
  -moz-box-shadow: 0px 6px 0px #d35400;
  box-shadow: 0px 6px 0px #d35400;
}

.reserve:active {
  -webkit-box-shadow: 0px 2px 0px #d35400;
  -moz-box-shadow: 0px 2px 0px #d35400;
  box-shadow: 0px 2px 0px #d35400;
  position: relative;
  top: 4px;
}



button.reserve {
  background-color: rgb(255, 0, 0, 0.5);
  line-height: 1;
  margin: 0vh;
  padding: 1vh 2.5vw;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 1vh;
  border: solid 1px #f39c12;
  background: rgba(230, 126, 34, 0.8);
  text-align: center;
  justify-content: center;
  align-items: flex-end;
}

.autofix {
  height: 10%;
  margin: auto;
}

.wrapper {
  height: 87%;
}

h3 {
  padding-top: 2vh;
}

</style>
<template>
  <section>
    <div class="hero is-small">
      <div class="columns is-gapless picto">
        <div class="column is-6">
          <img src="../assets/img/large/type.jpg">
        </div>
        <div class="column triple is-centered">
          <div v-for="m in massages" class="column is-4 card is-centered massage-thumb">
            <div class="wrapper">
              <figure class="card card-header center is-square">
                <img :src="m.picture" alt="" class="square">
              </figure>
              <h3 class="title is-3">{{m.name}}</h3>
              <div class='card-body'>
                <p>{{m.description.split('.').slice(0,2).join('.')}}</p>
              </div>
            </div>
            <div class="card-footer autofix  center is-centered">
              <button class="pulse reserve">RESERVER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
import { getMassages } from '@/api/data'
import MassageCard from '@/components/MassageCard'
export default {

  name: 'StaticInfo',

  data() {
    return {
      massages: [],
    }
  },
  methods: {

  },
  created() {
    getMassages().then(r => this.massages = [r[0], r[1], r[2]])
  },
  components: { MassageCard }
}

</script>
