const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "desserts", component: () => import("pages/Desserts.vue") },
      { path: "lunch", component: () => import("pages/Lunch.vue") },
      { path: "your-order", component: () => import("pages/YourOrder.vue") },
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
