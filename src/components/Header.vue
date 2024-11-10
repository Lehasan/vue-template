<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<header class="header">
		<nav class="header__menu menu">
			<ul class="menu__list">
				<li class="menu__item">
					<RouterLink to="/" class="menu__link">Home</RouterLink>
				</li>
				<li class="menu__item">
					<RouterLink to="/about" class="menu__link">About</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 30px;
}

.menu__list {
	display: flex;
	justify-content: center;
	gap: 15px;
	list-style: none;
}

.menu__link {
	text-decoration: none;
	color: #E1E1E1;

	&.router-link-active {
		color: #41B883;
	}
}
</style>