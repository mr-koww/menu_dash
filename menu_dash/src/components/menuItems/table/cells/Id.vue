<template lang="pug">
q-td(key="id")
  .col-12
    | 1{{ id }}
</template>

<script>
export default {
  name: 'Id',
  props: ['id']
}
</script>
