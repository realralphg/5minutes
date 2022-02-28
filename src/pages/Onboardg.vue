<template>
  <div class="wrapp bg-primary">
      <div class="hold container">

          <div class="img q-py-xl">
              <img src="/images/Time.png" alt="">
          </div>

          <h5 class="text-weight-bold q-py-lg">Your success 
is five minutes away</h5>
          <p class="q-py-sm text-white">provides you an awesome 
           learning journey.</p>

          <div class="botton">
              <q-btn class="btnn">
                  Skip
              </q-btn>

              <q-btn to="onboard" class="btnn text-black nn">
                  Next
              </q-btn>
          </div>

      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.wrapp{
    height: 100vh;
}
.hold{
    display: grid;
    place-items: center;
}

.btnn{
    /* width: 10%; */
    background: #52d972;
    padding: 1rem 2rem;
    color: #fff;
}

.nn{
    background: linear-gradient(232.13deg, #FED12E 17.23%, #FFE840 87.53%);

}

.botton{
    width: 70%;
    margin: 7rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>