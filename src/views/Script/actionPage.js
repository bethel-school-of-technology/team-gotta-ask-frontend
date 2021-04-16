import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
} from "@ionic/vue";

import { defineComponent } from "vue";
import { server } from "../../helper.js";
import axios from "axios";

export default defineComponent({
    name: "actionPage",
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonIcon,
    },
    data() {
        return {
            player: {},
            enemy: {}
        };
    },
    created() {
        this.fetchPlayer();
        this.fetchEnemy();
    },
    methods: {
        fetchPlayer() {
            var hope = this;
            let playerId = localStorage.getItem("playerId");
            console.log(playerId);
            axios
                .get(`${server.baseURL}/player/${playerId}`)
                .then(
                    (data) => (
                        (hope.player.Name = data.data.name),
                        (hope.player.Hp = data.data.hp),
                        (hope.player.Attack = data.data.attack),
                        (hope.player.Dex = data.data.dex),
                        (hope.player.PageId = data.data.pageId),
                        (hope.player.floorLevel = data.data.floorLevel)
                    )
                );
        },

        updatePlayer(hp, id, eHp) {
            let playerId = localStorage.getItem("playerId");
            let pageCount = id;

            if ((eHp == 0)) {
                pageCount++;
                localStorage.setItem("pageId", pageCount);
                console.log(localStorage.getItem("pageId"));

                let updated = {
                    hp: hp,
                    pageId: pageCount,
                };

                console.log(updated);
                axios
                    .put(`${server.baseURL}/player/update/${playerId}`, updated)
                    .then(
                        (data) => (this.player = data.data),
                        (window.location.href = "/longTextPage")
                    );
            } else {
                alert("If you were allowed to run we would give you a button.")
            }
        },

        playerAttack(Attack, Hp, Name) {
            let newHp;
            let text;
            let dex = parseInt(localStorage.getItem('dex')) + 10;
            console.log(dex);
            let playerRoll = Math.floor(Math.random() * dex) + 1;
            let playerAttack = Math.floor(Math.random() * Attack) + 1

            if (playerRoll >= 6) {
                if (Hp - playerAttack <= 0) {
                    newHp = 0;
                    text = "You did " + Hp + " damage! " + Name + " defeated!";
                } else {
                    newHp = Hp - playerAttack;
                    //console.log(newHp);
                    text = "You did " + playerAttack + " damage!";
                }
            } else {
                text = "You missed!";
                newHp = Hp;
            }
            console.log(text + " You rolled: " + playerRoll);
            return [newHp, text, playerRoll, playerAttack];
        },

        enemyAttack(Attack, Hp, Name) {
            let newHp;
            let text;
            let dex = (localStorage.getItem('dex') / 5);
            let enemyRoll = Math.floor(Math.random() * 20) + 1;
            let enemyAttack = Math.floor(Math.random() * Attack) + 1
            if (enemyRoll >= 10 + dex) {
                if (Hp - enemyAttack <= 0) {
                    newHp = 0;
                    text = "... aww this must be death ...";
                    window.location.href = "/gameOverPage";
                    // Delete player by id
                } else {
                    newHp = Hp - enemyAttack;
                    text = Name + " attacks for " + enemyAttack + " damage!";
                }
            } else {
                text = Name + " missed!";
                newHp = Hp;
            }
            console.log(text + " Enemy rolled: " + enemyRoll);
            return [newHp, text];
        },

        async attack(eHp, eAttack, eName, pHp, pAttack) {
            let enemyHealth = this.playerAttack(pAttack, eHp, eName);
            console.log(enemyHealth[0]);
            this.enemy.Hp = enemyHealth[0];
            this.logText = enemyHealth[1];
            if (eHp - enemyHealth[3] > 0 || enemyHealth[2] < 5) {
                let playerHealth = this.enemyAttack(eAttack, pHp, eName);
                console.log(playerHealth[0]);
                this.player.Hp = playerHealth[0];
                this.log2Text = playerHealth[1];
            } else {
                this.log2Text = "";
            }
            this.$forceUpdate();
        },

        fetchEnemy() {
            var hope = this;
            var pageId = localStorage.getItem("pageId");
            axios
                .get(`${server.baseURL}/enemy/${pageId}`)
                .then(
                    (data) => (
                        (hope.enemy.Name = data.data.name),
                        (hope.enemy.Hp = data.data.hp),
                        (hope.enemy.Attack = data.data.attack)
                    )
                );
        }
    }
});