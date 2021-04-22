<template>
<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ text.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ text.title }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div id= 'content' class="nes-container is-rounded">
          <p>
            {{ text.body }}
          </p>
        </div>
          <div id="buttons">
            <button id='pause' class="aButton nes-btn is-warning" @click='pause()'>Save&Quit</button>
            <button id="continue" color="primary" class="nes-btn is-primary" @click="continueButton()">Continue</button>
          </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/longTextPage.js"></script>
<style src="./CSS/longTextPage.css" scoped></style>