<template>
  <div class="sidebar-container q-pa-lg column">
    <div class="row justify-end">
      <q-btn size="xs" @click="toggleSidebar" round color="primary" icon="close" outline />
    </div>
    <div class="column q-pa-sm text-center">
      <div class="row">
        <div class="column col-2">
          <q-btn round style="width: inherit">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </div>
        <div class="column text-left q-pl-xs">
          <div class="text-bold">James Nee</div>
          <div class="text-muted text-sm">Director of Sahara Fashion House</div>
        </div>
      </div>
      <div class="column text-left q-py-md text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae sed distinctio impedit perferendis, a quia aut quibusdam consectetur id, nobis aperiam quam omnis eius alias odit! Cum, unde nihil?
        </p>
        <q-img
          src="https://placeimg.com/500/300/nature"
          :ratio="10/9"
        />
        <div class="task-answer q-mt-md q-pl-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium provident, aliquam neque consequatur nostrum deleniti totam sunt ex nulla adipisci obcaecati! Eum officiis repellendus ipsa ullam eius nam fugit explicabo magni quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aperiam animi nobis, pariatur exercitationem! Recusandae labore incidunt molestias nulla sed, temporibus iure adipisci quisquam hic expedita illo rerum sit mollitia sint perspiciatis.
        </div>
      </div>
      <div class="column">
        <div class="send-form-input-container row">
          <input placeholder="Send answer to the task" type="text" />
          <q-space />
          <div class="row">
            <div class="column justify-center">
              <q-btn size="8px" icon="send" round flat text-color="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarTasksComponent",
  props: ['toggleSidebar']
}
</script>
<style>

</style>
