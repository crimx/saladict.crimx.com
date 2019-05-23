<template>
  <b-jumbotron lead-tag="div" class="text-md-center">
    <span
      slot="header"
      v-t="`desc.${desc}.title`"
      class="text-capitalize"
      :class="{ 'en-feature-title': $i18n.locale.startsWith('en') }"
    />
    <div slot="lead" class="mt-sm-4 mt-md-5">
      <p
        v-for="(p, i) in $i18n.messages[$i18n.locale].desc[desc].content"
        :key="i"
        v-t="`desc.${desc}.content[${i}]`"
      ></p>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      required: true
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
