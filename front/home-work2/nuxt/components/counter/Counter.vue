<template>
  <div class="counter-box">
    <p class="cont">
      {{ cont }}
    </p>
    <div class="button-box">
      <button id="increment" class="button" @click="calculate">
        increment
      </button>
      <button id="decrement" class="button" @click="calculate">
        decrement
      </button>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  name: 'Counter'
})
class Counter extends Vue {
  cont = 0

  calculate (event) {
    const { id } = event.target;
    id === 'increment' ? this.cont++ : this.cont--;
  }
}
</script>

<style scoped>
.counter-box{
  padding: 20px;
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
.cont{
  font-size: 48px;
  font-weight: 500;
}
.button-box{
margin-top: 30px;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.button{
  padding: 10px 15px;
  background-color: transparent;
  border-radius: 0.5em;
  border: #00bcd4 7px solid;
  text-shadow: 0 0 0.2em hsl(0 0% 100% / 0.3), 0 0 0.5em currentColor;
  box-shadow: inset 0 0 0.8em 0 #00bcd4, 0 0 0.5em 0 #00bcd4;
  font-size: 24px;
  font-weight: 500;
  color: #00bcd4;
}
.button:active{
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border: #00ffff 7px solid;
  text-shadow: 0 0 0.2em hsl(0 0% 100% / 0.3), 0 0 0.5em currentColor;
  box-shadow: inset 0 0 0.8em 0 #00ffff, 0 0 0.5em 0 #00ffff;
  color: #00ffff;
}

</style>
