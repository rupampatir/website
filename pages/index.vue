<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <!-- <v-row justify="center" align="center"> -->
      <!-- </v-row> -->
      <div class="parallax" :style="`background-image: url(dwar-jingkyrmen.jpeg); height:480px;`" >
      </div>

      <!-- 
      <v-parallax height="300" src="/background-motif-flip.jpeg"> </v-parallax> -->

      <v-row justify="center" align="center" class="white mb-2">
        <v-card flat class="pa-6 page-layout x-10">
          <h1 class="text--secondary font-weight-thin mb-4">
            Welcome! My name is Rupam Patir
          </h1>

          <h4 class="subheading text--secondary">
            <p>
              I am a graduate student at the Unversity at Buffalo, New York. I
              am an experienced web developer with over three years of
              <nuxt-link to="/work-experience">work experience</nuxt-link> and
              <nuxt-link to="/academics"> research experience </nuxt-link> in
              the Interpretability of AI.
            </p>
            <p>
              I am actively pursuing Software Engineer roles
            </p>
          </h4>
          <v-card-actions class="pa-0">
            <a href="/Rupam Patir - Resume.pdf" target="_blank">
              <v-btn class="ml-0" color="black" dark large>Download Resume</v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-row>

      <!-- <div class="parallax" :style="`background-image: url(education.jpeg); height:200px;`" >
      </div> -->
      <v-row justify="center" align="center" class="full-width ma-0">
        <div class="parallax pa-8 d-flex justify-center" :style="`background-image: url(seamlessbg.jpg); height:fit-content;`">
          <v-card flat color="transparent" width="800" justify-center>
            <my-timeline />
          </v-card>
        </div>
        <!-- <v-parallax class="full-width d-flex justify-center" height="1000" src="/seamlessbg.jpg"> 
        </v-parallax> -->
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import MyTimeline from '../components/MyTimeline.vue'

export default {

  name: 'IndexPage',
    components: { MyTimeline },

  data() {
    return {
      menuItems: [
        {
          title: 'About Me',
          link: '/',
        },
        {
          title: 'Education',
          link: '/academics',
        },
        {
          title: 'Work Experience',
          link: '/work-experience',
        },
        {
          title: 'Research Experience',
          link: '/academics',
        },
        // {
        //   title: 'Miscellenous',
        //   link: '/academics',
        // },
      ],
    }
  },
  methods: {
    onClickMenuItem(item) {
      alert(item.title)
    },
  },
}
</script>
