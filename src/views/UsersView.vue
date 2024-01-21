<template>
    user {{ id }}

</template>

<script>
export default {
    data: () => {
        return{
            id: this.$route.params['id']
        }
    }
}
</script>