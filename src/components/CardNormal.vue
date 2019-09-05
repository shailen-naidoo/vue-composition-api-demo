<template>
  <article class="card">
    <img class="card-image" :src="card.image" />
    <p>{{ card.siteName }}</p>
    <p>{{ card.description }}</p>
    <a :href="card.url">View Article</a>
  </article>
</template>

<script>
import { getMetadata } from '@/logic/card.js';

export default {
  props: {
    url: {
      required: true,
    },
  },
  data() {
    return {
      card: {
        image: null,
        siteName: null,
        description: null,
        url: null,
      },
    };
  },
  watch: {
    async url(url) {
      if (!url) {
        return;
      }

      this.card = await getMetadata(url);
    }
  }
};
</script>

<style scoped>
.card {
  width: 500px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}

.card-image {
  width: 100%;
}
</style>