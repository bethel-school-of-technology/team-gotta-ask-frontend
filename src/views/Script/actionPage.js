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

  import { server } from '../../helper.js';
  import axios from 'axios';

  export function fetchPlayer() {
    var hope = this;

    axios
      .get(`${server.baseURL}/player/606d03b156487248908b74b2`) //hardcoded for time being
      .then(data => (
        hope.player.Name = data.data.name,
        hope.player.Hp = data.data.hp,
        hope.player.Attack = data.data.attack
        ));
  }

  function playerAttack(Attack, Hp, Name){
    let newHp;

    if (Hp - Attack <= 0){
      newHp = 0;
      alert("You did " + Hp + " damage! " + Name + " defeated!");
    }
    else {
      newHp = Hp - Attack;
      console.log(newHp);
      alert("You did " + Attack + " damage!");
    }
    return newHp;
  }

  function enemyAttack(Attack, Hp, Name) {
    let newHp;

    if(Hp - Attack <=0) {
      newHp = 0;
      alert("... aww this must be death ...")
    }
    else {
      newHp = Hp - Attack;
      alert(Name + " attacks for " + Attack + " damage!");
    }
    return newHp;
  }

  
  export function attack(eHp, eAttack, eName, pHp, pAttack) {
    
    let enemyHealth = playerAttack(pAttack, eHp, eName);
    console.log(enemyHealth);
    this.enemy.Hp = enemyHealth;
    let playerHealth = enemyAttack(eAttack, pHp, eName);
    console.log(playerHealth);
    this.player.Hp = playerHealth;
  }

  export function fetchEnemy() {
    var hope = this;
    axios
      .get(`${server.baseURL}/enemy/Goblin`) //hardcoded "goblin" for time being
      .then(data => (
        hope.enemy.Name = data.data.name,
        hope.enemy.Hp = data.data.hp,
        hope.enemy.Attack = data.data.attack
      ));
  }

  