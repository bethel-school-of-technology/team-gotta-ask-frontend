<!--CSS needs to be added to this page, remember to prioritze the look for mobile-->
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
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div id="actionText">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt"
          </p>
        </div>
        <ion-list id="statBar">
          <!--  icon is not currently rendering, will fix later -->
          <ion-icon name="person"></ion-icon>
          <ion-list id="stats">
            <ion-item>Zandek</ion-item>
            <ion-item>HP: 100</ion-item>
            <ion-item>Atk: 25</ion-item>
          </ion-list>
        </ion-list>
        <div id="path">
          <!-- Routing to be decided with backend progress -->
          <ion-button color="primary">Continue</ion-button>
        </div>
        <div id="actionButtons">
          <!--  -->
          <ion-button class="aButton" color="danger">Attack</ion-button>
          <ion-button class="aButton" color="medium">Defend</ion-button>
          <ion-button class="aButton" color="success">Heal</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "actionPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon
  },
});
</script>

<style scoped>
#container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#actionText {
    display: grid;
    grid-row: 1/2;
    grid-column: 2/6;
    border: solid gray 1px;
    text-align: center;
    align-content: center;
}

#path {
    display: grid;
    grid-row-start: 4;
    grid-column: 3/5;
    align-content: center;
}

#actionButtons {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row: 3/4;
    grid-column: 4/6;
    border: solid purple 1px;
}

#statBar {
    display: grid;
    grid-row: 3/4;
    grid-column: 1/3;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>