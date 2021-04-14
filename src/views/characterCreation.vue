<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Custom Character</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Character Creation</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="ion-text-center" id="characterName">
          <ion-label>Character Name</ion-label>
          <ion-input id="customName" placeholder="Joe Blow"></ion-input>
        </div>

        <div class="ion-text-center" id="pointsAvailable">
          <p>10 available points</p>
        </div>
  
        <div class="ion-text-center" id="hpContainer">
          <ion-item>
            <ion-label id="hpLabel">HP: </ion-label>
            <ion-input id="hpInput" placeholder="1-10"></ion-input>
          </ion-item>
        </div>

        <div class="ion-text-center" id="attackContainer">
          <ion-item>
            <ion-label id="attackLabel">ATTACK: </ion-label>
            <ion-input id="attackInput" placeholder="1-10"></ion-input>
          </ion-item>
        </div>

        <div id="continue">
          <ion-button @click="checkNumbers()">Continue</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import {checkNumbers, postPlayer} from "./Script/characterCreation.js";
  //import { ActionPage } from "./actionPage.vue";
  //import { longTextPage } from "./longTextPage.vue";
  
  export default {
    name: 'characterCreation',
    data() {
      return {
        playerId: 1
      }
    },
    methods: {
      checkNumbers,
      postPlayer
    }
  }
</script>
<style src="./CSS/characterCreation.css" scoped></style>