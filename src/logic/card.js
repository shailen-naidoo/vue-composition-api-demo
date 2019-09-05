import { reactive, watch, ref, onMounted, onUnmounted, computed } from '@vue/composition-api'

export const getMetadata = (url) => {
  return fetch(`https://webdataapi.co.za/api/v1/get-metadata?url=${url}`)
    .then(res => res.json())
    .then(({ og }) => ({
      description: og.description,
      image: og.image,
      url: og.url,
      siteName: og.site_name,
    }));
}

export const updateCard = (state, { image, description, url: link, siteName }) => {
  state.card.image = image;
  state.card.description = description;
  state.card.url = link;
  state.card.siteName = siteName;
}

export const getUrlMetadataThing = (url) => {
  const state = reactive({
    card: {
      image: null,
      siteName: null,
      description: null,
      url: null,
    },
  });

  watch(() => url, (n, o) => {
    const data = getMetadata(n);

    state.card.image = data.image;
    state.card.siteName = data.siteName;
    state.card.description = data.description;
    state.card.url = data.url;
  });

  return state;
}

export const sendDataToFacebookTrackingYourLife = () => {
  const count = ref(0)

  setInterval(() => {
    (() => { console.log('Network hit' + count.value )})(); // AJAX request
    count.value++;
  }, 1000);

  return count;
}

export const mouseEvents = () => {
  const x = ref(0)
  const y = ref(0);

  const state = reactive({
    count: 20,
    double: computed(() => state.count * 20),
  });

  const updateMousePosition = (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition);
  });

  return {
    x,
    y,
  };
};