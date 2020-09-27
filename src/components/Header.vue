<template>
  <div>
    <h1>TODO LIST</h1>
    <ol class="breadcrumb">
      <li><router-link to="/">ALL</router-link></li>
      <li><router-link to="/active">ACTIVE</router-link></li>
      <li class="active"><router-link to="/clear">CLEAR</router-link></li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style></style>
