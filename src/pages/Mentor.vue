<template>
  <div class="wrapp">
      <div class="hold container">
          <div class="head">
              <div class="det">
                  <h3 class="text-weight-thin">Welcome to <br>
                  <span class="text-weight-bold">5 MINUTES</span></h3>

              </div>
              


               <div class="img q-py-lg">
                   <img src="/images/circular.png" alt="">
               </div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,256C480,288,600,288,720,250.7C840,213,960,139,1080,144C1200,149,1320,235,1380,277.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </div>

          <div class="answer">
              <p class="text-weight-thin q-py-sm">Please answer the question <br> below:</p>
              <div class="q-px-lg">
                    <q-option-group
                    v-model="group"
                    :options="options"
                    color="primary"
                    inline
                    />
                </div>
          </div>

          <div class="continue">
              <q-btn to="/login" class="con">Continue</q-btn>
              <p>Returning User? <q-btn to="/login" class="text-primary">Login</q-btn></p>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref('op1'),

      options: [
        {
          label: 'Mentor',
          value: 'op1'
        },
        {
          label: 'Mentee',
          value: 'op2'
        }
      ]
    }
  }
}
</script>


<style scoped>
svg{
    display: block;
}

.det{
    padding: 1.5rem;
    text-align: left;
    color: #fff;
    line-height: 1.6;
}

.wrapp{
    margin: 0 auto;
    width: 90%;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 2rem 0;
    
}
.img img{
    width: 40%;
    height: 40%;
}

.head{
    background: #52d972;
    /* padding: 1rem 0 0; */
    /* height: 20%; */
    width: 40%;
    margin: 0 auto;
}
.con{
    border: 1px solid #52d972;
    width: 40%;
    margin: 1rem 0;
    padding: .55rem;
}

.continue{
    height: 150px;
}

@media(max-width:400px){
    .det h3{
        font-size: 30px;
    }
}
</style>