<template lang="pug">
.col-12
  .row.q-col-gutter-x-md.q-pb-md.q-mb-xs
    .col-auto.flex.flex-center
      .row
        .col-12
          .text-h6.text-grey-8.

    .col-grow
      q-select.filters.q-pa-none(
        hide-dropdown-icon readonly
        v-model="filters")
        template(v-slot:selected)
          q-chip(
            @remove="removeFilter(index)"
            color="primary"
            removable
            size="10px"
            square
            style="font-size: 14px"
            text-color="white"
            v-for="({ fieldLabel, operatorLabel, valueLabel}, index) in filters").
              {{ fieldLabel }} {{ operatorLabel }} {{ valueLabel }}

        template(v-slot:append)
          q-btn(
            color="grey-7"
            label="Выберите фильтр"
            flat
            size="sm")
            filter-menu(
              @addFilter="addFilter"
              :defaultFilter="{ field: 'name', operator: 'cont' }"
              :filterOptions="filterOptions()")
          q-btn(
            @click="clearFilters"
            color="grey-7"
            label="Очистить"
            flat
            size="sm")

    .col-auto.flex.flex-center
      q-btn.text-blue(
        @click="reset"
        label="Сбросить меню"
        color="white")

    .col-auto.flex.flex-center
      q-btn.text-blue(
        @click="refresh"
        label="Обновить"
        color="white")
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import FilterMenu from 'components/menuItems/table/bar/Filter'
import { filterOptions } from 'components/menuItems/table/bar/filters'

export default {
  name: 'Bar',
  components: { FilterMenu },
  setup (_props, { emit }) {
    const store = useStore()

    const dateRef = ref(null)
    const date = computed(() => {
      return store.getters['orders/date']
    })

    const filters = computed(() => {
      return store.state.menu.filters
    })

    const refresh = () => emit('refresh')

    const addFilter = (payload) => {
      store.commit('menu/ADD_FILTER', payload)
    }

    const clearFilters = () => {
      store.commit('menu/CLEAR_FILTERS')
    }
    const removeFilter = (index) => {
      store.commit('menu/REMOVE_FILTER', index)
    }

    const reset = () => {
      emit('reset')
    }

    return {
      date,
      dateRef,
      filters,
      filterOptions,
      addFilter,
      clearFilters,
      removeFilter,
      refresh,
      reset
    }
  }
}
</script>
