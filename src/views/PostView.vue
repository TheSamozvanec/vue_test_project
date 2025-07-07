<template>
  <h2>Post</h2>
  <p>{{post.title}}</p>
  <p>{{post.body}}</p>
</template>

<script setup lang="ts">
import { $api } from '@/components/api';
import type { IPost } from '@/components/mock/types';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const postId = route.params.post;
const post =ref<IPost>({} as IPost);
const fetchPosts = async () => {
  try {const {data} = await $api.get(`/posts/${postId}`);
    post.value = data;
  } catch (err) {
    console.error(err);
  }
}
fetchPosts();
</script>

<style scoped>

</style>