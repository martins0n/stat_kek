<template>
    <div>
        <v-line :config="{
                points: [linePos.p[0], linePos.p[1], linePos.q[0], linePos.q[1]],
                stroke: stroke,
            }"/>
        <v-circle  :config="{
                        pos: 'p',
                        index: index,
                        x: linePos.p[0],
                        y: linePos.p[1],
                        radius: 5,
                        fill: 'red',
                        draggable: true,
                    }" @dragstart="HandleDrag" @dragend="HandleStop"/>
        <v-circle    :config="{
                        pos: 'q',
                        index: index,
                        x: linePos.q[0],
                        y: linePos.q[1],
                        radius: 5,
                        fill: 'green',
                        draggable: true,
                    }" @dragstart="HandleDrag"  @dragend="HandleStop"/>
        <v-text :config="{
                        index: index,
                        x: linePos.q[0],
                        y: linePos.q[1],
                        text: index + 1,
                        fill: text_color,
                    }" />
        <v-circle    :config="{
                        pos: 'q',
                        index: index,
                        x: (linePos.q[0] + linePos.p[0]) / 2,
                        y: (linePos.q[1] + linePos.p[1]) / 2,
                        offset: 100,
                        //offsetY: 5,
                        radius: 6,
                        fill: point
                    }" @click="DeleteLine"/>
    </div>
</template>

<script>
export default {
    props: {
        linePos: Object,
        index: Number,
        infoStage: String
    },

    data: function() {
        return {
            stroke: 'grey',
            point: 'grey',
            text_color: 'grey'
        }
    },
    
    methods:{
        EmitEvent: function (event){
            var attrs = event.target.attrs
            var value = {index: attrs.index, infoStage: this.infoStage, pos: attrs.pos, point: [attrs.x, attrs.y]}
            this.$store.commit(
                'updateStateLines', 
                value,
                { module: 'linestore'}
            )
        },
        Colorify: function(){
            this.stroke = 'grey'
            this.point = 'grey'
            this.text_color = 'grey'
        },
        Trans: function(){
            this.stroke = null
            this.point = null
            this.text_color = null
        },
        HandleDrag: function(event){
            this.Trans()
        },
        HandleStop: function(event){
            this.EmitEvent(event)
            this.Colorify()
        },
        DeleteLine: function(event){
            this.$store.commit(
                'deleteLine', 
                event.target.attrs.index,
                { module: 'linestore'}
            )
        }
  }
}
</script>