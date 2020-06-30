<template>
  <v-container fluid class="pa-0">
    <zaehlstelle-header
      counter-id="1"
    ></zaehlstelle-header>
    <v-container fluid>
    <v-alert
      v-if="isError"
      outlined
      color="red"
    >
      <div class="title">Die Daten zu dieser Zählung müssen korrigiert werden</div>
      <div>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</div>
      <div class="pt-4">
        <v-btn
          color="red"
          class="white--text"
          :to="{name: 'upload_countupload', query: { mode: 'upload'}}"
        >
          bearbeiten
          <v-icon class="pl-2">mdi-lead-pencil</v-icon>
        </v-btn>
      </div>
    </v-alert>
      <v-card>
    <v-tabs
      v-model="tab"
      background-color="grey lighten-3"
      color="orange"
      centered
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Allgemeine Info
        <v-icon>mdi-information-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Fahrzeuge
        <v-icon>mdi-go-kart</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Knoten & Richtungen
        <v-icon>mdi-routes</v-icon>
      </v-tab>

      <v-tab href="#tab-4">
        Kontakt
        <v-icon>mdi-tooltip-account</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        value="tab-1"
      >
        <v-card flat height="350px">
          <v-card-title><h2 class="font-weight-thin">Allgemeine Info</h2></v-card-title>
          <v-card-text>
            <div class="pt-2"><v-icon>mdi-calendar</v-icon><span class="font-weight-bold"> 20.06.2020</span></div>
            <div class="pt-2"><v-icon>mdi-clock-outline</v-icon><span class="font-weight-bold"> 24h Zählung</span></div>
            <div class="pt-2">
              <h3>Grund der Zählung</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

    <v-tab-item
        value="tab-2"
      >
        <v-card flat height="350px">
          <v-card-title><h2 class="font-weight-thin">Fahrzeuge</h2></v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>

    <v-tab-item
        value="tab-3"
      >
        <v-card flat height="350px">
          <v-card-title><h2 class="font-weight-thin">Knoten & Richtungen</h2></v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>

    <v-tab-item
        value="tab-4"
      >
        <v-card flat height="350px">
          <v-card-title><h2 class="font-weight-thin">Kontakt</h2></v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    </v-container>
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
export default class UploadCountInfoView extends Vue {
  
  tab: string = ""

  get isError () {
    if( this.$route.query.message) {
      return true
    }
    return false
  }

}
</script>