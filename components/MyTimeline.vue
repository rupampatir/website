<template>
  
    <v-timeline
    :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(timeline_item, ti) in timeline"
        :key="ti"
        large
        :color="timeline_item.color"
      >
        <template v-slot:icon>
            <v-avatar color="white">
                <v-img max-height="30" max-width="30" contain :src="timeline_item.icon"/>
            </v-avatar>
        </template>
        <!-- <template v-slot:opposite>
        </template> -->
        <v-card min-width="300" :color="`${timeline_item.color}`" class="elevation-2">
          <!-- <span :class="`headline font-weight-bold ${timeline_item.color}--text`">{{timeline_item.year}}</span> -->
           <!-- class="text--secondary text-h5" -->
          <v-card-title :class="`font-weight-medium ${timeline_item.text_color}--text`">
            {{timeline_item.year}}
          </v-card-title>
           <v-card-subtitle :class="`font-weight-medium ${timeline_item.text_color}--text`">
            {{timeline_item.title}} -  {{timeline_item.subtitle}}
          </v-card-subtitle>
          <!-- <v-card-text class="text--secondary">
            {{timeline_item.description}}
          </v-card-text> -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="font-weight-bold" :color="timeline_item.text_color" plain :to="timeline_item.link">View More</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  
</template>

<script>
export default {
    data: () => ({
      reverse: true,
      timeline: [{
          title: 'MS, Computer Science & Engineering',
          subtitle: 'University at Buffalo',
          icon: '/ub_icon.jpg',
          year: 'August 2021 - Present',
          description: '',
          link: '/academics',
          color: 'light-blue',
          text_color: 'white'
      },  {
          title: 'Web Developer',
          subtitle: 'Podium School',
          icon: '/podium_logo.png',
          year: 'August 2020 - July 2021',
          description: '',
          link: '/work-experience',
          color: 'amber',
          text_color: 'white'
      }, {
          title: 'Frontend Developer',
          subtitle: 'YourQuote',
          icon: '/yourquote_logo.png',
          year: 'October 2018 - May 2020',
          description: '',
          link: '/work-experience',
          color: 'teal',
          text_color: 'white'
      }, {
          title: 'Junior Developer',
          subtitle: 'Kuliza Technologies',
          icon: '/kuliza_logo.svg',
          year: 'July 2017 - October 2018',
          description: '',
          link: '/academics',
          color: 'lime',
          text_color: 'white'
      }, {
          title: 'B.Tech in Computer Science & Engineering',
          subtitle: 'IIITD, Delhi',
          icon: '/IIITD_logo.png',
          year: 'August 2013 - May 2017',
          description: '',
          link: '/work-experience',
          color: 'cyan',
          text_color: 'white'
      }]
    }),
}
</script>