<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Action Page</ion-title>
      </ion-toolbar>
    </ion-header>

      <div id="container">
        <div id="actionText">
          <p>
            {{ enemy.Name }} 
            Hp: {{ enemy.Hp }}     
            Attack: {{ enemy.Attack }}<br>
            {{ logText }} <br>
            {{ log2Text }}
          </p>
        </div>
        <ion-list id="statBar" lines="none">
          <ion-list id="stats">
            <ion-item>{{ player.Name }}</ion-item>
            <ion-item>HP: <br>{{ player.Hp }} / {{ maxHp }}</ion-item>
            <ion-item>Atk: {{ player.Attack }}</ion-item>
            <ion-item>Dex: {{ player.Dex }}</ion-item>
          </ion-list>
        </ion-list>
        <div id="actionButtons">
          <ion-button @click= "attack(enemy.Hp, enemy.Attack, enemy.Name, player.Hp, player.Attack)" class="aButton" color="danger">Attack</ion-button>
          <ion-button @click='heal()' class="aButton" color="success">Heal</ion-button>
        </div>
      </div>
      <div>
        <ion-button id="continue" color="primary" @click= 'updatePlayer(player.Hp, player.PageId, enemy.Hp)'>Continue</ion-button>
      </div>

  </ion-page>
</template>

<script src="./Script/actionPage.js"></script>
<style src="./CSS/actionPage.css" scoped></style>