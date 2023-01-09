<script setup>
import PageTitle from "src/components/PageTitle.vue";
import { ref } from "vue";
import { api } from "src/boot/axios";
import { onBeforeMount, onMounted } from "vue";

const data = ref([]);
const img = ref([]),
  dataResult = ref([]);
// const dt_des = ref([]);

onBeforeMount(async () => {
  async function getData() {
    let data2 = [];
    let json = await api.get("/combo-menus?populate=*");
    let data_length = json.data.data.length;
    for (let i = 0; i < data_length; i++) {
      data2.push(json.data.data[i].attributes);
    }
    return data2;
  }
  data.value = await getData();
  // data.value.forEach(function (el) {
  //   img.value.push(el.Image.data);
  //   //attributes.thumbnail.url
  //   //   dt_des.value.push(el.Description);
  // });
  // console.log(img.value[2][0].attributes.formats.thumbnail.url);

  // console.log(img.value[0][0].attributes);
  // for (let i = 0; i < img.value.length; ++i) {
  //   if (
  //     img.value[i]?.[0]?.attributes.formats.thumbnail.url !== null &&
  //     img.value[i]?.[0]?.attributes.formats.thumbnail.url !== undefined
  //   ) {
  //     dataResult.value.push(img.value[i]?.[0]?.attributes.formats.thumbnail);
  //   }
  // }
});

console.log(dataResult.value);
</script>

<style lang="scss">
.table {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.menu_card {
  margin: 10px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  white-space: normal;
}
</style>

<template>
  <PageTitle page_title="Start" />

  <!-- <pre>{{ data }}</pre> -->

  <!-- <q-table class="table" :rows="data"></q-table> -->
  <div class="menu_card row q-pa-md q-gutter-md">
    <q-card v-for="item in data" :key="item.Title" bordered style="width: 30%">
      <!-- <pre>
      {{ data }}
    </pre> -->
      <q-card-section>
        <template v-if="item.Image">
          <q-parallax
            v-for="subitem in item.Image.data"
            :key="subitem.id"
            :src="`http://localhost:1337${subitem.attributes.formats.thumbnail.url}`"
            :height="150"
          >
            <div class="absolute-bottom text-h6" style="color: white">
              {{ item.Price }}$
            </div>
          </q-parallax>
        </template>
        <div class="text-h6" v-else>{{ item.Title }}</div>
        <!-- <router-link :to="`/${item.Title}`"> -->

        <div class="text-h6">{{ item.Title }}</div>
        <!-- </router-link> -->
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        <div class="text-h6">{{ item.Description }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
