<template>
  <div class="about">
    <h3 class="mt-5">History</h3>
    <div class="row">
     
      
    </div>

    <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First lover's name</th>
      <th scope="col">Second lover's name</th>
      <th scope="col">Result</th>
      <th scope="col">message</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in history" v-bind:key = "item.id" >
      <th scope="row"></th>
      <td >{{item.first}} </td>
      <td >{{item.last}}</td>
      <td > {{item.result}}</td>
      <td > {{item.message}}</td>
    </tr>
    <button type="submit" class="btn btn-danger mt-5" @click="onsub">Back to home</button>
  </tbody>
</table>
   
  </div>
</template>
<script>
  // import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      history: []
    };
  },
  mounted(){
    let history = JSON.parse(localStorage.getItem("lovesearch"))
    if(history ){
      this.history=history
    }
    else{
      this.history= []
    }
    },
  methods: {
    onsub(){
      console.log('gbemi')
      this.$router.push("/")
      this.$router.push({path: '/'});
    },
    
    },
  
}
</script>
<style scoped>
  *{
  overflow-x: hidden;
}

.about{
  background-color:rgb(255, 244, 244);
  height:100vh;
}
</style>

