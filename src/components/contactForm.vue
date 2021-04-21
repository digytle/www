<template>
<div>
    <form name="Contact-us" method="post" data-netlify="true" class="contact" action="src\components\submited.vue" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="Contact-us" />
      <h2>{{ contact.text.heading }}</h2>
      <p>{{ contact.text.subheading }}</p>
      <div class="row">
        <div class="col">
          <p class="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>
          <input type="text" class="form-control" placeholder="First name" name="name" required>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" name="surname" required>
        </div>
      </div>
      <div class="row">
        <div class="col" style="margin: 3rem 0 3rem 0;" >
          <div class="input-group">
            <input type="email" class="form-control" id="inputEmail" placeholder="Email" name="email" required>
          </div>
        </div>
        <div class="col" style="margin: 3rem 0 3rem 0;">
          <div class="form-group" style="text-align: start;">
            <select class="form-control" name="here for">
              <option v-for="(option, index) in contact.options" :key="index"><h2>{{ option.text }}</h2></option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group" style="text-align: start;">
        <textarea class="description" id="inputDescription" type="text" placeholder="Description" name="text" required></textarea>
      </div>
      <div class="last-row">
        <div class="col send">
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" name="news">
              <label class="form-check-label" for="gridCheck">
                {{ contact.confirm.text }}
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" :style="{ background: contact.text.color }">Submit my request</button>
        </div>
        <div class="col social">
          <a href="https://www.facebook.com/"><i class="fab fa-facebook-square" :style="{ color: contact.text.color }"></i></a>
          <a href="https://twitter.com/digytle"><i class="fab fa-twitter-square" :style="{ color: contact.text.color }"></i></a>
          <a href="https://www.linkedin.com/company/digytle/about/"><i class="fab fa-linkedin-in" :style="{ color: contact.text.color }"></i></a>
          <a href="https://github.com/digytle/www"><i class="fab fa-github" :style="{ color: contact.text.color }"></i></a>
        </div>
      </div>
    </form>
    <div class="contact">
      <hr>
      <h2>Or contact us personaly</h2>
      <p>Shoot us an email or call us</p>
      <div class="flex">
        <a href="mailto:cc@digytle.com" :style="{ color: contact.text.color }" class="clickable">Charlie Cox <br>/UK representative/</a>
        <a href="mailto:t.e.shaw@digytle.com" :style="{ color: contact.text.color }" class="clickable">Thomas Shaw <br>/DE representative/</a>
      </div>
      <div class="flex">
        <a href="tel:1-562-867-5309" :style="{ color: contact.text.color }" class="clickable">+ 12 345 6789 1011<br>(Charlie Cox)</a>
        <a href="tel:31-970-1028-0106" :style="{ color: contact.text.color }" class="clickable">+ 31 970 1028 0106<br>(Thomas Shaw)</a>
      </div>
      <hr class="two">
    </div>
</div>
</template>

<script>
// TODO
// Is this impot Vue needed here?
// No other component has it.
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
        data: {},
        background: {},
        header: {},
        sections: [],
        text: [],
        action: [],
        buttons: [],
        contact: [],
        options: [],
        };
    },
  mounted() {
    this.data = require(`js-yaml-loader!../../content/featurettes/${this.$route.params.pathMatch}.yaml`);
    this.background = this.data.background;
    this.header = this.data.header;
    this.sections = this.data.sections;
    this.text = this.sections.section;
    this.action = this.data.action;
    this.buttons = this.data.buttons;
    this.contact = this.data.contact;
    this.options = this.data.options;
  },
})
</script>

<style scoped lang="scss">
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
@import "../assets/main.scss";
.contact{
  margin-left: auto;
  margin-right: auto;
  max-width: 950px;
  margin-bottom: 5rem;
  h2{
    text-align: center;
    font-size: 30px;
    margin-top: 0px;
  }
  p{
    font-family: $font__menu;
  }
  hr{
    border-top: 2px solid black;
    margin-bottom: 5rem;
  }
  .two{
    margin-top: 5rem;
  }
  .flex{
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    .clickable{
      text-decoration: none;
      width: fit-content;
      font-size: 18px;
      margin-top: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      display: flex;
      flex-direction: column;
    }
  }
  .form-control{
    border: none;
    border-bottom: 2px solid #000;
    border-radius: 0;
  }
  .btn{
    border-radius: 0;

  }
  .description{
    height: 40px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #000;
  }
  .hidden{
    display: none;
  }
  .send{
    text-align: start;
    padding: 0;
  }
  .social{
    font-size: 30px;
    text-align: end;
    padding: 0;
    .fab{
      margin-left: 1rem;
      color: #007bff;
    }
  }
  .last-row{
    display: flex;
  }
}
@media only screen and (max-width: 800px) {
  .contact{
    width: 80%;
  }
}
@media only screen and (max-width: 400px) {
  .contact{
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 5rem;
    .row{
      display: flex;
      flex-direction: column;
      .col{
        margin: 0 !important;
        margin-bottom: 2rem !important;
      }
    }
    .last-row{
    display: block;
    }
    .send, .social{
      text-align: center;
      margin-bottom: 1rem;
    }
  }
}
</style>