<template>
  <v-container>
    <v-row>
      <zaehlstelle-header
        :counter-id="counterId"
      ></zaehlstelle-header>
    </v-row>
    <v-row>
      Foo
    </v-row>
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
export default class ZahlstelleDemoView extends Vue {
  
  get counterId() {
    return this.$route.params.id
  }
}
</script>