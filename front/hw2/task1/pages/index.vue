<template>
  <section class="container">
    <Hero />
    <Counter />
  </section>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import Hero from '~/components/hero/Hero';
import Counter from '~/components/counter/Counter';
export default @Component({
  name: 'HomePage',
  components: { Hero, Counter }
})
class HomePage extends Vue {

}
</script>
