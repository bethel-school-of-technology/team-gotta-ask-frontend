<!--CSS needs to be added to this page, remember to prioritze the look for mobile-->
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Character Creation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div>
          <ion-label position="stacked">Character Name</ion-label>
          <ion-input placeholder="John Doe"></ion-input>
        </div>
        <div>
          <!--this can be hard coded in like this-->
          <p>5 total points available.</p>
        </div>
        <!--for these inputs I wonder if we can add a function that adds them up and if they exceed the number allotted throw an alert to the user-->
        <div>
          <ion-label position="fixed">HP</ion-label>
          <ion-input placeholder="1-5"></ion-input>
        </div>
        <div>
          <ion-label position="fixed">ATTACK</ion-label>
          <ion-input placeholder="1-5"></ion-input>
        </div>
        <div>
            <!--this button would send the input information to the backend to be recorded and it will route to the next page-->
            <ion-button href="/longTextPage">Continue</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/characterCreation.js"></script>
<style src="./CSS/characterCreation.css"></style>