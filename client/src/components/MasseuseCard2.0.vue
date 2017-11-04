<style lang="css" scoped>
.card {
    text-align: center;
}
</style>
<template>
    <div class="column">
        <div class="card">
            <div class="card-image">
                <figure>
                    <img :src="masseuse.avatar" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">
                            <button @click="$emit('selectedMasseuse',masseuse)">{{masseuse.name}}</button>
                        </p>
                    </div>
                </div>
                <div class="content">
                    {{masseuse.bio}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MasseuseCard',
    data() {
        return {};
    },
    props: {
        masseuse: Object
    }
};
</script>
