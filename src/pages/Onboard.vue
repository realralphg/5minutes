<template>
  <div class="wrapp">
      <div class="hold container">

          <div class="img q-py-xl">
              <img src="/images/withphone.png" alt="">
          </div>

          <h5 class="text-weight-bold q-py-lg">Mentor-Mentee based 
          learning platform</h5>
          <p class="q-py-lg text-accent">Provides you an awesome 
           learning journey.</p>

          <div class="botton">
              <q-btn to="/mentor" class="btnn">
                  Get started
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
.hold{
    display: grid;
    place-items: center;
}

.btnn{
    width: 60%;
    background: #52d972;
    padding: 1rem;
    color: #fff;
}

.botton{
    width: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
}

</style>