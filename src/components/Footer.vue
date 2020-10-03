<template>
  <div class="footer row">
    <h1>Digytle</h1>
    <div class="row location">
      <img :src="locationPoint" />
      <div class="col-2">
        <p>{{ address }}</p>
      </div>
    </div>
    <div class="row contacts">
      <img :src="contactsImage" />
      <div class="col-2">
        <div v-for="email in contacts" :key="email">
          <p>{{ email }}</p>
        </div>
      </div>
    </div>
    <div class="row privacy">
      <router-link to="/privacy-policy/"
        ><p>{{ privacy }}</p></router-link
      >
    </div>
    <div class="copyright">
      <div>
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
  margin-top: 180px;
  padding-right: 75px;
}
h1 {
  margin-left: 60px;
  font-weight: 700;
  font-size: 25px;
  color: white;
}
p {
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0;
  color: #edf2f4;
}
.location {
  margin-left: 70px;
  p {
    width: 235px;
  }
  img {
    margin-bottom: 30px;
  }
}
.contacts {
  margin-left: 30px;
  img {
    margin-bottom: 30px;
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
  img {
    margin-right: 30px;
  }
}
</style>