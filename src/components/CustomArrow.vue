<template>
    <div>
        <v-line :config="{
                points: [linePos.s[0], linePos.s[1], linePos.t[0], linePos.t[1]],
                stroke: stroke,
            }"/>
        <v-circle  :config="{
                        pos: 's',
                        index: index,
                        x: linePos.s[0],
                        y: linePos.s[1],
                        radius: 5,
                        fill: 'red',
                        draggable: true,
                    }" @dragstart="HandleDrag" @dragend="HandleStop"/>
        <v-circle    :config="{
                        pos: 't',
                        index: index,
                        x: linePos.t[0],
                        y: linePos.t[1],
                        radius: 5,
                        fill: 'green',
                        draggable: true,
                    }" @dragstart="HandleDrag"  @dragend="HandleStop"/>
        <v-text :config="{
                        index: index,
                        x: linePos.t[0] + 10,
                        y: linePos.t[1],
                        text: index + 1,
                        fill: text_color,
                    }" />
        <v-circle    :config="{
                        pos: 't',
                        index: index,
                        x: (linePos.t[0] + linePos.s[0]) / 2,
                        y: (linePos.t[1] + linePos.s[1]) / 2,
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