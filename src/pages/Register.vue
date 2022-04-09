<template>
  <div class="wrapper">
    <div class="row">
      <div class="column col-md-6 bg-primary full-page-width">
        <div class="">
          <div class="q-pa-lg">
            <img
              src="../assets/5minsLogo.svg"
              spinner-color="white"
              class="logo-sm"
            />
          </div>
          <div class="left-margin right-margin">
            <div class="">
              <h5 class="text-light">
                <b>
                  Sign up as a
                  <span v-show="regAsMentee">mentee</span>
                  <span v-show="!regAsMentee">mentor</span>
                </b>
              </h5>
              <p class="text-light">
                Are you looking to become a
                <span
                  @click="regAsMentee = !regAsMentee"
                  class="pointer-cursor"
                >
                  <span class="text-info" v-show="!regAsMentee">mentee</span>
                  <span class="text-info" v-show="regAsMentee">mentor</span>
                </span>
                instead
              </p>
              <div>
                <OAuthLinks />
              </div>
            </div>
            <form action="" class="form">
              <div class="input-wrap">
                <label for="name" class="form-label">Full name</label>
                <q-input
                  id="name"
                  type="text"
                  class="form-input"
                  outlined
                  placeholder="John Doe"
                />
              </div>
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
                <label for="phone" class="form-label">Phone number</label>
                <q-input
                  id="phone"
                  type="tel"
                  class="form-input"
                  outlined
                  placeholder="+234 803 4567 890"
                />
              </div>
              <div class="input-wrap">
                <label for="createpass" class="form-label"
                  >Create password</label
                >
                <q-input
                  id="createpass"
                  type="password"
                  class="form-input"
                  outlined
                  placeholder="6+ Characters"
                />
              </div>
              <div class="input-wrap">
                <label for="confirmpass" class="form-label"
                  >Confirm password</label
                >
                <q-input
                  id="confirmpass"
                  type="password"
                  class="form-input"
                  outlined
                  placeholder="6+ Characters"
                />
              </div>
              <div class="input-wrap">
                <p class="small-text text-light text-center q-py-sm">
                  By signing up, you agree to our
                  <router-link to="#"
                    ><span class="text-info"
                      >terms of service</span
                    ></router-link
                  >
                  and
                  <router-link to="#"
                    ><span class="text-info">privacy policy.</span></router-link
                  >
                </p>
                <q-btn
                  class="form-submit-button"
                  rounded
                  label="Create account"
                />
                <p class="small-text text-light text-center q-py-sm">
                  Have an account?
                  <router-link to="/login"
                    ><span class="text-info">Login.</span></router-link
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
  name: "RegisterPage",
  components: {
    OAuthLinks: OAuthLinks,
  },
  data() {
    return {
      regAsMentee: true,
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
