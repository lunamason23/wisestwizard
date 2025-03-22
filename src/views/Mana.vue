<script setup>
import { ref, onMounted } from 'vue';

let intervalId;
const mana = ref(10)

const managen1 = ref(0);
const managen1Cost = ref(10);
const managen1Mult = ref(1);

const managen2 = ref(0);
const managen2Cost = ref(10);
const managen2Mult = ref(1);

const addManagen1 = () => {
  if (mana.value >= managen1Cost.value) {
    managen1.value++;
    mana.value-=managen1Cost.value;
    managen1Cost.value*=10;
    managen1Mult.value*=2;
  }
}

const addManagen2 = () => {
  if (mana.value >= managen2Cost.value) {
    managen2.value++;
    mana.value-=managen2Cost.value;
    managen2Cost.value*=100;
    managen2Mult.value*=2;
  }
}

function genTick() {
  mana.value+=(managen1.value*managen1Mult.value);
  managen1.value+=(managen2.value*managen2Mult.value);
  
}

onMounted(() => {
  intervalId = setInterval(() => {
    genTick();
  }, 1000);
});

</script>

<template>
  <body>
    <div class="title">
      <h1 style="text-decoration-line: underline">Mana</h1>
      <h3>{{ mana }}</h3>
    </div>
    <div class="managens">
      <div class="managen">
        <h1>{{ managen1 }}</h1>
        <h1>x{{ managen1Mult }}</h1>
        <button @click="addManagen1">{{ managen1Cost }}</button>
      </div>
      <div class="managen">
        <h1>{{ managen2 }}</h1>
        <button @click="addManagen2">{{ managen2Cost }}</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
  .title {
    color: white;
    text-decoration-line: none;
    height:20px;
    width: 100vw;
    text-align: center;
  }
  body {
    background-color: #00475a;
    width:100%;
    display: block;
    justify-content: center;
    flex-wrap: wrap;
  }
  .managen {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: white;
  }
  button {
    height: 45px;
    align-items: center;
    margin-left:20px;
    color: white;
    background-color: #003746;
    border-radius: 10px;
    border-color:#003746;
    border-style:solid;
    font-size: 25px;
    
  }
  button:active {
    background-color:#00475a;
  }
  h1 {
    margin: 0px 10px;
  }
</style>