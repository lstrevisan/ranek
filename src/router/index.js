import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Produto.vue'
import Login from '../views/Login.vue'
import Usuario from '../views/Usuario/Usuario.vue'
import UsuarioProdutos from "@/views/Usuario/UsuarioProdutos.vue"
import UsuarioVendas from "@/views/Usuario/UsuarioVendas.vue"
import UsuarioCompras from "@/views/Usuario/UsuarioCompras.vue"
import UsuarioEditar from "@/views/Usuario/UsuarioEditar.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true
  },
  {
    path: "/usuario",
    component: Usuario,
    children: [
      {
        path: "",
        name: "Usuario",
        component: UsuarioProdutos
      },{
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },{
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },{
        path: "editar",
        name: "editar",
        component: UsuarioEditar
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
