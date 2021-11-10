<template>
    <section>
        {{$store.state.usuario.id}}
        <UsuarioForm>
            <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
        </UsuarioForm>
    </section>
</template>
<script>
import UsuarioForm from "@/components/UsuarioForm.vue"
import {api} from "@/services.js"

export default {
    name: "UsuarioEditar",
    components: {UsuarioForm},
    methods: {
        atualizarUsuario(){
            api.put(`/usuario/${this.$store.state.usuario.id}`, this.$store.state.usuario).then(()=>{
                this.$store.dispatch("getUsuario", this.$store.state.usuario.id)
                this.$router.push({name: 'Usuario'})
            }).catch(error => {
                console.log(error.response)
            })
        }
    }
}
</script>
<style>

</style>