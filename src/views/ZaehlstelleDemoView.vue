<template>
  <v-card
    width="100%"
    elevation="0"
  >
    <zaehlstelle-header
      :counter-id="counterId"
    ></zaehlstelle-header>
      foo
  </v-card>
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
  
  get counterId() {
    return this.$route.params.id
  }
}
</script>