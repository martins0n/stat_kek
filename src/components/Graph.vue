<template>
  <div class="chart-wrapper">
    <h2> Beta distribution vs Normal distribution</h2>
    <input v-model="success" placeholder="success" v-on:input="redraw">
    <input v-model="trials" placeholder="trials" v-on:input="redraw">
    <p>Success: {{ success }}</p>
    <p>Trials: {{ trials }}</p>
    <chart 
      :options="chartOptionsLine"
      autoresize></chart>
  </div>
</template>

<script>
import line from './line'

export default {
  name: "Graph",
  data: () => ({
    success: 12,
    trials: 20,
    chartOptionsLine: line(12, 20)
  }),
  methods: {
    redraw(){
      this.chartOptionsLine = line(this.success, this.trials)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart-wrapper {
  width: 100%;
  height: 700px;
}
</style>
