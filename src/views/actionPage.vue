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
          <!--  icon is not currently rendering, will fix later -->
          <!-- <ion-icon name="person"></ion-icon> -->
          <ion-list id="stats">
            <ion-item>{{ player.Name }}</ion-item>
            <ion-item>HP: {{ player.Hp }}</ion-item>
            <ion-item>Atk: {{ player.Attack }}</ion-item>
          </ion-list>
        </ion-list>
        <div id="actionButtons">
          <!--  -->
          <ion-button @click= "attack(enemy.Hp, enemy.Attack, enemy.Name, player.Hp, player.Attack)" class="aButton" color="danger">Attack</ion-button>
          <ion-button class="aButton" color="medium">Defend</ion-button>
          <ion-button class="aButton" color="success">Heal</ion-button>
        </div>
      </div>

  </ion-page>
</template>

<script>
  import { fetchEnemy, fetchPlayer, attack} from './Script/actionPage.js'
  export default {
    data() {
      return {
        player: {},
        enemy: {}
      };
    },
    created() {
      this.fetchPlayer();
      this.fetchEnemy();
    },
    methods: {
      fetchPlayer,
      fetchEnemy,
      attack
    }
  }
</script>


<style src="./CSS/actionPage.css" scoped></style>