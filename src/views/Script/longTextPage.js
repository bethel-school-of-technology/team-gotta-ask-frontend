import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonList
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
        IonButton,
        IonInput,
        IonItem,
        IonLabel,
        IonList
    },

    data() {
        return {
            text: {}
        }
    },

    created() {
        this.getText();
    },

    methods: {
        getText() {
            var hope = this;
            let pageId = localStorage.getItem('pageId');
            let floorLevel = localStorage.getItem("floorLevel");
            if(floorLevel == 1 && pageId == 1){
                hope.text.title = "And So It Begins",
                hope.text.body = "You set off on your adventure to climb the Great Tower and the title of 'World's Greatest Hunter'. Your first challenger approaches..."
            }else{

                axios
                    .get(`${server.baseURL}/longText/${pageId}`)
                    .then(data => (
                     hope.text.title = data.data.title,
                     hope.text.body = data.data.body,
                        hope.text.pageId = data.data.pageId
                    ));
            }
        },

        continueButton() {
            let pageId = localStorage.getItem('pageId');
            if (pageId == 6) {
                window.location.href = '/victoryPage'
            } else {
                window.location.href = '/actionPage'
            }
        },
        pause() {
            window.location.href = "/home";
        }
    }

});