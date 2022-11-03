<template>
  <v-app dark>
   
    <v-app-bar color="primary" fixed app>
   
      <nuxt-link to="/" class="mt-2">
        <img height="80" width="80" src="/RP-logos_white.png"/>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn color="white" class="font-weight-bold" plain to="/">
        About Me
      </v-btn>

      <v-btn color="white" class="font-weight-bold" plain to="/academics">
        Education
      </v-btn>

      <v-btn color="white" class="font-weight-bold" plain to="/work-experience">
        Work Experience
      </v-btn>

      <v-btn color="white" class="font-weight-bold" plain to="/academics">
        Research & Projects
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container mx-auto class="full-width" >
        <Nuxt />
      </v-container>
    </v-main>
   
    <v-footer color="primary" absolute app>
      <v-col class="pa-8">
        <v-row>
          <v-col>
            <v-row justify="center">
              <a href="https://www.facebook.com/rupampatir" target="_blank">
                <img height="30" width="30" contain src="/facebook.png" />
              </a>

              <a href="https://github.com/rupampatir" target="_blank">
                <img class="mx-8" height="30" width="30" contain src="/github.png" />
              </a>
              
              <a href="https://www.linkedin.com/in/rupam-patir-323b4797/" target="_blank">
                <img height="30" width="30" contain src="/linkedin.png" />
              </a>
            </v-row>
          </v-col>
        </v-row>


        <v-row class="mt-6" justify="center">
          <span class="white--text">Rupam Patir &copy; {{ new Date().getFullYear() }}</span>
        </v-row>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
    }
  },
}
</script>
