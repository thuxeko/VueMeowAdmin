<template>
  <LeftNavi/>
  <CoreView/>
</template>

<script>
// import TopNavi from './topnavi.vue'
import LeftNavi from "./leftnavi.vue";
import CoreView from "./view.vue";
export default {
  name: "mainout",
  components: { LeftNavi, CoreView },
  data: function () {
    return {};
  },
};
</script>