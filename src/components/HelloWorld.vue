<template>
  <div class="hello">
    
    
    <div class="row  ">
      <div class="col-md-5 col-12 container first" >
       
        <img src="../assets/love-arrow.png" class="img-fluid  d-none d-md-block">
        <button type="submit" class="btn btn-danger bu" @click="onsub">Check History</button>
      </div>
      <div class="col-md-7 col-12 second  text-center container">
        <h3>Love Calculator</h3>
        <form class="row g-3 mt-5" @submit.prevent="onlogin">
  <div class="col-md-6 container">
    <label for="inputEmail4" class="form-label">Enter first lover'sname</label>
    <input type="text" class="form-control" id="inputEmail4" v-model="firstname" required>
  </div>
  <p></p>
  <div class="col-md-6 container">
    <label for="inputEmail4" class="form-label">Enter second lover's name</label>
    <input type="text" class="form-control" id="inputEmail4" v-model="lastname" required>
  </div>
 
      
 
  <div class="col-12">
    <button type="submit" class="btn btn-danger btn-lg mb-5 mt-3">Calculate</button>
  </div>

  
</form>
<div v-if="!loading &&  message.trim().length>0" class="mt-4">
  <p>Result:   {{result}}</p>
  <p>Message:  {{message}}</p>
</div>
<div v-if="loading " class="mt-4">
  <img src="../assets/Running heart.gif" class="img-fluid">
</div>

      </div>
    </div>
  
  </div>
</template>

<script>
  import axios from 'axios';
  import { uuid } from 'vue-uuid';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  
  data() {
    return {
      firstname: "",
      lastname: "",
      result:"",
      message:"",
      loading:false
    };
  },
  methods: {
    onsub(){
      console.log('gbemi')
      this.$router.push("/about")
      this.$router.push({path: '/about'});
    },
   async onlogin() {
  this.loading=true
  let history = JSON.parse(localStorage.getItem("lovesearch"))
  if (history==null){
    history=[]
  }
  const first = this.firstname.toLowerCase() < this.lastname.toLowerCase() ? this.firstname.toLowerCase() : this.lastname.toLowerCase();
      const last = first === this.firstname.toLowerCase() ? this.lastname.toLowerCase() : this.firstname.toLowerCase();
      const historySearched = history.find(items => items.first === first && items.last === last)
   if(historySearched) {
   this.result = historySearched.result
    this.message = historySearched.message
    this.loading = false
    console.log("checki")
  return;
}
      // const current={
        
    try{
      
     

      // }
     const res= await axios.get("https://loverapi.herokuapp.com/api/v1/calculate?personA=" + this.firstname + "&personB=" + this.lastname)
     const current = {first: first, last: last, result: res.data.result, message: res.data.message ,id:uuid.v4()}
     console.log(current)
     history.push(current)
     
localStorage.setItem("lovesearch",JSON.stringify(history))


    this.result=res.data.result;
    this.message=res.data.message;
      // console.log(res)

      // console.log("meeeeeeeeeeeeee");
      // console.log(this.firstname)
      // console.log(this.lastname)
    this.firstname = "",
    this.lastname=""
      // this.firstname="chidinma"

    }
  catch(error){
    console.log(error)
  }
  finally{
    this.loading=false
  }
    
    },
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
  overflow-x: hidden;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.second{
  background-color:rgb(255, 244, 244);
}
@media screen and (max-width: 768px) {
  .first{
    background-color:rgb(255, 244, 244);
  }
  .bu{
    margin-top:30px;
  }
}


</style>
