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
import { defineComponent } from "vue";
import { server } from '../../helper.js';

export default defineComponent({
    name: "gameOverPage",
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

    created() {

    },

    methods: {
        deletePlayer() {
            let playerId = localStorage.getItem('playerId');
            axios
                .delete(`${server.baseURL}/player/delete/${playerId}`).
                then(
                    localStorage.clear(),
                    window.location.href = "/home"
                )
        }
    }
});