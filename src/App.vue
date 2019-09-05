<template>
  <div>
    <input v-model.lazy="url" placeholder="Provide a URL" />
    <p>Hit enter to scrape site</p>
    <!-- <card-normal
      v-bind="{ url }"
    /> -->
    <card v-bind="{ url }" />
  </div>
</template>

<script>
import CardNormal from '@/components/CardNormal';
import Card from '@/components/Card';

export default {
  components: {
    CardNormal,
    Card,
  },
  data() {
    return {
      url: null,
    };
  },
};
</script>

<style scoped>
input {
  width: 500px;
  padding: 10px;
}

p {
  margin-bottom: 30px;
}
</style>