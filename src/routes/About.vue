<template>
	<div class="about">
		<h2 class="title">The Progressive JavaScript Framework</h2>
		<p class="text">An approachable, performant and versatile framework for building web user interfaces.</p>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/mixins.scss' as *;

.about {
	text-align: center;
	line-height: 1.3;

	& > *:not(:last-child) {
		margin-bottom: 15px;
	}
}

.title {
	font-size: 32px;
	max-width: 400px;
	margin: 0 auto;
	@include gradientText();
}

.text {
	color: #979797;
}
</style>