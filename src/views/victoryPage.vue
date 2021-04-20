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
        
        <ion-button id="button" color="primary" @click="nextLevel()">Keep Playing</ion-button>
        <ion-button id="button" color="danger" @click="deletePlayer()">Quit</ion-button>
      </div>
    </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/victoryPage.js"></script>
<style src="./CSS/victoryPage.css" scoped></style>