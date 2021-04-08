<!--CSS needs to be added to this page, remember to prioritze the look for mobile-->
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
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div id="characterName">
          <ion-label>Character Name</ion-label>
          <ion-input placeholder="Johnny Apple"></ion-input>
        </div>
        <div id="pointsAvailable">
          <!--this can be hard coded in like this-->
          <p>10 available points</p>
        </div>
        <!--for these inputs I wonder if we can add a function that adds them up and if they exceed the number allotted throw an alert to the user-->
        <div id="hpContainer">
          <div id="hp">
            <ion-label position="fixed">HP</ion-label>
          </div>
          <div id="hpInput">
            <ion-input placeholder="1-10" id="hpNumber"></ion-input>
          </div>
        </div>
        <div id="attackContainer">
          <div id="attack">
            <ion-label position="fixed">ATTACK</ion-label>
          </div>
          <div id="attackInput">
            <ion-input placeholder="1-10" id="attackNumber"></ion-input>
          </div>
        </div>
        <div id="continue">
            <!--this button would send the input information to the backend to be recorded and it will route to the next page-->
            <ion-button @click="checkNumbers()">Continue</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>  
  import {checkNumbers} from "./Script/characterCreation.js";
  export default {
    methods: {
      checkNumbers
    }
  }
</script>
<style src="./CSS/characterCreation.css" scoped></style>