<template>
<div id="app">
<div class="container">
  <v-carousel 
  :show-arrows="false"
  cycle
  height="350"
  hide-delimiters
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <br/>
  <br/>
  <h3>功能模块</h3>
  <div class="card">
      <div class="col-3" v-for="(item, index) in menus" :key="index">
  <v-card
    class="mx-auto"
    max-width="200"
  >
    <v-img
      class="white--text align-end"
      height="100px"
      :src="item.image"
    >
    </v-img>

    <v-card-subtitle class="pb-0">{{ item.sub }}</v-card-subtitle>
  </v-card>
  
  </div>
  </div>
  <br/>
  <br/>
  <h3>今日课程</h3>
<div class="card">
      <div class="col-6" v-for="(item, index) in clazz" :key="index">
  <v-card
    class="mx-auto"
    max-width="1000"
  >
    <!-- <v-img
      class="white--text align-end"
      height="300px"
      :src="menus.image"
    >
    </v-img> -->
    <h2>{{ item.course }}</h2>
    <br/>
    <br/>
    <h3>{{ item.course }}</h3>
    <br/>
    <br/>
    <v-card-subtitle class="pb-0">{{ item.course }}</v-card-subtitle>
  </v-card>
  
  </div>
  </div>
  <br/>
  <br/>
  <h3>热门资讯</h3>
  <div class="inform">
   <v-card
    max-width="400"
    class="mx-auto"
  >
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Unlimited music now</v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    
  </v-card>
  </div>


  </div>
</div>
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            color: '#1F7087',
          title: 'Supermodel',
          artist: 'Foster the People',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        menus: [
        {
          image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          sub:"你爸爸",
          couses:"web开发"
        },
        {
          image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          sub:"你爸爸",
          couses:"web开发"
        },
        {
          image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          sub:"你爸爸"
        },
        {
          image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          sub:"你爸爸"
        }
      ],
      clazz: [
        // {
        //   image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //   sub:"你爸爸",
        //   course:"web开发"
        // },
        // {
        //   image:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //   sub:"你爸爸",
        //   course:"web开发"
        // }
      ],
      }
    },
    created(){
      this.axios.get('http://118.178.86.242:8888/mock/26/curriculum/todayList').then(res =>{
				console.log(res);
				this.clazz = res.data.data.list;
			});
    }
  }
</script>
<style lang="scss" scoped>
.container {
//  background-color:black;
	height: 1200px;
	width: 120%;
  padding: 0;
}
.row {
  padding: 0;
  height: 10px;
  width: 1185px;
  margin-top: -5px;
}
.v-carousel {
  height: 10px;
}
.col-3{
  flex: 1 1 25%;
}
.card{
  display: flex;
  text-align: center;
  justify-content: center;
  margin-left: 50px;
  margin-top: 10px;
}
h3{
  text-align: center;
}
.inform{
  margin-top: 30px;
  justify-content: center;
  margin-left: 10px;
}
</style>



