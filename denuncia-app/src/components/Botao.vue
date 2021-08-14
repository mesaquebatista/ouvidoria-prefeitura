<style scoped>

</style>

<template>
    <div class="btn-primary">
        <button class="button is-info">{{ name }}</button>
    </div>
</template>

<script>
export default {
  name: 'BotaoPrimario',
  props: {
    name: String
  }
}
</script>
