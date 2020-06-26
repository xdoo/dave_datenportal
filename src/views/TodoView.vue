<template>
  <v-container fluid>
    <v-text-field
      class="mx-4 mb-5"
      flat
      hide-details
      label=" Zählungen filtern"
      prepend-inner-icon="mdi-filter-variant"
      outlined
    ></v-text-field>
    <v-list two-line subheader nav class="pb-10">
      <v-subheader inset>geplante Zählungen</v-subheader>
      <v-list-item
        to="foo"
      > 
        <v-list-item-avatar
          color="blue lighten-4"
        >   
          <v-icon>mdi-calendar-plus</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title><v-icon color="red">mdi-new-box</v-icon> Zählung vom 20.08.2020 | Dachauerstr. / Hugotrondlestr.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
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
          color="blue lighten-4"
        >
          <v-icon>mdi-calendar-plus</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 26.08.2020 | Königsplatz</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
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
          color="blue lighten-4"
        >
          <v-icon>mdi-calendar-plus</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 04.09.2020 | Prinzregentenstr.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
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
          color="blue lighten-4"
        >
          <v-icon>mdi-calendar-plus</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 04.09.2020 | Prinzregentenstr.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
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
          color="blue lighten-4"
        >
          <v-icon>mdi-calendar-plus</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 04.09.2020 | Prinzregentenstr.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-email-send-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>
      <v-subheader inset>beauftragte Zählungen</v-subheader>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="red lighten-4"
        >
          <v-icon>mdi-calendar-refresh</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Zählung vom 03.07.2020 | Vollmannstr. / Englschalkinger Str.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>


      <v-divider inset></v-divider>
      <v-subheader inset>durchgeführte Zählungen</v-subheader>
      <v-list-item
        to="foo"
      >
        <v-list-item-avatar
          color="light-green lighten-4"
        >
          <v-icon>mdi-calendar-check</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title><v-icon color="red">mdi-new-box</v-icon> Zählung vom 16.06.2020 | Rheinstr. / Moltkestr.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-earth-plus</v-icon>
          </v-btn>
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
          <v-list-item-title><v-icon color="red">mdi-new-box</v-icon> Zählung vom 16.06.2020 | Rheinstr. / Moltkestr.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-earth-plus</v-icon>
          </v-btn>
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
          <v-list-item-title>Zählung vom 11.06.2020 | Rheinstr. / Moltkestr.</v-list-item-title>
          <v-list-item-subtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-earth-plus</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>  
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class TodoView extends Vue {
    
}
</script>