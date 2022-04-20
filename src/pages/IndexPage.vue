<template>
  <q-page class="flex flex-center">
    <div class="text-h4 q-pa-md">
      Welcome
      <q-badge align="top">kopoChecker v1.0.0</q-badge>
    </div>
    <section v-if="isUserAuth" class="section">
      hi, {{ this.name }} {{ getFireUser.email }}
    </section>
    <div class="q-pa-md">
      <router-link to="/login" style="text-decoration: none">
        <q-btn color="secondary" label="로그인"></q-btn>
      </router-link>

      <q-btn color="secondary" @click="signOut()" label="로그아웃"></q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import { db } from "src/boot/firebase";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      name: "",
    };
  },

  mounted() {
    this.authAction();
    if (this.getFireUser != null) {
      db.collection("users")
        .where("id", "==", this.getFireUser.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            this.name = doc.data().name;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  },

  updated() {
    if (this.getFireUser != null) {
      db.collection("users")
        .where("id", "==", this.getFireUser.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            this.name = doc.data().name;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  },

  computed: {
    ...mapGetters(["getFireUser", "isUserAuth"]),
  },

  methods: {
    ...mapActions(["signOutAction", "authAction"]),
    signOut() {
      // this.name = '' // this line calling updated(), so I commented.
      this.signOutAction();
      this.$router.push({ path: "login" });
    },
  },
});
</script>
