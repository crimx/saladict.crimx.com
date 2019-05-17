<template>
  <img
    class="salad-bowl"
    :class="`salad-bowl-${logoAnimKey}`"
    src="~/assets/saladict.svg"
    @mouseover="changeLogoAnimKey"
    @mouseout="changeLogoAnimKey"
    @click="changeLogoAnimKey"
  />
</template>

<script>
export default {
  data() {
    return {
      logoAnimKey: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this.changeLogoAnimKey()
    }, 2000)
  },
  methods: {
    changeLogoAnimKey() {
      this.logoAnimKey = (this.logoAnimKey + 1) % 2
    }
  }
}
</script>

<style lang="scss">
.salad-bowl {
  width: 40vmin;
  height: 40vmin;
}

.salad-bowl-0 {
  animation: 1s linear jelly-pop;
}

.salad-bowl-1 {
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
