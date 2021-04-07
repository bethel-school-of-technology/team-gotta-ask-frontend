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
    if (document.getElementById("hpNumber").value + document.getElementById("attackNumber").value > 10) {
      alert("More than 10 points input, adjust values and try again")
    }
    else {
      window.location.href = 'http://localhost:8100/longTextPage';
    }
    console.log("functin called")
  }