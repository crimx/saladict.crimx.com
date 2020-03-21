<template>
  <ins
    class="adsbygoogle"
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
  mounted() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>
