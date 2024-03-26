<template>
  <div class="container">
    <Header @show-task="showtask" @delete-all="deletetask" title="hello" :showaddtask="showaddtask"/>
    <router-view :showaddtask="showaddtask" :delete-all="deleteall"></router-view>
    <Footer/>
  </div>
</template>
 
<script>
import Header from './components/header'
import Footer from './components/footer'
import Home from './views/home'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer,
  },
  data(){
    return{  
      tasks: [],
      showaddtask: false
    }
  },
  methods:{

    showtask(){
      this.showaddtask = !this.showaddtask
    },
    async deletetask(){
      if(confirm('Do you want to delete all tasks')){
        const res = await fetch('api/tasks', {
        method: 'DELETE',
        // headers: {
        //   'Content-type': 'application/json',
        // },
      })

      const {data} = await res.json()

      res.status ===200 ? (this.tasks = this.tasks.filter((data) => data)) : this.tasks=""


      }
    }
  },
 
}

</script>
<style>
*{
  text-transform: capitalize;
  background-position: cover;
  background-size: 100vh 150vh;
  overflow-x: hidden;
}
#app {
  z-index: 3;
  /* background-image: url('wallpaper1.jpg'); */
  position: relative;
  padding: 20px;
  border: 3px solid rgb(50, 0, 121);
  border-radius: 10px;
  margin-left: 25%;
  width: 40%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
