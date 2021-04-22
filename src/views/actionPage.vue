<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Action Page</ion-title>
      </ion-toolbar>
    </ion-header>

      <div id="container">
        <div id="actionText" class="nes-container is-rounded">
          <p>
            {{ enemy.Name }} 
            HP: {{ enemy.Hp }}     
            Attack: {{ enemy.Attack }}<br>
            {{ logText }} <br>
            {{ log2Text }}
          </p>
        </div>
        <div id="statBar">
            <ion-item lines="none">{{ player.Name }}</ion-item>
            <ion-item lines="none">HP: <br>{{ player.Hp }} / {{ maxHp }}</ion-item>
            <ion-item lines="none">Atk: {{ player.Attack }}</ion-item>
            <ion-item lines="none">Dex: {{ player.Dex }}</ion-item>
        </div>
        <div id="actionButtons">
          <button @click= "attack(enemy.Hp, enemy.Attack, enemy.Name, player.Hp, player.Attack)" class="aButton nes-btn is-error">Attack</button>
          <button @click='heal()' class="aButton nes-btn is-success">Heal</button>
        </div>
      </div>
      <div>
        <button id="continue" class="nes-btn is-primary" @click= 'updatePlayer(player.Hp, player.PageId, enemy.Hp)'>Continue</button>
      </div>

  </ion-page>
</template>

<script src="./Script/actionPage.js"></script>
<style src="./CSS/actionPage.css" scoped></style>