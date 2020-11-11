<template>
  <div class="footer row">
    <img class="logo" :src="logo" />
    <div class="row location">
      <img :src="locationPoint" />
      <div class="col-2">
        <p>{{ address }}</p>
      </div>
    </div>
    <div class="row contacts">
      <img :src="contactsImage" />
      <div class="emails col-2">
        <div v-for="email in contacts" :key="email">
          <a :href="`mailto:${email}`">
            <p>{{ email }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="row privacy">
      <router-link to="/privacy-policy/"
        ><p>{{ privacy }}</p></router-link
      >
    </div>
    <div class="copyright">
      <div class="icons">
        <img :src="twitter" />
        <img :src="linkedin" />
      </div>
      <p>{{ copyright }}</p>
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
.footer {
  background-color: #333333;
  height: 150px;
  align-items: center;
  // padding-right: 75px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.logo {
  margin-left: 60px;
  margin-right: 70px;
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
  p {
    width: 180px;
    padding-right: 0;
  }
  img {
    margin-bottom: 30px;
  }
}
.contacts {
  margin-left: 70px;
  img {
    margin-bottom: 30px;
  }
  .emails {
    padding-right: 0;
  }
}
.privacy {
  margin-left: 85px;
  margin-bottom: 30px;
}
.copyright {
  margin-left: 195px;
  p {
    margin-top: 15px;
  }
  .icons {
    margin: 0 auto;
    img {
      margin-right: 30px;
    }
  }
}
</style>