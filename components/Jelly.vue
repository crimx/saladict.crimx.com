<template>
  <a
    class="jelly-pop-link"
    :style="{ width, height }"
    :href="href"
    :title="title"
    target="_blank"
    rel="nofollow noopener noreferrer"
    @mouseover="playJelly"
    @mouseout="playJelly"
    @click="playJelly"
  >
    <img
      class="jelly-pop-icon"
      :style="{ width, height }"
      :class="{ 'jelly-pop-replay': isReplay }"
      :src="src"
      :alt="title"
    />
  </a>
</template>

<script>
export default {
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    width: {
      type: [Number, String],
      default: '1em'
    },
    height: {
      type: [Number, String],
      default: '1em'
    }
  },
  data() {
    return {
      isReplay: false
    }
  },
  mounted() {
    this._bindedPlayJelly = this.playJelly.bind(this)
    if (this.loop) {
      setTimeout(this._bindedPlayJelly, 2000)
    }
  },
  methods: {
    playJelly() {
      this.isReplay = !this.isReplay
      clearTimeout(this._playJellyTimeout)
      if (this.loop) {
        this._playJellyTimeout = setTimeout(this._bindedPlayJelly, 5000)
      }
    }
  }
}
</script>

<style lang="scss">
.jelly-pop-link {
  display: inline-block;
  width: 1em;
  height: 1em;
}

.jelly-pop-icon {
  width: 1em;
  height: 1em;
  will-change: transform;
  animation: 1s linear jelly-pop;
}

.jelly-pop-replay {
  animation: 1s linear jelly-pop-clone;
}

@each $name in (jelly-pop, jelly-pop-clone) {
  /* prettier-ignore */
  @keyframes #{$name} {
        0% { transform: matrix3d(0.980, 0, 0, 0, 0, 0.943, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
     3.40% { transform: matrix3d(0.976, 0, 0, 0, 0, 0.945, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
     4.70% { transform: matrix3d(0.925, 0, 0, 0, 0, 0.964, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
     6.81% { transform: matrix3d(0.950, 0, 0, 0, 0, 0.986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
     9.41% { transform: matrix3d(0.942, 0, 0, 0, 0, 1.084, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    10.21% { transform: matrix3d(0.971, 0, 0, 0, 0, 1.113, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    13.61% { transform: matrix3d(1.062, 0, 0, 0, 0, 1.166, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    14.11% { transform: matrix3d(1.070, 0, 0, 0, 0, 1.165, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    17.52% { transform: matrix3d(1.104, 0, 0, 0, 0, 1.120, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    18.72% { transform: matrix3d(1.106, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    21.32% { transform: matrix3d(1.098, 0, 0, 0, 0, 1.035, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    24.32% { transform: matrix3d(1.075, 0, 0, 0, 0, 0.980, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    25.23% { transform: matrix3d(1.067, 0, 0, 0, 0, 0.969, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    29.03% { transform: matrix3d(1.031, 0, 0, 0, 0, 0.948, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    29.93% { transform: matrix3d(1.024, 0, 0, 0, 0, 0.949, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    35.54% { transform: matrix3d(0.990, 0, 0, 0, 0, 0.981, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    36.74% { transform: matrix3d(0.986, 0, 0, 0, 0, 0.989, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    41.04% { transform: matrix3d(0.980, 0, 0, 0, 0, 1.011, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    44.44% { transform: matrix3d(0.983, 0, 0, 0, 0, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    52.15% { transform: matrix3d(0.996, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    59.86% { transform: matrix3d(1.003, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    63.26% { transform: matrix3d(1.004, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    75.28% { transform: matrix3d(1.001, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    85.49% { transform: matrix3d(0.999, 0, 0, 0, 0, 1.000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    90.69% { transform: matrix3d(1.000, 0, 0, 0, 0, 1.000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
      100% { transform: matrix3d(1.000, 0, 0, 0, 0, 1.000, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  }
}
</style>
