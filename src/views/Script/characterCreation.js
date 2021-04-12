import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/vue";
import { defineComponent } from "vue";
import { server } from '../../helper.js';
import axios from "axios";
  
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

  export const postPlayer = () => {
    var name = document.getElementById('customName').value;
    var hp = document.getElementById('hpInput').value;
    var attack = document.getElementById('attackInput').value;
    console.log(name, hp, attack);

    axios
      .post (
        `${server.baseURL}/player/create`,
        {
          name: name,
          hp: hp,
          attack: attack
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
  }

  export function checkNumbers(){
    var numbersInput = parseInt(document.getElementById("hpInput").value) + parseInt(document.getElementById("attackInput").value);
    console.log("does my code know how to add? : " + numbersInput);

    if ( numbersInput > 10) {
      alert("more than 10 points, please adjust values and try again")
    }
    else {
      postPlayer();
      window.location.href = '/longTextPage'
    }
  }