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
            stroke: 'grey'
        }
    },
    
    methods:{
        EmitEvent: function (event){
            var attrs = event.target.attrs
            var value = {idx: attrs.index, infoStage: this.infoStage, pos: attrs.pos, point: [attrs.x, attrs.y]}
            this.$store.commit(
                'updateStateLines', 
                value,
                { module: 'linestore'}
            )
        },
        Colorify: function(){
            this.stroke = 'grey'
        },
        Trans: function(){
            this.stroke = null
        },
        HandleDrag: function(event){
            this.Trans()
        },
        HandleStop: function(event){
            this.EmitEvent(event)
            this.Colorify()
        }
  }
}
</script>