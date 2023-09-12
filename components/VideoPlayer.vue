<template>
	<div class="mb-6">
		<iframe
			width="560"
			height="315"
			:src="`https://player.vimeo.com/video/${props.videoId}`"
			title="Video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			class="rounded-lg"
			allowfullscreen
		></iframe>
	</div>
</template>

<script setup>
	const props = defineProps({
		videoId: {
			type: Number,
			required: true,
		},
	});
</script>

<style scoped></style>
