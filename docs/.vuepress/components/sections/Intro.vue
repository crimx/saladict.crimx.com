<template>
  <div>
    <template v-for="(intro, index) in $frontmatter.intro">
      <b-jumbotron lead-tag="div" class="text-md-center" :key="index">
        <span
          slot="header"
          :class="{ 'en-feature-title': $lang.startsWith('en') }"
          v-text="intro.title"
        />
        <div slot="lead" class="mt-sm-4 mt-md-5">
          <p v-for="(p, i) in intro.content" :key="i" v-text="p" />
        </div>
      </b-jumbotron>
      <div v-if="imgs[index]" class="text-center px-4">
        <b-img
          fluid
          :width="imgs[index].width"
          :height="imgs[index].height"
          :src="imgs[index].src"
          :alt="imgs[index].alt"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          width: '789',
          height: '646',
          src:
            'https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/pin.gif',
          alt: 'Saladict Pin'
        },
        {
          width: '1344',
          height: '445',
          src:
            'https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/screen-notebook.png',
          alt: 'Saladict Notebook'
        },
        {
          width: '1034',
          height: '646',
          src:
            'https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/youdao-page.gif',
          alt: 'Saladict Youdao Page Translate'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.en-feature-title {
  @media screen and (max-width: 768px) {
    display: inline-block;
    font-size: 4rem;
    line-height: 1.1;
  }
}
</style>
