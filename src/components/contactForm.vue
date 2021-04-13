<template>
    <form name="Contact-us" method="post" data-netlify="true" class="contact">
        <h2>{{ contact.text.heading }}</h2>
      <p>{{ contact.text.subheading }}</p>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name">
        </div>
      </div>
      <div class="row">
        <div class="col" style="margin: 3rem 0 3rem 0;" >
          <div class="input-group">
            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
          </div>
        </div>
        <div class="col" style="margin: 3rem 0 3rem 0;">
          <div class="form-group" style="text-align: start;">
            <select class="form-control" >
              <option v-for="(option, index) in contact.options" :key="index"><h2>{{ option.text }}</h2></option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group" style="text-align: start;">
        <textarea class="description" id="inputDescription" type="text" placeholder="Description"></textarea>
      </div>
      


      <div class="last-row">
        <div class="col send">
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
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
</template>

<script>
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
</style>