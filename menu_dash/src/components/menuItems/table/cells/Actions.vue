<template lang="pug">
q-td(key="actions")
  .row.q-col-gutter-sm.flex-center
    .col-auto
      q-btn(
        @click="activate"
        color="green"
        label="Activate")
    .col-auto
      q-btn(
        @click="disable"
        color="red"
        label="Disable")
</template>

<script>
import { toRefs } from 'vue'
import { api } from 'boot/api'

import { useQuasar } from 'quasar'

export default {
  name: 'Actions',
  props: ['id'],
  emits: ['updated'],
  setup (props, { emit }) {
    const $q = useQuasar()

    const { id } = toRefs(props)
    const disable = () => {
      api.dashboard.menuItems.disable(id.value)
        .then(({ data: { message }}) => {
          $q.notify({ message, position: 'top', color: 'positive'})
          emit('updated')
        })
        .catch(({ response: { data: { message } }}) => {
          $q.notify({ message, position: 'top', color: 'negative'})
        })
    }

    const activate = () => {
      api.dashboard.menuItems.activate(id.value)
        .then(({ data: { message }}) => {
          $q.notify({ message, position: 'top', color: 'positive'})
          emit('updated')
        })
        .catch(({ response: { data: { message } }}) => {
          $q.notify({ message, position: 'top', color: 'negative'})
        })
    }

    return {
      activate,
      disable
    }
  }
}
</script>
