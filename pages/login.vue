<template>
  <v-app id="inspire" :dark="false">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title>صفحه ورود</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="نام کاربری"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-key"
                    name="password"
                    label="رمز عبور"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop='login()'>ورود</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {  } from 'vuex';

export default {
  name: 'loginPage',
  layout: 'empty',
  methods: {
    async login() {
      console.log(this.$store)
      await this.$store.dispatch('auth/login', {
        username: 'asd', password: 'qwe'
      });
      // const result = await axios.post('http://localhost:8000/auth/login', {username: 'test', password: 'test'});
      // await axios.get('http://localhost:8000/auth/test')
      // await axios.get('http://localhost:8000/auth/refresh')
      // await axios.get('http://localhost:8000/auth/access')
      // console.log(result)
    }
  }
}
</script>

<style scoped></style>
