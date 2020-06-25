<template>
<div>
  <v-card
    width="100%"
    elevation="0"
  >
    <zaehlstelle-header
      :counter-id="counterId"
    ></zaehlstelle-header>
    <v-text-field
      class="mx-4 mb-5"
      flat
      hide-details
      label=" Zählungen filtern"
      prepend-inner-icon="mdi-filter-variant"
      outlined
    ></v-text-field>
    <v-list two-line subheader nav class="pb-10">
      <v-subheader inset>Zählungen in Bearbeitung</v-subheader>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="blue lighten-4"
        >
          <v-icon>mdi-calendar-plus</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 20.08.2020 [geplant]</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-email-send-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="red lighten-4"
        >
          <v-icon>mdi-calendar-refresh</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 25.06.2020 [beauftragt]</v-list-item-title>
          <v-list-item-subtitle>Wegen Umbau der Kreuzung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="light-green lighten-4"
        >
          <v-icon>mdi-calendar-check</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 16.06.2020 [durchgeführt]</v-list-item-title>
          <v-list-item-subtitle>Bar</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-earth-plus</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>
      <v-subheader inset>Veröffentlichte Zählungen</v-subheader>

      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.2019</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.2018</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.2016</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.2013</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.2011</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.2006</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.2002</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="grey lighten-2"
        >
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 14.12.1994</v-list-item-title>
          <v-list-item-subtitle>Wegen Veränderung der Ampelschaltung.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

  </v-card>
</div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import ZaehlstelleHeader from "@/components/zaehlstelle/ZaehlstelleHeader.vue"

@Component({
    components: {
        ZaehlstelleHeader
    }
})
export default class ZahlstelleDemoView extends Vue {
  
  fab: boolean = false

  get counterId() {
    return this.$route.params.id
  }
}
</script>