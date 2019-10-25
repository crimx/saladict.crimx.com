<template>
  <section class="testimonial">
    <b-carousel background="#1C2A39" controls no-hover-pause>
      <b-carousel-slide v-for="c in comments" :key="c.user" :caption="c.user">
        <p>{{ c.content }}</p>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
export default {
  computed: {
    comments() {
      return shuffle(
        require('./testimonial/featured/' +
          ((this.$lang || '').startsWith('en') ? 'eng' : 'chs') +
          '.json')
      )
    }
  }
}

function shuffle(arr) {
  for (let end = arr.length - 1; end > 0; end--) {
    const pick = Math.floor(Math.random() * (end + 1))
    const t = arr[end]
    arr[end] = arr[pick]
    arr[pick] = t
  }
  return arr
}
</script>

<style lang="scss">
.testimonial {
  .carousel-caption {
    position: static;
    height: 250px;
    padding-left: 15%;
    padding-right: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .carousel-item {
    box-shadow: inset 0 10px 6px -6px rgba(0, 0, 0, 0.33);
  }
}
</style>
