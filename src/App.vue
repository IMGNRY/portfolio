<template>
  <div id="app">
    <header>
      <div class="picture"></div>
      <div class="logo-ish">
        <v-signature />
        <h1 class="name">Fille Åström</h1>
        <h2 class="subtitle">
          Co-Founder & Developer @
          <a href="http://imgnry.com">IMGNRY</a>
        </h2>
      </div>
    </header>
    <div class="intro">
      <p>
        I’m a full-stack developer with {{ yearsOfExperience() }} years of experience. Technological generalist that prefer to be involved all the
        through the stack, from the database to the UI. Love to learn and experiment. Live in Stockholm, Sweden.
      </p>

      <p>If you’re interested in working with me: <a href="mailto:fille@imgnry.com">fille@imgnry.com</a></p>

      <p>Below are some of the projects that I have been involved with.</p>
    </div>
    <div class="cards">
      <div ref="cards" v-for="card in cards" :key="card.title" class="card">
        <v-intersect @enter="intersect(card)">
          <div class="picture-wrapper">
            <transition>
              <div v-if="card.ready" class="picture" :style="{ 'background-image': `url(${urlFromImageId(card.imageIds[0])})` }"></div>
            </transition>
          </div>
        </v-intersect>
        <div class="title">{{ card.title }}</div>
        <div class="subtitle">{{ card.subtitle }}</div>
        <div class="description">{{ card.description }}</div>
        <footer class="tags-and-button-wrapper">
          <div class="tags">
            <div v-for="tag in card.tags" :key="tag" class="tag">{{ tag }}</div>
          </div>
        </footer>
      </div>
    </div>
    <footer>
      <p>
        This site is built using
        <a href="https://vuejs.org">Vue</a>, <a href="https://www.typescriptlang.org">Typescript</a>, <a href="https://webpack.js.org">Webpack</a>,
        <a href="https://nodejs.org">Node</a>, <a href="https://www.netlify.com">Netlify</a>. <br />Source available on
        <a href="https://github.com/IMGNRY/portfolio">IMGNRY/portfolio</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
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
    'v-intersect': Intersect,
  },
})
export default class App extends Vue {
  cards: Card[] = []

