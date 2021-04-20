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
import { server } from '../../helper.js';
import axios from "axios";

export default defineComponent({
    name: "characterCreation",
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
            playerId: 1
        }
    },
    created() {
        this.levelUp();
    },
    methods: {
        async checkNumbers() {
            let hp = 0;
            let attack = 0;
            let dex = 0;
            let floorLevel = localStorage.getItem('floorLevel');

            let numbersInput = parseInt(document.getElementById("hpInput").value) +
                parseInt(document.getElementById("attackInput").value) +
                parseInt(document.getElementById('dexInput').value);
            localStorage.setItem('pageId', 1)
            let pageId = localStorage.getItem('pageId');
            if (floorLevel == 1) {
                if (numbersInput != 10) {
                    alert("you need to distribute exactly 10 points, please adjust values and try again")
                } else {
                    let name = document.getElementById('customName').value;
                    hp = 15 * (document.getElementById('hpInput').value) + 10;
                    attack = 5 * (document.getElementById('attackInput').value) + 5;
                    dex = 5 * (document.getElementById('dexInput').value);
                    localStorage.setItem('hp', hp);
                    localStorage.setItem('maxHp', hp);
                    localStorage.setItem('attack', attack);
                    localStorage.setItem('name', name);
                    localStorage.setItem('dex', dex);

                    axios
                        .post(
                            `${server.baseURL}/player/create`, {
                                name: name,
                                hp: hp,
                                attack: attack,
                                dex: dex,
                                pageId: pageId,
                                floorLevel: 1
                            })
                        .then(response => {
                            console.log(response.data.player._id);
                            localStorage.setItem('playerId', response.data.player._id);
                            window.location.href = '/longTextPage'
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            } else if (floorLevel > 1) {
                let name = localStorage.getItem('name');
                let playerId = localStorage.getItem('playerId');
                if (numbersInput != this.points) {
                    alert("you need to distribute exactly " + this.points + " points, please adjust values and try again")
                } else {
                    hp = parseInt(localStorage.getItem('hp')) + (15 * (document.getElementById('hpInput').value));
                    attack = parseInt(localStorage.getItem('attack')) + (5 * (document.getElementById('attackInput').value));
                    dex = parseInt(localStorage.getItem('dex')) + (5 * (document.getElementById('dexInput').value));

                    localStorage.setItem('hp', hp);
                    localStorage.setItem('attack', attack);
                    localStorage.setItem('name', name);
                    localStorage.setItem('dex', dex);

                    let updated = {
                        hp: hp,
                        attack: attack,
                        dex: dex,
                        pageId: pageId,
                        floorLevel: floorLevel
                    }

                    axios
                        .put(
                            `${server.baseURL}/player/update/${playerId}`, updated)
                        .then(
                            (window.location.href = "/longTextPage")
                        );
                }
            }
        },

        levelUp() {
            this.place = "0-" + this.points;
            let floorLevel = localStorage.getItem('floorLevel');
            console.log(floorLevel);
            if (floorLevel > 1) {
                this.charName = localStorage.getItem('name');
                this.title = 'Level Up';
                this.points = 1 + parseInt(floorLevel);
                console.log(this.points);
            } else {
                this.title = 'Create your Character';
                this.charName = "Character Name"
                this.points = 10;
            }
            this.place = "0-" + this.points;
        }

    }
});