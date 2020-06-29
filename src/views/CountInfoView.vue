<template>
  <v-container fluid fill-height class="pa-0">
    <zaehlstelle-header
      counter-id="1"
    ></zaehlstelle-header>
    <v-card class="ma-5">
      <v-card-title
        class="grey lighten-2"
      >
        <span class="title">Information zur Zählung am 07.05.2020</span>
      </v-card-title>
      <v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item
          color="light-green lighten-1"
          icon="mdi-calendar-refresh"
          right
        >
          <v-card
            color="grey darken-2"
            dark
          >
            <v-card-title class="h6">Zählung geprüft und veröffentlicht</v-card-title>
            <v-card-subtitle>16.05.2020 | 14:20 Uhr</v-card-subtitle>
            <v-card-text class="white text--primary">
              <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          color="red lighten-1"
          icon="mdi-calendar-refresh"
          right
        >
          <v-card
            color="grey darken-2"
            dark
          >
            <v-card-title class="h6">Zählung abgeschlossen</v-card-title>
            <v-card-subtitle>10.05.2020 | 18:34 Uhr</v-card-subtitle>
            <v-card-text class="white text--primary">
              <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          color="red lighten-1"
          icon="mdi-calendar-refresh"
          right
        >
          <v-card
            color="grey darken-2"
            dark
          >
            <v-card-title class="h6">Zählung durchgeführt</v-card-title>
            <v-card-subtitle>07.05.2020 | 10:01 Uhr</v-card-subtitle>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          color="red lighten-1"
          icon="mdi-calendar-refresh"
          right
        >
          <v-card
            color="grey darken-2"
            dark
          >
            <v-card-title class="h6">Zählung übergeben</v-card-title>
            <v-card-subtitle>27.04.2020 | 15:34 Uhr</v-card-subtitle>
            <v-card-text class="white text--primary">
              <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          color="blue lighten-1"
          icon="mdi-calendar-plus"
          right
        >
          <v-card
            color="grey darken-2"
            dark
          >
            <v-card-title class="h6">Zählung bearbeitet</v-card-title>
            <v-card-subtitle>27.04.2020 | 15:34 Uhr</v-card-subtitle>
            <v-card-text class="white text--primary">
              <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          color="blue lighten-1"
          icon="mdi-calendar-plus"
        >
          <v-card
            color="grey darken-2"
            dark
          >
            <v-card-title class="h6">Zählung angelegt</v-card-title>
            <v-card-subtitle>27.04.2020 | 15:34 Uhr</v-card-subtitle>
            <v-card-text class="white text--primary">
              <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import ZaehlstelleHeader from "@/components/zaehlstelle/ZaehlstelleHeader.vue"

@Component({
  components: {
    ZaehlstelleHeader
  }
})
export default class CountInfoView extends Vue {
    
}
</script>