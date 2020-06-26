<template>
  <v-container
    fluid
    fill-height
    class="pa-0"
  >
    <dummy-map
        height="100%"
        width="100%"
        show-marker=true
        :zoom="12"
    />
    <v-btn
      fixed
      dark
      fab
      bottom
      right
      color="secondary"
    >
      <v-icon>mdi-map-marker-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DummyMap2 from "@/components/map/DummyMap2.vue";
  import DummyMap from "@/components/map/DummyMap.vue";
  import {latLng} from "leaflet";

  @Component({
    components: {DummyMap2,DummyMap}
  })
  export default class App extends Vue {

    mounted() {
      window.scrollTo(0, 0);
    }

    get center() {
      return latLng(48.137227,11.575517);
    }

  }
</script>