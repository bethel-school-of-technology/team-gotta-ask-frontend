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

  export function randomIdGenerator () {
    var id = Math.floor(Math.random() * 1000000) + 1;
    console.log(id);
    return id;
  }

  export const postPlayer = (x) => {
    var id = x;
    var name = document.getElementById('customName').value;
    var hp = document.getElementById('hpInput').value;
    var attack = document.getElementById('attackInput').value;

    axios
      .post (
        `${server.baseURL}/player/create`,
        {
          id: id,
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

    if ( numbersInput > 10) {
      alert("more than 10 points, please adjust values and try again")
    }
    else {
      var tempId= randomIdGenerator();
      console.log('1st' + this.playerId);
      this.playerId = tempId;
      console.log('2nd' + this.playerId);
      postPlayer(tempId);
      //window.location.href = '/longTextPage'
      return this.playerId;
    }
  }