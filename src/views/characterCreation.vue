<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <br>
        <br>
        <br>
        <br>
        <br>

        <div class="ion-text-center" id="characterName">
          <ion-input id="customName" :placeholder = charName></ion-input>
        </div>

        <div class="ion-text-center" id="pointsAvailable">
          <p>{{ points }} available points</p>
        </div>
  
        <div class="ion-text-center" id="hpContainer">
          <ion-item>
            <ion-label id="hpLabel">HP: {{ hp }}</ion-label>
            <!-- <ion-input id="hpInput" :placeholder = place></ion-input> -->
            <ion-button @click='minusHp()'>-</ion-button><ion-button @click='plusHp()'>+</ion-button>
          </ion-item>
        </div>

        <div class="ion-text-center" id="attackContainer">
          <ion-item>
            <ion-label id="attackLabel">Attack: {{ attack }} </ion-label>
            <!-- <ion-input id="attackInput" :placeholder = place></ion-input> -->
            <ion-button @click='minusAttack()'>-</ion-button><ion-button @click='plusAttack()'>+</ion-button>
          </ion-item>

           <div class="ion-text-center" id="dexContainer">
          <ion-item>
            <ion-label id="dexLabel">Dexterity: {{ dex }}</ion-label>
            <!-- <ion-input id="dexInput" :placeholder = place></ion-input> -->
            <ion-button @click='minusDex()'>-</ion-button><ion-button @click='plusDex()'>+</ion-button>
          </ion-item>
        </div>

        </div>

        <div id="continue">
          <ion-button @click="checkNumbers()">Continue</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/characterCreation.js"></script>
<style src="./CSS/characterCreation.css" scoped></style>