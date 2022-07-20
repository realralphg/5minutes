const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/register", component: () => import("pages/Register.vue") },
      { path: "/login", component: () => import("pages/Login.vue") },
      {
        path: "/",
        component: () => import("pages/Index.vue"),
        children: [
          { path: "/mentor/", component: () => import("pages/mentor/Dashboard.vue") },
          { path: "/mentor/chat", component: () => import("pages/mentor/Chat.vue") },
          { path: "/mentor/notifications", component: () => import("pages/mentor/Notifications.vue") },
          { path: "/mentor/profile", component: () => import("pages/mentor/Profile.vue") },
          { path: "/mentor/profile/edit", component: () => import("pages/mentor/profile/EditProfile.vue") },
          { path: "/mentor/profile/set-availability", component: () => import("pages/mentor/profile/SetAvailability.vue") },
          { path: "/mentor/mentee", component: () => import("pages/mentor/Mentee.vue") },
          { path: "/mentor/my-mentees", component: () => import("pages/mentor/MyMentees.vue") },
          { path: "/mentor/my-org", component: () => import("pages/mentor/MyOrg.vue") },
          { path: "/mentor/5-talks", component: () => import("pages/5Talks/5Talks.vue") },

          { path: "/mentee/", component: () => import("pages/mentee/Dashboard.vue") },
          { path: "/mentee/chat", component: () => import("pages/mentee/Chat.vue") },
          { path: "/mentee/profile", component: () => import("pages/mentee/Profile.vue") },
          { path: "/mentee/profile/edit", component: () => import("pages/mentee/profile/EditProfile.vue") },
          { path: "/mentee/my-mentors", component: () => import("pages/mentee/MyMentors.vue") },
          { path: "/mentee/my-mentors/mentor", component: () => import("pages/mentee/Mentor.vue") },
          { path: "/mentee/my-tasks", component: () => import("pages/mentee/MyTasks.vue") },
          { path: "/mentee/schedule-session", component: () => import("pages/mentee/ScheduleSession.vue") },
          { path: "/mentee/notifications", component: () => import("pages/mentee/Notifications.vue") },
          { path: "/mentee/5-talks", component: () => import("pages/5Talks/5Talks.vue") },
          { path: "/mentee/5-talks/watch", component: () => import("pages/5Talks/SinglePost.vue") },
        ]
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
