<template>
  <div class="element">
    <div class="row-lg-12 footer">
      <div class="col-lg-4">
        <img class="img-fluid logo" :src="logo" />
      </div>
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
        <img :src="twitter" />
        <img :src="linkedin" />
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
}
.footer {
  max-width: 1400px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;

}
.logo {
  margin-top: 5rem;
  max-width: 80%;
  margin-left: -5rem;
}
p {
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0;
  color: #edf2f4;
  font-family: $font__title;
}
.location {
  margin-top: 5rem;
  max-width: 20rem;
  img {
    width: 1.3rem;
    margin-right: 50rem;
  }
  p {
    font-size: 17px;
  }
}
.contacts {
  margin-top: 2rem;
  margin-bottom: 5rem;
  img {
    width: 1.3rem;
    margin-right: 50rem;
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
@media only screen and (max-width: 1300px) {
  .logo {
  margin-left: 4rem;
  }
  .location {
  margin-left: 4rem;
  }
  .contacts {
  margin-left: 4rem;
  }
}
@media only screen and (max-width: 1000px) {
  .logo {
  margin-left: -5rem;
  width: 80%;
  }
  .location {
  margin-top: 5rem;
  margin-left: 2rem;
  }
  .contacts {
  margin-top: 2rem;
  margin-bottom: 5rem;
  margin-left: 2rem;
}
}
@media only screen and (max-width: 450px) {
  .logo {
  margin-left: 0rem;
  }
}
</style>