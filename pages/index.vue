<template>
    <div>
        <PostList :posts="fetchedPosts"/>
        <About/>
    </div>
</template>
<script>
    import PostList from "@/components/post/PostList"
    import About from "@/components/home/About"
    export default {
        components: {
            PostList,
            About
        },
        // data() {
        //     return {
        //         fetchedPosts: []
        //     }
        // },
        created() {
            // this.$store.dispatch("setPosts", this.fetchedPosts)
        },
        computed : {
            fetchedPosts(){
                return this.$store.getters.getPosts
            }
        },
        // fetch(context) {
        //     console.log(context)
        //     return new Promise((resolve, reject) => {
        //         context.store.dispatch("setPosts")
        //         resolve();
        //         // reject(new Error())
        //     })
        //         .catch(e => {
        //             context.error(e);
        //         })
        //     // setTimeout(() => {
        //     //     callback(null, )
        //     // }, 2000)
        // }

    }
</script>
<style scoped></style>
