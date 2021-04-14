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

  export function randomNumberGenerator () {
    var rando = Math.floor(Math.random() * 1000000) + 1;
    return rando;
  }

  // export const postPlayer = () => {
  //   var name = document.getElementById('customName').value;
  //   var hp = 3 * (document.getElementById('hpInput').value) + 20;
  //   var attack = 2 * (document.getElementById('attackInput').value) + 5;

  //   axios
  //     .post (
  //       `${server.baseURL}/player/create`,
  //       {
  //         name: name,
  //         hp: hp,
  //         attack: attack
  //       })
  //       .then(response => {
  //         console.log(response.data.player._id);
  //         localStorage.setItem('playerId', response.data.player._id);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  // }

  export async function checkNumbers(){
    var numbersInput = parseInt(document.getElementById("hpInput").value) + parseInt(document.getElementById("attackInput").value);

    if ( numbersInput > 10) {
      alert("more than 10 points, please adjust values and try again")
    }
    else {
      var name = document.getElementById('customName').value;
      var hp = 3 * (document.getElementById('hpInput').value) + 20;
      var attack = 2 * (document.getElementById('attackInput').value) + 5;
  
      axios
        .post (
          `${server.baseURL}/player/create`,
          {
            name: name,
            hp: hp,
            attack: attack
          })
          .then(response => {
            console.log(response.data.player._id);
            localStorage.setItem('playerId', response.data.player._id);
            window.location.href = '/longTextPage'
          })
          .catch(err => {
            console.log(err);
          });
    
    }
  }