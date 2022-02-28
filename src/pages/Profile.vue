<template>
    <div class="wrapp containerr">
          <h4>Welcome to 5 minutes</h4>
          <p>Complete your profile</p>
    </div>
  <div class="profile containerr">
      


    <div class="">
    <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      color="primary"
      animated
      header-nav
      class="dots"
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="looks_one"
        class="addborder"
        :done="step > 1"
      >
       <div class="" style="max-width: 100%">
            <q-list>
                <q-expansion-item
                    expand-separator
                    icon="create"
                    class="dot"
                    label="Creative design"
                >
                    <q-card>
                        <div class="q-pa-lg">
                            <q-option-group
                            v-model="group"
                            :options="options"
                            color="primary"
                            />
                        </div>
                        <!-- <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section> -->
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    
                    icon="engineering"
                    label="Engineeering"
                >
                    <q-card>
                        <div class="q-pa-lg">
                            <q-option-group
                            v-model="groups"
                            :options="engineer"
                            color="primary"
                            />
                        </div>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="money"
                    label="Financial Services"
                    header-class="text-purple"
                >
                    <q-card>
                        <div class="q-pa-lg">
                            <q-option-group
                            v-model="finans"
                            :options="finan"
                            color="primary"
                            />
                        </div>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="school"
                    label="Education"
                    header-class="text-purple"
                >
                    <q-card>
                        <div class="q-pa-lg">
                            <q-option-group
                            v-model="educations"
                            :options="education"
                            color="primary"
                            />
                        </div>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="business"
                    label="Enterpreneurship"
                    header-class="text-purple"
                >
                    <q-card>
                        <div class="">
                            <q-option-group
                            v-model="businesss"
                            :options="business"
                            color="primary"
                            />
                        </div>
                    </q-card>
                </q-expansion-item>
                <q-expansion-item
                    expand-separator
                    icon="code"
                    label="Computer Science"
                    header-class="text-purple"
                >
                    <q-card>
                        <div class="">
                            <q-option-group
                            v-model="computers"
                            :options="computer"
                            color="primary"
                            />
                        </div>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="medication"
                    label="Health/Medical"
                    header-class="text-purple"
                >
                    <q-card>
                        <div class="">
                            <q-option-group
                            v-model="healths"
                            :options="health"
                            color="primary"
                            />
                        </div>
                    </q-card>
                </q-expansion-item>
            </q-list>
        </div>

        <!-- <div class="q-pa-md" style="max-width: 350px">
            <q-list bordered class="rounded-borders">
                <q-expansion-item
                    expand-separator
                    icon="perm_identity"
                    label="Account settings"
                    caption="John Doe"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="signal_wifi_off"
                    label="Wifi settings"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="drafts"
                    label="Drafts"
                    header-class="text-purple"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item icon="assessment" label="Disabled" disable>
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-list>
        </div>


        <div class="q-pa-md" style="max-width: 350px">
            <q-list bordered class="rounded-borders">
                <q-expansion-item
                    expand-separator
                    icon="perm_identity"
                    label="Account settings"
                    caption="John Doe"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="signal_wifi_off"
                    label="Wifi settings"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="drafts"
                    label="Drafts"
                    header-class="text-purple"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item icon="assessment" label="Disabled" disable>
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-list>
        </div>

        <div class="q-pa-md" style="max-width: 350px">
            <q-list bordered class="rounded-borders">
                <q-expansion-item
                    expand-separator
                    icon="perm_identity"
                    label="Account settings"
                    caption="John Doe"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="signal_wifi_off"
                    label="Wifi settings"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="drafts"
                    label="Drafts"
                    header-class="text-purple"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item icon="assessment" label="Disabled" disable>
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-list>
        </div> -->
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="looks_two"
        :done="step > 2"
        class="dot"
        @click="currentStep = 'second'"

      >

      <h4>What are your Goals?</h4>
        <p>Select up to 5 intrests </p>
        <q-expansion-item
                    default-opened
                    expand-separator
                    label="Select"
                >
                    <div class="">
                        <q-option-group
                        v-model="groupset"
                        :options="optionset"
                        color="green"
                        type="checkbox"
                        />
                    </div>
        </q-expansion-item>
      </q-step>

      <q-step
        :name="3"
        title="Create an ad"
        icon="looks_3"
        :done="step > 3"
        class="dot"
      >
        <Profiledet/>
      </q-step>

      <q-step
        :name="4"
        title="Create an ad"
        icon="looks_4"
        :done="step > 4"
        class="dot"

      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>
      <!-- <q-step
        :name="5"
        title="Create an ad"
        icon="looks_5"
        :done="step > 5"
        class="dot"
        color="primary"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step> -->

      <template v-slot:navigation>
        <q-stepper-navigation class="container nav-btn">
          <q-btn @click="$refs.stepper.next()" class="bbt" color="primary" :label="step === 5 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" class="bbtt" color="primary" @click="$refs.stepper.previous()" label="Back" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
    
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Profiledet from '../components/Profiledet.vue'

