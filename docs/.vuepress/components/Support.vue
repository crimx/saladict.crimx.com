<template>
  <Content
    v-if="supportPage && !$page.frontmatter.supportPage"
    :page-key="supportPage.key"
    class="theme-default-content"
  />
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
