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
    name: "victoryPage",
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
    methods: {
        deletePlayer() {
            let playerId = localStorage.getItem('playerId');
            axios
                .delete(`${server.baseURL}/player/delete/${playerId}`);
            window.location.href = "/home";
        },
        nextLevel() {
            let level = localStorage.getItem('floorLevel');
            level++; 
            localStorage.setItem('floorLevel', level);
            window.location.href = "/charactercreation";
        }
    },
});