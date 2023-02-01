<template>
  <div id="app">
    <div class="header">
      <el-menu :default-active="activeMenu" class="el-menu-demo" mode="horizontal" router>
        <el-submenu :index="item.path" v-for="item in menuList" :key="item.id">
          <template slot="title">{{ item.label }}</template>
          <template v-if="item.children && item.children.length">
            <el-menu-item :index="child.path" v-for="child in item.children" :key="child.id">{{
              child.label
            }}</el-menu-item>
          </template>
        </el-submenu>
      </el-menu>
    </div>
    <router-view slot="body" />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menuList: [
        {
          id: "basic-layout",
          path: "/basic_layout",
          label: "基础布局",
          children: [
            { id: "basic-layout-sideward", path: "/basic_layout_sideward", label: "横向布局" },
            { id: "basic-layout-vertical", path: "/basic_layout_vertical", label: "纵向布局" },
          ],
        },
      ],
      activeMenu: "",
    };
  },
  mounted() {
    this.activeMenu = this.$route.path.slice(1);
  },
};
</script>
