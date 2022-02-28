<template>
  <div class="wrapper">
      <div class="head-hold container">
          <div class="left">
              <q-btn to="/login" class="icon q-mr-md">
                <i class="ri-arrow-left-line text-black text-primary text-weight-bold"></i>
              </q-btn>
              <span class="">Chat</span>
          </div>

          <div class="right">
              <span class="q-mr-md text-primary">Edit</span>
              <q-btn to="/login" class="icon q-mr-md">
                <i class="ri-edit-box-line text-primary"></i>
              </q-btn>

          </div>
      </div>
       
       <div class="search-hold container">
           <div class="search">
               <input type="text" class="overall-search" placeholder="Search">
               <i class="ri-search-2-line"></i>
           </div>
       </div>

       <div class="buttons">
           <q-btn class="active btts">All charts</q-btn>
           <q-btn class="btts">Mentors</q-btn>
           <q-btn class="btts">Groups</q-btn>

       </div>
       <div class="life">
           <div class="hh">
               <Message img='https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80' head='Bola Zad' body='I have a job for you...' ig='2hr ago'/>
           </div>
           <div class="hh">
               <Message img='https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80' head='Foluke Nuel' body='Sent you a document...' ig='2hr ago'/>
           </div>
      </div>


      <div class="group container">
          <h2 class="text-h5 k">
              <i class="ri-team-line q-mx-md text-primary"></i> <span>Group</span>
          </h2>

          <div class="hh q-my-md">
               <Message img='https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80' head='UI/UX Design Class' body='There will a virtual class to...' ig='2hr ago'/>
           </div>
           <div class="hh">
               <Message img='https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80' head='Faith and Religion' body='Believer’s meeting is hold...' ig='2hr ago'/>
           </div>
      </div>
       
    </div>
</template>

<script> 

import Message from '../components/Message.vue'
export default {
    components:{
        Message
    }
}
</script>

<style scoped>

.wrapper{
    background-color: #E5E5E5;
    height: 100vh !important;
    padding: 1rem 0;
}
.icon{
    cursor: pointer;
    background-color: #c0ebca;
}
.left, .right{
    display: flex;
    align-items: center;
    
}

.head-hold{
    /* padding: 7rem 0; */
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
}
.search{
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 1rem;
    height: 50px;
}

.search input{
    border: none;
    background-color: #fff;
    width: 100%;
}

.search i{
    color: #fff;
    background-color: #52d972;
    padding: .45rem .85rem;
    border-radius: 8px;
}

.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}

.buttons .btts{
    border: 1px solid #52d972;
    border-radius: 8px;
    padding: .65rem;
    margin: 0 1rem;
}

.buttons .active{
    color: #fff;
    background-color: #52d972;
}
.hh{
    margin: 2rem 0;
}
.group{
    margin: 4rem auto;
    padding-bottom: 4rem;
    background-color: #E5E5E5;

}

.k{
    display: flex;
    align-items: center;
}

</style>