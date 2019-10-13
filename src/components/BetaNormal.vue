<template>
  <div class="chart-wrapper">
    <h2> Beta distribution vs Normal distribution</h2>
    <input v-model="success" placeholder="success">
    <input v-model="trials" placeholder="trials">
    <p>Success: {{ success }}</p>
    <p>Trials: {{ trials }}</p>
    <Graph align="center"/>
  </div>
</template>
<script>
import Graph from './Graph.vue'


export default {
    computed: {
        success:{
            get () {
                return this.$store.state.betanormalstore.success
            },
            set (value) {
                this.$store.commit('success', value)
            }
        },
        trials: {
            get () {
                return this.$store.state.betanormalstore.trials
            },
            set (value) {
                this.$store.commit('trials', value)
            }
        }
    },
    components: {
        Graph
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>