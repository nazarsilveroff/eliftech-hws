<template>
  <footer>
    <div class="container">
      <div class="logo-box">
        <nuxt-link to="/" class="logo">
          HomeWork2
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'

export class FooterComponent extends Vue {

}

export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer{
  height: 100px;
}
.container{
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
