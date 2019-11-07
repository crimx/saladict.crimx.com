<template>
  <script
    :key="id"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    async="true"
  ></script>
</template>

<script>
export default {
  data() {
    return {
      id: `${Date.now()}`
    }
  },
  watch: {
    '$page.key': {
      immediate: typeof window !== 'undefined',
      handler() {
        delete window.adsbygoogle
        this.id = this.$page.key
        setTimeout(() => {
          ;(adsbygoogle = window.adsbygoogle || []).push({})
        }, 100)
      }
    }
  }
}
</script>
