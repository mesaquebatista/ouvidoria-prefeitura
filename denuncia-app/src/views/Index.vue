<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Index</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Página Inicial</ion-title>
        </ion-toolbar>
      </ion-header>

      <BotaoPrimario name="Denunciar" @click="irParaDenuncia"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import BotaoPrimario from '@/components/Botao.vue';

export default  {
  name: 'Index',
  components: { BotaoPrimario, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  methods: { 
    irParaDenuncia: function(){
      // this.$router.push(`/denunciar`)
    }
  }
}
</script>