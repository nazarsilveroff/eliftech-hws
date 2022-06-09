<template>
  <section class="container">
    <UsersComponent/>
  </section>
</template>

<script>

import Vue from 'vue';
import {Component} from 'nuxt-property-decorator';
import UsersComponent from '~/components/users/UsersComponent'
@Component({
  components:{UsersComponent}
})
export class UsersPage extends Vue{

}
export default {
  name: 'UsersPage'
}
</script>

<style scoped>

</style>
