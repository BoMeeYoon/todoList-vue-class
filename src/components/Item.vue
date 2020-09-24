<template>
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" @change="onChange" />
    </span>
    <input type="text" class="form-control" @keyup="onKeyup" />
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="onClick">
        ADD
      </button>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ItemInput extends Vue {
  private onChange() {}
  private onKeyup() {}
  private onClick() {}
}
</script>

<style></style>
