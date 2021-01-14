<template>
<div class="container">
  <div class="row-lg-12 footer">
    <img class="img-fluid logo" :src="logo" />
    <div class="row-lg-12 first">
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
    </div>
    <div class="row-lg-12 second">
      <div class="copyright">
          <img :src="twitter" />
          <img :src="linkedin" />
        <p>{{ copyright }}</p>
         <router-link to="/privacy-policy/"
          ><p>{{ privacy }}</p></router-link
        >
      </div>
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
* {
margin: 0;
padding: 0;
}
.footer {
  background-color: #3A3C48;
  width: 100vw;
  margin-left: -1rem;
  height: 600px;
  margin-top: 5rem;
}
.logo{
  margin-top: 5rem;
  width: 80%;
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
  margin-left: 10rem;
  img{
    margin-right: 1rem;
  }
  p {
    font-size: 15px;
  }
}
.contacts {
  margin-left: 10rem;
  margin-top: 2rem;
  img {
    margin-right: 1rem;
  }
  .emails {
    padding-right: 0;
    p{
      font-size: 15px;
    }
  }
}
.copyright {
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  p {
    text-align: center;
  }
  img {
      margin-left: 12px;
    }
}

</style>