<style lang="css" scoped>
@import "compass/css3";
@import "compass/reset";
@import "compass/css3";

/* Colors */


/* ---------------------------------------- */

$border: #c6c6c6;
$border-focus: #9FB1C1;
$blue: #077ABC;
$aqua: #07B3A1;
$asphalt: #506982;
* {
    @include box-sizing(border-box);
}

body {
    text-align: center;
    font-family: 'Lato', 'sans-serif';
    font-weight: 400;
}

a {
    text-decoration: none;
}

header,
form {
    padding: 4em 10%;
}

header {
    background-color: $blue;
    color: white;
    h1 {
        font-weight: 400;
        text-transform: uppercase;
        font-size: 50px;
        margin-bottom: 10px;
        i {
            color: darken($blue, 10%);
        }
        span {
            font-weight: 300;
        }
    }
    p {
        font-weight: 400;
        font-size: 16px;
        color: rgba(255, 255, 255, .9);
        letter-spacing: .05em;
        margin-bottom: 10px;
    }
    h3,
    h3 a {
        color: #32CCFE;
        a {
            @include transition(color .3s);
            &:hover {
                color: white;
            }
        }
    }
}

.form-group {
    margin-bottom: 20px;
}

h2.heading {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    text-align: left;
    color: $asphalt;
    border-bottom: 1px solid $asphalt;
    padding-bottom: 3px;
    margin-bottom: 20px;
}

.controls {
    text-align: left;
    position: relative;
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea,
    button,
    select {
        padding: 12px;
        font-size: 14px;
        border: 1px solid $border;
        width: 100%;
        margin-bottom: 18px;
        color: #888;
        font-family: 'Lato', 'sans-serif';
        font-size: 16px;
        font-weight: 300;
        background-color: #fff;
        @include border-radius(2px);
        @include transition(all .3s);
        &:focus,
        &:hover {
            outline: none;
            border-color: $border-focus;
            + label {
                color: $blue;
                cursor: text;
            }
        }
    }
    .fa-sort {
        position: absolute;
        right: 10px;
        top: 17px;
        color: #999;
    }
    select {
        @include appearance(none);
        cursor: pointer;
    }
    label {
        position: absolute;
        left: 8px;
        top: 12px;
        color: #999;
        font-size: 16px;
        display: inline-block;
        padding: 4px 10px;
        font-weight: 400;
        background-color: rgba(255, 255, 255, 0);
        pointer-events: none;
        @include transition(color .3s, top .3s, background-color .8s);
        &.active {
            top: -11px;
            color: #555;
            background-color: rgba(255, 255, 255, 1);
        }
    }
    textarea {
        resize: none;
        height: 200px;
    }
    button {
        cursor: pointer;
        background-color: $aqua;
        border: none;
        color: #fff;
        padding: 12px 0;
        &:hover {
            background-color: lighten($aqua, 5%);
        }
    }
}
</style>
<template>
    <div class="container">
        <form action="">
            <!--  General -->
            <div class="form-group">
                <h2 class="heading">General</h2>
                <div class="controls">
                    <input type="text" id="name" class="floatLabel" name="name">
                    <label for="name">Name</label>
                </div>
                <div class="controls">
                    <input type="email" id="email" class="floatLabel" name="email">
                    <label for="email">Email</label>
                </div>
            </div>
            <!--  Details -->
            <div class="form-group">
                <h2 class="heading">Details</h2>
                <div class="controls">
                    <input type="tel" id="cell" class="floatLabel" name="cell">
                    <label for="cell">Celly</label>
                </div>
                <div class="controls">
                    <i class="fa fa-sort"></i>
                    <select class="floatLabel">
                        <option value="blank"></option>
                        <option value="Apple">Apple</option>
                        <option value="Banana">Banana</option>
                        <option value="Kiwi">Kiwi</option>
                        <option value="Orange">Orange</option>
                        <option value="Watermelon">Watermelon</option>
                    </select>
                    <label for="fruit">Favotire Fruit</label>
                </div>
            </div>
            <!--  More -->
            <div class="form-group">
                <h2 class="heading">More!</h2>
                <div class="controls">
                    <textarea name="comments" class="floatLabel" id="comments"></textarea>
                    <label for="comments">Comments</label>
                    <button>Submit</button>
                </div>
            </div>
        </form>
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
(function($) {
    function floatLabel(inputType) {
        $(inputType).each(function() {
            var $this = $(this);
            // on focus add cladd active to label
            $this.focus(function() {
                $this.next().addClass("active");
            });
            //on blur check field and remove class if needed
            $this.blur(function() {
                if ($this.val() === '' || $this.val() === 'blank') {
                    $this.next().removeClass();
                }
            });
        });
    }
    // just add a class of "floatLabel to the input field!"
    floatLabel(".floatLabel");
})(jQuery);
</script>
