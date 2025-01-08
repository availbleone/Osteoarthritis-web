import Vue from "vue";
import VueRouter from "vue-router";

// 解决router导航到同一路径重复报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => {
    console.log(err.toString());
  });
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/login', // 添加重定向规则，将根路径重定向到 /login
  },
  {
    path: "/Home",
    component: () => import(/*webpackChunkName:'home'*/ "@/pages/Home"),
    children: [
      {
        path: "welcome",
        component: () =>
          import(/*webpackChunkName:'welcome'*/ "@/pages/Home/Welcome"),
      },
      {
        path: "PatientsDocument",
        component: () =>
          import(
            /*webpackChunkName:'PatientsDocument'*/ "@/pages/Home/PatientsDocument"
          ),
        meta: {
          title: "dangan",
          name: "患者个人健康档案",
        },
        children: [
          {
            path: "scheduling",
            component: () =>
              import(
                /*webpackChunkName:'scheduling'*/ "@/pages/Home/PatientsDocument/Scheduling"
              ),
            meta: {
              title: "xmpb",
              name: "护理项目排班",
            },
          },
          {
            path: "projectEditor",
            component: () =>
              import(
                /*webpackChunkName:'projectEditor'*/ "@/pages/Home/PatientsDocument/ProjectEditor"
              ),
            meta: {
              title: "xmbj",
              name: "护理项目编辑",
            },
          },
          {
            path: "messageEditor",
            component: () =>
              import(
                /*webpackChunkName:'messageEditor'*/ "@/pages/Home/PatientsDocument/MessageEditor"
              ),
            meta: {
              title: "lybj",
              name: "留言编辑",
            },
          },
          {
            path: "watchEditor",
            component: () =>
              import(
                /*webpackChunkName:'watchEditor'*/ "@/pages/Home/PatientsDocument/WatchEditor"
              ),
            meta: {
              title: "zbbj",
              name: "值班编辑",
            },
          },
        ],
      },
      {
        path: "systemSettings",
        component: () =>
          import(
            /*webpackChunkName:'systemSettings'*/ "@/pages/Home/SystemSettings"
          ),
        meta: {
          title: "xtsz",
          name: "系统设置",
        },
        children: [
          {
            path: "projectMaintenance",
            component: () =>
              import(
                /*webpackChunkName:'projectMaintenance'*/ "@/pages/Home/SystemSettings/ProjectMaintenance"
              ),
            meta: {
              title: "xmwh",
              name: "项目维护",
            },
          },
          {
            path: "bPMaintain",
            component: () =>
              import(
                /*webpackChunkName:'bPMaintain'*/ "@/pages/Home/SystemSettings/BPMaintain"
              ),
            meta: {
              title: "hjwh",
              name: "呼机维护",
            },
          },
        ],
      },
      {
        path:"remoteDiagnose",
        component: () =>
          import(
            /*webpackChunkName:'remoteDiagnose'*/ "@/pages/Home/RemoteDiagnose"
          ),
        meta: {
          title: "yclf",
          name: "远程诊疗",
        },
      },
      {
        path:"followUp",
        component: () =>
          import(
            /*webpackChunkName:'followUp'*/ "@/pages/Home/FollowUp"
          ),
        meta: {
          title: "sfgl",
          name: "随访管理",
        },
      },
      {
        path:"imagemManagement",
        component: () =>
          import(
            /*webpackChunkName:'imagemManagement'*/ "@/pages/Home/ImagemManagement"
          ),
        meta: {
          title: "yxypgl",
          name: "影像阅片管理",
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import(/*webpackChunkName:'log'*/ "@/pages/Login"),
  },
  {
    path: "*",
    component: () => import(/*webpackChunkName:'log'*/ "@/pages/Page404"),
  },
];

const router = new VueRouter({
  mode: 'hash', // 使用 hash 模式
  routes,
});

export default router;



