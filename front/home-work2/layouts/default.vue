<template>
  <div class="layout">
    <HeaderComponent/>
    <main>
      <Nuxt/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>

import Vue from 'vue'
import {Component} from "nuxt-property-decorator";
import HeaderComponent from '../components/header/HeaderComponent'
import FooterComponent from '../components/footer/FooterComponent'

@Component({
  components: {HeaderComponent,FooterComponent}
})
export class Default extends Vue {

}

export default {
  name: 'DefaultComponent',
}
</script>

<style scoped>

</style>
