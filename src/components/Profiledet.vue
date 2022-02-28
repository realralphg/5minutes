<template>
  <div class="wrapper container">
    <h6>Personal Profile</h6>
    <div class="gt">
      <h1 class="af">AF</h1>
      <h5>Ajax Felix</h5>



      <q-btn class="upload"> <q-icon class="text-primary" name="upload"></q-icon> Upload Avatar</q-btn>
      
    </div>

    <h5 class="info">Personal Info</h5>
    <div class="input-wrap">
      <label class="text-black text-weight-bold" for="">Full Name</label> <br />

      <div class="input">
        <i class="far q-mr-md fa-user text-primary"></i>

        <input type="text" placeholder="eg. Ademola" />
      </div>
    </div>
    <div class="input-wrap">
      <label class="text-black text-weight-bold" for="">Email</label> <br />

      <div class="input">
        <i class="ri-mail-line q-mr-md text-primary"></i>

        <input type="email" placeholder="Enter your email" />
      </div>
    </div>

    <div class="input-wrap">
      <label class="text-black text-weight-bold" for="">Phone Number</label> <br />

      <div class="input">
        <i class="ri-phone-fill q-mr-md text-primary"></i>

        <input type="text" placeholder="Enter your Phone Number" />
      </div>
    </div>
    <div class="input-wrap">
      <label class="text-black text-weight-bold" for="">Password</label> <br />

      <div class="input">
        <i class="ri-lock-line q-mr-md text-primary"></i>

        <input type="text" placeholder="Enter your password" />
      </div>
    </div>

    <div class="input-wrap">
      <label class="text-black text-weight-bold" for="">Gender</label> <br />

      <div class="">
        <q-option-group
          v-model="group"
          :options="options"
          color="primary"
          class="opt"
          inline
        />
      </div>
    </div>
    
    <div class="input-wrap">
      <label class="text-black text-weight-bold" for="">Select your location</label> <br />

      <div class="input">
        <i class="ri-user-add-line q-mr-md text-primary"></i>

        <select id="">
          <option value="">Select</option>
          <option value="Afganistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antigua & Barbuda">Antigua & Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
        </select>
      </div>


      <div class="input-wrap">
        <label class="text-black text-weight-bold" for="">Bio</label> <br />

        <textarea placeholder=" Short description of yourself and experience" name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="input-wrap">
        <label class="text-black text-weight-bold" for="">Hobbies</label> <br />

        <textarea placeholder="What do you love doing..." name="" id="" cols="20" rows="10"></textarea>
      </div>

      <div class="input-wrap">
        <label class="text-black text-weight-bold" for="">Experience</label> <br />

      
        <q-expansion-item
          class="q-my-md acc"
          expand-separator
          label="School">
              <div class="">
                <q-option-group
                  v-model="groupset"
                  :options="optionset"
                  color="green"
                  type="checkbox"
                  />
              </div>
        </q-expansion-item>

        <q-expansion-item
        class="acc"
          expand-separator
          label="Year">
              <div class="">
                <q-option-group
                  v-model="year"
                  :options="optionyear"
                  color="green"
                  type="checkbox"
                  />
              </div>
        </q-expansion-item>
      </div>

      <div class="input-wrap">
        <label class="text-black text-weight-bold" for="">Position</label> <br />

      
        <q-expansion-item
        
          class="q-my-md acc"
          expand-separator
          label="Role">
              <div class="">
                <q-option-group
                  v-model="role"
                  :options="optionrole"
                  color="green"
                  type="checkbox"
                  />
              </div>
        </q-expansion-item>

        <q-expansion-item
          class="acc q-my-md"
          expand-separator
          label="Company">
              <div class="">
                <q-option-group
                  v-model="company"
                  :options="optioncompany"
                  color="green"
                  type="checkbox"
                  />
              </div>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          class="acc"
          label="Years of experience">
              <div class="">
                <q-option-group
                  v-model="experience"
                  :options="optionexp"
                  color="green"
                  type="checkbox"
                  />
              </div>
        </q-expansion-item>
      </div>


      <div class="curr">
        <div class="">
          <q-option-group
            v-model="groupcur"
            :options="optionscur"
            color="primary"
            inline
          />
        </div>
      </div>






      <!-- <div class="button text-center">
        <button class="btn">Register</button>
      </div>

      <p class="text-center text-positive">
        Already have an account?
        <q-btn to="/login" class="text-primary"> Login</q-btn>
      </p> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref('op1'),
      groupset: ref(['op1']),
      year: ref(['op1']),
      role: ref(['op1']),
      company: ref(['op1']),
      experience: ref(['op1']),
      groupcur: ref(['op1']),

      

      optionscur: [
        {
          label: 'Currently working',
          value: 'op1'
        }
      ],

      options: [
        {
          label: 'Male',
          value: 'op1'
        },
        {
          label: 'Female',
          value: 'op2'
        }
      ],
      optionset: [
        
        {
          label: 'Back-End Development',
          value: 'op1'
        },
        {
          label: 'Front-End Development',
          value: 'op2'
        },
        {
          label: 'Software Devepment',
          value: 'op3'
        },
        {
          label: 'Data Science',
          value: 'op4'
        }
      ],
      optionyear: [
        
        {
          label: 'Back-End Development',
          value: 'op1'
        },
        {
          label: 'Front-End Development',
          value: 'op2'
        },
        {
          label: 'Software Devepment',
          value: 'op3'
        },
        {
          label: 'Data Science',
          value: 'op4'
        }
      ],
      optionrole: [
        
        {
          label: 'Back-End Development',
          value: 'op1'
        },
        {
          label: 'Front-End Development',
          value: 'op2'
        },
        {
          label: 'Software Devepment',
          value: 'op3'
        },
        {
          label: 'Data Science',
          value: 'op4'
        }
      ],
      optioncompany: [
        
        {
          label: 'Back-End Development',
          value: 'op1'
        },
        {
          label: 'Front-End Development',
          value: 'op2'
        },
        {
          label: 'Software Devepment',
          value: 'op3'
        },
        {
          label: 'Data Science',
          value: 'op4'
        }
      ],
      optionexp: [
        
        {
          label: 'Back-End Development',
          value: 'op1'
        },
        {
          label: 'Front-End Development',
          value: 'op2'
        },
        {
          label: 'Software Devepment',
          value: 'op3'
        },
        {
          label: 'Data Science',
          value: 'op4'
        }
      ],
    }
  }
}
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
}

.gt{
  display: grid;
  place-items: center;
}
.af{
  width: 300px;
  height: 200px;
  border-radius: 50%;
  background: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.upload{
  background: #FFFFFF;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 1rem 0;
}

.info{
  font-weight: 600;
  font-size: 1.5rem;
  margin: 1.5rem 0;
}
.heeder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heeder i {
  font-size: 35px;
}

.heeder .icon {
  cursor: pointer;
}

.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}

.input-wrap, textarea {
  width: 100%;
  margin: .75rem 0;
}

.input-wrap .input, textarea {
  /* border: 1px solid #2b945b; */
  padding: 0.75rem;
  margin: 1rem 0;
  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.input-wrap .input input,
select{
  border: none;
  padding: 0.45rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
select:focus, textarea:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

input::placeholder, textarea::placeholder{
  color:#979797;
;
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


@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
}
</style>
