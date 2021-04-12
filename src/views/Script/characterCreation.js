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

  export function checkNumbers(){
    var numbersInput = parseInt(document.getElementById("hpInput").value) + parseInt(document.getElementById("attackInput").value);
    console.log("does my code know how to add? : " + numbersInput);

    if ( numbersInput > 10) {
      alert("more than 10 points, please adjust values and try again")
    }
    else {
      window.location.href = '/longTextPage'
    }
  }