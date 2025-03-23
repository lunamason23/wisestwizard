<script setup>
import { ref, onMounted } from 'vue';

let intervalId;

let mana = {
  amount: ref(1)
}

const managen1 = {
  amount: ref(0),
  cost: ref(1),
  costIncrease: ref(10),
  mult: ref(1),
  multIncrease: ref(2)
};

const managen2 = {
  amount: ref(0),
  cost: ref(1),
  costIncrease: ref(10),
  mult: ref(1),
  multIncrease: ref(2)
};

const addManagen = (managenObj, manaObj) => {
  if (manaObj.amount.value >= managenObj.cost.value) {
    managenObj.amount.value++;
    manaObj.amount.value-=managenObj.cost.value;
    managenObj.cost.value*=managenObj.costIncrease.value;
    managenObj.mult.value*=managenObj.multIncrease.value;
  }
}

function genTick() {
  mana.amount.value+=(managen1.amount.value*managen1.mult.value);
  
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
      <h3>{{ mana.amount }}</h3>
    </div>
    <div class="managens">
      <div class="managen">
        <h1>{{ managen1.amount }}</h1>
        <h1>x{{ managen1.mult }}</h1>
        <button @click="addManagen(managen1, mana)">{{ managen1.cost }}</button>
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
    margin: 0px 20px;
  }
</style>