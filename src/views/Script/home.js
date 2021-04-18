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
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
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
        makeLocal(){
            localStorage.removeItem('playerId');
            localStorage.setItem('pageId', 1);
            localStorage.setItem('floorLevel', 1);
            console.log('playerId');
            window.location.href = '/characterCreation';
        }
    }
});

