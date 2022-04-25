<template lang="pug">
q-layout(view="hHh lpR lFf")
    main-header

    main-drawer

    q-page-container
      q-page.column.q-pa-md-md.q-pa-xs-sm
        router-view
</template>

<script>
import { defineComponent } from 'vue'

import MainDrawer from 'components/layouts/Drawer.vue'
import MainHeader from 'components/layouts/Header.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { MainDrawer, MainHeader }
})
</script>
