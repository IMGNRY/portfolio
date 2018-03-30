<template>
    <div id="app">
        <header>
            <div class="picture"></div>
            <div class="logo-ish">
                <v-signature/>
                <h1 class="name">Fille Åström</h1>
                <h2 class="subtitle">Co-Founder & Developer @
                    <span class="bold">IMGNRY</span>
                </h2>
            </div>
        </header>
        <div class="cards">
            <div v-for="card in cards" :key="card.title" class="card">
                <div class="picture" :style="{ 'background-image': `url(${card.img})`}"></div>
                <div class="title">{{ card.title }}</div>
                <div class="subtitle">{{ card.subtitle }}</div>
                <div class="description">{{ card.description }}</div>
                <div class="tags">
                    <div v-for="tag in card.tags" :key="tag" class="tag">{{tag}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Signature from '@/components/Signature.vue'

@Component({
	components: {
		'v-signature': Signature
	}
})
export default class App extends Vue {
	get cards() {
		const cards = []
		for (let i = 0; i < 10; i++) {
			cards.push({
				img: '/img/card_picular.png',
				title: 'Picular',
				subtitle: '2016 - 2017, Game & Tools Programmer',
				description:
					'This is just a simple desciption text that I dont know reallt what it will contain in the end. But the imporant thing is that his text doesnt repeat it self to much becouse that looks reall weird.',
				tags: ['ios', 'mongodb', 'node', 'vue', 'typescript', 'serverless', 'netlify', 'webpack']
			})
		}
		return cards
	}
}
</script>

<style lang="scss">
$bg-color: #e3e3e3;
$white: #f5f5f5;
$black: #121212;
$gray: #222;

$weight-extra-light: 200;
$weight-light: 300;
$weight-regular: 400;
$weight-semi-bold: 600;
$weight-bold: 700;
$weight-extra-bold: 800;

@mixin shadow {
	box-shadow: 0 3px 14px 1px rgba(0, 0, 0, 0.12);
}

@mixin rounded-corners {
	border-radius: 10px;
}

* {
	margin: 0;
	padding: 0;
}
html,
body {
	height: 100%;
	background-color: $bg-color;
	color: $black;
	margin: auto;
	-webkit-font-smoothing: antialiased;
	font-size: 62.5%;
	font-family: 'Assistant', sans-serif;
	line-height: 1;
	box-sizing: border-box;
}
header {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 10vw;
	padding-bottom: 10vw;
	.picture {
		background-image: url('/img/face-11.jpg');
		background-position: 50% calc(50% + 5px);
		background-size: cover;
		border-radius: 50%;
		height: 230px;
		width: 230px;
		border: 20px solid $white;
		margin-bottom: 5px;
		@include shadow;
	}
	.logo-ish {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.signature {
			width: 320px;
			margin-bottom: 5px;
			path {
				fill: $black;
			}
		}
		.name {
			text-transform: uppercase;
			font-size: 7em;
			font-weight: $weight-extra-bold;
		}
		.subtitle {
			font-size: 2.5em;
			font-weight: $weight-semi-bold;
			margin-top: 5px;
			.bold {
				font-weight: 700;
				border-bottom: 3px solid;
			}
		}
	}
}
h1 {
	font-size: 6em;
	font-weight: $weight-semi-bold;
}
.cards {
	margin-top: 40px;
}
.card {
	// height: 600px;
	background-color: $white;
	padding: 20px;
	margin-bottom: 40px;
	@include shadow;
	.picture {
		width: 100%;
		padding-top: 50%;
		background-color: lightgray;
		background-position: center;
		background-size: cover;
		@include rounded-corners;
	}
	.title {
		font-size: 8em;
		font-weight: $weight-extra-bold;
		text-transform: uppercase;
		margin-top: 12px;
		margin-left: -2px;
	}
	.subtitle {
		font-size: 2.7em;
		font-weight: $weight-regular;
		// color: $gray;
		margin-top: 3px;
	}
	.description {
		font-size: 3.2em;
		font-weight: $weight-semi-bold;
		margin-top: 20px;
		line-height: 1.2;
	}
	.tags {
		margin-top: 20px;
	}
	.tag {
		font-size: 2.2em;
		font-weight: $weight-bold;
		display: inline-block;
		padding: 10px;
		background-color: $black;
		color: $white;
		border-radius: 5px;
		margin-right: 5px;
		margin-bottom: 5px;
	}
}
// tablet
@media (min-width: 768px) {
	body {
		max-width: 700px;
	}
	header {
		flex-direction: row;
		height: 350px;
		padding: 0;
		.picture {
			height: 230px;
			width: 230px;
			margin-right: 50px;
			margin-bottom: 0;
		}
		.logo-ish {
			display: block;
			width: 350px;
			.signature {
				width: 350px;
			}
			.name {
				font-size: 7em;
				font-weight: $weight-extra-bold;
				margin-left: -2px;
			}
			.subtitle {
				font-size: 2.6em;
				font-weight: $weight-semi-bold;
				margin-top: 5px;
				.bold {
					font-weight: 700;
					border-bottom: 3px solid;
				}
			}
		}
	}
	.card {
		padding: 35px;
		margin-bottom: 40px;
		@include rounded-corners;
	}
}
// desktop
@media (min-width: 1300px) {
	body {
		max-width: 1200px;
	}
	header {
		height: 500px;
		.picture {
			height: 270px;
			width: 270px;
			margin-right: 50px;
		}
		.logo-ish {
			width: 350px;
			.name {
				font-size: 8em;
				font-weight: $weight-extra-bold;
				margin-left: -2px;
			}
			.subtitle {
				font-size: 3.5em;
				font-weight: $weight-semi-bold;
				margin-top: 5px;
				.bold {
					font-weight: 700;
					border-bottom: 3px solid;
				}
			}
			.signature {
				width: 400px;
			}
		}
	}
	.cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 40px;
	}
	.card {
		margin-bottom: 0;
	}
}
</style>
