<template>
  <div class="layout">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>

import { Component, Vue } from 'nuxt-property-decorator'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default @Component({
  name: 'Default',
  components: { Footer, Header }
})
class Default extends Vue {

}
</script>

<style scoped>

</style>
