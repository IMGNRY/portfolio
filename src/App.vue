<template>
    <div id="app">
        <header>
            <div class="picture"></div>
            <div class="logo-ish">
                <v-signature/>
                <h1 class="name">Fille Åström</h1>
                <h2 class="subtitle">Co-Founder & Developer @
                    <a href="http://imgnry.com">IMGNRY</a>
                </h2>
            </div>
        </header>
        <div class="cards">
            <div ref="cards" v-for="card in cards" :key="card.title" class="card">
                <v-intersect @enter="intersect(card)">
                    <div class="picture-wrapper">
                        <transition>
                            <div v-if="card.ready" class="picture" :style="{ 'background-image': `url(${urlFromImageId(card.imageIds[0])})`}"></div>
                        </transition>
                    </div>
                </v-intersect>
                <div class="title">{{ card.title }}</div>
                <div class="subtitle">{{ card.subtitle }}</div>
                <div class="description">{{ card.description }}</div>
                <footer class="tags-and-button-wrapper">
                    <div class="tags">
                        <div v-for="tag in card.tags" :key="tag" class="tag">{{tag}}</div>
                    </div>
                    <!-- <button class="more">Details</button> -->
                </footer>

            </div>
        </div>
        <footer>
            <p>
                This site is built using
                <a href="https://vuejs.org">Vue</a>,
                <a href="https://www.typescriptlang.org">Typescript</a>,
                <a href="https://webpack.js.org">Webpack</a>,
                <a href="https://nodejs.org">Node</a>,
                <a href="https://www.netlify.com">Netlify</a> &
                <a href="https://cloudinary.com">Cloudinary</a>. <br />Source available on
                <a href="https://github.com/IMGNRY/portfolio">IMGNRY/portfolio</a>
            </p>
        </footer>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss">
$bg-color: #e3e3e3;
$white: #f5f5f5;
$black: #121212;
$gray: #222;

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
a {
	color: $black;
	font-weight: $weight-bold;
	border-bottom: 3px solid;
	text-decoration: none;
	// &:hover {
	// 	background-color: lighten($bg-color, 30%);
	// }
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
		background-image: url('http://res.cloudinary.com/picular/f_auto/w_310/portfolio/face-2');
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
// @keyframes bg-pulsate {
// 	0% {
// 		// background-color: lightgray;
// 	}
// 	50% {
// 		background-color: lighten(lightgrey, 3%);
// 	}
// 	100% {
// 		// background-color: lightgray;
// 	}
// }
.card {
	// height: 600px;
	background-color: $white;
	padding: 20px;
	margin-bottom: 40px;
	display: flex;
	flex-direction: column;
	// border: 1px solid red;
	@include shadow;
	.picture-wrapper {
		width: 100%;
		padding-top: 50%;
		background-color: lightgray;
		// will-change: background-color;
		// animation: 700ms infinite bg-pulsate;
		// animation-iteration-count: 20
		position: relative;
		overflow: hidden;
		.flickity {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
		}
		.picture {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background-position: center;
			background-size: cover;
			@include rounded-corners;
		}
		@include rounded-corners;
	}
	.title {
		font-size: 7em;
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
		// max-height: 50px;
		// overflow: hidden;
	}
	footer {
		display: flex;
		width: 100%;
		// flex-direction: column;
		// border: 1px solid green;
		align-items: flex-end;
		flex: 1;
		// margin-top: 15px;
	}
	.tags {
		margin-top: 20px;
		flex: 1;
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
	button.more {
		font-size: 2.2em;
		font-weight: $weight-bold;
		border: 2px solid #ddd;
		height: 50px;
		background: none;
		padding: 10px 20px;
		margin-left: 40px;
		border-radius: 5px;
		text-transform: uppercase;
		&:hover {
			cursor: pointer;
			background-color: #eee;
		}
	}
}
#app > footer {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3em;
	line-height: 1.8em;
	text-align: center;
	padding: 30px 30px 60px 30px;
	br {
		display: none;
	}
}
// tablet
@media (min-width: 568px) {
	body {
		max-width: 800px;
		padding: 0 40px;
	}
	header {
		// flex-direction: row;
		padding: 0;
		margin-top: 20px;
		// height: 350px;
		.picture {
			// height: 130px;
			// width: 130px;
			margin-right: 30px;
			margin-bottom: 0;
		}
		.logo-ish {
			// align-items: center;
			// display: block;
			width: 350px;
			.signature {
				width: 350px;
			}
			.name {
				margin-left: -2px;
			}
			.subtitle {
				font-size: 2.6em;
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
@media (min-width: 768px) {
	header {
		flex-direction: row;
	}
	#app > footer {
		font-size: 4em;
		// padding: 60px;
	}
}
// desktop
@media (min-width: 1100px) {
	body {
		max-width: 1500px;
	}
	header {
		height: 400px;
		.picture {
			height: 270px;
			width: 270px;
			margin-right: 50px;
		}
		.logo-ish {
			width: 350px;
			.name {
				font-size: 8em;
			}
			.subtitle {
				font-size: 3.5em;
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
		// column-count: 2;
		// column-gap: 40px;
	}
	.card {
		margin-bottom: 0;
		// display: inline-block;
		// margin-bottom: 40px;
	}
	#app > footer {
		padding: 60px;
		// #app > footer {
		br {
			display: initial;
		}
		// }
	}
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease-in;
}
.v-enter,
.v-leave-to {
	opacity: 0;
}
</style>
