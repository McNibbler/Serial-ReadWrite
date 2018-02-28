<template>
<div>
  <defaultNav />
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 text-center mb-4">
        <h1>LTC3880 Temp data over time</h1>
        <line-chart :chartData="ChartData" :options="{responsive: true, maintainAspectRatio: false}"></line-chart>
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
      apiURL: "",
      feedback: "",
      currentMeals: "",
      currentAccounts: "",
      AllVotes: [],
      AllWarnings: [],
      ChartData: {},
    };
  },
  methods: {
    async getTempData () {
        await AuthenticationService.getTempData()
    },
    async FakePostRequest () {
        await AuthenticationService.FakePostRequest({
            asd: "data is Post"
            })
    },
    generateChartData: function() {
      var allLikes = [ 0, 1, 2, 4, 3 ];
      var allDislikes = [ 5, 3, 4, 5, 6 ];
      var MealLabels = [1,2,3,4,5]

      this.ChartData = {
        labels: MealLabels,
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
      //this.song = (await AuthenticationService.show(songId)).data
  },
  components: {
    defaultNav,
    LineChart
  }
};
</script>
