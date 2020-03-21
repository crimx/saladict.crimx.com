<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <script
      data-ad-client="ca-pub-6993077405597797"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      async="true"
    ></script>

    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <div>
          <Adsense
            :key="$page.key"
            style="display:block"
            data-ad-client="ca-pub-6993077405597797"
            data-ad-slot="5077350487"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></Adsense>
        </div>
      </template>
      <template #bottom>
        <div>
          <Adsense
            :key="$page.key"
            style="display:block"
            data-ad-client="ca-pub-6993077405597797"
            data-ad-slot="9148457434"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></Adsense>
        </div>
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <div style="padding: 2rem;">
          <Adsense
            :key="$page.key"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-6993077405597797"
            data-ad-slot="6866727264"
          ></Adsense>
        </div>
        <Support />
        <Footer />
      </template>
    </Page>
  </div>
</template>

<style>
body,
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.page {
  padding-bottom: 0 !important;
}

kbd {
  position: relative;
  top: -0.3em;
  display: inline-block;
  padding: 0.25em 0.5em 0.2em;
  margin-left: 0.25em;
  margin-right: 0.25em;
  font: 75%/1 monaco, menlo, consolas, 'courier new', courier, monospace;
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
  font-family: 'Myriad Set Pro', 'Helvetica Neue', 'Helvetica', 'Arial',
    'Verdana', 'sans-serif';
}

kbd[data-key='command']:after {
  content: ' ⌘';
}

kbd[data-key='cmd']:after {
  content: ' ⌘';
}

kbd[data-key='shift']:after {
  content: ' ⇧';
}

kbd[data-key='control']:after {
  content: ' ⌃';
}

kbd[data-key='option']:after {
  content: ' ⌥';
}

kbd[data-key='capslock']:after {
  content: ' ⇪';
}

kbd[data-key='caps lock']:after {
  content: ' ⇪';
}

kbd[data-key='escape']:after {
  content: ' ⎋';
}

kbd[data-key='esc']:after {
  content: ' ⎋';
}

kbd[data-key='return']:after {
  content: ' ↩';
}

kbd[data-key='enter']:after {
  content: ' ↩';
}

kbd[data-key='delete']:after {
  content: ' ⌫';
}

kbd[data-key='eject']:after {
  content: ' ⏏';
}
</style>

<script>
/** @todo wait for https://github.com/vuejs/vuepress/issues/1950 */

import Home from '@parent-theme/components/Home.vue'
import Navbar from '@parent-theme/components/Navbar.vue'
import Page from '@parent-theme/components/Page.vue'
import Sidebar from '@parent-theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@vuepress/theme-default/util'

export default {
  components: { Home, Page, Sidebar, Navbar },

  data() {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
