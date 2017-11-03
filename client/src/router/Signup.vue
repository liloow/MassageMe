<style type="text/css" scoped>
</style>
<template>
    <section>
        <button class="button is-primary is-medium" @click="isComponentModalActive = true">
            Launch component modal
        </button>
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <modal-form v-bind="formProps"></modal-form>
        </b-modal>
    </section>
</template>
<script>
import {
    signup,
    login
} from '@/api/auth'
import ModalForm from '@/components/ModalForm'

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
            formProps: {
                email: 'evan@you.com',
                password: 'testing'
            }
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
        ModalForm
    }
}
</script>
