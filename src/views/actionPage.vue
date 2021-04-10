<!--CSS needs to be added to this page, remember to prioritze the look for mobile-->
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
            Enemy: {{ enemy.Name }} <br>
            Hp: {{ enemy.Hp }} <br>
            Attack: {{ enemy.Attack }}
          </p>
        </div>
        <ion-list id="statBar" lines="none">
          <!--  icon is not currently rendering, will fix later -->
          <ion-icon name="person"></ion-icon>
          <ion-list id="stats">
            <ion-item>{{ player.Name }}</ion-item>
            <ion-item>HP: {{ player.Hp }}</ion-item>
            <ion-item>Atk: {{ player.Attack }}</ion-item>
          </ion-list>
        </ion-list>
        <div id="path">
          <!-- Routing to be decided with backend progress -->
          <ion-button color="primary">Continue</ion-button>
        </div>
        <div id="actionButtons">
          <!--  -->
          <ion-button @click= "attack(enemy.Hp, player.Attack, enemy.Name)" class="aButton" color="danger">Attack</ion-button>
          <ion-button class="aButton" color="medium">Defend</ion-button>
          <ion-button class="aButton" color="success">Heal</ion-button>
        </div>
      </div>

  </ion-page>
</template>

<!-- <script src="./Script/actionPage.js"></script> -->
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