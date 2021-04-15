import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";

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
});

import { server } from "../../helper.js";
import axios from "axios";

export function fetchPlayer() {
    var hope = this;
    let playerId = localStorage.getItem("playerId");

    axios
        .get(`${server.baseURL}/player/${playerId}`) //hardcoded for time being
        .then(
            (data) => (
                (hope.player.Name = data.data.name),
                (hope.player.Hp = data.data.hp),
                (hope.player.Attack = data.data.attack),
                (hope.player.PageId = data.data.pageId)
            )
        );
}

export function updatePlayer(hp, id, eHp) {
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
}
export async function attack(eHp, eAttack, eName, pHp, pAttack) {
    // Player attacking
    let newHp;
    let text;
    let roll = Math.floor(Math.random() * 10) + 1;
    if (roll >= 7) {
        if (eHp - pAttack <= 0) {
            newHp = 0;
            text = "You did " + eHp + " damage! " + eName + " defeated!";
        } else {
            newHp = eHp - pAttack;
            text = "You did " + pAttack + " damage!";
        }
    } else {
        text = "You missed!";
        newHp = eHp;
    }
    this.enemy.Hp = newHp;
    this.logText = text;
    // Player attack ends
    // Enemy attacking

  if (roll >= 5) {
    if (pHp - eAttack <= 0) {
        this.player.Hp = 0;
        this.log2Text = "... aww this must be death ...";
        window.location.href = "/gameOverPage";
        // Delete player by id
    } else {
        this.player.Hp = pHp - eAttack;
        this.log2Text = eName + " attacks for " + eAttack + " damage!";
      } 
  } else {
      this.log2Text = eName + " missed!";
      this.player.Hp = pHp;
  }
}

export function fetchEnemy() {
    var hope = this;
    var pageId = localStorage.getItem("pageId");
    axios
        .get(`${server.baseURL}/enemy/${pageId}`) //hardcoded "goblin" for time being
        .then(
            (data) => (
                (hope.enemy.Name = data.data.name),
                (hope.enemy.Hp = data.data.hp),
                (hope.enemy.Attack = data.data.attack)
            )
        );
}