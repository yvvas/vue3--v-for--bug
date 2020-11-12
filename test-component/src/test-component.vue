<template>
    <div class="test-component">
        <p>this is ok: {{ list }}</p>
        <p v-for="entry in list" :key="entry">
            {{ entry }}
        </p>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ["Test A", "Test B", "Test C"]
        }
    }
}
</script>