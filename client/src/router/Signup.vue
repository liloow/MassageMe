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
    <section @keydown.esc="dyno=null">
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
            dyno: null

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
