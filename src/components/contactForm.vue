<template>
    <form name="Contact-us" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact-us" />
        <label>Your Name: <input type="text" name="name" /></label>  
        <label>Your Email: <input type="email" name="email" /></label>
        <label>Message: <textarea name="text"></textarea></label>
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