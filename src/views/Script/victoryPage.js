import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/vue";
import axios from "axios";
import { defineComponent } from "vue";
import { server } from '../../helper.js';

export default defineComponent({
    name: "victoryPage",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
    },
    methods: {
        deletePlayer() {
            let playerId = localStorage.getItem('playerId');
            axios
                .delete(`${server.baseURL}/player/delete/${playerId}`);
            window.location.href = "/home"
        }
    }
});