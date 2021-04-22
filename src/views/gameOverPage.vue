<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Game Over Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Game Over</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1 id="title">Game Over!</h1>
      
        <div id="textDiv">
            <p id="text">As the world fades around you, you question: "What could I have done differently?"</p>
        </div>

        <div id="buttonDiv">
          <button id="button" class="nes-btn is-primary" @click="deletePlayer()">Play Again</button>
        </div>

      </div>

    </ion-content>
  </ion-page>
</template>

<script src="./Script/gameOverPage.js"></script>
<style src="./CSS/gameOverPage.css" scoped></style>