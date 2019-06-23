<template>
  <md-card-content>
     <div class="md-layout-item">
          <md-dialog-prompt
      :md-active.sync="dialogLocation"
      md-title="Nome da localização"
      v-model="currentLocation"
      md-content="Usar Localização Atual"
      md-confirm-text="Concordo"
      md-cancel-text="Discordo"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />

    <div class="md-layout md-gutter">
      <div class="md-layout-item">
           <md-field md-clearable>
              <md-icon>directions_bus</md-icon>
              <label>Onibus</label>
              <md-input maxlength="6" md-counter="6"></md-input>
            </md-field>
      </div>
      <div class="md-layout-item">
          <md-field v-if="myLocations.length" md-clearable>
              <md-icon>location_on</md-icon>
              <label>Endereço</label>
              <md-input readonly v-model="myLocations[myLocations.length - 1].nome"></md-input>
            </md-field>
      </div>
      <div class="md-layout-item">
          <md-button class="md-fab md-primary" @click="dialogLocation = true"><md-icon>my_location</md-icon></md-button>
      </div>
      <div class="md-layout-item">
          <md-button class="md-primary" @click="$emit('toggleModalForm')">Fechar</md-button>
              <md-button class="md-primary" @click="onSave">Salvar Alerta</md-button>
      </div>
      </div>
      <div class="md-layout-item">
      
      </div>
    </div>
   
  </md-card-content>
</template>

<script>
export default {
   data() {
      return{
        dialogLocation:false,
        myLocations:{},
        currentLocation:null
      }
    },
    methods:{
      onCancel(){
        this.dialogLocation = false
      },
      onConfirm(){
         if(navigator.geolocation){
	        navigator.geolocation.getCurrentPosition(this.savePosition);
	      }else{
	        this.error = "Geolocation is not supported."; 
	      }
      },
      onSave(){
        $emit('saveForm',{
            lat:this.myLocations[this.currentLocation].lat,
            lon:this.myLocations[this.currentLocation].lon,
            nome:this.currentLocation
            })
      },
	    savePosition(position) {	
        const
          lat = position.coords.latitude,
          lon = position.coords.longitude,
          nome = this.currentLocation
          this.myLocations[nome] = ({lat,lon})
      } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
