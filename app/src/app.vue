<!-- File: ./src/app.vue -->
<template>
    <div class="wrapper">
        <h1>Vue 3 Bug Test</h1>
        <tester></tester>
    </div>
</template>

<script>
import './index.html'

import testComponent from 'test-component'

export default {
    components: { tester: testComponent}
}
</script>
