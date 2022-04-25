<template lang="pug">
table-bar(@reset="emit('reset')" @refresh="emit('update')")

q-table.no-shadow.q-card--bordered.sticky-header(
  :rows="menuItems"
  :pagination="{ rowsPerPage: 0 }"
  bordered
  hide-pagination
  ref="tableRef"
  row-key="id"
  separator="cell"
  style="height: calc(100vh - 342px)")
  template(v-slot:header)
    table-header

  template(v-slot:body="{ row: { id, name, state, depth, parent_name } }")
    q-tr
      cell-id(:id="id")
      cell-name(:name="name")
      cell-state(:state="state")
      cell-parent(:parent_name="parent_name")
      cell-depth(:depth="depth")
      cell-actions(@updated="emit('update')" :id="id")
</template>

<script>
import { ref } from 'vue'

import TableBar from 'components/menuItems/table/Bar'
import TableHeader from 'components/menuItems/table/Header'
import CellId from 'components/menuItems/table/cells/Id'
import CellName from 'components/menuItems/table/cells/Name'
import CellState from 'components/menuItems/table/cells/State'
import CellParent from 'components/menuItems/table/cells/Parent'
import CellDepth from 'components/menuItems/table/cells/Depth'
import CellActions from 'components/menuItems/table/cells/Actions'

export default {
  name: 'menuItemsTable',
  props: ['menuItems'],
  emits: ['update', 'reset'],
  components: { TableBar, TableHeader, CellId, CellName, CellState, CellParent, CellDepth, CellActions },
  setup (_, { emit }) {
    const tableRef = ref(null)
    const resources = ref([])

    return {
      tableRef,
      emit,
      resources
    }
  }
}
</script>
