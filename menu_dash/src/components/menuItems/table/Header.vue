<template lang="pug">
q-tr.text-subtitle2.text-left
  q-th.bg-grey-2(style="width: 15%; min-width: 25px; max-width: 35px").
    ID

  q-th.bg-grey-2(style="width: 15%; min-width: 100px; max-width: 200px").
    Name

  q-th.bg-grey-2.text-center(style="width: 20%; min-width: 150px; max-width: 150px").
    State

  q-th.bg-grey-2.text-center(style="width: 10%; min-width: 100px; max-width: 200px").
    Parent name

  q-th.bg-grey-2.text-center(style="width: 10%; min-width: 100px; max-width: 200px").
    Depth

  q-th.bg-grey-2.text-center(style="width: 35%; min-width: 300px; max-width: 400px").
    Actions
</template>

<script>
export default {
  name: 'UsersTableHeader'
}
</script>
