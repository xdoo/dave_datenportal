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
    </v-alert>
    <ul>
      <li>Info zur Zählstelle</li>
      <li>Info zur Zählung (Knotenarme, Fahrtrichtungen, Fahrzeuge, etc.)</li>
      <li>Info zur Kontaktperson</li>
      <li>...</li>
    </ul>
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
  
  get isError () {
    if( this.$route.query.message) {
      return true
    }
    return false
  }

}
</script>