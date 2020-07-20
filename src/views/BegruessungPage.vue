<template>
    <section class="begruessung">
        <div>
            <p>{{begruessungsText.text}}</p>
            <router-link to="/datenschutz">Weiter</router-link>
        </div>
    </section>
</template>
<script>
import store from '@/store.js';
export default {
    data() {
        return {
            begruessungsText: store.survey[0]
        }
    }
}
</script>