<template>

<div>
    <div class="column">
        <button v-on:click="AddLine">Add line</button>
        <v-stage :config="configKonva" ref="stageFirst">
        <v-layer>
            <v-image :config="configImageFirst"/>
            <Lines infoStage="stageFirst"/>
        </v-layer>
        </v-stage>       
    </div>
    <div class="column">
        <image-uploader
            :className="['fileinput', { 'fileinput--loaded': hasImage }]"
            capture="environment"
            doNotResize="gif"
            :autoRotate="true"
            @input="AddImage1"
            :preview="false">
        </image-uploader>
    </div>
    <div class="column">
        <textarea v-model="GetLines"></textarea>
    </div>
    <div class="column">
        <button v-on:click="DownloadLines">Download JSON</button>
    </div>
</div>
</template>



<script>

import Lines from "./Lines"
import FileSaver from "./FileSaver"


export default {

     data() {
        return {
            imageFirst: null,
            widthFirst: 400,
            heightFirst: 400
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
            var lines = this.$store.state.linestore.lines
            lines = lines.map(function(element){
                return {
                    t_line: {
                        p: {
                            x: element.stageFirst.p[0],
                            y: element.stageFirst.p[1]
                        },
                        q: {
                            x: element.stageFirst.q[0],
                            y: element.stageFirst.q[1]
                        }
                    },
                    s_line: {
                        p: {
                            x: element.stageSecond.p[0],
                            y: element.stageSecond.p[1]
                        },
                        q: {
                            x: element.stageSecond.q[0],
                            y: element.stageSecond.q[1]
                        }
                    },
                }
            });
            return  JSON.stringify(lines)
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
        },
        DownloadLines: function(){
            var lines = this.$store.state.linestore.lines
            lines = lines.map(function(element){
                return {
                    t_line: {
                        p: {
                            x: element.stageFirst.p[0],
                            y: element.stageFirst.p[1]
                        },
                        q: {
                            x: element.stageFirst.q[0],
                            y: element.stageFirst.q[1]
                        }
                    },
                    s_line: {
                        p: {
                            x: element.stageSecond.p[0],
                            y: element.stageSecond.p[1]
                        },
                        q: {
                            x: element.stageSecond.q[0],
                            y: element.stageSecond.q[1]
                        }
                    },
                }
            });
            FileSaver.fileSave(JSON.stringify(lines))
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
