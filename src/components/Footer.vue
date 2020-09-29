<template>
  <div class="footer row">
    <h1>Digytle</h1>
    <div class="row location">
      <img :src="locationPoint" />
      <p>{{ address }}</p>
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
      <p>{{ privacy }}</p>
    </div>
    <div class="copyright">
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
    width: 250px;
  }
  img {
    margin-right: 8px;
    margin-bottom: 30px;
  }
}
.contacts {
  margin-left: 100px;
  img {
    margin-right: 8px;
    margin-bottom: 30px;
  }
}
.privacy {
  margin-left: 70px;
  margin-bottom: 30px;
}
.copyright {
  margin-left: 195px;
}
</style>