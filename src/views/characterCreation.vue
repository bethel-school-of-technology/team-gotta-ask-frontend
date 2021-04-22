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

        <div class="ion-text-center" id="pointsAvailableContainer">
          <p id="pointsAvailable">{{ points }} available points</p>
          <ion-icon name="help-circle-outline" size="large" type="button" id="statHelp" @click="statHelp()">?</ion-icon>
          <!-- <button id="statHelp" @click="statHelp()">?</button> -->
        </div>
  
      <div id="inputContainer">
        <div class="ion-text-center" id="hpContainer">
          <ion-item>
            <ion-label  id="hpLabel">HP: {{ hp }}</ion-label>
            <!-- <ion-input id="hpInput" :placeholder = place></ion-input> -->
            <button class="nes-btn is-error" @click='minusHp()'>-</button><button class="nes-btn is-success" @click='plusHp()'>+</button>
          </ion-item>
        </div>

        <div class="ion-text-center" id="attackContainer">
          <ion-item>
            <ion-label id="attackLabel">Attack: {{ attack }} </ion-label>
            <!-- <ion-input id="attackInput" :placeholder = place></ion-input> -->
            <button class="nes-btn is-error" @click='minusAttack()'>-</button><button class="nes-btn is-success" @click='plusAttack()'>+</button>
          </ion-item>
        </div>

         <div class="ion-text-center" id="dexContainer">
          <ion-item >
            <ion-label id="dexLabel">Dexterity: {{ dex }}</ion-label>
            <!-- <ion-input id="dexInput" :placeholder = place></ion-input> -->
            <button class="nes-btn is-error" @click='minusDex()'>-</button><button class="nes-btn is-success" @click='plusDex()'>+</button>
          </ion-item>
        </div>
        

        </div>

        <div id="continue">
          <button class="nes-btn is-primary" @click="checkNumbers()">Continue</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./Script/characterCreation.js"></script>
<style src="./CSS/characterCreation.css" scoped></style>