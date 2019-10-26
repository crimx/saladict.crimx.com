<template>
  <div>
    <component :is="name" v-for="name in sections" :key="name" />
    <Support />
    <Footer />
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/functions';
@import 'node_modules/bootstrap/scss/variables';
@import 'node_modules/bootstrap/scss/mixins';

@import 'node_modules/bootstrap/scss/carousel';
@import 'node_modules/bootstrap/scss/jumbotron';
// @import 'node_modules/bootstrap/scss/type';

@import 'node_modules/bootstrap/scss/utilities/screenreaders';
@import 'node_modules/bootstrap/scss/utilities/text';
</style>

<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>

<style lang="scss">
.home {
  max-width: unset;
  padding: 3.6rem 0 0;

  .features {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .hero img:first-child {
    @media (max-width: 700px) {
      margin-top: 0;
    }
  }
}
.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
</style>

<script>
import Vue from 'vue'

import {
  ButtonPlugin,
  CarouselPlugin,
  CollapsePlugin,
  ImagePlugin,
  JumbotronPlugin,
  LayoutPlugin,
  ListGroupPlugin
} from 'bootstrap-vue'

Vue.use(ButtonPlugin)
Vue.use(CarouselPlugin)
Vue.use(CollapsePlugin)
Vue.use(ImagePlugin)
Vue.use(JumbotronPlugin)
Vue.use(LayoutPlugin)
Vue.use(ListGroupPlugin)

// const sections = ['Hero', 'Testimonial', 'Features', 'Support', 'Footer']
const sections = ['Testimonial', 'Intro']

export default {
  data() {
    return {
      sections: sections.slice()
    }
  },
  components: sections.reduce((o, sec) => {
    o[sec] = require('./sections/' + sec + '.vue').default
    return o
  }, {})
}
</script>
