<template>
  <v-navigation-drawer dark width="260" app>
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
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Trang chủ", icon: "mdi-image", to: "/" },
        { title: "Tổng hợp ảnh", icon: "mdi-image", to: "/listiv" },
        { title: "About", icon: "mdi-image", to: "/about" },
        { title: "Home", icon: "mdi-image", to: "/home" },
      ],
    };
  },
};
</script>