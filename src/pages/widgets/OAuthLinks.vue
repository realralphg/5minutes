<template>
    <div class="oauth-container row q-my-md">
        <router-link to = "#"><img class="oauth-links" src="../../assets/google_auth.svg" /></router-link>
        <router-link to = "#"><img class="oauth-links" src="../../assets/fb_auth.svg" /></router-link>
        <router-link to = "#"><img class="oauth-links" src="../../assets/linkedin_auth.svg" /></router-link>
    </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
};
</script>

<style scoped>
    .oauth-container{
        flex-direction: row;
        justify-content: space-between;

    }
    img{
        /* height: 100px */
        width: 120%
    }
    /* button{
        display: flex !important;
        flex-direction: row;
    } */
    span{
        font-size: 80%;
        border: 1px solid #000
    }


</style>
