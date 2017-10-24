<template>
	<div class="container">
		<div class="container">
			<announcement-bar v-if="$root.announcement">
			</announcement-bar>
		</div>
		<h2 v-if="$root.user">Welcome back, {{$root.user.name}} </h2>
		<h2 v-else>Welcome</h2>
		<div class="row">
			<enter-address></enter-address>
		</div>
		<div class="row">
			<static-info></static-info>
		</div>
	</div>
</template>
<script>
import { checkAnnounce } from '@/api/data'
import AnnouncementBar from '@/components/AnnouncementBar'
import EnterAddress from '@/components/EnterAddress'
import StaticInfo from '@/components/StaticInfo'
export default {
	name: 'Home',
	data() {
		return {}
	},
	components: { AnnouncementBar, EnterAddress, StaticInfo }
}

</script>
