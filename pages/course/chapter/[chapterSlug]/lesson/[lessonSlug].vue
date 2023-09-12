<template>
	<p class="text-xs">Lesson {{ chapter.number }}.{{ lesson.number }}</p>
	<h2 class="font-bold my-2 text-xl">{{ lesson.title }}</h2>
	<VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />
	<p class="mb-4 text-sm">{{ lesson.text }}</p>
	<div class="flex gap-5">
		<NuxtLink
			:to="lesson.sourceUrl"
			v-if="lesson.sourceUrl"
			class="text-teal-500 hover:text-teal-400 text-sm"
			>Download source code</NuxtLink
		>
		<NuxtLink
			:to="lesson.downloadUrl"
			v-if="lesson.downloadUrl"
			class="text-teal-500 hover:text-teal-400 text-sm"
			>Download video</NuxtLink
		>
	</div>

	<LessonCompleteButton
		:model-value="isLessonComplete"
		@update:model-value="toggleComplete"
	/>
</template>

<script setup>
	const course = useCourse();
	const route = useRoute();

	const chapter = computed(() => {
		return course.chapters.find(
			(chapter) => route.params.chapterSlug == chapter.slug
		);
	});

	const lesson = computed(() => {
		return chapter.value.lessons.find(
			(lesson) => route.params.lessonSlug == lesson.slug
		);
	});

	const title = computed(() => {
		return `${lesson.value.title} - ${course.title}`;
	});

	const progress = useLocalStorage("progress", []);

	const isLessonComplete = computed(() => {
		if (!progress.value[chapter.value.number - 1]) {
			return false;
		}

		if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
			return false;
		}

		return progress.value[chapter.value.number - 1][lesson.value.number - 1];
	});

	const toggleComplete = () => {
		if (!progress.value[chapter.value.number - 1]) {
			progress.value[chapter.value.number - 1] = [];
		}
		progress.value[chapter.value.number - 1][lesson.value.number - 1] =
			!isLessonComplete.value;
	};

	useHead({
		title,
	});
</script>
