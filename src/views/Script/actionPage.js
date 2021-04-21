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
        IonButton,
        IonInput,
        IonItem,
        IonLabel,
        IonList
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
        this.maxHp = localStorage.getItem('hp');
        this.log2Text = "";
        this.logText = "";
    },
    methods: {
        fetchPlayer() {
            var hope = this;
            let playerId = localStorage.getItem("playerId");
            //console.log(playerId);
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
                // console.log(localStorage.getItem("pageId"));

                let updated = {
                    hp: hp,
                    pageId: pageCount,
                };

                //console.log(updated);
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

        heal() {
            if (this.enemy.Hp != 0) {
                let old = this.player.Attack;
                localStorage.setItem('oldAttack', old);
                let hp = localStorage.getItem('hp');
                let roll = (Math.floor(Math.random() * 25) + 1) / 100;
                //console.log('roll: ' + roll);
                let healNum = Math.ceil(hp * roll);
                //console.log('heal amount:' + healNum);
                if (this.player.Hp + healNum > hp) {
                    this.player.Hp = hp;
                    this.player.Attack = 0;
                } else {
                    this.player.Hp = this.player.Hp + healNum;
                    this.player.Attack = 0;
                }

                this.attack(this.enemy.Hp, this.enemy.Attack, this.enemy.Name, this.player.Hp, this.player.Attack, old, healNum)
            }
        },

        playerAttack(Attack, Hp, Name, old, healNum) {
            //this.player.Attack = parseInt(localStorage.getItem('oldAttack'));
            let newHp;
            let text;
            //let healBool = localStorage.getItem('healBool');
            let dex = parseInt(localStorage.getItem('dex')) + 10;
            //console.log(dex);
            let playerRoll = Math.floor(Math.random() * dex) + 1;
            let playerAttack = Math.floor(Math.random() * Attack) + 1

            if (Attack > 0) {
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
            } else {
                text = 'You healed for ' + healNum + " HP!";
                //this.player.Attack = parseInt(localStorage.getItem('oldAttack'));
                this.player.Attack = old;
                newHp = Hp;

            }
            console.log(text + " You rolled: " + playerRoll);
            return [newHp, text, playerRoll, playerAttack];
        },

        enemyAttack(Attack, Hp, Name) {
            let newHp;
            let text;
            let floorLevel = parseInt(localStorage.getItem('floorLevel'));
            let dex = (localStorage.getItem('dex') / 5);
            let enemyAttack = Math.floor(Math.random() * Attack) + 1;
            let enemyRoll = Math.floor(Math.random() * 20) + floorLevel;

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

        async attack(eHp, eAttack, eName, pHp, pAttack, old, healNum) {
            if (eHp != 0) {
                let enemyHealth = this.playerAttack(pAttack, eHp, eName, old, healNum);
                //console.log(enemyHealth[0]);
                this.enemy.Hp = enemyHealth[0];
                this.logText = enemyHealth[1];
                console.log(eHp - enemyHealth[3]);
                console.log(enemyHealth[2]);
                if (eHp - enemyHealth[3] >= 0 || enemyHealth[2] < 5) {
                    let playerHealth = this.enemyAttack(eAttack, pHp, eName);
                    //console.log(playerHealth[0]);
                    console.log('log2Text: ' + playerHealth[1]);
                    this.player.Hp = playerHealth[0];
                    this.log2Text = playerHealth[1];
                } else {
                    this.log2Text = "";
                }
                this.$forceUpdate();
            } else {
                alert("Enemy is defeated... Press continue to move on.")
            }
        },

        fetchEnemy() {
            let mult = parseInt(localStorage.getItem('floorLevel'));
            var hope = this;
            var pageId = localStorage.getItem("pageId");
            if (mult > 1) {
                let actualMult = (mult / 4) + (mult - 1);
                axios
                    .get(`${server.baseURL}/enemy/${pageId}`)
                    .then(
                        (data) => (
                            (hope.enemy.Name = data.data.name),
                            (hope.enemy.Hp = Math.ceil(data.data.hp * actualMult)),
                            (hope.enemy.Attack = Math.ceil(data.data.attack * actualMult))
                        )
                    );

            } else {
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
    }
});