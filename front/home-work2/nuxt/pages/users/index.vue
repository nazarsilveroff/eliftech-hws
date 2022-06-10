<template>
  <section class="container">
    <Form />
    <UsersList />
  </section>
</template>

<script>

import { Component, Vue } from 'nuxt-property-decorator';
import UsersList from '~/components/users/UsersList';
import Form from '~/components/form/Form';

export default @Component({
  name: 'UsersPage',
  components: { UsersList, Form }
})
class UsersPage extends Vue {

}

</script>

<style scoped>

</style>
