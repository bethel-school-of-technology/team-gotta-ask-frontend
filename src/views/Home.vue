<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Nimrod's Ascent</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nimrod's Ascent</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div id="purpleBox">
          <div id="whiteBox">
            <h1 id="titleText">Nimrod's Ascent</h1>
          </div>
        </div>
        <div id="startButton">
          <ion-button color="primary" @click="makeLocal()">New Game</ion-button>
          <ion-button id='resume' v-show='ok' color="primary" @click="resume()">Resume</ion-button>
        </div>
        <!-- <div id="quitButton"> -->
          <!--these buttons will most likely have to call script that initiates a request to the backend as well as routes to the correct page-->
          <!-- <ion-button color="danger">Quit (Doesn't function)</ion-button>
        </div> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/home.js"></script>
<style src="./CSS/home.css" scoped></style>