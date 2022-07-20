<template>
  <q-card flat>
    <q-tabs
      v-model="tab"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab no-caps name="aboutme" label="About me" />
      <q-tab no-caps name="experience" label="Experience" />
      <q-tab no-caps name="projects" label="Education" />
      <q-tab no-caps name="reviews" label="Mentors (1)" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="aboutme" class="aboutme">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus tempore. Nulla animi commodi consequatur, ab autem natus, corporis explicabo illum dolorem quas labore, laborum iure odio accusamus a doloribus! Sapiente, veritatis eveniet! Quis assumenda atque accusamus, dolor optio deserunt tenetur sequi velit labore amet facilis reiciendis asperiores veniam! Ducimus vel illum dolor libero odit nostrum numquam, laborum dignissimos molestias expedita atque ex maiores mollitia laboriosam iure a nisi voluptatum error blanditiis praesentium debitis excepturi! Illo alias a illum iusto accusamus modi officia necessitatibus commodi natus odio eveniet, est esse libero? Beatae ullam qui nihil exercitationem, incidunt totam rerum magni?
        </p>
      </q-tab-panel>
      <q-tab-panel name="experience" class="experience">
        <div class="exp-item">
          <div class="company-name">
            Cocacola Group
          </div>
          <div class="position">
            Manager
          </div>
          <div class="time-frame">
            July, 2019- Present
          </div>
        </div>
        <div class="exp-item">
          <div class="company-name">
            Quest Associates
          </div>
          <div class="position">
            Attorney
          </div>
          <div class="time-frame">
            July, 2011 - September, 2019
          </div>
        </div>

      </q-tab-panel>
      <q-tab-panel name="projects" class="projects">
        <div class="project-item">
          <div class="project-name">
            University of Waterloo.
          </div>
          <div class="link">
            <small>Computer Science</small>
          </div>
          <div class="time-frame">
            July, 2019 - April, 2022
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="reviews" class="reviews">
        <q-card flat class="q-pa-sm q-my-xs">
          <div class="row">
            <q-avatar size="40px">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <div class="column q-ml-md">
              <div class="name">John Doe</div>
              <small>CEO RealiseXp</small>
            </div>
          </div>
        </q-card>

      </q-tab-panel>
    </q-tab-panels>
  </q-card>

</template>
<script>

export default {
  name: "ReviewsProfileTabPanelComponent",
  data(){
    return {
      tab: "aboutme"
    }
  }
}

</script>
