<template>
    <div class="Contact">
        <form name="Contact-us" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact-us" />
            <ul>
                <li>
                    <input type="text" class="form-control1" placeholder="First name">
                    <input type="email" class="form-control2" placeholder="Email">
                </li>
            </ul>
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