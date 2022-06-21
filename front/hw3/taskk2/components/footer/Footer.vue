<template>
  <footer>
    <div class="container">
      <div class="logo-box">
        <nuxt-link to="/" class="logo">
          Home<span class="logo-span">Work3</span>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>

import { Component, Vue } from 'nuxt-property-decorator'

export default @Component({
  name: 'Footer'
})
class Footer extends Vue {

}

</script>

<style scoped>
footer {
  height: 100px;
  border-radius: 5px 0;
  background: rgb(2,0,45);
  background: linear-gradient(0deg, rgba(2,0,45,0.3925945378151261) 0%, rgba(144,7,125,0.05646008403361347) 44%, rgba(0,212,255,0.05926120448179273) 100%);
}

.container {
  height: inherit;
  width: inherit;
  display: flex;
  align-items: center;
}
.logo {
  font-weight: 700;
  font-size: 26px;
  line-height: 1.2;
}

.logo-span {
  color: #1da9cc;
}

</style>
