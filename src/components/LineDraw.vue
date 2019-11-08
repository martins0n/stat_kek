<template>

<div>
    <button v-on:click="AddLine">Add line</button>
    <div class="column">
        <v-stage :config="configKonva" ref="stageFirst">
        <v-layer>
            <v-image :config="configImageFirst"/>
            <Lines infoStage="stageFirst"/>
        </v-layer>
        </v-stage>
        <image-uploader
            :className="['fileinput', { 'fileinput--loaded': hasImage }]"
            capture="environment"
            doNotResize="gif"
            :autoRotate="true"
            @input="AddImage1"
            :preview="false">
        </image-uploader>
        <textarea v-model="GetLines"></textarea>
    </div>
</div>
</template>

<script>

import Lines from "./Lines"


export default {

     data() {
        return {
            imageFirst: null,
            widthFirst: 200,
            heightFirst: 200
        }
     },
    computed:{
        configKonva(){
            return {
                width: this.widthFirst,
                height: this.heightFirst
            }
        },
        configImageFirst(){
            return {
                image: this.imageFirst,
                hasImage: true,
                width: this.widthFirst,
                height: this.heightFirst,
            }
        },
        GetLines() {
            return  JSON.stringify(this.$store.state.linestore.lines)
        }
    },
    methods:{
        AddLine: function(event){
            this.$store.commit(
                'addRandomLine', 
                event,
                { module: 'linestore'}
            )
        },
        AddImage1: function(output) {
            const image = new window.Image();
            image.src = output
            image.onload = () =>{
                this.heightFirst = image.height;
                this.widthFirst = image.width;
                this.imageFirst = image;
            };
        }
    },
    components: {
        Lines
    }
}

</script>
<style scoped>
.row {
  display: flex;
}


.column {
    padding-left: 200px;
}
</style>
