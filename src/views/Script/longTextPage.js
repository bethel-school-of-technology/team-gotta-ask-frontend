import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/vue";
import axios from "axios";
import { server } from '../../helper.js';
import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "longTextPage",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },

    data() {
      return {
        text: {}
      }
    },

    created(){
      this.getText();
    },

    methods: {
      getText() {
        var hope = this;
        let pageId = localStorage.getItem('pageId');
        axios
          .get(`${server.baseURL}/longText/${pageId}`) //hardcoded "goblin" for time being
          .then(data => (
            hope.text.title = data.data.title,
            hope.text.body = data.data.body,
            hope.text.pageId = data.data.pageId
          ));
      }
    }

  });