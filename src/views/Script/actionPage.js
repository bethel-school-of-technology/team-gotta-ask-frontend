import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon
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
      IonIcon
    },
  });

  import { server } from '../../helper.js';
  import axios from 'axios';

  export function fetchPlayer() {
    axios
      .get(`${server.baseURL}/player/606d03b156487248908b74b2`) //hardcoded for time being
      .then(data => (
        this.player.Name = data.data.name,
        this.player.Hp = data.data.hp,
        this.player.Attack = data.data.attack
        ));
      return (this.player.Name, this.player.Hp, this.player.Attack);
  }
  export function fetchEnemy() {
    axios
      .get(`${server.baseURL}/enemy/Goblin`) //hardcoded "goblin" for time being
      .then(data => (
        this.enemy.Name = data.data.name,
        this.enemy.Hp = data.data.hp,
        this.enemy.Attack = data.data.attack,
        console.log(this.enemyName, this.enemyHp, this.enemyAttack)
        ));
      return (this.enemy.Name, this.enemy.Hp, this.enemy.Attack);
  }
  
  export function attack() {
    var tempHp = this.enemy.Hp - this.player.Attack;
    this.enemy.Hp = tempHp;
    console.log(this.enemy.Hp);
  }
  