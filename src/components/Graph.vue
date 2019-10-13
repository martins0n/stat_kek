<template>
  <div class="chart-wrapper">
    <chart 
      :options="chartOptionsLine"
      autoresize></chart>
  </div>
</template>

<script>
import line from './line'

export default {
    name: "Graph",
    computed: {
        chartOptionsLine (){
            return line(
                this.$store.state.betanormalstore.success, 
                this.$store.state.betanormalstore.trials
            )
        }
    }
}



</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 700px;
}
</style>
