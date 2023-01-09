<template>
  <div class="container">
<div class="row">
  <div class="col-12">
    <PageTitle page_title="Starters" />
    <div> {{ data }}</div>
  </div>
</div>
</div>
</template>

<script setup>
const data = await useFetch('http://localhost:1337/api/combo-menus')


</script>
