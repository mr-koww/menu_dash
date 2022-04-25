<template lang="pug">
q-td(key="depth")
  .col-12.text-center
    | {{ depth }}
</template>

<script>
export default {
  name: 'Depth',
  props: ['depth']
}
</script>
