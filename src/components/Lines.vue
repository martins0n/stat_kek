<template>
    <div>
        <CustomArrow 
            v-for="(item, index) in lines" 
            :key="item.id" 
            v-bind:linePos="item" 
            v-bind:index="index"
            :infoStage="infoStage"/>
    </div>
</template>

<script>


import CustomArrow from "./CustomArrow"

export default {
    props: ["infoStage"],
    computed:{
        lines:{
            get(){
                return this.$store.state.linestore.lines.map((lines)=>{
                    return lines[this.infoStage]})
            },
        }
    },
  /*  methods: {
        handleMouseMUnknown custom element: <CustomArrow> - did you register the component correctly? For recursive components, make sure to provide the "name" optionove : function(event) {
            this.x = event.target.x();
            this.y = event.target.y();
        }
    }, */
    components: {
        CustomArrow
    }
}
</script>