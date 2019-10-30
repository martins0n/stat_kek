<template>
    <div>
        <v-image :config="configImage"></v-image>
    </div>
</template>


<script>
export default {
    data() {
        return {
            image_ref: null
        }
    },
    computed: {
        configImage: function (){
            return {
                image: this.image_ref,
                draggable: true,
                width: 200,
                height: 200,
                x: 500,
                y: 400
            }
        }
    },
    created() {
        const image = new window.Image();
        image.src = "./troll-face-png-19697.png";
        image.onload = () => {
            this.image_ref = image
        };
    }
}
</script>