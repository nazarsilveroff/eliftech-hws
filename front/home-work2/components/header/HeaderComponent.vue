<template>
  <header>
    <nav class="container">
      <div class="logo-box">
        <nuxt-link to="/" class="logo">
          HomeWork2
        </nuxt-link>
      </div>
      <ul class="nav-list">
        <li class="nav-item">
          <nuxt-link to="/" class="rout-link">
            Главная
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/users" class="rout-link">
            Юзеры
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Vue from 'vue'

export class HeaderComponent extends Vue {

}
export default {
  name: 'HeaderComponent'
}

</script>

<style scoped>
header{
  height: 70px;
}
nav{
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-list{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  margin: 0 auto;
}
.rout-link{
  text-transform: uppercase;
}
</style>
