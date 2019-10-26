<template>
  <div class="support-project">
    <div class="theme-default-content">
      <Content v-if="supportPage && !$page.frontmatter.supportPage" :page-key="supportPage.key" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    supportPage() {
      const supportPath = `${this.$localePath}support.html`
      return this.$site.pages.find(page => page.path === supportPath)
    }
  }
}
</script>

<style lang="scss">
.support-project {
  color: #ddd;
  background: #1e1d1d;

  h4 {
    margin-bottom: 5px !important;
  }
}
</style>
