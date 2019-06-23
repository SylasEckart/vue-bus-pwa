<template>
  <div>
    <md-dialog :md-active.sync="showModalForm">
      <md-dialog-title>Alerta</md-dialog-title>
      <md-dialog-actions>
        <FormAlert @toggleModalForm="toggleModalForm" @saveForm="onSave"/>
      </md-dialog-actions>
    </md-dialog>
   <md-empty-state
      md-icon="directions_bus"
      md-label="Crie seu primeiro alerta"
      md-description="Criando um Alerta, assim que o onibus desejado estiver próximo você será avisado">
      <md-button class="md-primary md-raised" @click="showModalForm = true">Crie Seu Primeiro Alerta</md-button>
    </md-empty-state>
    
  </div>
</template>

<script>
import FormAlert from './FormAlert.vue'

export default {
  data() {
      return{
        showModalForm:false
      }
    },
  components:{
    FormAlert,
  },
  methods:{
    toggleModalForm(){ 
      this.showModalForm = !this.showModalForm
    },
    onSave(data){

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
