<template lang="pug">
q-td(key="state")
  .col-12.text-center
    | {{ state }}
</template>

<script>
export default {
  name: 'State',
  props: ['state']
}
</script>
