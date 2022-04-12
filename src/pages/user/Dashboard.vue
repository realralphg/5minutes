<template>
  <div class="row page-container" >
    <div class="col-md-7">
      <div class="row q-my-md">
        <div class="text-h5">Welcome to <span class="text-primary">5minutes,</span> <b>ARMSTRONG!</b></div>
      </div>
      <div class="row">
        <div class="col-md-6 green-card">
          Complete profile to get full access to 5minutes features.
        </div>
      </div>
      <div class="q-my-md">
        <q-btn outline rounded color="primary" class="q-pa-md" label="View my profile" no-caps />
      </div>
      <div class="column">
        <div class="post-form">
          <div class="row">
            <q-avatar size="55px">
              <img src="https://randomuser.me/api/portraits/men/63.jpg">
            </q-avatar>
            <div class="q-ml-md q-mt-sm text-light text-bold">
              <div>What would you like to talk </div>
              <div>about, <b class="text-warning text-bolder">ARMSTRONG?</b></div>
            </div>
          </div>
          <div class="q-pa-md">
            <q-input
              filled
              type="textarea"
              class="border-radius-5 no-border bg-white"
              placeholder="Daily Inspiration"
            />
          </div>
          <div class="q-ml-md">
            <q-btn outline color="warning" rounded class="q-py-sm q-px-lg post-btn" label="Post" no-caps />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="text-bold text-h6 q-mt-xl row">
          <span>Explore top mentors</span>
          <q-space />
          <q-btn to="/" color="primary" no-caps flat>view all</q-btn>
        </div>
        <MentorList />
      </div>
    </div>
    <div class="col-md-4 border">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum recusandae ullam, repellat architecto, reiciendis animi quos, voluptate reprehenderit modi hic velit dolorum obcaecati itaque! Eaque, nemo et? Explicabo hic ipsum iste, excepturi sint quos, corporis, placeat inventore aut nostrum ipsam facere eius nobis voluptas soluta ducimus veniam vitae. Cumque.
    </div>
  </div>
</template>

<script>
  import MentorList from 'components/MentorList';

  export default {
    name: "DashboardPage",
    components: {
      MentorList
    }
  }

</script>

<style>
.page-container{
  justify-content: space-between;
}
</style>
