<template>
  <div class="wrapper container">
    <div class="q-mt-xl heeder">
      <q-btn to="/login" class="icon q-mr-md">
        <i class="ri-arrow-left-line text-black  text-weight-bold"></i>
      </q-btn>

      <!-- <div class="logo">
        <img src="/images/lo.png" alt="" />
      </div> -->
      <span class="">Log in</span>
    </div>
    <!-- <h1 class="text-h3 text-left text-weight-bold text-primary q-my-lg">
      Login
    </h1> -->
    <div class="welcome q-my-lg">
      <h2 class="text-weight-bold hey text-black text-h4">Hey</h2>
      <p class="text-black">Welcome back to 5minutes</p>

    </div>

    <div class="iconsets">
      <i class="ri-facebook-fill text-accent text-weight-bold"></i>
      <i class="ri-google-fill text-info text-weight-bold"></i>
      <i class="ri-linkedin-fill text-positive text-weight-bold"></i>
    </div>

    <div class="eight q-my-lg">
      <h3>OR</h3>
    </div>




    <form action="" class="form bg-primary q-pa-md">
      <div class="input-wrap">
        <label class="text-primary" for="">Email</label> <br />

        <div class="input">
          <i class="ri-mail-line q-mr-md text-primary"></i>

          <input type="email" placeholder="Enter your email" />
        </div>
      </div>
      <div class="input-wrap">
        <label class="text-primary" for="">Password</label> <br />

        <div class="input">
          <i class="ri-lock-line q-mr-md text-primary"></i>

          <input type="text" placeholder="Enter your password" />
        </div>
        <p class="text-white forgot">Forgot password?</p>
      </div>

      <div class="button text-center">
        <q-btn to="chat" class="btn">Login</q-btn>
      </div>

      <p class="text-black reg text-center">
      Don’t have account?
      <q-btn to="/register" class="text-white text-weight-bold bt"> Register</q-btn>
      </p>


    </form>

    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  /* margin-top: 6rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh !important;
}

.forgot {
  display: flex;
  justify-content: flex-end;
}

.heeder {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}

.heeder span{
  font-size: 1.5rem;
}

.heeder .icon i {
  font-size: 25px;
}
.heeder .icon {
  cursor: pointer;
  background-color: #c0ebca;
}
.iconsets{
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconsets i {
  font-size: 3rem;
  margin: 0 2rem;
  cursor: pointer;
  transition: all .5s ease-in-out;
}
.hey{
  transition: all .5s ease-in-out;
  cursor: pointer;
}
.hey:hover{
    transform: translateX(3%);
}

.iconsets i:hover {
  transform: scale(1.4);
}
.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}

.reg{
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-wrap,
select {
  width: 100%;
}

.input-wrap .input {
  /* border: 1px solid #2b945b; */
  padding: 0.75rem;
  margin: 1rem 0;
  /* background: rgba(236, 236, 236, 0.67); */
  background: #fff;
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.45rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.form{
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  border-radius: 8px;
  color: #fff;
  margin: 0.55rem 0;
  width: 50%;
}

.bt{
  box-shadow: none !important;
  text-transform: capitalize  !important;;
}

.eight h3 {
  text-align: center;

  text-transform: uppercase;
  font-size: 26px;
  letter-spacing: 1px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 16px 0;
  grid-gap: 22px;
}

.eight h3:after,
.eight h3:before {
  content: " ";
  display: block;
  border-bottom: 1px solid #ccc;
  /* background-color: #f8f8f8; */
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
}
</style>
