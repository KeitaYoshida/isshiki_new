<template>
  <v-footer color="indigo darken-3 pa-5 " height="auto" min-height="64" dark>
    <v-layout wrap>
      <v-flex xs6>
        <div class="top_box mb-3">
          <h2 class="title_head mb-1">
            <v-icon left class="mb-2">fas fa-clinic-medical</v-icon>一色接骨院
          </h2>
        </div>
        <div class="address">
          <p>
            <v-icon x-small left class="mb-1">fa-tenge</v-icon>395-0805
          </p>
          <p>長野県飯田市鼎 一色 238-4 コーポサンパレス</p>
        </div>
        <div class="tel">
          <v-btn text href="tel:0265-49-8126" x-large class="tel-value pa-0 ma-0">ＴＥＬ： ０２６５−４９−８１２６</v-btn>
        </div>
        <div class="work-day pl-3 mt-5">
          <h2>
            <span>|</span>診療時間のご案内
          </h2>
        </div>
        <div class="work-day-value pl-3 mt-5">
          <table>
            <tr>
              <th>受付時間</th>
              <td class="text-center">月</td>
              <td class="text-center">火</td>
              <td class="text-center">水</td>
              <td class="text-center">木</td>
              <td class="text-center">金</td>
              <td class="text-center">土</td>
              <td class="text-center">日</td>
            </tr>
            <tr>
              <td class="td-body">09:00~13:00</td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
              <td>
                <v-icon small class="text-center">far fa-circle</v-icon>
              </td>
            </tr>
            <tr>.</tr>
            <tr>test</tr>
            <tr>test</tr>
          </table>
        </div>
        <v-col class="hidden-md-and-up" cols="12" />
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<style lang="scss" scoped>
.work-day {
  span {
    margin-right: 0.3rem;
    font-size: 1.8rem;
  }
}
.work-day-value {
  table {
    border-collapse: collapse;
  }
  th,
  td {
    border-bottom: 1px solid;
    padding: 0.3rem 1rem;
    &.td-body {
      padding-top: 5px;
    }
  }
}
.v-footer a {
  text-decoration: none;
}
.top_box {
  border-bottom: 1px dotted;
  opacity: 0.8;
}
p {
  margin: 0.5rem;
}
.tel-value {
  opacity: 0.8;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
