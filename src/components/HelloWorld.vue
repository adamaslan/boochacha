<template>
  <div class="container">
    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li><a href="./myblog/">Blog-on-down</a></li>
        <li><a href="./about/">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Sidebar>
    <nav class="main-nav">
      <div class="logo">Art is Everywhere</div>
    </nav>

    <div class="container2"></div>

    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>vite-ts-quick</h2>

    <p>使用示例请看 {{ $t("nav.example") }}</p>
    //check12
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a
        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
        target="_blank"
      >
        Vetur
      </a>
      or
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      (if using
      <code>&lt;script setup&gt;</code>)
    </p>

    <p>
      <a href="https://cn.vitejs.dev/" target="_blank"> Vite Docs </a>
      |
      <a href="https://v3.cn.vuejs.org/" target="_blank">Vue 3 Docs</a>
      |
      <a href="https://next.router.vuejs.org/zh/" target="_blank"
        >Vue-router 4.x Docs</a
      >
      |
      <a href="https://next.vuex.vuejs.org/zh/" target="_blank"
        >Vuex 4.x Docs</a
      >
      |
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch"
        target="_blank"
        >Fetch</a
      >
      |
      <a
        href="https://element-plus.gitee.io/#/zh-CN/component/installation"
        target="_blank"
        >Element-Plus</a
      >
    </p>

    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Sidebar from "./Sideb.vue";

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const count = ref(0);
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.burger {
  align-content: right;
  justify-content: right;
}
.vel-img-title {
  font-size: 144 px;
  padding: 5em;
  color: rgb(31, 16, 16);
  font-family: "courier";
  background-color: #000000;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}
.vel-img-title:hover {
  transform: scale(2.1);
}
.container2 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logo {
  align-self: center;
  color: rgb(248, 7, 7);
  font-weight: bold;
  font-family: "Lato";
}
.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}
.sidebar-panel-nav {
  list-style-type: none;
}
.sidebar-panel-nav li a {
  color: rgb(19, 180, 14);
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
  color: rgb(24, 7, 7);
  font-weight: bold;
  font-family: "Lato";
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #26643b;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
.gallery {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.pic {
  cursor: pointer;
  max-width: 700px;
  margin: 35px auto;
  padding: 20px;
}
.pic img {
  width: 100%;
  padding-top: 10px;
}
</style>
//check12
