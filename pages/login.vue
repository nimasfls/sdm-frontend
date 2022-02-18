<template>
  <v-app id="inspire" :dark="false">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark>
                <v-toolbar-title>صفحه ورود</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="username"
                    v-model="username"
                    prepend-icon="mdi-account"
                    name="login"
                    label="نام کاربری"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    v-model="password"
                    prepend-icon="mdi-key"
                    name="password"
                    label="رمز عبور"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.stop="login()" >ورود</v-btn>
                <v-btn color="indigo lighten-5" @click.stop="signup()" >ثبت نام</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'loginPage',
  layout: 'empty',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    async login() {
      await this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      });
    },
    async signup() {

    }
  },
};
</script>

<style scoped></style>
