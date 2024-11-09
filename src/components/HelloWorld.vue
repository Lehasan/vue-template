<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@stores/useCounterStore.ts'

interface Props {
	msg: string
}

defineProps<Props>()

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const { increment } = counter
</script>

<template>
	<div class="hello-world">
		<img width="90" height="auto" class="image" src="@assets/icon.svg" alt="Vue js logo">
		<h1 class="title">{{ msg }}</h1>
		<button type="button" class="button" @click="increment">
			<span>Count: {{ count }}</span>
		</button>
	</div>
</template>

<style scoped lang="scss">
@mixin gradientText() {
	background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.hello-world {
	text-align: center;

	&>*:not(:last-child) {
		margin-bottom: 30px;
	}
}

.image {
	transition: filter 0.4s;

	&:hover {
		filter: drop-shadow(0 0 20px #fff);
	}
}

.title {
	@include gradientText();
}

.button {
	padding: 10px;
	border: 2px solid transparent;
	border-radius: 10px;
	background: linear-gradient(to right, var(--background-color), var(--background-color)) padding-box,
		linear-gradient(to right, var(--color-primary), var(--color-secondary)) border-box;
	transition: scale 0.1s;
	cursor: pointer;

	span {
		@include gradientText();
	}

	&:active {
		scale: 1.1;
	}
}
</style>