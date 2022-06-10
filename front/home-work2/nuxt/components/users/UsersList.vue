<template>
  <div class="users-box">
    <ul class="users-list">
      <li v-for="user in users" :key="user.id" class="user-item">
        <nuxt-link class="user-link" :to="`/users/${user.name}`">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  name: 'UsersList'
})
class UsersList extends Vue {
  users = []

  async fetch () {
    const { data } = await this.$axios('https://jsonplaceholder.typicode.com/users');
    this.users.push(...data);
  }
}
</script>

<style scoped>
.users-box{
  padding: 50px;
  width: 400px;
  margin: 40px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 4px solid #fff;
  border-radius: 10px;
  box-shadow:
    inset 0 0 25px #fff,      /* inner white */
    inset 10px 0 40px #f0f,   /* inner left magenta short */
    inset -10px 0 40px #0ff,  /* inner right cyan short */
    inset 10px 0 80px #f0f,  /* inner left magenta broad */
    inset -10px 0 80px #0ff, /* inner right cyan broad */
    0 0 25px #fff,            /* outer white */
    -10px 0 40px #f0f,        /* outer left magenta */
    10px 0 40px #0ff;         /* outer right cyan */
}
.users-list{

}
.user-item{
  margin-bottom: 15px;
  list-style-type: auto;
}
.user-item:last-child{
  margin-bottom: 0;
}
.user-link{

}
</style>
