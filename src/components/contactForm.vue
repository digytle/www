<template>
    <div class="Contact">
        <form name="Contact-us" method="post" data-netlify="true">  <input type="hidden" name="form-name" value="Contact-us" />
            <input type="hidden" name="signup-form" value="Contact-us" />
            <input type="text" name="name" placeholder="Your Name*" required />
            <input type="text" name="email" placeholder="Your Email*" required />
            <button type="submit">go</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>

</style>