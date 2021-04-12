<template>
    <form name="Contact-us" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact-us" />
        <p>
            <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
            <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <button type="submit">go</button>
    </form>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>

</style>