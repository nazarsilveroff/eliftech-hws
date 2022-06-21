<template>
  <section class="container game-section">
    <div class="game-box">
      <div v-if="!isWantToPlay" class="message-box">
        <div class="message" v-html="message" />
        <div class="buttons-box">
          <button v-if="!gameStop" class="button" @click="startGame">
            ok
          </button>
          <button
            v-if="gameStop && totalPrize === 0 && attempts === 0 || numberOfGames === 4"
            class="button"
            @click="tryAgain"
          >
            try again?
          </button>
          <button
            v-if="gameStop && totalPrize > 0 && attempts === 0 && numberOfGames !== 4"
            class="button"
            @click="startGame"
          >
            want to play super game?
          </button>
          <button v-if="gameStop && totalPrize > 0 && attempts > 0" class="button" @click="startGame">
            wants to continue a game?
          </button>
          <button v-if="!gameStop" class="button" @click="stopGame">
            Cancel
          </button>
        </div>
      </div>

      <div v-if="isWantToPlay">
        <ul class="list">
          <li class="item">
            Attempts left: {{ attempts }}
          </li>
          <li class="item">
            Total prize: {{ totalPrize }}$
          </li>
          <li class="item">
            Possible prize to current attempt: {{ possiblePrize }}$
          </li>
        </ul>

        <form class="form">
          <label class="label">
            Enter a number from 0-{{ rage }}
            <input v-model="userNumber" type="number" class="input">
          </label>

          <div class="buttons-box">
            <button class="button" @click.prevent="play">
              ok
            </button>
            <button class="button" @click.prevent="stopGame">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { Component, Vue, Watch } from 'nuxt-property-decorator'

export default @Component({
  name: 'IndexPage'
})
class IndexPage extends Vue {
  rage = 0;
  attempts = 0;
  prise = 0
  totalPrize = 0;
  possiblePrize = 0;
  userNumber = 0
  numberOfGames = 1
  isWantToPlay = false;
  gameStart = false;
  gameStop = false;
  message = '<p>Do you want a play a game?</p>'

  startGame () {
    this.isWantToPlay = true
    if (this.attempts === 0) {
      this.attempts = 3
    }
    if (this.numberOfGames === 1) {
      this.possiblePrize = 10
      this.rage = 4
    }
  }

  stopGame () {
    if (this.totalPrize === 0 && this.attempts === 0) {
      this.isWantToPlay = false
      this.message = '<p>You did not become a millionaire!</p>'
      this.gameStop = true
    } else if (this.attempts === 0) {
      this.isWantToPlay = false
      this.message = `<p>Thank you for a game.</p> <p>Your prize is: ${this.totalPrize}$</p>`
      this.gameStop = true
    }
    if (this.attempts > 0) {
      this.isWantToPlay = false
      this.message = `
        <p>congratulations you guessed the number!</p>
        <p>you have ${this.attempts} attempts left.</p>
        <p>Possible prize to current attempt: ${this.possiblePrize}$</p>
        <p>Your prize is: ${this.totalPrize}$</p>
        `
      this.gameStop = true
    }
  }

  tryAgain () {
    if (this.totalPrize === 0) {
      this.message = '<p>Do you want a play a game?<p>'
      this.isWantToPlay = false
      this.gameStart = false
      this.gameStop = false
    }
    if (this.numberOfGames > 3) {
      this.rage = 4
      this.possiblePrize = 10
      this.totalPrize = 0
      this.attempts = 3
    }
    this.startGame()
  }

  play () {
    const randomNum = number => Math.floor(Math.random() * (number + 1))
    const num = randomNum(this.rage)
    if (+this.userNumber === num) {
      this.prise = this.possiblePrize
      this.totalPrize += this.prise
      return this.stopGame()
    } else {
      this.attempts -= 1
      if (this.attempts === 2 || this.attempts === 1) {
        this.possiblePrize /= 2
      }
    }
  }

  @Watch('attempts')
  stop () {
    if (this.attempts === 0) {
      this.numberOfGames += 1
      if (this.numberOfGames === 2) {
        this.possiblePrize = 30
      }
      if (this.numberOfGames === 3) {
        this.possiblePrize = 90
      }
      this.rage *= 2
      return this.stopGame()
    }
    if (this.numberOfGames === 4) {
      this.numberOfGames = 1
    }
  }
}
</script>

<style scoped>
.game-section {
  margin-top: 80px;
}

.game-box {
  width: fit-content;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  border: 4px solid #fff;
  border-radius: 10px;
  box-shadow: inset 0 0 25px #fff, /* inner white */ inset 10px 0 40px #f0f, /* inner left magenta short */ inset -10px 0 40px #0ff, /* inner right cyan short */ inset 10px 0 80px #f0f, /* inner left magenta broad */ inset -10px 0 80px #0ff, /* inner right cyan broad */ 0 0 25px #fff, /* outer white */ -10px 0 40px #f0f, /* outer left magenta */ 10px 0 40px #0ff; /* outer right cyan */
}

.message-box {

}

.message {
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
}

.list {
  margin-bottom: 20px;
}

.item {
  font-size: 24px;
}

.list > .item:not(:last-child) {
  margin-bottom: 10px;
}

.label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-transform: uppercase;
  font-size: 24px;
}

.input {
  width: 55px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  color: #00bcd4;
  padding: 10px;
  background-color: transparent;
  border-radius: 0.5em;
  border: #00bcd4 4px solid;
  box-shadow: inset 0 0 0.8em 0 #00bcd4, 0 0 0.5em 0 #00bcd4;
  margin-top: 15px;
}

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.buttons-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}

.button {
  padding: 10px 15px;
  background-color: transparent;
  border-radius: 0.5em;
  border: #00bcd4 2px solid;
  text-shadow: 0 0 0.2em hsl(0 0% 100% / 0.3), 0 0 0.5em currentColor;
  box-shadow: inset 0 0 0.8em 0 #00bcd4, 0 0 0.5em 0 #00bcd4;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  color: #00bcd4;
}

.button:active {
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border: #00ffff 3px solid;
  text-shadow: 0 0 0.2em hsl(0 0% 100% / 0.3), 0 0 0.5em currentColor;
  box-shadow: inset 0 0 0.8em 0 #00ffff, 0 0 0.5em 0 #00ffff;
  color: #00ffff;
}
</style>
