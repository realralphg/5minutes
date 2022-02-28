<template>
  <div class="holde">
      <div class="wrapp container">
          <div class="img">
            <img :src="img" alt="">

          </div>

          <div class="right">
              <h4 class="text-weight-bold">{{head}}</h4>
              <div class="lef">
                <p>{{body}}</p>
                <span>{{ig}}</span>
              </div>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
     props: ['ig', 'img', 'head', 'body']
}
</script>

<style scoped>

p{
    margin-bottom: 0;
}

.wrapp{
    display: flex;
    /* width: 100%; */
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 8px;

    gap: 1rem;
    align-items: center;
}
img{
    width: 50px;
    height: 75px;
    border-radius: 100%;
}

.lef{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #626262;

}

.wrapp .img{
    flex: 1;
}

.wrapp .right{
    flex: 20;
}
</style>