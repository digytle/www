<template>
  <div class="element">
    <div class="row-lg-12 footer">
      <img class="logo" :src="logo" />
      <div class="col-lg-4 location">
        <img :src="locationPoint" />
        <p>{{ address }}</p>
      </div>
      <div class="col-lg-4 contacts">
        <img :src="contactsImage" />
        <div class="emails">
          <div v-for="email in contacts" :key="email">
            <a :href="`mailto:${email}`">
              <p>{{ email }}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 copyright">
        <a href="https://www.linkedin.com/company/digytle/"><img :src="linkedin" /></a>
         <a href="https://twitter.com/digytle"><img :src="twitter" /></a>
        <router-link to="/privacy-policy/"
          ><p>{{ privacy }}</p></router-link
        >
        <p>{{ copyright }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content/footer.yaml";
export default {
  name: "Footer",
  data() {
    return {
      logo: "",
      privacy: "",
      contact: "",
      social: "",
      copyright: "",
      locationPoint: "",
      address: "",
      contactsImage: {},
      contacts: [],
      twitter: {},
      linkedin: {},
    };
  },
  mounted() {
    this.logo = footer.logo;
    this.privacy = footer.privacy;
    this.contact = footer.contact;
    this.address = footer.address;
    this.copyright = footer.copyright;
    this.locationPoint = footer.location;
    this.contactsImage = footer.contactsImage;
    this.contacts = footer.contacts;
    this.twitter = footer.twitter;
    this.linkedin = footer.linkedin;
  },
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.element{
   background-color: #3a3c48;
   overflow: hidden;
}
.footer {
  max-width: 1400px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
}
.logo {
  margin-top: 0rem;
  margin-bottom: 2rem;
  max-width: 30%;
  float: left;
  margin-left: 0.8rem;
}
p {
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0;
  color: #edf2f4;
  font-family: $font__menu;
  font-weight: 300;
}
.location {
  margin-top: 5rem;
  max-width: 20rem;
  img {
    width: 1.3rem;
    margin-right: 20rem;
  }
  p {
    font-size: 17px;
  }
}
.contacts {
  margin-top: 2rem;
  margin-bottom: 5rem;
  max-width: 20rem;
  img {
    width: 1.3rem;
    margin-left: 0px;
    margin-right: 20rem;
  }
  .emails {
    padding-right: 0;
    p {
      font-size: 17px;
    }
  }
}
.copyright {
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3rem;
  p {
    text-align: center;
    font-size: 17px;
  }
  img {
    padding: 1rem;
  }
}
@media only screen and (max-width: 700px) {
  .logo {
  max-width: 40%;
  }
}
@media only screen and (max-width: 400px) {
  .logo {
  max-width: 60%;
  }
}
</style>