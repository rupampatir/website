<template>
  <v-row class="py-10 motif-background" justify="center" align="center">
   
    <v-col  cols="12" sm="8" md="6">

      <h1> Research and Projects </h1>

      <my-list :items="academic_experience_list"/>
     

      <h1 class="mt-8"> Education </h1>

      <my-list :items="education_list"/>
     


    </v-col>
  </v-row>
</template>

<script>
import MyList from '../../components/MyList.vue'

export default {
  components: { MyList} ,
  name: 'WorkExperiencePage',
  data() {
    return {
      education_list: [{
        heading: 'MS in Computer Science & Engineering, SUNY Buffalo, New York',
        date: 'August 2021 - December 2022',
        chips: ["Analysis of Algorithms","Machine Learning", "Modern Networking Concepts", "Computer Vision & Image Processing"],
        description: ""
      }, {
        heading: 'B.Tech in Computer Science & Engineering, IIIT, Delhi, India',
        date: 'August 2013 - May 2017',
        chips: ["Data Structures","Advanced Programming","Collaborative Filtering","Big Data Analytics","Data Mining"],
        description: ""
      }],
      academic_experience_list: [{
        heading: 'Research on the Interpretability of AI',
        date: 'November 2019 - July 2020',
        description: `<ul>
          <li>Innovated a novel approach for AI interpretability and ran experiments on 5 datasets to verify its performance and usefulness</li>
          <li>Led the research, writing and presentation of the paper, “Interpretability of Blackbox Machine Learning Models through Dataview Extraction and Shadow Model creation” presented at an international conference ICONIP 2020</li>
        <ul>`
      }, {
        heading: 'Text Chat Application',
        date: 'August 2021 - November 2021',
        description: `<ul>
            <li>Architectured a server-client text-chat application using socket programming</li>
            <li>Incrementally built the features in C for the text application including broadcast messaging and file transfers</li>
            </ul>`
      }]
    }
  }
}
</script>
