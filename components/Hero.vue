<template>
  <section class="hero">
    <jelly
      :loop="8000"
      :src="require('~/assets/saladict.svg')"
      width="40vmin"
      height="40vmin"
    />
    <h1 class="hero-title">{{ $t('title') }}</h1>
    <p class="hero-desc">{{ $t('description') }}</p>
    <div>
      <jelly
        v-for="d in downloads"
        :key="d.url"
        v-b-tooltip.topright.d400
        class="download-link"
        :href="d.url"
        width="3em"
        height="3em"
        :src="d.icon"
        :title="d.title"
      />
    </div>
    <svg class="down-arrow" viewBox="0 0 32 32" width="32" height="32">
      <title>scroll down</title>
      <path
        fill="#fff"
        d="M.045 8.443c0-.215.082-.43.246-.594.33-.33.86-.33 1.19 0L16 22.37 30.52 7.85c.33-.33.86-.33 1.19 0s.327.86 0 1.186L16.593 24.152c-.328.326-.86.326-1.188 0L.29 9.036c-.163-.163-.245-.378-.245-.593z"
      ></path>
    </svg>
  </section>
</template>

<script>
import Jelly from '~/components/Jelly.vue'

export default {
  components: {
    Jelly
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
          title: this.$t('manual'),
          icon: require('~/assets/manual.svg'),
          url: 'https://github.com/crimx/ext-saladict/wiki'
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

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  color: #fff;
  background: url('~assets/hero-bg.jpg') center/cover;
}

.hero-title {
  font-weight: bold;
  margin: 1em 0 0.5em;
}

.hero-desc {
  max-width: 960px;
  margin-bottom: 2em;
  padding: 0 1em;
}

.download-link {
  margin: 0 5px;
}

.down-arrow {
  position: absolute;
  bottom: 0;
  opacity: 0.4;
  transform: scaleY(0.6);
}
</style>
