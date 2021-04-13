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

  import { server } from '../../helper.js';
  import axios from 'axios';

  export function fetchPlayer(x) {
    var id = x;
    axios
      .get(`${server.baseURL}/player/${id}`)
      .then(data => (this.player = data.data));
  }
  export function fetchEnemy() {
    axios
      .get(`${server.baseURL}/enemy/Goblin`) //hardcoded "goblin" for time being
      .then(data => (this.enemy = data.data));
  }
