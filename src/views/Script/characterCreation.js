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
    data() {
      return {
        playerId: 1
      }
    },
    methods: {
      async checkNumbers(){
        var numbersInput = parseInt(document.getElementById("hpInput").value)
         + parseInt(document.getElementById("attackInput").value)
         + parseInt(document.getElementById('dexInput').value);
    
        if ( numbersInput != 10) {
          alert("you need to distribute exactly 10 points, please adjust values and try again")
        }
        else {
          var name = document.getElementById('customName').value;
          var hp = 13 * (document.getElementById('hpInput').value) + 7;
          var attack = 3 * (document.getElementById('attackInput').value) + 5;
          let dex = 5 * (document.getElementById('dexInput').value);
          localStorage.setItem('dex', dex);
          console.log("variable: " + dex);
          console.log("local store: " + localStorage.getItem('dex'));
          var pageId = 1;
      
          axios
            .post (
              `${server.baseURL}/player/create`,
              {
                name: name,
                hp: hp,
                attack: attack,
                pageId: pageId
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
    }
  });

  //  export function randomNumberGenerator () {
  //   var rando = Math.floor(Math.random() * 1000000) + 1;
  //   return rando;
  // }

  // export async function checkNumbers(){
    
  //   var numbersInput = parseInt(document.getElementById("hpInput").value)
  //    + parseInt(document.getElementById("attackInput").value)
  //    + parseInt(document.getElementById('dexInput').value);

  //   if ( numbersInput != 10) {
  //     alert("you need to distribute exactly 10 points, please adjust values and try again")
  //   }
  //   else {
  //     var name = document.getElementById('customName').value;
  //     var hp = 13 * (document.getElementById('hpInput').value) + 7;
  //     var attack = 3 * (document.getElementById('attackInput').value) + 5;
  //     let dex = 5 * (document.getElementById('dexInput').value);
  //     localStorage.setItem('dex', dex);
  //     console.log("variable: " + dex);
  //     console.log("local store: " + localStorage.getItem('dex'));
  //     var pageId = 1;
  
  //     axios
  //       .post (
  //         `${server.baseURL}/player/create`,
  //         {
  //           name: name,
  //           hp: hp,
  //           attack: attack,
  //           pageId: pageId
  //         })
  //         .then(response => {
  //           console.log(response.data.player._id);
  //           localStorage.setItem('playerId', response.data.player._id);
  //           window.location.href = '/longTextPage'
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
    
  //   }
  // }