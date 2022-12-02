<template>
  <NuxtLink :to="link" class="btn-main rounded shadow-none border-0 text-decoration-none">
    <b-icon-arrow-left-short v-if="aLeft" class="left-arrow"></b-icon-arrow-left-short>
    {{ title }} 
    <b-icon-arrow-right-short v-if="aRight"></b-icon-arrow-right-short>
  </NuxtLink>
</template>
<script>
export default {
  name: 'button-main',
  props: ['title', 'link','aRight','aLeft']

}

</script>
<style lang="scss">
@import '@/assets/sass/components/button';
</style>