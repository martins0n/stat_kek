<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
        <v-stage :config="configKonva" align="center" ref="stageFirst">
            <v-layer>
                <Lines infoStage="stageFirst"/>
                <ImageComp/>
            </v-layer>
        </v-stage>
  </div>
</template>

<script>

import Lines from "./Lines"
import ImageComp from "./ImageComp"


export default {
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