<template>
    <div>
        <CustomArrow v-for="(item, index) in lines" :key="item.id" v-bind:linePos="item" v-bind:index="index"/>
    </div>
</template>

<script>


import CustomArrow from "./CustomArrow"

export default {
    props: ["mousePos"],
    data (){
        return {x: null, y: null}
    },
    computed: {
        lines:{
            get(){
               return this.$store.state.linestore.lines
        }
    },
  /*  methods: {
        handleMouseMove : function(event) {
            this.x = event.target.x();
            this.y = event.target.y();
        }
    }, */
    components: {
        CustomArrow
    }
}
}
</script>