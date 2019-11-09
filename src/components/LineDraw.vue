<template>

<div>
    <div class="column">
        <button v-on:click="AddLine">Add line</button>
        <v-stage :config="configKonva1" ref="stageFirst">
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
        <v-stage :config="configKonva2" ref="stageSecond">
        <v-layer>
            <v-image :config="configImageSecond"/>
            <Lines infoStage="stageSecond"/>
        </v-layer>
        </v-stage>       
    </div>
    <div class="column">
        <image-uploader
            :className="['fileinput', { 'fileinput--loaded': hasImage }]"
            capture="environment"
            doNotResize="gif"
            :autoRotate="true"
            @input="AddImage2"
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
            heightFirst: 400,
            imageSecond: null,
            widthSecond: 400,
            heightSecond: 400,
        }
     },
    computed:{
        configKonva1(){
            return {
                width: this.widthFirst,
                height: this.heightFirst
            }
        },
        configKonva2(){
            return {
                width: this.widthSecond,
                height: this.heightSecond
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
        configImageSecond(){
            return {
                image: this.imageSecond,
                hasImage: true,
                width: this.widthSecond,
                height: this.heightSecond,
            }
        },
        GetLines() {
            var lines = this.$store.state.linestore.lines
            lines = lines.map(function(element){
                return {
                    s_line: {
                        p: {
                            x: element.stageFirst.p[0],
                            y: element.stageFirst.p[1]
                        },
                        q: {
                            x: element.stageFirst.q[0],
                            y: element.stageFirst.q[1]
                        }
                    },
                    t_line: {
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
        AddImage2: function(output) {
            const image = new window.Image();
            image.src = output
            image.onload = () =>{
                this.heightSecond = image.height;
                this.widthSecond = image.width;
                this.imageSecond = image;
            };
        },
        DownloadLines: function(){
            var lines = this.$store.state.linestore.lines
            lines = lines.map(function(element){
                return {
                    s_line: {
                        p: {
                            x: element.stageFirst.p[0],
                            y: element.stageFirst.p[1]
                        },
                        q: {
                            x: element.stageFirst.q[0],
                            y: element.stageFirst.q[1]
                        }
                    },
                    t_line: {
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
