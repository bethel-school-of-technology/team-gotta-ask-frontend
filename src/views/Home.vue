<template>
  <ion-page>
    <!-- <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Nimrod's Ascent</ion-title>
      </ion-toolbar>
    </ion-header> -->

    <ion-content>
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nimrod's Ascent</ion-title>
        </ion-toolbar>
      </ion-header> --> 

      <div id="container">
        <div id="purpleBox">
          <div id="whiteBox">
            <h1 id="titleText">Nimrod's Ascent</h1>
          </div>
        </div>
        <div id="startButton">
          <button class="nes-btn is-primary" @click="makeLocal()">New Game</button>
          <br>
          <button id='resume' v-show='ok' class="nes-btn is-success" @click="resume()">Resume</button>
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