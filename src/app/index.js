// Copyright (C) 2022 MCSManager <mcsmanager-dev@outlook.com>

import { createApp } from "vue";
import i18n from "./i18n";
import elementPlus from "element-plus";

import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import "../assets/css/element-variables.scss";
import "../assets/css/common.css";
import "../assets/css/tools.css";
import "../assets/css/responsive.css";
import "../assets/css/action.css";

import App from "./App.vue";
import "./service/protocol";
import directive from "./directive";

const app = createApp(App);

// Vuex
import store from "./store";
app.use(store);
app.use(i18n);

// custom directive
directive(app);

// Vue-Router
import router from "./router";
app.use(router);

// Install element-plus
app.use(elementPlus);

// global component
import ItemGroup from "../components/ItemGroup";
import FunctionGroup from "../components/FunctionGroup.vue";
import FunctionGroupComponent from "../components/FunctionGroupComponent.vue";
import Panel from "../components/Panel.vue";

app.component("Panel", Panel);
app.component("ItemGroup", ItemGroup);
app.component("FunctionGroup", FunctionGroup);
app.component("FunctionComponent", FunctionGroupComponent);
app.mount("#app");

if (localStorage.getItem("customSkin")) {
  document.getElementById('linkSkinCss').innerHTML = `<link type="text/css" rel="stylesheet" href="${localStorage.getItem("customSkin")}">`;
} else {
  if (localStorage.getItem("skin")) {
    document.getElementById('linkSkinCss').innerHTML = `<link type="text/css" rel="stylesheet" href="./static/setting - ${localStorage.getItem("skin")}.css">`;
  }else {
    document.getElementById('linkSkinCss').innerHTML = `<link type="text/css" rel="stylesheet" href="./static/setting - summer.css">`;
  }
}


