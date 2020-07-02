<template>
    <div>
      <v-file-input outlined dense prepend-inner-icon="$file" prepend-icon="" accept=".csv" label="File input" @change="onFileSelect" />

        <v-sheet :height="$vuetify.breakpoint.height * 0.8" max-height="350" v-if="isFileSelected">
          <v-chart
              :options="optionsHeatmap"
              autoresize/>
        </v-sheet>

        <v-data-table v-if="isFileSelected"
            :headers="headersDatatable"
            :items="itemsDatatable"
            dense
            fixed-header
            loading-text="Lade Daten....."
            :items-per-page="4"
            :footer-props="{
              disableItemsPerPage: true,
              showFirstLastPage: true,
              showCurrentPage: true,
              itemsPerPageOptions: [4, 8, 16],
            }"
        >
          <template v-slot:no-data>
            ⚠ Keine Daten vorhanden.
          </template>
        </v-data-table>

        <v-textarea
            label="Kommentar"
            outlined
            dense
            counter="1000"
            maxlength="1000"
        ></v-textarea>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {Levels} from "@/api/error";

  // chart
  import 'echarts/lib/chart/heatmap'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/grid'
  import 'echarts/lib/component/visualMap'

  // eslint-disable-next-line no-unused-vars
  import ZeitintervallObject from "@/components/charts/ZeitintervallObject";
  import Heatmap from "@/components/charts/Heatmap.vue";

  @Component({
    components: {Heatmap}
  })
  export default class ZaehlstelleSearch extends Vue {

    private fileData: string[] = [];

    // Heatmap
    @Prop({default: 0}) readonly rangeMin!: number
    @Prop({default: 250}) readonly rangeMax!: number
    data: number [][] = this.dataHeatmap;

    mounted() {
      window.scrollTo(0, 0);
    }

    get isFileSelected() {
      // return true;
      return this.fileData.length > 0;
    }

    // Heatmap
    get optionsHeatmap () {
      return {
        tooltip: {
          position: 'top'
        },
        animation: false,
        grid: {
          height: '25%',
          top: '5%',
          width: '85%'
        },
        xAxis: {
          type: 'category',
          data: this.hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: this.categories,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: this.rangeMin,
          max: this.rangeMax,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '40%',
          inRange: {
            color: this.color
          }
        },
        series: [{
          // name: 'Heatmapname',
          type: 'heatmap',
          data: this.dataHeatmap,
          label: {
            show: false
          },
          markPoint: {
            label: {
              show: false
            }
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      }
    }

    get color() {
      // return ['#FFFFFF', '#E1F5A9', '#F3F781', '#F7D358', '#FE9A2E', '#FF4000', '#DF0101']
      return this.rangeMin < 0 ? ['#4575b4', '#d88273', '#bf444c'] : ['#f6efa6', '#d88273', '#bf444c']
    }

    get categories() {
      return ['KFZ','SV','GV']
    }

    get hours() {
      return [
        '00:00',
        '00:15',
        '00:30',
        '00:45',
        '01:00',
        '01:15',
        '01:30',
        '01:45',
        '02:00',
        '02:15',
        '02:30',
        '02:45',
        '03:00',
        '03:15',
        '03:30',
        '03:45',
        '04:00',
        '04:15',
        '04:30',
        '04:45',
        '05:00',
        '05:15',
        '05:30',
        '05:45',
        '06:00',
        '06:15',
        '06:30',
        '06:45',
        '07:00',
        '07:15',
        '07:30',
        '07:45',
        '08:00',
        '08:15',
        '08:30',
        '08:45',
        '09:00',
        '09:15',
        '09:30',
        '09:45',
        '10:00',
        '10:15',
        '10:30',
        '10:45',
        '11:00',
        '11:15',
        '11:30',
        '11:45',
        '12:00',
        '12:15',
        '12:30',
        '12:45',
        '13:00',
        '13:15',
        '13:30',
        '13:45',
        '14:00',
        '14:15',
        '14:30',
        '14:45',
        '15:00',
        '15:15',
        '15:30',
        '15:45',
        '16:00',
        '16:15',
        '16:30',
        '16:45',
        '17:00',
        '17:15',
        '17:30',
        '17:45',
        '18:00',
        '18:15',
        '18:30',
        '18:45',
        '19:00',
        '19:15',
        '19:30',
        '19:45',
        '20:00',
        '20:15',
        '20:30',
        '20:45',
        '21:00',
        '21:15',
        '21:30',
        '21:45',
        '22:00',
        '22:15',
        '22:30',
        '22:45',
        '23:00',
        '23:15',
        '23:30',
        '23:45',
      ]
    }

    get dataHeatmap() {
      let dataArray:any[] = [];
      if(this.fileData.length === 0) {
        return dataArray;
      }
      for (let index: number = 1; index < 97; index++) {
        let line = this.fileData[index].split(';');
        // Summen aus den oberen Teilen
        let gv = Number.parseInt(line[3]) + Number.parseInt(line[4]);
        let sv = gv + Number.parseInt(line[5]);
        let kfz = sv + Number.parseInt(line[2]) + Number.parseInt(line[6]) + Number.parseInt(line[7]) + Number.parseInt(line[8]);
        dataArray.push([index-1,0,kfz]);
        dataArray.push([index-1,1,sv]);
        dataArray.push([index-1,2,gv]);
      }
      return dataArray
    }

    get dataHeatmap2() {
      return [
        [0,0,24],	[0,1,4],	[0,2,2],
        [1,0,39],	[1,1,11],	[1,2,6],
        [2,0,31],	[2,1,6],	[2,2,5],
        [3,0,10],	[3,1,4],	[3,2,1],
        [4,0,33],	[4,1,1],	[4,2,1],
        [5,0,9],	[5,1,3],	[5,2,1],
        [6,0,13],	[6,1,12],	[6,2,1],
        [7,0,47],	[7,1,9],	[7,2,2],
        [8,0,9],	[8,1,6],	[8,2,4],
        [9,0,41],	[9,1,12],	[9,2,2],
        [10,0,60],	[10,1,4],	[10,2,2],
        [11,0,68],	[11,1,20],	[11,2,3],
        [12,0,46],	[12,1,20],	[12,2,7],
        [13,0,90],	[13,1,13],	[13,2,13],
        [14,0,61],	[14,1,14],	[14,2,14],
        [15,0,83],	[15,1,11],	[15,2,14],
        [16,0,83],	[16,1,31],	[16,2,14],
        [17,0,56],	[17,1,28],	[17,2,16],
        [18,0,92],	[18,1,33],	[18,2,13],
        [19,0,126],	[19,1,37],	[19,2,10],
        [20,0,77],	[20,1,40],	[20,2,13],
        [21,0,102],	[21,1,40],	[21,2,19],
        [22,0,185],	[22,1,47],	[22,2,14],
        [23,0,177],	[23,1,33],	[23,2,20],
        [24,0,198],	[24,1,23],	[24,2,15],
        [25,0,90],	[25,1,45],	[25,2,20],
        [26,0,107],	[26,1,43],	[26,2,22],
        [27,0,156],	[27,1,60],	[27,2,14],
        [28,0,130],	[28,1,48],	[28,2,29],
        [29,0,246],	[29,1,32],	[29,2,26],
        [30,0,163],	[30,1,38],	[30,2,30],
        [31,0,225],	[31,1,63],	[31,2,21],
        [32,0,162],	[32,1,62],	[32,2,23],
        [33,0,222],	[33,1,41],	[33,2,29],
        [34,0,127],	[34,1,37],	[34,2,18],
        [35,0,151],	[35,1,26],	[35,2,16],
        [36,0,130],	[36,1,41],	[36,2,19],
        [37,0,152],	[37,1,38],	[37,2,13],
        [38,0,96],	[38,1,36],	[38,2,20],
        [39,0,71],	[39,1,3],	[39,2,4],
        [40,0,0],	[40,1,0],	[40,2,0],
        [41,0,210],	[41,1,36],	[41,2,45],
        [42,0,135],	[42,1,26],	[42,2,9],
        [43,0,101],	[43,1,40],	[43,2,10],
        [44,0,74],	[44,1,17],	[44,2,13],
        [45,0,73],	[45,1,27],	[45,2,12],
        [46,0,111],	[46,1,20],	[46,2,14],
        [47,0,75],	[47,1,26],	[47,2,7],
        [48,0,79],	[48,1,21],	[48,2,7],
        [49,0,62],	[49,1,21],	[49,2,7],
        [50,0,83],	[50,1,23],	[50,2,11],
        [51,0,37],	[51,1,23],	[51,2,9],
        [52,0,44],	[52,1,20],	[52,2,7],
        [53,0,68],	[53,1,23],	[53,2,6],
        [54,0,35],	[54,1,16],	[54,2,9],
        [55,0,94],	[55,1,20],	[55,2,10],
        [56,0,59],	[56,1,11],	[56,2,8],
        [57,0,100],	[57,1,9],	[57,2,6],
        [58,0,57],	[58,1,16],	[58,2,13],
        [59,0,87],	[59,1,13],	[59,2,11],
        [60,0,113],	[60,1,30],	[60,2,16],
        [61,0,89],	[61,1,28],	[61,2,11],
        [62,0,143],	[62,1,35],	[62,2,12],
        [63,0,159],	[63,1,40],	[63,2,11],
        [64,0,89],	[64,1,32],	[64,2,13],
        [65,0,79],	[65,1,39],	[65,2,12],
        [66,0,190],	[66,1,48],	[66,2,16],
        [67,0,94],	[67,1,47],	[67,2,19],
        [68,0,133],	[68,1,36],	[68,2,23],
        [69,0,158],	[69,1,23],	[69,2,16],
        [70,0,112],	[70,1,24],	[70,2,25],
        [71,0,187],	[71,1,55],	[71,2,16],
        [72,0,165],	[72,1,31],	[72,2,14],
        [73,0,175],	[73,1,48],	[73,2,22],
        [74,0,205],	[74,1,33],	[74,2,19],
        [75,0,110],	[75,1,20],	[75,2,15],
        [76,0,137],	[76,1,22],	[76,2,12],
        [77,0,136],	[77,1,29],	[77,2,15],
        [78,0,66],	[78,1,27],	[78,2,18],
        [79,0,106],	[79,1,36],	[79,2,20],
        [80,0,77],	[80,1,36],	[80,2,9],
        [81,0,121],	[81,1,22],	[81,2,13],
        [82,0,62],	[82,1,16],	[82,2,14],
        [83,0,118],	[83,1,30],	[83,2,12],
        [84,0,76],	[84,1,19],	[84,2,10],
        [85,0,90],	[85,1,12],	[85,2,13],
        [86,0,51],	[86,1,19],	[86,2,8],
        [87,0,41],	[87,1,8],	[87,2,3],
        [88,0,29],	[88,1,10],	[88,2,7],
        [89,0,11],	[89,1,12],	[89,2,7],
        [90,0,34],	[90,1,9],	[90,2,4],
        [91,0,5],	[91,1,5],	[91,2,3],
        [92,0,41],	[92,1,11],	[92,2,1],
        [93,0,49],	[93,1,7],	[93,2,2],
        [94,0,43],	[94,1,3],	[94,2,1],
        [95,0,11],	[95,1,11],	[95,2,6],
      ]
    }

    // Datatable
    get headersDatatable() {
      return [
        {text: "Zeitintervall", value: "zeitintervall", width: "19%", divider: true, sortable: false},
        {text: "PKW", value: "pkw", width: "9%", divider: true, sortable: false},
        {text: "LKW", value: "lkw", width: "9%", divider: true, sortable: false},
        {text: "LZ", value: "lz", width: "9%", divider: true, sortable: false},
        {text: "BUS", value: "bus", width: "9%", divider: true, sortable: false},
        {text: "Krd", value: "krd", width: "9%", divider: true, sortable: false},
        {text: "Rad", value: "rad", width: "9%", divider: true, sortable: false},
        {text: "Fuß", value: "fus", width: "9%", divider: true, sortable: false},
        {text: "KFZ", value: "kfz", width: "9%", divider: true, sortable: false},
        {text: "SV", value: "sv", width: "9%", divider: true, sortable: false},
        {text: "GV", value: "gv", width: "9%", divider: true, sortable: false},
      ];
    }

    get itemsDatatable() {

      let dataArray:any[] = [];
      if(this.fileData.length === 0) {
        return dataArray;
      }
      for (let index: number = 1; index < 97; index++) {
        let data: ZeitintervallObject = {} as ZeitintervallObject;
        let line = this.fileData[index].split(';');
        data.zeitintervall = `${line[0]} - ${line[1]}`;
        data.pkw = Number.parseInt(line[2]);
        data.lkw = Number.parseInt(line[3]);
        data.lz = Number.parseInt(line[4]);
        data.bus = Number.parseInt(line[5]);
        data.krd = Number.parseInt(line[6]);
        data.rad = Number.parseInt(line[7]);
        data.fus = Number.parseInt(line[8]);
        // Summen aus den oberen Teilen
        data.gv = data.lkw + data.lz;
        data.sv = data.gv + data.bus;
        data.kfz = data.sv + data.rad + data.fus + data.pkw + data.krd;
        dataArray.push(data);
      }
      return dataArray;
    }

    get itemsDatatable2() {

      let dataArray = [];
      for (let index: number = 0; index < 96; index++) {
        let data: ZeitintervallObject = {} as ZeitintervallObject;
        data.zeitintervall = this.getZeitintervall(index);
        data.pkw = this.getRndInteger(10, 100);
        data.lkw = this.getRndInteger(0, 15);
        data.lz = this.getRndInteger(0, 20);
        data.bus = this.getRndInteger(2, 30);
        data.krd = this.getRndInteger(0, 50);
        data.rad = this.getRndInteger(0, 40);
        data.fus = this.getRndInteger(0, 20);
        // Summen aus den oberen Teilen
        data.gv = data.pkw + data.krd + data.lkw + data.lz;
        data.sv = data.gv + data.bus;
        data.kfz = data.sv + data.rad + data.fus;
        dataArray.push(data);
      }
      return dataArray;
    }

    private getRndInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    private getZeitintervall(index: number) {
      // let hourAsString = `${Math.floor(index/4)}`
      // if(hourAsString.length < 2) {
      //   hourAsString = `0${hourAsString}`;
      // }
      // let nextHourAsString = `${Math.floor((index+1)/4)}`
      // if(nextHourAsString.length < 2) {
      //   nextHourAsString = `0${nextHourAsString}`;
      // }
      return `${this.getHours(index)}:${this.getMinutes(index)} - ${this.getHours(index + 1)}:${this.getMinutes(index + 1)}`
    }

    private getHours(index: number) {
      let hourAsString = `${Math.floor(index / 4)}`
      return hourAsString.length < 2 ? `0${hourAsString}` : hourAsString;
    }

    private getMinutes(index: number) {
      let minuteAsString = `${(index % 4) * 15}`;
      return minuteAsString.length < 2 ? `0${minuteAsString}` : minuteAsString;
    }

    // File Chooser
    private onFileSelect(selectedFile:any) {
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
      return !(file.name.endsWith('.csv'));
    }
  }
</script>
