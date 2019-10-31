<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
        <v-stage :config="configKonva" align="center" ref="stage" @mousemove="mousePosHandler">
            <v-layer>
                <Lines v-bind:mousePos="mousePos"/>
                <ImageComp/>
            </v-layer>
        </v-stage>
  </div>
</template>

<script>

import Lines from "./Lines"
import ImageComp from "./ImageComp"


export default {
    data(){
        return {
            mousePos: null
        }
    },
    methods: {
        mousePosHandler(){
            this.mousePos = this.$refs.stage.getStage().getPointerPosition()
            return this.$refs.stage.getStage().getPointerPosition()
        },
    },
    computed:{
        configKonva(){
            return {
                width: 800,
                height: 500
            }
        },
    },
    components: {
        ImageComp,
        Lines,
    }
};

</script>