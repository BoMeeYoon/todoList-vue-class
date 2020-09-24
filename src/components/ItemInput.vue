<template>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      id="exampleInputName2"
      placeholder="add your TODO"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ItemInput extends Vue {}
</script>

<style></style>
