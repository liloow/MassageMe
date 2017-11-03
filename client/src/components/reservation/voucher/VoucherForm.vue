<style lang="css" scoped>
article {
    width: 600px%;
    max-width: 90%;
    margin: auto;
    border: 2px solid #ff9a58;
    border-radius: 3%;
    padding: 2%
}

.message-header {
    border-radius: 1rem;
    text-align: center;
    margin: auto;
}

#addresse {
    display: flex;
    flex-flow: wrap;
}

.img {
    max-width: 80%
}

.columns {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.column {
    padding: 1rem;
    margin: 1rem
}

.field {
    margin-left: 0
}
</style>
<template>
    <div class="container">
        <div class="container">
            <div class=" row content">
                <article class="message is-primary">
                    <div class="row message-header ">
                        <h2>Reservez votre bon cadeau</h2>
                    </div>
                    <div class=" columns">
                        <div class="column is-narrow-desktop img">
                            <img src="../../../assets/gift.jpeg" alt="Gift Image" id="gift">
                        </div>
                        <div class="column ">
                            <b-field grouped>
                                <b-field label="Your info" expanded>
                                    <b-input icon="person" placeholder="Name" expanded></b-input>
                                </b-field>
                            </b-field>
                            <b-field expanded>
                                <b-input icon="mail" placeholder="some@email.com"></b-input>
                            </b-field>
                            </b-field>
                            <b-field label="Destinataire">
                            </b-field>
                            <b-field grouped>
                                <b-field>
                                    <b-select placeholder="Title">
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                    </b-select>
                                </b-field>
                                <b-field expanded>
                                    <b-input placeholder="Prenom"></b-input>
                                    <b-input placeholder="Nom"></b-input>
                                </b-field>
                            </b-field>
                            <b-field grouped>
                                <b-field>
                                    <b-radio-button v-model="voucher.method" native-value="1" type="is-danger">
                                        <b-icon icon="email"></b-icon>
                                        <span>E-MAIL</span>
                                    </b-radio-button>
                                </b-field>
                                <b-field>
                                    <b-radio-button v-model="voucher.method" native-value="2" type="is-success">
                                        <b-icon icon="card_giftcard"></b-icon>
                                        <span>COURRIER (+1EUR)</span>
                                    </b-radio-button>
                                </b-field>
                            </b-field>
                            <b-field v-if="voucher.method==='1'">
                                <b-input v-model="voucher.recipientEmail" placeholder="Email de destination" icon="mail" type="email"></b-input>
                            </b-field>
                            <b-field grouped id="addresse" v-if="voucher.method==='2'">
                                <b-field label="Adresse : " grouped>
                                    <b-input v-model="voucher.recipientAddress.line1"></b-input>
                                </b-field>
                                <b-field label="Adresse 2 : " grouped>
                                    <b-input v-model="voucher.recipientAddress.line2"></b-input>
                                </b-field>
                                <b-field label="Code Postal">
                                    <b-input v-model="voucher.recipientAddress.postalCode"></b-input>
                                </b-field>
                                <b-field label="Ville">
                                    <b-input v-model="voucher.recipientAddress.city"></b-input>
                                </b-field>
                            </b-field grouped>
                            </b-field>
                            <b-field label="Message" v-model="voucher.message">
                                <b-input maxlength="500" type="textarea"></b-input>
                            </b-field>
                        </div>
                    </div>
                </article>
            </div>
            </form>
        </div>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {

    name: 'VoucherForm',

    data() {
        return {
            voucher: {
                senderName: this.$root.user.name ? this.$root.user.name : '',
                senderEmail: this.$root.user.email ? this.$root.user.email : '',
                recipientName: '',
                method: 'Sélectionner le type de livraison',
                recipientAddress: {
                    name: this.$root.user.name || '',
                    line1: '',
                    line2: '',
                    postalCode: '4000',
                    city: 'Liège',

                },
                recipientEmail: '',
                message: ''
            }
        }
    },
    methods: {
        registerVoucher() {
            this.$emit('goToConfirm', this.voucher)
            return 'LOL'
        }
    }
};
</script>
