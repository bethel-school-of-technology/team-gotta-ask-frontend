<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Action Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Combat!</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div id="actionText">
          <p>
            Enemy: {{ enemy.name }} <br>
            Hp: {{ enemy.hp }} <br>
            Attack: {{ enemy.attack }}
          </p>
        </div>
        <ion-list id="statBar" lines="none">
          <!--  icon is not currently rendering, will fix later -->
          <!-- <ion-icon name="person"></ion-icon> -->
          <ion-list id="stats">
            <ion-item>{{ player.name }}</ion-item>
            <ion-item>HP: {{ player.hp }}</ion-item>
            <ion-item>Atk: {{ player.attack }}</ion-item>
          </ion-list>
        </ion-list>
        <div id="actionButtons">
          <!--  -->
          <ion-button class="aButton" color="danger">Attack</ion-button>
          <ion-button class="aButton" color="warning">Defend</ion-button>
          <ion-button class="aButton" color="success">Heal</ion-button>
        </div>
      </div>
      <div>
        <ion-button id="continue" color="primary">Continue</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { fetchEnemy, fetchPlayer } from './Script/actionPage.js'
  export default {
    data() {
      return {
        player: {},
        enemy: {}
      };
    },
    inject:
      [playerId],
    created() {
      this.fetchPlayer();
      this.fetchEnemy();
    },
    methods: {
      fetchPlayer,
      fetchEnemy
    }
  }

</script>


<style src="./CSS/actionPage.css" scoped></style>