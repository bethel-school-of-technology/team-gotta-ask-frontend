import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
    },
    methods: {
        clearLocal(){
            localStorage.removeItem('playerId');
            console.log('playerId');
            window.location.href = '/characterCreation';
        }
    }
});

