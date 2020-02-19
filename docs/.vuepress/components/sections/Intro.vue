<template>
  <section class="intro">
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
          :src="'https://image.baidu.com/search/down?tn=download&url=' + imgs[index].src"
          :alt="imgs[index].alt"
        />
      </div>
    </template>
  </section>
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
            'https://wx1.sinaimg.cn/large/6e3591e5gy1gc295dv2feg20lx0hynpd.gif',
          alt: 'Saladict Pin'
        },
        {
          width: '1344',
          height: '445',
          src:
            'https://wx4.sinaimg.cn/large/6e3591e5gy1gc294iulgqj211c0cdt8v.jpg',
          alt: 'Saladict Notebook'
        },
        {
          width: '1034',
          height: '646',
          src:
            'https://wx4.sinaimg.cn/large/6e3591e5gy1gc294odd4zg20sq0hywl0.gif',
          alt: 'Saladict Youdao Page Translate'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.intro {
  & > *:last-child {
    margin-bottom: 0;
  }
}

.en-feature-title {
  @media screen and (max-width: 768px) {
    display: inline-block;
    font-size: 4rem;
    line-height: 1.1;
  }
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
