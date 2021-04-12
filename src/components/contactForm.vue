<template>
    <!-- <form name="Contact-us" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact-us" />
        <input type="text" name="name" placeholder="First name">
        <input type="email" name="Email" placeholder="Email">
        <input type="text" name="Message" placeholder="description">
        <button type="submit">go</button>
    </form> -->

    <form class="email-form" name="Contact-us" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="Contact-us" />
        <div hidden aria-hidden="true">
            <label>
            Don’t fill this out if you're human: 
            <input name="bot-field" />
            </label>
        </div>
        <label for="email">Your email address</label>
        <div>
            <input type="email" name="email" placeholder="Email"  id="email" required />
            <button type="submit">Subscribe</button>
        </div>
    </form>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>

</style>