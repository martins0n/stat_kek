<template>
  <v-stage :config="configKonva" align="center">
    <v-layer>
      <v-image :config="configImage"></v-image>
    </v-layer>
  </v-stage>
</template>

<script>
export default {
    data() {
        return {
            configKonva: {
                width: 800,
                height: 500
            },
            configImage: {
                image: null,
                draggable: true,
                width: 200,
                height: 200,
                x: 500,
                y: 400
            }
        };
    },

    created() {
        const image = new window.Image();
        image.src = "/stat_kek/troll-face-png-19697.png";
        image.onload = () => {
        // set image only when it is loaded
        this.configImage.image = image;
        };
    }
};

</script>