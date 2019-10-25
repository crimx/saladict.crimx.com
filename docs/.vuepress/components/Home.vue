<template>
  <div>
    <component :is="name" v-for="name in sections" :key="name" />
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins";

@import "node_modules/bootstrap/scss/carousel";

@import "node_modules/bootstrap/scss/utilities/screenreaders";
</style>

<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  position: relative;
  top: -0.3em;
  display: inline-block;
  padding: 0.25em 0.5em 0.2em;
  margin-left: 0.25em;
  margin-right: 0.25em;
  font: 75%/1 monaco, menlo, consolas, "courier new", courier, monospace;
  border: solid 1px #ccc;
  border-bottom-color: #bbb;
  border-radius: 3px;
  white-space: nowrap;
  word-wrap: normal;
  text-transform: capitalize;

  color: #555;
  background-color: #fefefe;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0)
  );
  box-shadow: 0 2px 0 #ccc, 0 3px 1px #999, inset 0 1px 1px #fff;
}

.dark kbd,
kbd.dark {
  color: #fdfdfd;
  text-shadow: 0 -1px 0 #000;
  border-color: #000;
  background-color: #4d4c4c;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: 0 2px 0 #000, 0 3px 1px #999, inset 0 1px 1px #aaa,
    inset 0 -1px 3px #272727;
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  box-shadow: none;
}

kbd[data-key]:after {
  font-family: "Myriad Set Pro", "Helvetica Neue", "Helvetica", "Arial",
    "Verdana", "sans-serif";
}

kbd[data-key="command"]:after {
  content: " ⌘";
}

kbd[data-key="cmd"]:after {
  content: " ⌘";
}

kbd[data-key="shift"]:after {
  content: " ⇧";
}

kbd[data-key="control"]:after {
  content: " ⌃";
}

kbd[data-key="option"]:after {
  content: " ⌥";
}

kbd[data-key="capslock"]:after {
  content: " ⇪";
}

kbd[data-key="caps lock"]:after {
  content: " ⇪";
}

kbd[data-key="escape"]:after {
  content: " ⎋";
}

kbd[data-key="esc"]:after {
  content: " ⎋";
}

kbd[data-key="return"]:after {
  content: " ↩";
}

kbd[data-key="enter"]:after {
  content: " ↩";
}

kbd[data-key="delete"]:after {
  content: " ⌫";
}

kbd[data-key="eject"]:after {
  content: " ⏏";
}

.home {
  max-width: unset;
  padding: 3.6rem 0 0;
}

.home .features {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
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
const sections = ['Testimonial']

export default {
  data () {
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