<style lang="css" scoped>
@import '../assets/formStyle.css';
</style>
<template>
    <div class="container">
        <div class="row">
            <div class="columns">
                <div class="column is-one-third is-narrow" id="info">
                    <div class="row very-spacy logo">
                        <img class="logo" src="../assets/logo-solo.png" alt="Logo">
                    </div>
                    <div class="row ">
                        <p>
                            N'hésitez pas à nous contacter pour toutes vos questions.
                            <br> Laissez-nous un message; nous y répondrons dans les plus brefs délais.
                        </p>
                        <p>
                            Tel: 0498.82 39 31
                            <br> E-mail: infos@massageme.be
                            <br> N° compte: BE13 0018 0837 4939
                        </p>
                    </div>
                </div>
                <div class="column">
                    <form>
                        <div class="form-group">
                            <h2 class="heading">Vos informations</h2>
                            <b-field grouped>
                                <b-field class="controls">
                                    <b-input type="text" id="firstname" icon="account_circle" class="floatLabel" v-model="form.firstName" placeholder @focus="a($event)" @blur="a($event)">
                                    </b-input>
                                    <label for="firstname">Prenom</label>
                                </b-field>
                                <b-field class="controls">
                                    <b-input type="text" id="lastname" icon="person" class="floatLabel" v-model="form.lastName" placeholder @focus="a($event)" @blur="a($event)">
                                    </b-input>
                                    <label for="lastname">Nom</label>
                                </b-field>
                            </b-field>
                            <b-field grouped>
                                <b-field class="controls">
                                    <b-input type="email" id="email" icon="mail" class="floatLabel" v-model="form.email" placeholder @focus="a($event)" @blur="a($event)">
                                    </b-input>
                                    <label for="email">Email</label>
                                </b-field>
                                <b-field class="controls">
                                    <b-input type="tel" id="phoneNo" icon="phone_android" class="floatLabel" v-model="form.tel" placeholder @focus="a($event)" @blur="a($event)">
                                    </b-input>
                                    <label for="phoneNo">Telephone</label>
                                </b-field>
                            </b-field>
                        </div>
                        <!--  Details -->
                        <div class="form-group">
                            <h2 class="heading">Votre message</h2>
                            <b-field class="controls">
                                <b-input type="text" id="subject" class="floatLabel" icon="priority_high" v-model="form.subject" placeholder @focus="a($event)" @blur="a($event)">
                                </b-input>
                                <label for="subject">Sujet</label>
                            </b-field>
                            <b-field class="controls">
                                <textarea name="message" class="floatLabel" id="message" placeholder @focus="a($event)" @blur="a($event)"></textarea>
                                <label for="message">Message</label>
                            </b-field>
                            <button @click="sendForm($event)" class="button" type="button" icon="send">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    name: 'Contact',

    data() {
        return {
            isActive: false,
            message: "",
            form: {
                firstname: "",
                lastName: "",
                email: "",
                tel: "",
                subject: "",
                message: "",
            }
        }
    },
    methods: {
        sendForm(event) {
            console.log(event.target.labels[0].classList)
            console.log(this.form)
        },
        a(e) {
            !e.target.value ? e.target.labels[0].classList.toggle('active') : 'He free now'
            e.target.placeholder === '' ? e.target.placeholder = `Enter your ${e.target.id}` : e.target.placeholder = ''
        }
    }
}
</script>
