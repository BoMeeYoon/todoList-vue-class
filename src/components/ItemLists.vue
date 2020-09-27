<template>
  <div>
    <Item
      v-for="item in state"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
    ></Item>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Item from "@/views/Item.vue";

@Component({
  components: {
    Item,
  },
})
export default class ItemLists extends Vue {
  state: any[] = [
    {
      id: 1,
      title: "text1",
      status: "active",
    },
    {
      id: 2,
      title: "text2",
      status: "clear",
    },
    {
      id: 3,
      title: "text3",
      status: "active",
    },
  ];
}
</script>

<style></style>
