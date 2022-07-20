<template>
  <div>
    <div class="text-bold text-h6 row">
      <span>Story</span>
      <q-space />
      <q-btn to="/" color="primary" no-caps flat>view all<q-icon name="chevron_right"/> </q-btn>
    </div>
    <div>
      <div class="stories">
        <MyStory :avatar="user.avatar" />
        <Story v-for="friend in friends" :key="friend.avatar" :data="friend" />
      </div>
    </div>
  </div>
</template>
<script>
  import Story from 'components/Story';
  import MyStory from 'components/MyStory';

  export default {
    name: "StoriesComponent",
    components: {
      Story,
      MyStory
    },
    data() {
      return {
        user: {
          avatar: "https://randomuser.me/api/portraits/men/63.jpg"
        },
        friends: [
          {
            name: "Julia Moretta",
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            posts: ["https://randomuser.me/api/portraits/men/2.jpg", "https://randomuser.me/api/portraits/men/33.jpg", "https://randomuser.me/api/portraits/men/89.jpg"]
          },
          {
            name: "Ariana Fouza",
            avatar: "https://randomuser.me/api/portraits/women/93.jpg",
            posts: ["https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/123.jpg", "https://randomuser.me/api/portraits/men/419.jpg"]
          },
          {
            name: "Marina Costa",
            avatar: "https://randomuser.me/api/portraits/women/23.jpg",
            posts: ["https://randomuser.me/api/portraits/men/12.jpg", "https://randomuser.me/api/portraits/men/31.jpg", "https://randomuser.me/api/portraits/men/99.jpg"]
          },
          {
            name: "James Campbel",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg",
            posts: ["https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/men/34.jpg", "https://randomuser.me/api/portraits/men/90.jpg"]
          },
          {
            name: "Julia Moretta",
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            posts: ["https://randomuser.me/api/portraits/men/2.jpg", "https://randomuser.me/api/portraits/men/33.jpg", "https://randomuser.me/api/portraits/men/89.jpg"]
          },
          {
            name: "Ariana Fouza",
            avatar: "https://randomuser.me/api/portraits/women/93.jpg",
            posts: ["https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/123.jpg", "https://randomuser.me/api/portraits/men/419.jpg"]
          },
          {
            name: "Marina Costa",
            avatar: "https://randomuser.me/api/portraits/women/23.jpg",
            posts: ["https://randomuser.me/api/portraits/men/12.jpg", "https://randomuser.me/api/portraits/men/31.jpg", "https://randomuser.me/api/portraits/men/99.jpg"]
          },
          {
            name: "James Campbel",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg",
            posts: ["https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/men/34.jpg", "https://randomuser.me/api/portraits/men/90.jpg"]
          }
        ]
      }
    },
  }
</script>
<style>

</style>
