<template>
  <v-card
    width="100%"
    elevation="0"
    class="pb-10"
  >
    <dummy-map
        :zoom="14"
        :selected-marker-id="counterId"
        height="200px"
    ></dummy-map>
    <v-sheet>
      <h1 class="heading-4 px-4 text-truncate">Nr. {{counter.id}} | {{counter.counter}}</h1>
      <span class="font-weight-thin px-4 body-2">Stadtbezirk {{counter.districtNumber}}, {{counter.district}} | Lat {{counter.lat}}, Lng {{counter.lng}}</span>
    </v-sheet>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from "vue-property-decorator"

// services
import CounterService from "@/services/CounterService"

// components
import DummyMap from "@/components/map/DummyMap.vue"

@Component({
  components: {
    DummyMap
  }
})
export default class ZaehlstelleHeader extends Vue {

  @Prop() readonly counterId!: string

  // Zählungen
  zaehlung: string = "24.12.2019 Standardzählung"
  items: string [] = ["24.12.2019 Standardzählung", "16.04.2018 Querschnittzählung", "12.08.2015 Standardzählung"]


  get counter() {
    return CounterService.counterById(this.counterId)
  }

}
</script>