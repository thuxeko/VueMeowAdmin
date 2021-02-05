<template>
  <v-app>
    <core-left-menu />

    <core-view />
  </v-app>
</template>

<script>
export default {
  name: "CoreIndex",

  components: {
    CoreLeftMenu: () => import("./components/core/LeftMenu"),
    CoreView: () => import("./components/core/View"),
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>
