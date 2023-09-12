<template>
	<div
		class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
	>
		<div class="mb-4">
			<h1 class="text-lg">
				<span class="font-medium">
					Course:
					<span class="font-bold">Mastering Nuxt 3</span>
				</span>
			</h1>
		</div>

		<div class="md:flex flex-grow flex-row gap-4 justify-center w-full">
			<div
				class="bg-white flex flex-col mb-4 p-6 rounded-md sm:w-full md:w-3/12"
			>
				<h2 class="mb-2 text-xs">Chapters</h2>
				<div
					v-for="chapter in chapters"
					:key="chapter.slug"
					class="gap-y-1 mb-4"
				>
					<h3 class="font-bold text-xl">{{ chapter.title }}</h3>
					<NuxtLink
						:to="lesson.path"
						v-for="(lesson, index) in chapter.lessons"
						:key="lesson.slug"
						class="text-sm hover:text-teal-500"
						:class="{
							'text-teal-500': lesson.path == $route.fullPath,
							'text-black': lesson.path != $route.fullPath,
						}"
						><p class="my-1">{{ index + 1 }}. {{ lesson.title }}</p></NuxtLink
					>
				</div>
			</div>

			<div class="bg-white mb-4 p-6 rounded-md sm:w-full md:w-9/12">
				<NuxtPage />
			</div>
		</div>
	</div>
</template>

<script setup>
	const { chapters } = useCourse();
</script>
