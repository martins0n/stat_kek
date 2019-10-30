<template>
    <div>
        <v-line v-for="item in lines"
                    :key="item.id"
                    :config="{
                        points: item.points,
                        stroke: 'black',
                        draggable: true,
                    }"></v-line>
    </div>
</template>

<script>

export default {

    computed: {
        lines (){
            return this.$store.state.linestore.lines
        }
    }
}
</script>