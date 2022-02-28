<template>
  <div class="wrapp">
      <div class="hold container">

          <div class="img q-py-xl">
              <img src="/images/refer.png" alt="">
          </div>

          <h5 class="text-weight-bold q-py-lg">Get connect to the best
            mentors</h5>
          <p class="q-py-sm text-accent">Easy way to connect to your favorite
            mentor.</p>

          <div class="botton">
              <q-btn class="btnn text-black">
                  Skip
              </q-btn>

              <q-btn to="onboardg" class="btnn text-black nn">
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