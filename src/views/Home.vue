<template>
  <ion-page>

    <ion-content>

      <div id="container">
        <div id="purpleBox" class="nes-container is-rounded">
          <h1 id="titleText" >Nimrod's Ascent</h1>
        </div>
        <div id="startButton">
          <button class="nes-btn is-primary" @click="makeLocal()">New Game</button>
          <br>
          <button id='resume' v-show='ok' class="nes-btn is-success" @click="resume()">Resume</button>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/home.js"></script>
<style src="./CSS/home.css" scoped></style>