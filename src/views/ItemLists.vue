<template>
  <div>
    <Item
      v-for="(item, index) in state"
      :key="index"
      :id="item.id"
      :title="item.title"
      :done="item.done"
    ></Item>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Item from "@/components/Item.vue";

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
      done: true,
    },
    {
      id: 2,
      title: "text2",
      done: false,
    },
    {
      id: 3,
      title: "text3",
      done: true,
    },
  ];
}
</script>

<style></style>
