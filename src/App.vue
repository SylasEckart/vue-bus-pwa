<template>
  <div id="app">
  <ListAlerts :alerts="alerts" :key="alerts"/>
  </div>
</template>

<script>
import ListAlerts from './components/ListAlerts.vue';

export default {
  components: {
    ListAlerts,
  },
  data() {
    return {
      alerts: [],
    }
  },
   methods: {
    addAlert(alert) {
      if(this.alertEditavel.index > -1){ 
        console.log(this.alerts,alert)
        this.alerts[this.alertEditavel.index] = alert
        console.log(this.alerts,alert)
        this.alertEditavel = {}
      }
      else this.alerts.push(alert)
    },
    removealert(index) {
      this.alerts[index] = null
      this.alerts = this.alerts.filter(i=>i)
    },
    // editaalert(index){
    //     this.alertEditavel = {...this.alerts[index],index} 
    // }
  },
  mounted() {
    if (localStorage.getItem('alerts')) this.alerts = JSON.parse(localStorage.getItem('alerts'))
  },
  watch: {
    alerts: {
      handler:function(a,b) {
        localStorage.setItem('alerts', JSON.stringify(this.alerts))
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss">

</style>
