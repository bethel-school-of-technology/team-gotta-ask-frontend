<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      playerId: 1
    }
  },
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>