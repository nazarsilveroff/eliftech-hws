<template>
  <section>
    <h1>User: {{ $route.params.id }}</h1>
  </section>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  name: 'UserPage'
})
class UserPage extends Vue {

}
</script>

<style scoped>

</style>