  created() {
    this.cards = [
      {
        imageIds: ['picular', 'picular_2'],
        title: 'Picular',
        subtitle: '2017 - 2023, Single Full Stack Developer & Co-Product Designer',
        description: 'Subscription based service with cross-platform apps to help everyday photographers to organize and enjoy their photos.',
        tags: ['flutter', 'aws', 'python', 'go', 'vue', 'typescript', 'mongodb', 'node', 'serverless', 'face-recognition'],
      },
      {
        imageIds: ['toca_life'],
        title: 'Toca Life',
        subtitle: '2016 - 2017, Game & Tools Programmer',
        description:
          'Toca Boca make digital toys that have been downloaded over 150 million times in more than 200 countries. Toca Life is their most popular product so far.',
        tags: ['unity', 'c#', 'c', 'ios', 'android', 'objective-c', 'node'],
      },
      {
        imageIds: ['lazer_league'],
        title: 'Lazer League',
        subtitle: '2016 - 2017, Single Full Stack Developer & Co-Game Designer',
        description:
          'Multiplayer game where up to 4 players battle each other in capture the flag. First version played locally using iPad as the screen and iPhones as game controller. Later rewritten with Unity for online multiplayer support on the Steam platform.',
        tags: ['unity', 'c#', 'steam', 'ios', 'objective-c', 'bluetooth'],
      },
      {
        imageIds: ['duplexweld'],
        title: 'Duplexweld',
        subtitle: '2015, Single Full Stack Developer',
        description:
          'Online tool for welding engineers to plan for chemical reactions when using different materials and techniques. Built for SWEREA Swedish Research.',
        tags: ['react', 'html+css', 'mongodb', 'node'],
      },
      {
        imageIds: ['rantebevis'],
        title: 'Räntebevis',
        subtitle: '2014 - 2015, Single Full Stack Developer',
        description:
          'Investment tool with portfolio, analytics and news functionality for interest proof investements. Backed by customized KeystoneJS CMS. Built for Nordea, one of the largest banks in Sweden.',
        tags: ['ios', 'swift', 'objective-c', 'keystone.js', 'node', 'mongodb'],
      },
      {
        imageIds: ['sok_o_hitta'],
        title: 'Sök & Hitta',
        subtitle: '2011 - 2014, Lead iOS Developer',
        description:
          'Contracted by Mobiento to help building Systembolagets mobile app for searching, favorizing and rating their vast selection of beverages. It became the number #1 app in the App Store in the food category in Sweden.',
        tags: ['ios', 'objective-c', 'spritekit', 'mongodb', 'node'],
      },
      {
        imageIds: ['wars'],
        title: 'Wars',
        subtitle: '2014, Single Full Stack Developer & Co-Game Designer',
        description:
          'Team based online multiplayer RTS game with unique gameplay style and very large pixels. Started of as an iOS game and later rewritten in Unity with Desktop focus.',
        tags: ['unity', 'c#', 'ios', 'objective-c', 'node', 'mongodb'],
      },
      {
        imageIds: ['holy_hand_grenade'],
        title: 'Holy Hand Grenade',
        subtitle: '2014, Single Full Stack Developer & Co-Game Designer',
        description:
          'Multiplayer reaction based tournament game, where everybody compete against at each other asynchronously. We teamed up with a 3D artist and a musician to create some cool assets.',
        tags: ['ios', 'objective-c', 'spritekit', 'mongodb', 'node'],
      },
      {
        imageIds: ['samsung'],
        title: 'Samsung Product Grid',
        subtitle: '2013, Single Full Stack Developer',
        description: 'Contracted by Great Works agency I built a dynamic product page with custom CMS for different grid style layouts.',
        tags: ['.NET', 'SQL', 'html+css'],
      },
      {
        imageIds: ['weatherpal'],
        title: 'WeatherPal',
        subtitle: '2013, iOS Developer',
        description:
          'Weather forecast with unique combo forecast combining three sources with actual observations to the most likely weather ahead. Built for DN and SMHI together with Hackyard.',
        tags: ['iOS', 'Objective-C'],
      },
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
    return `//${location.host}/img/card_${imageId}.png`
  }
  yearsOfExperience() {
    const start = 1998
    const end = new Date().getFullYear()
    return end - start
  }
}
</script>

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
    background-image: url('/img/face-17.jpg');
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
.intro {
  margin: 40px auto;
  padding: 0 30px;
  font-size: 24px;
  @media (min-width: 568px) {
    padding: 0;
    font-size: 26px;
    max-width: 850px;
  }
  line-height: 1.5;
  p {
    margin-bottom: 20px;
  }
  //   font-weight: 500;
  .bold {
    font-weight: $weight-bold;
    border-bottom: 3px solid;
  }
}
.cards {
  margin-top: 70px;
}
.card {
  background-color: $white;
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  @include shadow;
  .picture-wrapper {
    width: 100%;
    padding-top: 50%;
    background-color: lightgray;
    position: relative;
    overflow: hidden;
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
    margin-top: 3px;
  }
  .description {
    font-size: 3.2em;
    font-weight: $weight-semi-bold;
    margin-top: 20px;
    line-height: 1.2;
  }
  footer {
    display: flex;
    width: 100%;
    align-items: flex-end;
    flex: 1;
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
    padding: 0;
    margin-top: 20px;
    .picture {
      margin-right: 30px;
      margin-bottom: 0;
    }
    .logo-ish {
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
  }
  .card {
    margin-bottom: 0;
  }
  #app > footer {
    padding: 60px;
    br {
      display: initial;
    }
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
