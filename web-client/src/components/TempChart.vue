<template>
<div>
  <defaultNav />
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
        <h1>LTC3880 Temp data over time</h1>
        <line-chart :chartData="ChartData" :options="{responsive: true, animation: false, maintainAspectRatio: false}"></line-chart>
        <p></p>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
        <hr>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import defaultNav from "./defaultNav.vue";
import LineChart from './LineChart.js';
import AuthenticationService from '@/services/AuthenticationService';


export default {
  name: "Manager",
  data() {
    return {
      AllVotes: [],
      AllWarnings: [],
      ChartData: {},
    };
  },
  methods: {
    async getTempData () {
        let data = (await AuthenticationService.getTempData()).data.data;

        var chartLabels = [];
        var tempData = [];
        let temp = [];
        for(let i=data.length-1; i >= 0; i--){
            chartLabels = chartLabels.concat(data[i].time);
            tempData = tempData.concat(data[i].temperature)
        }
        console.log("Data Recieved")

        this.ChartData = {
            labels: chartLabels,
            datasets: [
            {
                label: 'temp',
                backgroundColor: '#05CBE1',
                data: tempData
            }
            ]
        };     
        
        setTimeout(() => {this.getTempData()}, 1500);
    },
    async FakePostRequest () {
        await AuthenticationService.FakePostRequest({
            asd: "data being posted"
            })
    },
    generateChartData: function() {
      var allLikes = [ 0, 1, 2, 4, 3 ];
      var allDislikes = [ 5, 3, 4, 5, 6 ];
      var chartLabels = [1,2,3,4,5]

      this.ChartData = {
        labels: chartLabels,
        datasets: [
          {
            label: 'Likes',
            backgroundColor: '#05CBE1',
            data: allLikes
          },{
            label: 'Dislikes',
            backgroundColor: '#FC2525',
            data: allDislikes
          }
        ]
      };      
    }    
  },
  created: function() {
      this.getTempData();
  },
  components: {
    defaultNav,
    LineChart
  }
};
</script>
