<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Victory Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Victory</ion-title>
        </ion-toolbar>
      </ion-header>  

      <div class='container'>
        <div class='body'>
      <h1 id="title">Victory!</h1>

      <div id="textDiv">
          <p id="text">Are you really satisfied with stopping now? Don't quit while you're ahead and keep going.</p>
      </div>

      <div id="buttonDiv">
        
        <button id="button" class="nes-btn is-primary" @click="nextLevel()">Keep Playing</button>
        <br>
        <button id="button" class="nes-btn is-error" @click="deletePlayer()">Quit</button>
      </div>
    </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/victoryPage.js"></script>
<style src="./CSS/victoryPage.css" scoped></style>