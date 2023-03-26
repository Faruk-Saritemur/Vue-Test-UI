<template>
  <v-card>
    <v-toolbar color="deep-purple-accent-4">
      <v-toolbar-title>Test UI</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="currentItem" fixed-tabs>
          <v-tab v-for="item in items" :key="item" :value="'tab' + item">
            {{ item }}
          </v-tab>

          <v-menu v-if="more.length">
            <template v-slot:activator="{ props }">
              <v-btn variant="plain" rounded="0" class="align-self-center me-4" height="100%" v-bind="props">
                more
                <v-icon end> mdi-menu-down </v-icon>
              </v-btn>
            </template>

            <v-list class="bg-grey-lighten-3">
              <v-list-item v-for="item in more" :key="item" @click="addItem(item)">
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="currentItem">
      <v-window-item v-for="item in items.concat(more)" :key="item" :value="'tab' + item">
        <v-card flat>
          <v-card-text>
            <v-row>
              <v-col>
                <h2>{{ item }}</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="7"> {{ text }}</v-col>
              <v-col cols="1"></v-col>
              <v-col cols="4"> <img alt="Vue logo" class="image-v" src="../assets/logo.png" /></v-col>
            </v-row>
            <v-row>
              <v-col>
                <DataGrid></DataGrid>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card>
                  <v-autocomplete v-model="selectedItem" :items="autoItems" label="Test Items"></v-autocomplete>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>

    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="menuVisible = !menuVisible"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-menu v-model="menuVisible" :close-on-content-click="false" offset-y>
        <template v-slot:activator="slotProps">
          <v-btn color="primary" dark v-on="slotProps.on">Menu</v-btn>
        </template><menu-list></menu-list>
      </v-menu>
    </v-app>


  </v-card>
</template>
  
<script>
import DataGrid from '../components/DataGrid.vue'
import MenuList from '../components/MenuList.vue'

export default {
  components: {
    DataGrid,
    MenuList
  },
  data: () => ({
    currentItem: "tab-Web",
    items: ["Ürünlerimiz", "Kampanyalar", "Hakkımızda", "İletişim"],
    more: ["Görseller", "Destek", "Test7", "Test8"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    selectedItem: "",
    autoItems: [],
    tempObj: {}
  }),
  mounted() {
    this.fetchData()
  },
  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    },
    fetchData() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.autoItems = data.map(item => ({
            text: item.name,
            value: item.id
          }));
        })
        .catch(error => {
          console.error(error);
          alert('Veriler yüklenirken bir hata oluştu.');
        });
    }
  },
};
</script>
  
<style scoped>
.image-v {
  margin-top: -10px;
}
</style>