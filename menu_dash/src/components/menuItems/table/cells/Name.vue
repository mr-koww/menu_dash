<template lang="pug">
q-td(key="name")
  .col-12
    | {{ name }}
</template>

<script>
export default {
  name: 'Name',
  props: ['name']
}
</script>
