<template>
  <q-layout view="hHh lpR fFf">
    <Logo />
    <TopMenu />

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup>
import TopMenu from "src/components/TopMenu.vue";
import Logo from "src/components/Logo.vue";
import PageTitle from "src/components/PageTitle.vue";
import Footer from "src/components/Footer.vue";
</script>
