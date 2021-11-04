<template>
    <section class="login">
        <h1>Login</h1>
        <form action="">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="login.email">
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="login.senha">
            <button class="btn" @click.prevent="logar">Logar</button>
        </form>
        <p class="perdeu">
            <a href="/" target="_blank">Esqueci minha senha</a>
        </p>
        <LoginCriar />
    </section>
</template>
<script>
import LoginCriar from "@/components/LoginCriar.vue"

export default {
    name: "Login",
    components: {LoginCriar},
    data(){
        return {
            login: {
                email: "",
                senha: ""
            }
        }
    },
    methods: {
        logar(){
            this.$store.dispatch("getUsuario", this.login.email);
            this.$router.push({name: "Usuario"})
        }
    }
}
</script>
<style scoped>
.login{
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}

h1{
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    color: #87f;
}

form {
    display: grid;
}

.btn {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.perdeu{
    text-align: center;
    margin: 20px auto 0 auto;

}

.perdeu a:hover{
    color: #87f;
    text-decoration: underline;    
}
</style>