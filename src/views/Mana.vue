<script setup>
import { ref, onMounted } from 'vue';

let intervalId;
let tickspeed = 1000;

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
  cost: ref(100),
  costIncrease: ref(100),
  mult: ref(1),
  multIncrease: ref(2)
};

const managen3 = {
  amount: ref(0),
  cost: ref(100),
  costIncrease: ref(100),
  mult: ref(1),
  multIncrease: ref(2)
}

const addManagen = (managenObj, manaObj) => {
  if (manaObj.amount.value >= managenObj.cost.value) {
    managenObj.amount.value++;
    manaObj.amount.value-=managenObj.cost.value;
    managenObj.cost.value*=managenObj.costIncrease.value;
    managenObj.mult.value*=managenObj.multIncrease.value;
  }
}

function genTick() {
  mana.amount.value += (
    managen1.amount.value*managen1.mult.value
  );
  managen1.amount.value += (
    managen2.amount.value*managen2.mult.value
  );
  
}

onMounted(() => {
  intervalId = setInterval(() => {
    genTick();
  }, tickspeed);
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
        <h1 class="managenText">{{ managen1.amount }}</h1>
        <h1 class="managenText">x{{ managen1.mult }}</h1>
        <button @click="addManagen(managen1, mana)">{{ managen1.cost }}</button>
      </div>
      <div class="managen">
        <h1 class="managenText">{{ managen2.amount }}</h1>
        <h1 class="managenText">x{{ managen2.mult }}</h1>
        <button @click="addManagen(managen2, mana)">{{ managen2.cost }}</button>
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
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .managens {
    margin-right:25px;
  }
  .managen {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    color: white;
    border-style: solid;
    border-color: #082b35;
    border-radius: 15px;
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
  .managenText {
    margin: 10px;
  }
</style>