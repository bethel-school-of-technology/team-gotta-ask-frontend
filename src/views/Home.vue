<!--CSS needs to be added to this page, remember to prioritze the look for mobile-->
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Title Page</ion-title>
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
          <h1>G.A.W. RPG</h1>
        </div>
        <div>
          <!--these buttons will most likely have to call script that initiates a request to the backend as well as routes to the correct page-->
          <ion-button color="primary" href="/characterCreation">Start</ion-button>
          <ion-button color="primary" href="/victoryPage">Victory</ion-button>
          <ion-button color="primary" href="/gameOverPage">Game Over</ion-button>
        </div>
        <div>
          <!--these buttons will most likely have to call script that initiates a request to the backend as well as routes to the correct page-->
          <ion-button color="danger">Quit (Doesn't function)</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/home.js"></script>
<style src="./CSS/home.css" scoped></style>