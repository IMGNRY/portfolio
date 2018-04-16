import { Component, Vue, Watch } from 'vue-property-decorator'
import Intersect from 'vue-intersect'

import Signature from '@/components/Signature.vue'

interface Card {
	imageIds: string[]
	title: string
	subtitle: string
	description: string
	tags: string[]
	ready?: boolean
}

@Component({
	components: {
		'v-signature': Signature,
		'v-intersect': Intersect
	}
})
export default class App extends Vue {
	cards: Card[] = []

	created() {
		this.cards = [
			{
				imageIds: ['picular', 'picular_2'],
				title: 'Picular',
				subtitle: '2017 - 2018, Single Full Stack Developer & Co-Product Designer',
				description: 'Subscription based Single Page Application SaaS to help everyday photographers to organize and enjoy their photos.',
				tags: ['vue', 'typescript', 'html+css', 'mongodb', 'node', 'serverless', 'heroku', 'digital ocean', 'face-recognition', 'leaflet', 'webpack']
			},
			{
				imageIds: ['toca_life'],
				title: 'Toca Life',
				subtitle: '2016 - 2017, Game & Tools Programmer',
				description: 'Toca Boca make digital toys that have been downloaded over 150 million times in more than 200 countries. Toca Life is their most popular product so far.',
				tags: ['unity', 'c#', 'c', 'ios', 'android', 'objective-c', 'node']
			},
			{
				imageIds: ['lazer_league'],
				title: 'Lazer League',
				subtitle: '2016 - 2017, Single Full Stack Developer & Co-Game Designer',
				description:
					'Multiplayer game where up to 4 players battle each other in capture the flag. First version played locally using iPad as the screen and iPhones as game controller. Later rewritten with Unity for online multiplayer support on the Steam platform.',
				tags: ['unity', 'c#', 'steam', 'ios', 'objective-c', 'bluetooth']
			},
			{
				imageIds: ['duplexweld'],
				title: 'Duplexweld',
				subtitle: '2015, Single Full Stack Developer',
				description: 'Online tool for welding engineers to plan for chemical reactions when using different materials and techniques. Built for SWEREA Swedish Research.',
				tags: ['react', 'html+css', 'mongodb', 'node']
			},
			{
				imageIds: ['rantebevis'],
				title: 'Räntebevis',
				subtitle: '2014 - 2015, Single Full Stack Developer',
				description:
					'Investment tool with portfolio, analytics and news functionality for interest proof investements. Backed by customized KeystoneJS CMS. Built for Nordea, one of the largest banks in Sweden.',
				tags: ['ios', 'swift', 'objective-c', 'keystone.js', 'node', 'mongodb']
			},
			{
				imageIds: ['systembolaget'],
				title: 'Sök & Hitta',
				subtitle: '2011 - 2014, Lead iOS Developer',
				description:
					'Contracted by Mobiento to help building Systembolagets mobile app for searching, favorizing and rating their vast selection of beverages. It became the number #1 app in the App Store in the food category in Sweden.',
				tags: ['ios', 'objective-c', 'spritekit', 'mongodb', 'node']
			},
			{
				imageIds: ['wars'],
				title: 'Wars',
				subtitle: '2014, Single Full Stack Developer & Co-Game Designer',
				description: 'Team based online multiplayer RTS game with unique gameplay style and very large pixels. Started of as an iOS game and later rewritten in Unity with Desktop focus.',
				tags: ['unity', 'c#', 'ios', 'objective-c', 'node', 'mongodb']
			},
			{
				imageIds: ['holy_hand_grenade'],
				title: 'Holy Hand Grenade',
				subtitle: '2014, Single Full Stack Developer & Co-Game Designer',
				description:
					'Multiplayer reaction based tournament game, where everybody compete against at each other asynchronously. We teamed up with a 3D artist and a musician to create some cool assets.',
				tags: ['ios', 'objective-c', 'spritekit', 'mongodb', 'node']
			},
			{
				imageIds: ['samsung'],
				title: 'Samsung Product Grid',
				subtitle: '2013, Single Full Stack Developer',
				description: 'Contracted by Great Works agency I built a dynamic product page with custom CMS for different grid style layouts.',
				tags: ['.NET', 'SQL', 'html+css']
			},
			{
				imageIds: ['weatherpal'],
				title: 'WeatherPal',
				subtitle: '2013, iOS Developer',
				description: 'Weather forecast with unique combo forecast combining three sources with actual observations to the most likely weather ahead. Built for DN and SMHI together with Hackyard.',
				tags: ['iOS', 'Objective-C']
			}
		]
	}

	intersect(card: Card) {
		if (card.ready) {
			return
		}

		const image = new Image()
		image.addEventListener('load', () => {
			card.ready = true
			this.updateCard(card)
		})
		image.src = this.urlFromImageId(card.imageIds[0])
	}
	updateCard(card) {
		const idx = this.cards.findIndex(c => c.title == card.title)
		Vue.set(this.cards, idx, card)
	}
	urlFromImageId(imageId: string) {
		return `http://res.cloudinary.com/picular/portfolio/card_${imageId}`
	}
	// mounted() {
	// 	console.log('card refs', this.$refs.cards)

	// 	const observer = new IntersectionObserver(entries => {
	// 		// console.log('intersection entries:', entries)
	// 		entries.forEach(entry => {
	// 			console.log('entry:', entry)
	// 		})
	// 	})

	// 	for (const element of Array.from(document.querySelectorAll('.picture'))) {
	// 		console.log('element:', element)

	// 		observer.observe(element)
	// 	}
	// 	// .forEach(element => {
	// 	// 	observer.observe(element)
	// 	// })

	// 	// element argument can be a selector string
	// 	//   for an individual element

	// }
}