export default {
    components:{
        Profiledet
    },
  setup () {
    return {
      step: ref(1),
      group: ref('op1'),
      groups: ref('op1'),
      finans: ref('op1'),
      educations: ref('op1'),
      healths: ref('op5'),
      computers: ref('op1'),
      businesss: ref('op1'),
      groupset: ref(['op1']),
      options: [
        {
          label: 'Product Design',
          value: 'op1'
        },
        {
          label: 'UI/UX Design',
          value: 'op2'
        },
        {
          label: 'Content Creation',
          value: 'op3'
        },
        {
          label: 'Art/Painting',
          value: 'op4'
        },
        {
          label: 'Photography',
          value: 'op5'
        }
      ],
      engineer: [
        {
          label: 'Chemical Engineering',
          value: 'op1'
        },
        {
          label: 'Computer Engineering',
          value: 'op2'
        },
        {
          label: 'Blockchain Engineering',
          value: 'op3'
        },
        {
          label: 'Electrical Engineering',
          value: 'op4'
        }
      ],
      finan: [
        {
          label: 'Accounting',
          value: 'op1'
        },
        {
          label: 'Fintech',
          value: 'op2'
        },
        {
          label: 'Investing',
          value: 'op3'
        }
      ],

      education: [
        {
          label: 'Biology',
          value: 'op1'
        },
        {
          label: 'Chemistry',
          value: 'op2'
        },
        {
          label: 'Government/Political Science',
          value: 'op3'
        },
        {
          label: 'Mathematics',
          value: 'op4'
        },
        {
          label: 'Physics',
          value: 'op5'
        }
      ],

      health: [
        {
          label: 'Mental Health',
          value: 'op1'
        },
        {
          label: 'Pharmacist',
          value: 'op2'
        },
        {
          label: 'Medical Doctor',
          value: 'op3'
        },
        {
          label: 'Physcician',
          value: 'op4'
        },
        {
          label: 'Psysioterapist',
          value: 'op5'
        }
      ],

      business: [
        {
          label: 'Consulting',
          value: 'op1'
        },
        {
          label: 'Strategy and Planning',
          value: 'op2'
        },
        {
          label: 'Management',
          value: 'op3'
        }
      ],
      computer: [
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
    }
  },
  methods:{
      aclick(){
          console.log('first')
      }
  }
}
</script>

<style scoped>
.containerr{
    width: 90%;
    margin: 0 auto;
    height: 100%;
    /* overflow: scroll; */
}

.wrapp{
    background: #52d972;
    padding: 4rem 1rem;
    color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}


/* .addborder {
    border-bottom: 1px solid black !important;
    margin-bottom: black !important;

} */

.q-item{
    border: 1px solid #52d972 !important;
}
.nav-btn{
    height: 150px;
    margin: 3rem 0;
}

.bbt{
    width: 40%;
    margin: 1rem auto;
    display: grid;
    place-items: center;
    padding: 1rem 0;
    /* margin: 1rem 0; */
    /* justify-content: center; */
}

.bbtt{
  width: 20%;
    margin: 1rem auto;
     display: grid;
    place-items: center;
    padding: .65rem 0;

}
</style>