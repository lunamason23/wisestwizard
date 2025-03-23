<script setup>
import { ref, onMounted } from 'vue';

let intervalId;
let tickspeed = 10;
let expQuantity = 2;

let mana = {
  amount: ref(1)
}

const managen1 = {
  amount: ref(0),
  bought: ref(0),
  cost: ref(1),
  costIncrease: ref(10),
  mult: ref(1),
  multIncrease: ref(2)
};

const managen2 = {
  amount: ref(0),
  bought: ref(0),
  cost: ref(100),
  costIncrease: ref(100),
  mult: ref(1),
  multIncrease: ref(2)
};

const managen3 = {
  amount: ref(0),
  bought: ref(0),
  cost: ref(1e5),
  costIncrease: ref(1e5),
  mult: ref(1),
  multIncrease: ref(2)
}

const managen4 = {
  amount: ref(0),
  bought: ref(0),
  cost: ref(1e9),
  costIncrease: ref(1e9),
  mult: ref(1),
  multIncrease: ref(2)
}

const addManagen = (managenObj, manaObj) => {
  if (manaObj.amount.value >= managenObj.cost.value) {
    managenObj.bought.value++;
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
  managen2.amount.value += (
    managen3.amount.value*managen3.mult.value
  );
  managen3.amount.value += (
    managen4.amount.value*managen4.mult.value
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
      <h3 v-if="mana.amount.value < 10000">{{ mana.amount }}</h3>
      <h3 v-if="mana.amount.value >= 10000">{{ mana.amount.value.toExponential(expQuantity) }}</h3>
    </div>
    <div class="managens">
      <table>
        <tr class="managen">
          <td v-if="managen1.bought.value < 10000" class="managenTextBought">{{ managen1.bought }}</td>
          <td v-if="managen1.bought.value >= 10000" class="managenTextBought">{{ managen1.bought.value.toExponential(expQuantity) }}</td>
          <td v-if="managen1.amount.value < 10000" class="managenTextAmount">{{ managen1.amount }}</td>
          <td v-if="managen1.amount.value >= 10000" class="managenTextAmount">{{ managen1.amount.value.toExponential(expQuantity) }}</td>
          <td v-if="managen1.mult.value < 10000" class="managenTextMult">x{{ managen1.mult }}</td>
          <td v-if="managen1.mult.value >= 10000" class="managenTextMult">x{{ managen1.mult.value.toExponential(expQuantity) }}</td>
          <td v-if="managen1.cost.value < 10000"><button @click="addManagen(managen1, mana)">{{ managen1.cost }}</button></td>
          <td v-if="managen1.cost.value >= 10000"><button @click="addManagen(managen1, mana)">{{ managen1.cost.value.toExponential(expQuantity) }}</button></td>
        </tr>
        <tr v-if="managen1.amount.value >= 1" class="managen">
          <td v-if="managen2.bought.value < 10000" class="managenTextBought">{{ managen2.bought }}</td>
          <td v-if="managen2.bought.value >= 10000" class="managenTextBought">{{ managen2.bought.value.toExponential(expQuantity) }}</td>
          <td v-if="managen2.amount.value < 10000" class="managenTextAmount">{{ managen2.amount }}</td>
          <td v-if="managen2.amount.value >= 10000" class="managenTextAmount">{{ managen2.amount.value.toExponential(expQuantity) }}</td>
          <td v-if="managen2.mult.value < 10000" class="managenTextMult">x{{ managen2.mult }}</td>
          <td v-if="managen2.mult.value >= 10000" class="managenTextMult">x{{ managen2.mult.value.toExponential(expQuantity) }}</td>
          <td v-if="managen2.cost.value < 10000"><button @click="addManagen(managen2, mana)">{{ managen2.cost }}</button></td>
          <td v-if="managen2.cost.value >= 10000"><button @click="addManagen(managen2, mana)">{{ managen2.cost.value.toExponential(expQuantity) }}</button></td>
        </tr>
        <tr v-if="managen2.amount.value >= 1" class="managen">
          <td v-if="managen3.bought.value < 10000" class="managenTextBought">{{ managen3.bought }}</td>
          <td v-if="managen3.bought.value >= 10000" class="managenTextBought">{{ managen3.bought.value.toExponential(expQuantity) }}</td>
          <td v-if="managen3.amount.value < 10000" class="managenTextAmount">{{ managen3.amount }}</td>
          <td v-if="managen3.amount.value >= 10000" class="managenTextAmount">{{ managen3.amount.value.toExponential(expQuantity) }}</td>
          <td v-if="managen3.mult.value < 10000" class="managenTextMult">x{{ managen3.mult }}</td>
          <td v-if="managen3.mult.value >= 10000" class="managenTextMult">x{{ managen3.mult.value.toExponential(expQuantity) }}</td>
          <td v-if="managen3.cost.value < 10000"><button @click="addManagen(managen3, mana)">{{ managen3.cost }}</button></td>
          <td v-if="managen3.cost.value >= 10000"><button @click="addManagen(managen3, mana)">{{ managen3.cost.value.toExponential(expQuantity) }}</button></td>
        </tr>
        <tr v-if="managen3.amount.value >= 1" class="managen">
          <td v-if="managen4.bought.value < 10000" class="managenTextBought">{{ managen4.bought }}</td>
          <td v-if="managen4.bought.value >= 10000" class="managenTextBought">{{ managen4.bought.value.toExponential(expQuantity) }}</td>
          <td v-if="managen4.amount.value < 10000" class="managenTextAmount">{{ managen4.amount }}</td>
          <td v-if="managen4.amount.value >= 10000" class="managenTextAmount">{{ managen4.amount.value.toExponential(expQuantity) }}</td>
          <td v-if="managen4.mult.value < 10000" class="managenTextMult">x{{ managen4.mult }}</td>
          <td v-if="managen4.mult.value >= 10000" class="managenTextMult">x{{ managen4.mult.value.toExponential(expQuantity) }}</td>
          <td v-if="managen4.cost.value < 10000"><button @click="addManagen(managen4, mana)">{{ managen4.cost }}</button></td>
          <td v-if="managen4.cost.value >= 10000"><button @click="addManagen(managen4, mana)">{{ managen4.cost.value.toExponential(expQuantity) }}</button></td>
        </tr>
      </table>
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
    padding-left: 700px;
    position:absolute;
    transform: translateY(400px);
  }
  .managen {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
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
  .managenTextBought {
    margin: 10px;
    font-size: 16px;
    font-weight: 500;
    position:absolute;
    transform: translateX(-600px);
  }
  .managenTextAmount {
    margin: 10px;
    font-size: 16px;
    font-weight: 500;
    position:absolute;
    transform: translateX(-400px);
  }
  .managenTextMult {
    margin: 10px;
    font-size: 16px;
    font-weight: 500;
    position:absolute;
    transform: translateX(-200px);
  }
</style>