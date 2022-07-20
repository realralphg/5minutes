<template>
  <div class="row my-tasks justify-between">
    <div class="col-md-7 col-sm-12 col-xs-12 column">
      <div class="statistic shadow-1">
        <div class="text-bold">Statistic</div>
        <TaskStat />
      </div>
      <div class="q-mt-lg">
        <div class="text-bold">
          Recent Tasks
        </div>
        <TaskItemRecent @click = "sidebar=!sidebar"></TaskItemRecent>
        <TaskItemRecent @click = "sidebar=!sidebar"></TaskItemRecent>
        <TaskItemRecent @click = "sidebar=!sidebar"></TaskItemRecent>
      </div>
      <div class="q-mt-lg">
        <div class="text-bold">
          Submitted Tasks
        </div>
        <TaskItemSubmitted @click = "sidebar=!sidebar" :performance="90"></TaskItemSubmitted>
        <TaskItemSubmitted @click = "sidebar=!sidebar" :performance="50"></TaskItemSubmitted>
        <TaskItemSubmitted @click = "sidebar=!sidebar" :performance="10"></TaskItemSubmitted>
      </div>
    </div>
    <transition
      v-show="sidebar"
      appear
      enter-active-class="animate__animated animate__slideInRight animate__faster"
      leave-active-class="animate__animated animate__slideOutRight animate__faster"
    >
    <div class="col-md-4 col-sm-12 col-xs-12 column" v-show="sidebar">
      <sidebar :toggleSidebar="toggleSidebar" :sidebar="sidebar"></sidebar>
    </div>
    </transition>
  </div>
</template>
<script>
import TaskItemRecent from 'src/components/mentee/TaskItemRecent.vue';
import TaskItemSubmitted from 'src/components/mentee/TaskItemSubmitted.vue';
import TaskStat from 'src/components/mentee/TaskStat.vue';
import Sidebar from 'src/components/sidebars/SidebarTasks.vue'

export default {
  name: "MyTasksPage",
  components: {
    TaskItemSubmitted,
    TaskItemRecent,
    TaskStat,
    Sidebar
  },
  data(){
    return {
      sidebar: false
    }
  },
  methods: {
    toggleSidebar(){
      this.sidebar = !this.sidebar;
    }
  },
}
</script>
