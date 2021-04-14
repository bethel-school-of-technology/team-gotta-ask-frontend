<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Long Text Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ text.title }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div id="content">
          <p>
            {{ text.body }}
          </p>
          <div id="continueButton">
            <ion-button id="continue" color="primary" @click="continueButton()">Continue</ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/longTextPage.js"></script>
<style src="./CSS/longTextPage.css" scoped></style>