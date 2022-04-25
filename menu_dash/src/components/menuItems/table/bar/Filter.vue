<template lang="pug">
q-menu(:offset="[12, 10]" ref="menuRef")
  .row.no-wrap.q-pa-md.q-col-gutter-x-md
    .col-auto(style="min-width: 160px")
      q-select(
        dense
        no-error-icon
        outlined
        label="Поле"
        :options="filterOptions"
        emit-value
        map-options
        v-model="field")

    .col-auto(style="min-width: 160px")
      q-select(
        dense
        no-error-icon
        outlined
        label="Оператор"
        :options="operatorOptions"
        emit-value
        map-options
        v-model="operator")

    .col-auto(style="width: 220px")
      template(v-if="fieldType === 'select'")
        q-select(
          dense
          no-error-icon
          outlined
          label="Значение"
          :options="valueOptions"
          emit-value
          map-options
          v-model="value")
      template(v-else-if="fieldType === 'input'")
        q-input(
          dense
          no-error-icon
          outlined
          label="Значение"
          v-model="value")

    .col-auto.flex.flex-center
      .row.q-col-gutter-x-md
        .col-auto
          q-btn(
            @click="addFilter"
            :disable="!value"
            color="positive"
            label="Ок")
        .col-auto
          q-btn(
            @click="clearFilter"
            color="negative"
            label="Отмена")
</template>

<script>
import { computed, ref, toRefs, watch } from 'vue'

export default {
  name: 'FilterMenu',
  props: ['filterOptions', 'defaultFilter'],
  emits: ['addFilter'],
  setup (props, { emit }) {
    const { filterOptions, defaultFilter } = toRefs(props)

    const field = ref(null)
    const fieldType = computed(() => {
      return filterOptions.value.find((opt) => opt.value === field.value).type
    })

    watch(field, () => {
      return operator.value = filterOptions.value.find((opt) => opt.value === field.value).operators[0].value
    })

    const operator = ref(null)
    const operatorOptions = computed(() => {
      return filterOptions.value.find((opt) => opt.value === field.value).operators
    })

    const value = ref(null)
    const valueOptions = computed(() => {
      return filterOptions.value.find((opt) => opt.value === field.value).valueOptions
    })

    const initFilter = () => {
      field.value = defaultFilter.value.field
      operator.value = defaultFilter.value.operator
      value.value = null
    }

    const addFilter = () => {
      const fieldLabel = computed(() => {
        return filterOptions.value.find((opt) => opt.value === field.value).label
      })

      const operatorLabel = computed(() => {
        return operatorOptions.value.find((opt) => opt.value === operator.value).label
      })

      const valueLabel = computed(() => {
        if (valueOptions.value) {
          return valueOptions.value.find((opt) => opt.value === value.value).label
        } else {
          return value.value
        }
      })

      const payload = {
        field: field.value,
        fieldLabel: fieldLabel.value,
        operator: operator.value,
        operatorLabel: operatorLabel.value,
        value: value.value,
        valueLabel: valueLabel.value
      }
      console.log(payload)
      emit('addFilter', payload)
      menuRef.value.hide()
    }

    const clearFilter = () => {
      initFilter()
    }

    initFilter()

    const menuRef = ref(null)

    return {
      field,
      fieldType,
      operator,
      operatorOptions,
      value,
      valueOptions,
      addFilter,
      clearFilter,
      menuRef
    }
  }
}
</script>
