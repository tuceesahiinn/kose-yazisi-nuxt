<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
            <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
        </div>
        <PostList
                :posts="fetchedPosts"
                :is-admin="true"/>
    </div>
</template>
<script>
    import PostList from "@/components/post/PostList"
    export default {
        head : {
            title : 'Admin | Köşe Yazısı'
        },
        layout: "admin",
        components: {
            PostList,
        },
        computed: {
            fetchedPosts(){
                return this.$store.getters.getPosts
            }
        }
    }
</script>
<style scoped></style>
