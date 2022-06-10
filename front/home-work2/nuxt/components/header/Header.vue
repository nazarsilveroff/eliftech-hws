<template>
  <header>
    <nav class="container">
      <div class="logo-box">
        <nuxt-link to="/" class="logo">
          Home<span class="logo-span">Work2</span>
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
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  name: 'Header'
})
class Header extends Vue {

}
</script>

<style scoped>
header {
  height: 70px;
  border-radius: 0 5px;
  background: rgb(2, 0, 45);
  background: linear-gradient(180deg, rgba(2, 0, 45, 0.3925945378151261) 0%, rgba(144, 7, 125, 0.05646008403361347) 44%, rgba(0, 212, 255, 0.05926120448179273) 100%);
}

nav {
  height: inherit;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
}

.logo-span {
  color: #1da9cc;
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  margin-right: 40px;
}

.nav-item > .nuxt-link-exact-active {
  color: #1da9cc;
}

.nav-item > .nuxt-link-exact-active {
  color: #1da9cc;
  position: relative;
}

.nav-item > .nuxt-link-exact-active:after {
  position: absolute;
  content: " ";
  width: 100%;
  height: 2px;
  left: 0;
  right: 0;
  bottom: -6px;
  box-shadow: 0 0 0.4em #1da9cc;
  background-color: #1da9cc;
  border-radius: 8px;
}

.rout-link {
  text-transform: uppercase;
}

</style>
