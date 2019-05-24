<template>
  <div class="h-100">
    <component :is="name" v-for="name in sections" :key="name" />
  </div>
</template>

<script>
const sections = ['Hero', 'Testimonial', 'Features', 'Support', 'Footer']

export default {
  head() {
    return {
      title: this.$t('full_title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        }
      ]
    }
  },
  components: sections.reduce((o, sec) => {
    o[sec] = require('~/components/sections/' + sec + '.vue').default
    return o
  }, {}),
  data() {
    return {
      sections
    }
  }
}
</script>
