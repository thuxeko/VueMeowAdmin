<template>
  <v-card height="100vh" width="256">
    <v-navigation-drawer class="deep-purple accent-4" dark permanent>
      <v-list expand nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Tổng hợp ảnh", icon: "mdi-image", to: "/" },
        { title: "About", icon: "mdi-image", to: "/about" },
        { title: "Home", icon: "mdi-image", to: "/home" },
      ],
    };
  },
};
</script>