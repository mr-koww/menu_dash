<template lang="pug">
q-page.q-pa-md
  .text-h6.q-pb-sm Предпросмотр
  .row.items-center.q-pa-sm.q-card--bordered
    preview(:menuItems="menuItemsPreview")

  // Table
  .text-h6.q-pb-sm.q-py-lg Таблица
  .row.items-center.q-pa-sm
    .col-12
      dash-table(@reset="reset" @update="refresh" :menuItems="menuItemsTable")
</template>

<script>
import { defineComponent, ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'

import { api } from 'boot/api'

import Preview from 'components/menuItems/Preview'
import DashTable from 'components/menuItems/Table'

export default defineComponent({
  name: 'Index',
  components: { Preview, DashTable },
  setup () {
    const store = useStore()
    const menuItemsPreview = ref([])
    const menuItemsTable = ref([])

    const q = computed(() => {
      return store.getters['menu/q']
    })
    watch(q, () => refresh())

    const refresh = () => {
      api.v1.menuItems.index()
        .then(({ data }) => {
          menuItemsPreview.value = data
        })
      api.dashboard.menuItems.index(q.value)
        .then(({ data }) => {
          menuItemsTable.value = data
        })
    }

    const reset = () => {
      api.dashboard.menuItems.reset().then(() => refresh())
    }

    onMounted(() => refresh())

    return {
      menuItemsPreview,
      menuItemsTable,
      refresh,
      reset
    }
  }
})
</script>
