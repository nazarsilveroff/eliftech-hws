<template>
  <div class="neon-title">
    <div class="text">
      <h1>This is my home work</h1>
      <h1>This is my home work</h1>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  name: 'Hero'
})
class Hero extends Vue {

}
</script>

<style scoped>
.neon-title {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  font-family: monospace;
  border: 4px solid #fff;
  border-radius: 10px;
  box-shadow:
    inset 0 0 25px #fff,      /* inner white */
    inset 10px 0 40px #f0f,   /* inner left magenta short */
    inset -10px 0 40px #0ff,  /* inner right cyan short */
    inset 10px 0 150px #f0f,  /* inner left magenta broad */
    inset -10px 0 150px #0ff, /* inner right cyan broad */
    0 0 25px #fff,            /* outer white */
    -10px 0 40px #f0f,        /* outer left magenta */
    10px 0 40px #0ff;         /* outer right cyan */
  opacity: 90%;
}
.neon-title .text {
  position: relative;
}
.neon-title .text h1 {
  font-size: 90px;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: transparent;
  text-shadow: 0 0 25px #00bcd4;
  -webkit-text-stroke: 2px #00bcd4;
}
.neon-title .text h1:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  color: #00bcd4;
  animation: neon-title 3s ease-in-out infinite;
}
@keyframes neon-title {
  0%, 100% {
    clip-path: polygon(0% 51%, 13% 48%, 26% 50%, 37% 53%, 50% 55%, 61% 58%, 76% 60%, 91% 59%, 100% 51%, 100% 100%, 0 100%);
  }
  50% {
    clip-path: polygon(0 51%, 9% 57%, 21% 62%, 36% 63%, 49% 57%, 60% 50%, 75% 46%, 91% 44%, 100% 42%, 100% 100%, 0 100%);
  }
}
</style>
