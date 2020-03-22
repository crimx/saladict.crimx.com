<template>
  <ins
    class="adsbygoogle"
    style="display:block"
    :key="$page.key"
    :data-ad-client="dataAdClient"
    :data-ad-slot="dataAdSlot"
    :data-ad-format="dataAdFormat"
    :data-full-width-responsive="dataAdFullWidthResponsive"
  ></ins>
</template>

<script>
export default {
  props: {
    dataAdClient: {
      type: String,
      required: true
    },
    dataAdSlot: {
      type: String,
      required: true
    },
    dataAdFormat: {
      type: String,
      required: false,
      default: 'auto'
    },
    dataAdFullWidthResponsive: {
      type: String,
      required: false,
      default: 'true'
    }
  },
  watch: {
    '$page.key': {
      immediate: typeof window !== 'undefined',
      handler() {
        setTimeout(() => {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        }, 100)
      }
    }
  }
}
</script>
