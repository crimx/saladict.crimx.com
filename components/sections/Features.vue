<template>
  <section>
    <feature desc="search" />
    <div class="text-center px-4">
      <img
        class="mw-100"
        src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/pin.gif"
        width="789"
        height="646"
        alt="Saladict Pin"
      />
    </div>
    <feature desc="notebook" />
    <div class="text-center px-4">
      <img
        class="mw-100"
        src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/screen-notebook.png"
        width="1344"
        height="445"
        alt="Saladict Notebook"
      />
    </div>
    <feature desc="langs" />
    <div class="text-center px-4">
      <img
        class="mw-100"
        src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/youdao-page.gif"
        width="1034"
        height="646"
        alt="Saladict Youdao Page Translate"
      />
    </div>
    <feature desc="paper" />
  </section>
</template>

<script>
import Feature from '~/components/Feature.vue'

export default {
  components: {
    Feature
  }
}
</script>
