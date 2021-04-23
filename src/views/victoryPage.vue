<template>
  <ion-page>
    <!-- <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header> -->

    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>   -->

      <div class='container'>
        
        <h1 id="title">Victory!</h1>

        <div class='body'>

          <div id="textDiv">
            <p id="text">Are you really satisfied with stopping now? Don't quit while you're ahead!</p>
          </div>

          <div id="buttonDiv">
            <button id="button1" class="nes-btn is-primary" @click="nextLevel()">Keep Playing</button>
            <button id="button2" class="nes-btn is-error" @click="deletePlayer()">Quit</button>
          </div>

        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script src="./Script/victoryPage.js"></script>
<style src="./CSS/victoryPage.css" scoped></style>