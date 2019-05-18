<template>
  <div>
    <div class="site-hero">
      <logo />
      <h1 class="site-hero-title">{{ $t('title') }}</h1>
      <p class="site-hero-desc">{{ $t('description') }}</p>
      <div>
        <a
          v-for="d in downloads"
          :key="d.url"
          v-b-tooltip
          class="download-link"
          :href="d.url"
          target="_blank"
          rel="nofollow noopener noreferrer"
          :title="d.title"
        >
          <img class="download-icon" :src="d.icon" :alt="d.title" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      downloads: [
        {
          title: this.$t('cws'),
          icon: require('~/assets/chrome.svg'),
          url:
            'https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=en'
        },
        {
          title: this.$t('amo'),
          icon: require('~/assets/firefox.svg'),
          url: 'https://addons.mozilla.org/firefox/addon/ext-saladict/'
        },
        {
          title: this.$t('dd'),
          icon: require('~/assets/download.svg'),
          url: 'https://github.com/crimx/ext-saladict/releases'
        },
        {
          title: this.$t('source_code'),
          icon: require('~/assets/github.svg'),
          url: 'https://github.com/crimx/ext-saladict'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.site-hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  color: #fff;
  background: url('~assets/hero-bg.jpg') center/cover;
}

.site-hero-title {
  font-weight: bold;
  margin: 1em 0 0.5em;
}

.site-hero-desc {
  max-width: 960px;
  margin-bottom: 2em;
  padding: 0 1em;
}

.download-link {
  display: inline-block;
  margin: 0 0.5em;
}

.download-icon {
  width: 3em;
  height: 3em;
}
</style>
