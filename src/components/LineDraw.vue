<template>
  <div>
    <button v-on:click="AddLine">Add 1</button>
        <v-stage :config="configKonva" align="center" ref="stageFirst">
            <v-layer>
                <ImageComp/>
                <Lines infoStage="stageFirst"/>
            </v-layer>
        </v-stage>
        <v-stage :config="configKonva" align="center" ref="stageSecond">
            <v-layer>
                <ImageComp/>
                <Lines infoStage="stageSecond"/>
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

    methods:{
        AddLine: function(event){
            this.$store.commit(
                'addLine', 
                event,
                { module: 'linestore'}
            )
        }
    },
    components: {
        ImageComp,
        Lines,
    }
}

</script>