<template lang="pug">
q-td(key="parent")
  .col-12.text-center
    | {{ parent_name }}
</template>

<script>
export default {
  name: 'Parent',
  props: ['parent_name']
}
</script>
