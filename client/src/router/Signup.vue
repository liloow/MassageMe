<style type="text/css" scoped>
.form-wrapper {
    min-width: 320px;
    height: 50vh;
    width: 50vw;
    margin: auto;
}

.pad30 {
    padding: 10vh 15vw;
}

.modal-wrapper {
    margin: auto;
}

</style>
<template>
    <section @keydown.esc="state=null">
        <div class="columns">
            <div class="column-4 pad30 is-narrow">
                <img class="logo" src="../assets/img/logo/Full.svg" alt="Logo">
            </div>
            <div class="form-wrapper column-4">
                <div class="container">
                    <modal-form></modal-form>
                </div>
            </div>
            <b-modal :active.sync="isComponentModalActive" has-modal-card>
                <modal-form></modal-form>
            </b-modal>
        </div>
        Try out
        <button class="button is-primary is-medium" @click="isComponentModalActive = true">
            Launch component modal
        </button>
        <button @click="state='HomemadeModal'" type="button">Sweet Modal</button>
        <sweet-modal modal-theme="dark" ref="loginModal" overlay-theme="dark" width="320px" enable-mobile-fullscreen>
            <div class="modal-wrapper">
                <modal-form></modal-form>
            </div>
        </sweet-modal>
        <component @close="state=null" :is="state"></component>
    </section>
</template>
<script>
import {
    signup,
    login
} from '@/api/auth'
import HomemadeModal from '@/components/HomemadeModal'
import ModalForm from '@/components/ModalForm'
import { SweetModal } from 'sweet-modal-vue'
export default {
    name: 'Signup',
    data() {
        return {
            name: "",
            username: "",
            email: "",
            password: "",
            error: null,
            isComponentModalActive: false,
            state: null

        }
    },
    methods: {
        signup() {
            signup({
                    username: this.username,
                    name: this.name,
                    password: this.password,
                    email: this.email,
                })
                .then(this.$router.push('/login'))
                .catch(err => {
                    this.error = err.response.data.error
                    console.error('Signup err', err)
                })
        }
    },
    components: {
        ModalForm,
        SweetModal,
        HomemadeModal
    }
}

</script>
