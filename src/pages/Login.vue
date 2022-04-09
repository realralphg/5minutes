<template>
  <div class="wrapper">
    <div class="row">
      <div class="column col-md-6 bg-primary full-page-width">
        <div class="">
          <div class="q-pt-lg q-pl-lg">
            <img
              src="../assets/5minsLogo.svg"
              spinner-color="white"
              class="logo-sm"
            />
          </div>
          <div class="left-margin right-margin">
            <div class="">
              <div class="text-light text-h4">
                <b> Hello! </b>
              </div>
              <p class="text-light">Welcome back.</p>
              <div>
                <OAuthLinks />
              </div>
            </div>
            <form action="" class="form">
              <div class="input-wrap">
                <label for="email" class="form-label">Email</label>
                <q-input
                  id="email"
                  type="email"
                  class="form-input"
                  outlined
                  placeholder="johndoe@example.com"
                />
              </div>
              <div class="input-wrap">
                <label for="pass" class="form-label">Password</label>
                <q-input
                  id="pass"
                  type="password"
                  class="form-input"
                  outlined
                  placeholder="6+ Characters"
                />
                <p class="small-text text-light text-right q-py-sm">
                  <router-link to="#"
                    ><span class="text-info"
                      ><b>Forgot password?</b></span
                    ></router-link
                  >
                </p>
              </div>
              <div class="input-wrap">
                <q-checkbox
                  :dark="true"
                  class="text-light"
                  size="md"
                  v-model="shape"
                  val="md"
                  label="Remember me"
                />
              </div>
              <div class="input-wrap">
                <q-btn class="form-submit-button" rounded label="Login" />
                <p class="small-text text-light text-center q-py-sm">
                  Don't have an account?
                  <router-link to="/register"
                    ><span class="text-info"
                      ><b>Create Account.</b></span
                    ></router-link
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="column col-md-6"></div>
    </div>
  </div>
</template>

<script>
import OAuthLinks from "components/OAuthLinks";

export default {
  name: "LoginPage",
  components: {
    OAuthLinks: OAuthLinks,
  },
  data() {
    return {
      regAsMentee: true,
      shape: false,
    };
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
.wrapper {
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  /* margin-top: 6rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.heeder {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}

.heeder span {
  font-size: 1.5rem;
}

.heeder .icon i {
  font-size: 25px;
}
.heeder .icon {
  cursor: pointer;
  background-color: #c0ebca;
}
.iconsets {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconsets i {
  font-size: 3rem;
  margin: 0 2rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.reg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bt {
  box-shadow: none !important;
  text-transform: capitalize !important;
}
.hey {
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.hey:hover {
  transform: translateX(3%);
}

.iconsets i:hover {
  transform: scale(1.3);
}

.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
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
.left-margin {
  margin-left: 20%;
}
.right-margin {
  margin-right: 10%;
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .left-margin {
    margin-left: 10%;
  }
}
</style>
