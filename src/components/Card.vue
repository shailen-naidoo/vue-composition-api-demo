<template>
  <article class="card">
    <img class="card-image" :src="card.image" />
    <p>{{ card.siteName }}</p>
    <p>{{ card.description }}</p>
    <a :href="card.url">View Article</a>
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
  </article>
</template>

<script>
import { getMetadata } from '@/logic/card.js';

import { reactive, watch } from '@vue/composition-api'

import { getUrlMetadataThing, mouseEvents } from '@/logic/card'

export default {
  props: {
    url: {
      required: true,
    },
  },
  setup(props) {
    return {
      card: getUrlMetadataThing(props.url).card,
      ...mouseEvents(),
    };
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