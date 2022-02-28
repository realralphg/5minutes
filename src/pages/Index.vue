<template>
  <q-page class="hold container">
    <div class="holder">
      <div class="prof">
        <img src="/images/per.png" alt="">
        <p class="q-pb-md">Hey User</p>
      </div>

      <p>Find your <br> favorite <span class="text-info text-weight-bold">mentor.</span></p>
    </div>

    <div class="search-hold container">
      <div class="search">
        <input type="text" class="overall-search" placeholder="Search">
        <i class="ri-search-2-line"></i>
      </div>
    </div>


    <div class="body">
      <div class="post-card q-my-lg">
        <div class="post-head">
          <img src="/images/per.png" alt="">
          <div class="dett">
            <p><strong>Felix</strong> <small>Product Manager</small></p>
            <smal>Greysoft</smal>

          </div>
          
        </div>

        <h6 class="q-my-lg">Understanding Data Structures</h6>


        <div class="snippet">

        </div>


        <p class="q-my-md">Lorem ipsum dolor sit amet, consectetur adipiscing 
          Orci cursus in interdum vulputate auctor. Non ut est 
          aliquam urna sit morbi mauris. Nec eget sit volutpat 
          a dictumst. Auctor aliquet  sed lacus, </p>
      </div>



      <div class="buttons q-mt-lg">
        <q-btn class="active btts">Popular</q-btn>
        <q-btn class="btts">Recent</q-btn>
        <q-btn class="btts">Top</q-btn>

      </div>


      <div class="ex">
        <p>Explore your favorite mentor</p>

        <q-btn class="text-primary">
          View All
        </q-btn>
      </div>


      <div class="men q-pb-xl">
        <Splide :options="options">
          <SplideSlide class="col ji">
            <div class="hhh">
              <q-card flat class="justify-content-center food-cards">
                <img src="/images/per.png" alt="" class="sponsor__img" />
                <h6 class="q-my-xs">Isah Raphael</h6>
                <p class="q-mb-xs">CEO / DIRECTOR</p>                 
                <small class="weight-text">5 Minutes</small>
              </q-card>
            </div>
                            
          </SplideSlide>

          <SplideSlide class="col ji">
            <div class="hhh">
              <q-card flat class="justify-content-center food-cards">
                <img src="/images/per.png" alt="" class="sponsor__img" />  
                <h6 class="q-my-xs">Isah Raphael</h6>
                <p class="q-mb-xs">CEO / DIRECTOR</p>                 
                <small class="weight-text">5 Minutes</small>
              </q-card>
            </div>
                            
          </SplideSlide>

          <!-- <SplideSlide class="col ji">
            <div class="hhh">
              <q-card flat class="justify-content-center food-cards">
                <img src="/images/per.png" alt="" class="sponsor__img" /> 
                <h6 class="q-my-xs">Isah Raphael</h6>
                <p class="q-my-xs">CEO / DIRECTOR</p>                 
                <small class="weight-text">5 Minutes</small>
              </q-card>
            </div>
                            
          </SplideSlide> -->
        </Splide>
      </div>


    </div>


    
  </q-page>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components:{
      Splide, SplideSlide
    },
    data(){
        return{
            options: {
                rewind: true,
                arrows: true,
                perPage: 3,
                width: '100%',
                //  height: "15rem",
                gap: "1rem",
                breakpoints: {
                    1000: {
                    perPage: 3,
                },
                800: {
                    perPage: 1,
                }
            },
        },
        }}
})
</script>


<style scoped>

p{
  margin-bottom: 0;
}

.hold{
  /* background-color: #E5E5E5; */
}
.holder{
  background-color: #52d972;
  padding: 2rem;
  height: 100%;
  border-radius: 8px;
}

.holder p{
  margin-top: 2rem;
}
.snippet{
  width: 100%;
  height: 250px;
  background-color: #000;
}
.prof{
  display: flex;
  /* align-items: center; */
  gap: 1rem;
}


.prof img{
  width: 100px;
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
.search-hold{
  margin: 2rem auto;
}
.search{
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 1rem;
    height: 50px;

    background: #C4C4C4;
}

.search input{
    border: none;
    background-color: #fff;
    width: 100%;
    background-color: transparent;
}

.search i{
    color: #fff;
    background-color: #52d972;
    padding: .45rem .85rem;
    border-radius: 8px;
}
.post-card{
  background-color: #E5E5E5;
  padding: 2rem;
  width: 90%;
  margin: 0 auto 4rem;
}
.post-head{
  display: flex;
  align-items: center;
  gap: 1rem;
}
.post-head img{
  width: 100px;
}
.ex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hhh img{
  width: 150px;
}

.food-cards{
  background-color: #E5E5E5;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.men{
  padding-bottom: 8rem;
}
</style>