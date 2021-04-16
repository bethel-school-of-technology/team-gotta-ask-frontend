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

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      <h1 id="title">Victory!</h1>

      <div id="textDiv">
          <p id="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>

      <div id="buttonDiv">
        
        <ion-button id="button" color="primary" @click="nextLevel()">Keep Playing</ion-button>
        <ion-button id="button" color="danger" @click="deletePlayer()">Quit</ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script src="./Script/victoryPage.js"></script>
<style src="./CSS/victoryPage.css" scoped></style>