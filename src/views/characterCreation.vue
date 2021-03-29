<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Character Creation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div>
          <ion-label position="stacked">Character Name</ion-label>
          <ion-input placeholder="John Doe"></ion-input>
        </div>
        <div>
          <p>5 total points available.</p>
        </div>
        <div>
          <ion-label position="fixed">HP</ion-label>
          <ion-input placeholder="1-5"></ion-input>
        </div>
        <div>
          <ion-label position="fixed">ATTACK</ion-label>
          <ion-input placeholder="1-5"></ion-input>
        </div>
        <div>
            <ion-button>Continue</ion-button>
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
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "characterCreation",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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