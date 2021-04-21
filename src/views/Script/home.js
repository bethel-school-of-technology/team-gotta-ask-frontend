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
    created() {
        //let resume = document.getElementById('resume');
        let pageId = parseInt(localStorage.getItem('pageId'));
        if(pageId >= 1) {
            this.ok = true;
        }else{
            this.ok = false;
        }
    },
    methods: {
        makeLocal(){
            localStorage.removeItem('playerId');
            localStorage.setItem('pageId', 1);
            localStorage.setItem('floorLevel', 1);
            console.log('playerId');
            window.location.href = '/characterCreation';
        },
        resume(){
            window.location.href = '/longTextPage';
        }
    }
});

