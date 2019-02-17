<template>
    <div>
        <comment-box :id=this.id></comment-box>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
}
</script>