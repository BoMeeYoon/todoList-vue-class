import Vue from "vue";
import Router from "vue-router";
import ItemLists from "@/components/ItemLists.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:done?",
      name: "item-lists",
      component: ItemLists,
    },
  ],
});
