<template lang="pug">
template(v-for="menuItem in menuItems")
  .q-ml-md.cursor-pointer.non-selectable.text-weight-medium(:style="`color: ${color(menuItem)}`")
    | {{ menuItem.name }}
    q-menu
      q-list(dense style="min-width: 100px")
        q-item(clickable v-for="subItem in menuItem.children")
          q-item-section(:style="`color: ${color(subItem)}`").
            {{ subItem.name }}
          template(v-if="subItem.children.length > 0")
            q-item-section(side) >
            q-menu(anchor="top end" self="top start")
              q-list
                q-item(clickable v-for="sub2Item in subItem.children")
                  q-item-section(:style="`color: ${color(sub2Item)}`").
                    {{ sub2Item.name }}
</template>

<script>
export default {
  name: 'menuItemsPreview',
  props: ['menuItems'],
  setup () {
    const color = (menuItem) => {
      return {
        'new': 'grey',
        'active': 'green',
        'disabled': 'red'
      }[menuItem.state]
    }

    return {
      color
    }
  }
}
</script>
