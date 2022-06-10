<template>
  <div class="form-box">
    <p class="text">
      {{ user }}
    </p>
    <form class="form">
      <input v-model="user" type="text" placeholder="Введите пользователя" class="input">
      <button type="submit" class="button" @click.prevent="handleSubmit">
        Создать
      </button>
    </form>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  name: 'Form'
})
class Form extends Vue {
  user=''
  handleSubmit () {
    return this.user;
  }
}
</script>

<style scoped>
.form-box{
  padding: 50px;
  width: fit-content;
  height: 200px;
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
.text{
  font-size: 24px;
  font-weight: 500;
}
.form{
  margin-top: 25px;
}
.input{
  font-size: 24px;
  font-weight: 500;
  color: #00bcd4;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 0.5em;
  border: #00bcd4 7px solid;
  box-shadow: inset 0 0 0.8em 0 #00bcd4, 0 0 0.5em 0 #00bcd4;
}
.button{
  font-size: 24px;
  font-weight: 500;
  color: #00bcd4;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 0.5em;
  border: #00bcd4 7px solid;
  text-shadow: 0 0 0.2em hsl(0 0% 100% / 0.3), 0 0 0.5em currentColor;
  box-shadow: inset 0 0 0.8em 0 #00bcd4, 0 0 0.5em 0 #00bcd4;
margin-left: 10px;
}
.button:active{
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border: #00ffff 7px solid;
  text-shadow: 0 0 0.2em hsl(0 0% 100% / 0.3), 0 0 0.5em currentColor;
  box-shadow: inset 0 0 0.8em 0 #00ffff, 0 0 0.5em 0 #00ffff;
  color: #00ffff;
}

</style>
