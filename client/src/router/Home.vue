<template>
	<div class="container">
		<h2 v-if="$root.user">Welcome {{$root.user.name}} </h2>
		<h2 v-else>Welcome</h2>
	</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
  	return  {
  	}
  },
  components: {}
}
</script>