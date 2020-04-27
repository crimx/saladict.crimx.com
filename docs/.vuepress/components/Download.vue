<template>
  <section class="download-releases theme-default-content">
    <Content :page-key="dlPage.key" />
  </section>
</template>

<script>
export default {
  computed: {
    dlPage() {
      return this.$site.pages.find(page => page.path === '/download.html')
    }
  }
}
</script>

<style lang="scss">
.download-releases {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 2rem !important;

  .content__default {
    margin: 0 !important;
  }

  h2 {
    padding: 0 !important;
  }
}
</style>
