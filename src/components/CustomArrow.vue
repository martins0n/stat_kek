<template>
    <div>
        <v-line :config="konvaLine"/>
        <v-circle  :config="{
                        pos: 'source',
                        index: index,
                        x: linePos.line_1.s[0],
                        y: linePos.line_1.s[1],
                        radius: 5,
                        fill: 'red',
                        draggable: true,
                    }" @dragstart="HandleDrag" @dragend="HandleStop"/>
        <v-circle    :config="{
                        pos: 'target',
                        index: index,
                        x: linePos.line_1.t[0],
                        y: linePos.line_1.t[1],
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
        index: Number
    },

    data: function() {
        return {
            konvaLine: {
                points: [40,40,100,100],
                stroke: null,
            }
        }
    },
    
    methods:{
        EmitEvent: function (event){
            console.log(event)
            if(event.target.attrs.pos == "source"){

               // lines = this.$store.state.linestore.lines[idx]
                this.konvaLine.points[0] = event.target.x();
                this.konvaLine.points[1] = event.target.y();
            }else{
                this.konvaLine.points[2] = event.target.x();
                this.konvaLine.points[3] = event.target.y();
            }
            
        },
        Colorify: function(){
            this.konvaLine.stroke = 'grey'
        },
        Trans: function(){
            this.konvaLine.stroke = null
        },
        HandleDrag: function(event){
            this.EmitEvent(event)
            this.Trans()
        },
        HandleStop: function(event){
            this.EmitEvent(event)
            this.Colorify()
        }
  }
}
</script>