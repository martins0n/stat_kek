<template>
    <div>
        <h2> {{post.title}} </h2>
        <p> {{post.body}} </p>
        <a > {{ post.url }} </a>
    </div>
</template>


<script>


export default {
    props: ["post"]
}
</script>