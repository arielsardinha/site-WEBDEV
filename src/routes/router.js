import Vue from "vue"; // importar o vue
import VueRouter from "vue-router"; // importar o vue-router

//isso vai ensiar o vue a entender as dependencias e ter o mesmo como dependencias
Vue.use(VueRouter);

//importar as paginas
import Home from "../pages/Home";
import Videos from "../pages/Videos";
const routes = [
  {
    path: "/", //caminho das paginas
    component: Home, // define qual componente vai rinderizar a rota
  },
  {
    path: "/Videos", //caminho das paginas
    component: Videos, // define qual componente vai rinderizar a rota
  },
];

//inicia a instancia de uma nova rota
const router = new VueRouter({
  routes,
  mode: "history", //faz com que o vueRouter processe as rotas
});
export default router;
//depois de exportar o router precisa importar no main.js
