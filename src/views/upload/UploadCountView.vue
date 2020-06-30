<template>
  <v-container fluid>

    <v-stepper v-model="stepper" vertical>
      <v-card-actions>
        <v-btn @click="stepper--" :disabled="stepper < 1">
          zurück
          <v-icon left>mdi-arrow-left-bold</v-icon>
        </v-btn>
        <v-spacer/>
        <v-btn @click="stepper++" :disabled="stepper > 5">
          weiter
          <v-icon right>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-card-actions>
      <v-stepper-step :complete="stepper > 0" step="0">
        <div class="title" style="font-weight: bold" v-if="stepper === 0">Allgemeine Informationen</div>
        <div v-else>Allgemeine Informationen</div>
      </v-stepper-step>
      <v-stepper-content step="0">
        <v-card flat>
          <v-form ref="form" v-model="validZaehlstelle">

            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                    label="Zählstellennummer"
                    outlined
                    dense
                    value="123456"
                    disabled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <v-autocomplete
                    outlined
                    :items="stadtbezirke"
                    dense
                    label="Stadtbezirksnummer"
                    :value=12
                    disabled
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                    label="UTM East"
                    outlined
                    dense
                    value="570168"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                    label="UTM West"
                    outlined
                    dense
                    value="5650300"
                    disabled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                    label="Platzname"
                    outlined
                    dense
                    value="Bonner Platz"
                    counter="255"
                    maxlength="255"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-autocomplete
                    outlined
                    :items="wetter"
                    dense
                    label="Wetter"
                    clearable
                ></v-autocomplete>
              </v-col>
            </v-row>

            <v-data-table
                :headers="headers"
                :items="knotenarme"
                sort-by="nummer"
                class="elevation-1"
                hide-default-footer
            >
            </v-data-table>
          </v-form>
        </v-card>
      </v-stepper-content>
      <v-stepper-step :complete="stepper > 1" step="1" @click="window=0">
        <div class="title" style="font-weight: bold" v-if="stepper === 1">Fahrbeziehungen Straße 1</div>
        <div v-else>Fahrbeziehungen Straße 1</div>
      </v-stepper-step>
      <v-stepper-content step="1">
        <v-card>
          <v-window
              v-model="window"
              class="elevation-1"
          >
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 1 nach Straße 1</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 1 nach Straße 2</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 1 nach Straße 3</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 1 nach Straße 4</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 1 nach Straße 6</p>
              <fahrbeziehung-upload/>
            </v-window-item>
          </v-window>
          <v-card-actions>
            <v-btn :disabled="window < 1"
                   text
                   @click="window--"
            >
              vorherige Fahrbeziehung
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="window < 4"
                   color="primary"
                   depressed
                   @click="window++"
            >
              nächste Fahrbeziehung
            </v-btn>

            <v-btn v-if="window === 4"
                   color="primary"
                   depressed
                   @click="stepper++;window=0"
            >
              nächste Straße
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
      <v-stepper-step :complete="stepper > 2" step="2" @click="window=0">
        <div class="title" style="font-weight: bold" v-if="stepper === 2">Fahrbeziehungen Straße 2</div>
        <div v-else>Fahrbeziehungen Straße 2</div>
      </v-stepper-step>
      <v-stepper-content step="2">
        <v-card>
          <v-window
              v-model="window"
              class="elevation-1"
          >
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 2 nach Straße 1</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 2 nach Straße 2</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 2 nach Straße 3</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 2 nach Straße 4</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 2 nach Straße 6</p>
              <fahrbeziehung-upload/>
            </v-window-item>
          </v-window>
          <v-card-actions>
            <v-btn :disabled="window < 1"
                   text
                   @click="window--"
            >
              vorherige Fahrbeziehung
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="window < 4"
                   color="primary"
                   depressed
                   @click="window++"
            >
              nächste Fahrbeziehung
            </v-btn>

            <v-btn v-if="window === 4"
                   color="primary"
                   depressed
                   @click="stepper++;window=0"
            >
              nächste Straße
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
      <v-stepper-step :complete="stepper > 3" step="3" @click="window=0">
        <div class="title" style="font-weight: bold" v-if="stepper === 3">Fahrbeziehungen Straße 3</div>
        <div v-else>Fahrbeziehungen Straße 3</div>
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-card>
          <v-window
              v-model="window"
              class="elevation-1"
          >
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 3 nach Straße 1</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 3 nach Straße 2</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 3 nach Straße 3</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 3 nach Straße 4</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 3 nach Straße 6</p>
              <fahrbeziehung-upload/>
            </v-window-item>
          </v-window>
          <v-card-actions>
            <v-btn :disabled="window < 1"
                   text
                   @click="window--"
            >
              vorherige Fahrbeziehung
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="window < 4"
                   color="primary"
                   depressed
                   @click="window++"
            >
              nächste Fahrbeziehung
            </v-btn>

            <v-btn v-if="window === 4"
                   color="primary"
                   depressed
                   @click="stepper++;window=0"
            >
              nächste Straße
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
      <v-stepper-step :complete="stepper > 4" step="4" @click="window=0">
        <div class="title" style="font-weight: bold" v-if="stepper === 4">Fahrbeziehungen Straße 4</div>
        <div v-else>Fahrbeziehungen Straße 4</div>
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-card>
          <v-window
              v-model="window"
              class="elevation-1"
          >
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 4 nach Straße 1</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 4 nach Straße 2</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 4 nach Straße 3</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 4 nach Straße 4</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 4 nach Straße 6</p>
              <fahrbeziehung-upload/>
            </v-window-item>
          </v-window>
          <v-card-actions>
            <v-btn :disabled="window < 1"
                   text
                   @click="window--"
            >
              vorherige Fahrbeziehung
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="window < 4"
                   color="primary"
                   depressed
                   @click="window++"
            >
              nächste Fahrbeziehung
            </v-btn>

            <v-btn v-if="window === 4"
                   color="primary"
                   depressed
                   @click="stepper++;window=0"
            >
              nächste Straße
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
      <v-stepper-step :complete="stepper > 5" step="5" @click="window=0">
        <div class="title" style="font-weight: bold" v-if="stepper === 5">Fahrbeziehungen Straße 6</div>
        <div v-else>Fahrbeziehungen Straße 6</div>
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-card>
          <v-window
              v-model="window"
              class="elevation-1"
          >
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 6 nach Straße 1</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 6 nach Straße 2</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 6 nach Straße 3</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 6 nach Straße 4</p>
              <fahrbeziehung-upload/>
            </v-window-item>
            <v-window-item>
              <p class="subtitle-1" style="text-decoration: underline">Straße 6 nach Straße 6</p>
              <fahrbeziehung-upload/>
            </v-window-item>
          </v-window>
          <v-card-actions>
            <v-btn :disabled="window < 1"
                   text
                   @click="window--"
            >
              vorherige Fahrbeziehung
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="window < 4"
                   color="primary"
                   depressed
                   @click="window++"
            >
              nächste Fahrbeziehung
            </v-btn>

            <v-btn v-if="window === 4"
                   color="primary"
                   depressed
                   @click="stepper++;window=0"
            >
              nächste Straße
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
      <v-stepper-step step="6">
        <div class="title" style="font-weight: bold" v-if="stepper === 6">Zusammenfassung</div>
        <div v-else>Zusammenfassung</div>
      </v-stepper-step>
      <v-stepper-content step="6">
        <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
        >
          Zusammenfassung der eingegebenen Daten
        </v-card>
        <v-card-actions>
          <v-spacer/>
          <v-btn
              color="primary"
          >
            Speichern
          </v-btn>
        </v-card-actions>


      </v-stepper-content>

      <v-card-actions>
        <v-btn @click="stepper--" :disabled="stepper < 1">
          zurück
          <v-icon left>mdi-arrow-left-bold</v-icon>
        </v-btn>
        <v-spacer/>
        <v-btn @click="stepper++" :disabled="stepper > 5">
          weiter
          <v-icon right>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-card-actions>

    </v-stepper>
  </v-container>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {Levels} from "@/api/error";
  import {StadtbezirkToBeschreibung} from "@/types/zaehlstelle/Stadtbezirk";
  import FahrbeziehungUpload from "@/components/upload/FahrbeziehungUpload.vue";

  interface KeyValStadtbezirk {
    text: string;
    value: number
  }

  @Component({
    components: {FahrbeziehungUpload}
  })
  export default class UploadCountView extends Vue {
    private valid = false;
    private validZaehlstelle = false;
    private stepper: number = 0;
    private window: number = 0;
    private stadtbezirke: KeyValStadtbezirk[] = [];

    fileData: string[] = [];

    mounted() {
      window.scrollTo(0, 0);

      StadtbezirkToBeschreibung.forEach((value: string, key: number) => {
        this.stadtbezirke.push({
          text: value,
          value: key
        })
      });
    }

    get wetter() {
      return [
        {text: "sonnig", value: 1},
        {text: "sonnig (kalt)", value: 2},
        {text: "bewölkt", value: 3},
        {text: "regnerisch (vereinzelt Schauer)", value: 4},
        {text: "regnerisch (dauerhaft)", value: 5},
        {text: "neblig", value: 6},
        {text: "leichter Schneefall", value: 7},
      ]
    }

    get headers() {
      return [
        {
          text: 'Knotennummer',
          align: 'start',
          value: 'nummer'
        },
        {
          text: 'Straßenname',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Winkel',
          sortable: false,
          value: 'winkel'
        },
        {
          text: 'Actions',
          sortable: false,
          value: 'actions'
        },
      ];
    }

    get knotenarme() {
      return [
        {
          nummer: 1,
          name: "Straße 1",
          winkel: 0
        },
        {
          nummer: 2,
          name: "Straße 2",
          winkel: 90
        },
        {
          nummer: 3,
          name: "Straße 3",
          winkel: 180
        },
        {
          nummer: 4,
          name: "Straße 4",
          winkel: 270
        },
        {
          nummer: 6,
          name: "Straße 6",
          winkel: 135
        },
      ];
    }

    private openFileChooser() {
      const element = document.getElementById("fileInputHidden");
      if (element) {
        element.click();
      }
    }

    private onFileSelect(event: any) {
      // let importObject: ImportObject = {} as ImportObject;
      const selectedFile = event.target.files[0];
      // importObject.fileName = selectedFile.name;

      let that = this;

      const fileReader = new FileReader();

      // Eventlistener für das 'load'-Event
      fileReader.addEventListener("load", function () {
        that.fileData = (fileReader.result as string).split(/\r\n|\n/);
      }, false);

      if (selectedFile) {
        if (this.wrongFileType(selectedFile)) {
          that.$store.dispatch('snackbar/showToast', {
            level: Levels.WARNING,
            snackbarTextPart1: `Ungültiges Dateiformat.`,
            snackbarTextPart2: `Es werden nur CSV-Dateien unterstützt und keine ${selectedFile.name.split('.').pop().toUpperCase()}-Dateien.`
          });
        } else {
          // Das 'load'-Event wird ausgelöst, sobald der FileReader das Laden beendet hat.
          fileReader.readAsText(selectedFile);
        }
      }
    }

    private wrongFileType(file: File) {
      // return !(file.type === 'application/pdf' || file.type.startsWith('image/'));
      return !(file.name.endsWith('.csv'));
    }
  }
</script>