import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import { server } from "../../helper";
  import axios from 'axios';
  
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

export default {
  data() {
    return {
      name: "",
      hp: "",
      attack: ""
    };
  },
  methods: {
    createCustomer() {
      let customerData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        description: this.description
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/customer/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};

  export function updatePlaya() { 
    axios.put(
        `http://localhost:3000/update/player/606789deee2ca644d45b2280`,
        {
          name: document.getElementById("customName"),
          hp: document.getElementById("hpInput"),
          attack: document.getElementById("attackInput")
        }  
    )}

  export function checkNumbers(){
    var numbersInput = parseInt(document.getElementById("hpInput").value) + parseInt(document.getElementById("attackInput").value);
    console.log("does my code know how to add? : " + numbersInput);

    if ( numbersInput > 10) {
      alert("more than 10 points, please adjust values and try again")
    }
    else {
      updatePlaya();
      window.location.href = '/longTextPage'
    }
  }