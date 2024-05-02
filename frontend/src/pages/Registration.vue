<template>
  <header class="text-logo-wrapper">
    <div class="text-logo">
      Fun Talk
    </div>
  </header>
  <main class="main-container">
    <form autofocus id="login-form">
      <h1 class="form-title">Registration</h1>
      <div v-if="errors.email.isValid===true" id="emailError" class="ErrorMessage">
        <span v-text="this.errors.email.text"></span>
        <div class="rectangle"><span class="exclamation-mark">!</span></div>
      </div>
      <div class="input-container">
        <label for="email"><img src="../images/mail.svg"></label>
        <input id="email" class="inputEmail" type="text" placeholder="Email"
               @input="emailIsValid($event.target.value)"/>
      </div>

      <div class="input-container">
        <label for="password"><img src="../images/lock.svg"></label>
        <input id="password" class="inputPassword" autocomplete="off" type="password" placeholder="Password"
               @input="passwordIsValid($event.target.value)"/>
      </div>
      <div class="password-strength" id="passwordStrength"></div>

      <div v-if="errors.password.isValid===true" id="passwordError" class="ErrorMessage">
        <span v-text="this.errors.password.text"></span>
        <div class="rectangle">
          <span class="exclamation-mark">!</span>
        </div>
      </div>

      <div v-if="errors.username.isValid" id="usernameError" class="ErrorMessage">Некорректное Username
        <div class="rectangle"><span class="exclamation-mark">!</span></div>
      </div>
      <div class="input-container">
        <label for="username"><img src="../images/user.svg"></label>
        <input id="username" class="inputUsername" autocomplete="off" type="text" placeholder="Username"/>
      </div>

      <input type="submit" class="buttonSubmit" value="Register"/>
      <div class="buttonRegister">
        <a href="/login">Login</a>
      </div>
    </form>
  </main>
</template>

<script lang="js">
import {defineComponent} from "vue";
import {Validator} from "../services/ValidatorData/Validator";
import {isVisible} from "bootstrap/js/src/util";

export default defineComponent({
  name: "Registration",
  components: {},
  data() {
    let errors = {
      email: {
        isValid: false,
        text: ''
      },
      password: {
        isValid: false,
        text: '',
        strength: ''
      },
      username: {
        isValid: false,
        text: ''
      }
    }
    return {
      errors,
    }
  },
  methods: {},
  computed: {
    checkPasswordStrength: function () {
      alert(this.errors.password.strength);
    }
  },
  setup() {
    let validator = new Validator();

    function checkValid(options) {
      let isValid = options.validator.validationPassword(options.validationStr);
      console.dir(isValid)
      if (isValid.isValid !== true) {
        options.error.isValid = true;
        options.error.text = isValid.text;
      } else {
        options.error.isValid = false;
      }
      // получаем полосу сложности пароля
      let strengthBar = document.getElementById("passwordStrength");
      console.log(strengthBar)

      // Получаем сложность пароля
      let strength = validator.checkPasswordStrength(options.validationStr);
      console.log(strength);

      // Установка ширины линии в зависимости от сложности пароля
      strengthBar.style.width = (strength * 25) + "%";

      // Установка класса для определения цвета линии в зависимости от сложности пароля
      if (strength === 1) {
        strengthBar.className = "weak password-strength";
      } else if (strength === 2 || strength === 3) {
        strengthBar.className = "medium password-strength";
      } else if (strength === 4) {
        strengthBar.className = "strong password-strength";
      }
    }

    // проверка валидности пароля
    function passwordIsValid(password) {
      let options = {
        validator: validator,
        validationStr: password,
        error: this.errors.password
      }

      checkValid(options);

      // let isValid = validator.validationPassword(password);
      // if (isValid.isValid !== true) {
      //   this.errors.password.isValid = true;
      //   this.errors.password.text = isValid.text;
      // } else {
      //   this.errors.password.isValid = false;
      // }
    }

    // проверка валидности почты
    function emailIsValid(email) {
      let isValid = validator.validationEmail(email);
      if (isValid.isValid !== true) {
        this.errors.email.isValid = true;
        this.errors.email.text = isValid.text;
      } else {
        this.errors.email.isValid = false;
      }
    }

    return {
      emailIsValid,
      passwordIsValid
    }
  }
});

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('../styles/Login.scss');
</style>