<template>
  <v-container>
    <zaehlstelle-header></zaehlstelle-header>
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
export default class ZahlungErstellenView extends Vue {
    
}
</script>