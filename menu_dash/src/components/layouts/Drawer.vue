<template lang="pug">
q-drawer.bg-primary.text-white(
  :model-value="true"
  elevated side="left" show-if-above)

  q-scroll-area.fit
    q-list
      q-item.text-weight-medium(
        to="/"
        active-class="text-white dimmed"
        clickable
        exact
        v-ripple)
          q-item-section(avatar)
            q-icon.text-white(name="fal fa-list")
          q-item-section
            q-item-label Menu
</template>

<script>
export default {
  name: 'MainDrawer'
}
</script>
