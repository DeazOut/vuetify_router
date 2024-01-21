<template>
  <v-app id="app">
    <v-navigation-drawer color="teal-accent-2" dark expand-on-hover hide-overlay permanent location="right" absolute>
      <v-list nav density="compact">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="avatar">
          </v-list-item-avatar>

          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">{{ name }}</v-list-item-title>
            <v-list-item-subtitle>{{ subname }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-divider class="my-3"></v-divider>
    <v-list-item link :to="/users">
      <v-icon>mdi-home-outline</v-icon>
    </v-list-item>
   
    </v-navigation-drawer>
    <v-main class="px-12 py-3"> 
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
    
</template>


<script>

export default {
  name: 'App',

  data: () => {
    return {
      avatar: '',
      name: '',
      subname: ''
    }
  },
  methods: {
    getUserData() {
      this.axios({
        method: 'get', // метод GET для получения данных с API
        url: 'https://randomuser.me/api/', // адрес API
      }).then((response) => {
        // парсинг результата ответа от сервера
        console.log(response.data);
        this.name = response.data.results[0].name.first;
        this.subname = response.data.results[0].name.last;
        this.avatar = response.data.results[0].picture.medium;
      })
    }
  },
  mounted() {
    // хук для первичной загрузки метода
    this.getUserData();
  }
}
</script>
