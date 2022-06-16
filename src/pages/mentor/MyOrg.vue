<template>
  <div class="row page-container justify-between" >
    <div class="col-md-7 col-sm-12 col-xs-12">
      <div class="posts-container q-my-xl shadow-1">
        <postitem></postitem>
        <postitem></postitem>
        <postitem></postitem>
        <postitem></postitem>
        <postitem></postitem>
      </div>
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12">
      <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import sidebar from 'components/sidebars/SidebarMyOrg';
import postitem from 'src/components/PostItem.vue';

export default {
  name: 'MyOrgPage',
  components: {
    sidebar, postitem
  }
}
</script>
