<template>
  <div id="app">
    <v-app id="v-app" dark>
      <template>
        <v-button-navigation v-model="value" color="grey lighten-4" dark>
          <v-btn value="recent" @click="gotoHome()" color="red">
            <span>PROFILE</span>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-btn value="recent" @click="gotoPage2()" color="red">
            <span>CONTACT</span>
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn value="recent" @click="gotoPage3()" color="red">
            <span>PROJECT</span>
            <v-icon>mdi-clipboard-check</v-icon>
          </v-btn>
        </v-button-navigation>
      </template>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    gotoHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    },
    gotoPage2() {
      if (this.$route.path !== '/contact') {
        this.$router.push('/contact')
      }
    },
    gotoPage3() {
      if (this.$route.path !== '/project') {
        this.$router.push('/project')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: blue;
}

#v-app {
  background-color: #363131;
}
</style>
