<template>
  <div>
    <div class="site-hero">
      <logo />
      {{ $t('title') }}
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.site-hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('~assets/hero-bg.jpg') center/cover;
}
</style>
