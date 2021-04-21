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
    IonList,
    IonIcon
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
        IonList,
        IonIcon
    },
    data() {
        return {
            playerId: 1
        }
    },
    created() {
        this.levelUp();
        this.variables();
    },
    methods: {
        variables() {
            this.hp = 0;
            this.attack = 0;
            this.dex = 0;
        },
        async checkNumbers() {
            let hp = this.hp;
            let attack = this.attack;
            let dex = this.dex;
            let floorLevel = localStorage.getItem('floorLevel');

            let numbersInput = hp + attack + dex;
            localStorage.setItem('pageId', 1)
            let pageId = localStorage.getItem('pageId');
            if (floorLevel == 1) {
                if (numbersInput != 10) {
                    alert("you need to distribute exactly 10 points, please adjust values and try again")
                } else {
                    let name = document.getElementById('customName').value;
                    hp = 15 * hp + 10;
                    attack = 5 * attack + 5;
                    dex = 5 * dex;
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
                    hp = 15 * hp + 10;
                    attack = 5 * attack + 5;
                    dex = 5 * dex;

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
                this.points = 2 + Math.floor(parseInt(floorLevel) / 2);
                console.log(this.points);
            } else {
                this.title = 'Create your Character';
                this.charName = "Character Name"
                this.points = 10;
            }
            this.place = "0-" + this.points;
        },

        plusHp() {
            if (this.points > 0) {
                this.hp = this.hp + 1;
                this.points = this.points - 1;
                this.$forceUpdate();
            }
        },

        minusHp() {
            if (this.points < 10 && this.hp > 0) {
                this.hp = this.hp - 1;
                this.points = this.points + 1;
                this.$forceUpdate();
            }
        },

        plusAttack() {
            if (this.points > 0) {
                this.attack = this.attack + 1;
                this.points = this.points - 1;
                this.$forceUpdate();
            }
        },

        minusAttack() {
            if (this.points < 10 && this.attack > 0) {
                this.attack = this.attack - 1;
                this.points = this.points + 1;
                this.$forceUpdate();
            }
        },

        plusDex() {
            if (this.points > 0) {
                this.dex = this.dex + 1;
                this.points = this.points - 1;
                this.$forceUpdate();
            }
        },

        minusDex() {
            if (this.points < 10 && this.dex > 0) {
                this.dex = this.dex - 1;
                this.points = this.points + 1;
                this.$forceUpdate();
            }
        },

        statHelp() {
            alert("These numbers will be used to calculate your base stats.")
        }
    }
});