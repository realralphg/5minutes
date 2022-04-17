const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/register", component: () => import("pages/Register.vue") },
      { path: "/login", component: () => import("pages/Login.vue") },
      {
        path: "",
        component: () => import("pages/Index.vue"),
        children: [
          { path: "/", component: () => import("pages/user/Dashboard.vue") },
          { path: "/chat", component: () => import("pages/user/Chat.vue") },
          { path: "/profile", component: () => import("pages/user/Profile.vue") },
          { path: "/profile/edit", component: () => import("pages/user/profile/EditProfile.vue") },
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
