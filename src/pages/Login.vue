<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-input
        v-model="email"
        filled
        type="Email"
        placeholder="Email"
        hint="Email"
      ></q-input>

      <br />

      <q-input
        v-model="password"
        filled
        type="password"
        placeholder="password"
        hint="password"
      ></q-input>

      <br />

      <q-btn color="primary" @click="simulateProgress()" style="width: 97%">
        로그인
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { auth } from "src/boot/firebase";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      password: "",
      email: "",
      name: "",
    };
  },

  methods: {
    simulateProgress: function () {
      console.log("btn called " + this.email + " " + this.password);

      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          this.$store.commit("setFireUser", userCredential.user);
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err.code);
          console.log(err.message);
          this.$q.notify({
            message: err.message,
            color: "purple",
          });
        });
    },
  },
});
</script>
