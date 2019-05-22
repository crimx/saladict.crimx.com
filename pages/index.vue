<template>
  <div>
    <component :is="name" v-for="name in sections" :key="name" />
  </div>
</template>

<script>
const sections = ['Hero']

export default {
  components: sections.reduce((o, sec) => {
    o[sec] = require('~/components/' + sec + '.vue').default
    return o
  }, {}),
  data() {
    return {
      sections
    }
  }
}
</script>
