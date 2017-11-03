<template>
    <section>
        <div class="row">
            <div class="columns">
                <div class="column">
                    <form>
                        <template>
                            <header>
                                <h2>Sign in</h2>
                            </header>
                            <b-field class="row">
                                <b-field class="grouped groupe-multiline">
                                    <b-input type="text" name="Username" required=""></b-input>
                                    <label>Username</label>
                                </b-field>
                                <b-field class="grouped groupe-multiline">
                                    <b-input type="Password" name="Password" required=""></b-input>
                                    <label>Password</label>
                                </b-field>
                                <a href="#">forgot password?</a>
                                <button type="button" class="btn">Login</button>
                            </b-field>
                            <div class="social-grids">
                                <div class="social-text">
                                    <p>Or Sign in with</p>
                                </div>
                                <div class="social-icons">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                        <button type="submit"></button>
                    </form>
                </div>
                <div class="column">
                    <form>
                        <header>
                            <h3>Sign up</h3>
                        </header>
                        <b-field class="grouped group-mutliline">
                            <b-field>
                                <b-input label="First" type="text" name="First name" required=""></b-input>
                            </b-field>
                            <b-field>
                                <b-input label="Email" type="email" name="Email" required=""></b-input>
                            </b-field>
                            <b-field>
                                <b-input label="Phone" type="tel" name="Phone" required=""></b-input>
                            </b-field>
                            <b-field>
                                <b-input label="Password" type="password" name="password" required=""></b-input>
                            </b-field>
                            <b-field>
                                <b-input type="checkbox" name="checkbox" checked> I agree to the <a href="#">Terms and Conditions</a>
                                </b-input>
                            </b-field>
                        </b-field>
                        <button type="button" class="btn">Sign up</button>
                    </form>
                </div>
            </div>
            <div class="side-panel">
                <div class='wrapper'>
                    <p> Have an account? </p>
                    <div class="btn"> Login</div>
                </div>
                <div class="wrapper">
                    <p> Dont have an account?</p>
                    <div class="btn">Sign up</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

    name: 'ModalForm',

    data() {
        return {

        }
    }
}
</script>
