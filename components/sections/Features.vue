<template>
  <section>
    <feature desc="search" />
    <div class="text-center px-4">
      <b-img
        fluid
        width="789"
        height="646"
        src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/pin.gif"
        alt="Saladict Pin"
      />
    </div>
    <feature desc="notebook" />
    <div class="text-center px-4">
      <b-img
        fluid
        width="1344"
        height="445"
        src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/screen-notebook.png"
        alt="Saladict Notebook"
      />
    </div>
    <feature desc="langs" />
    <div class="text-center px-4">
      <b-img
        fluid
        width="1034"
        height="646"
        src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/youdao-page.gif"
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
