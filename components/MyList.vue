 <template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in items"
      :key="i"
    >
      <v-expansion-panel-header>
        {{item.heading}}
      </v-expansion-panel-header>
      <v-expansion-panel-content >
        <p v-html="item.description"/>
        <v-btn v-if="item.nuxt" nuxt :to="item.nuxt">Go to project</v-btn>
        <v-layout v-if="item.chips" wrap >
          <v-chip class="mr-3 mb-3" v-for="(chip, ci) in item.chips" :key="ci">{{chip}}</v-chip>
        </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>