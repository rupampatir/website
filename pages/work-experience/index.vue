<template>
  <v-row class="py-10 motif-background"  justify="center" align="center">
    <!-- style="background-image: url(hexgonalbg.jpeg)" -->
   
    <v-col  cols="12" sm="8" md="6">

      <h1> Work Experience</h1>

      <my-list :items="work_experience_list"/>
     


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
      work_experience_list: [{
        heading: 'Podium School, Bangalore - Web Developer',
        date: 'August 2020 - July 2021',
        description: `<ul>
          <li>Designed and engineered the frontend single handedly for the online learning platform (podium.school) while working with the UX and PMO teams by utilizing agile methods including biweekly sprints</li>
          <li>Created an automated SMS, Voice and WhatsApp notification system using RESTful APIS with NodeJS and MongoDB; the feature was very positively received by customers across the 12 countries where classes operated</li>
          <li>Streamlined content management by building a minimal CMS using RESTful APIs, NuxtJS and MongoDB to reduce operational latency by 75% from 8 hours/day to less than 2 hours/day</li>
          <li>Managed 2 interns to build UI components in NuxtJS for the webapp and CMS</li>
        </ul>`
      }, {
        heading: 'YourQuote, Bangalore - Frontend Developer',
        date: 'October 2018 - May 2020',
        description: `<ul>
          <li>Collaborated with the UX team to move towards customer-centric designs for the 1 mil+ user base increasing the app’s rating on GooglePlay  from 4 to 4.4</li>
          <li>Revamped the frontend architecture and revitalised Search Engine Optimisation (SEO) resulting in an improvement of Daily Active Users (DAU) on the webapp (yourquote.in) by 200% from 33K to 100K DAU</li>
          <li>Enhanced frontend performance by implementing Caching, Compression, Load Balancing, Lazy Loading, Image Responsiveness and JS/HTML/CSS optimization to handle the 3-fold increase in DAU thereby eliminating expenses incurred from using auxiliary computer resources</li>
          <li>Conceived and coded app features such as one that downloads a user’s quotes in a chic format that resulted in a 10-15% increase in monthly website revenue</li>
        </ul>`
      }, {
        heading: 'Kuliza, Bangalore - Junior Developer',
        date: 'June 2017 - October 2018',
        description: `<ul>
          <li>Spearheaded the frontend development for a real estate auctioning webapp (watabid.com) while using agile methodologies to collaborate with a team through daily scrums, weekly sprints and product discussions</li>
          <li>Collaborated with a team of 12 developers to build an e-commerce website for a clothing brand (Wrogn) and a webapp for an investment firm (finesse)</li>
        </ul>`
      }]
    }
  }
}
</script>
