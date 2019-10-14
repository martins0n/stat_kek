<template>
    <div>
        <h2> {{post.title}} </h2>
        <p> {{post.body}} </p>
        <a :href="'//' + post.url"> {{ post.url }} </a>
        <hr align="center" width="500"  />
    </div>
</template>


<script>


export default {
    props: ["post"]
}
</script>