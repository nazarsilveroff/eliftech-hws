<template>
  <ul>
    <li v-for="user of 5" :key="user">
      <nuxt-link to='/users'>
        User - {{ user }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UsersComponent'
}
</script>

<style scoped>

</style>
