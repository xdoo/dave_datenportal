import Vue from "vue";
import Router from "vue-router";
import Main from './views/Main.vue'
import ZaehlstelleOverview from "@/views/ZaehlstelleOverview.vue";
import ZaehlstelleView from "@/views/ZaehlstelleView.vue";
import ZaehlstelleImportView from "@/views/ZaehlstelleImportView.vue";
import ZaehlstelleActivateView from "@/views/ZaehlstelleActivateView.vue";

Vue.use(Router);

/*
* Preventing "NavigationDuplicated" errors in console in Vue-router >= 3.1.0
* https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
* */
/* eslint-disable @typescript-eslint/no-explicit-any */
const routerMethods = ['push', 'replace'];
routerMethods.forEach((method: string) => {
  const originalCall = (Router.prototype as any)[method];
  (Router.prototype as any)[method] = function (location: any, onResolve: any, onReject: any): Promise<any> {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject);
    }
    return (originalCall.call(this, location) as any).catch((err: any) => err);
  };
});
/* eslint-enable @typescript-eslint/no-explicit-any */

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Main
    },
    {
      path: "/zaehlstelleoverview/:quickSearch?",
      name: "zaehlstelleoverview",
      component: ZaehlstelleOverview
    },
    {
      path: "/zaehlstelle/:id?",
      name: "zaehlstelle",
      component: ZaehlstelleView
    },
    {
      path: "/zaehlstelleimport",
      name: "zaehlstelleimport",
      component: ZaehlstelleImportView
    },
    {
      path: "/zaehlstelleactivate",
      name: "zaehlstelleactivate",
      component: ZaehlstelleActivateView
    },
    {
      path: '/chartdemo/:id',
      name: 'chartdemo',
      component: () => import(/* webpackChunkName: "chartdemo" */ '@/views/ChartDemoView.vue'),
      meta: {
        title: "Chart Demo"
      }
    },
    {
      path: '/zaehlungerstellen/:id',
      name: 'zaehlungerstellen',
      component: () => import(/* webpackChunkName: "zaehlungerstellen" */ '@/views/ZaehlungErstellenView.vue'),
      meta: {
        title: "Zaehlung erstellen"
      }
    },
    {
      path: '/zaehlstelledemo/:id',
      name: 'zaehlstelledemo',
      component: () => import(/* webpackChunkName: "zaehlstelledemo" */ '@/views/ZaehlstelleDemoView.vue'),
      meta: {
        title: "Zaehlung erstellen"
      }
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import(/* webpackChunkName: "todolist" */ '@/views/TodoView.vue'),
      meta: {
        title: "Todo List"
      }
    },
    {
      path: '/countinfo',
      name: 'countinfo',
      component: () => import(/* webpackChunkName: "countinfo" */ '@/views/CountInfoView.vue'),
      meta: {
        title: "Info zur Zählung"
      }
    },
    {
      path: '/upload/todolist',
      name: 'upload_todolist',
      component: () => import(/* webpackChunkName: "upload_todolist" */ '@/views/upload/UploadTodoList.vue'),
      meta: {
        title: "Todo List für den Zähler"
      }
    },
    {
      path: '/upload/countinfo',
      name: 'upload_countinfo',
      component: () => import(/* webpackChunkName: "upload_countinfo" */ '@/views/upload/UploadCountInfoView.vue'),
      meta: {
        title: "Informationen zur Zählung"
      }
    },
    {path: '*', redirect: '/'} //Fallback 2
  ]
});