<template>
  <div>
    <div id="particles-js"></div>
    <header class="slide flex flex-col">
      <h1 class="flex align-center justify-center">
        <span class="hidden">15x4 Munich</span>
        <component :is="enable3d ? 'Logo3D' : 'Logo'" class="h-64 w-64 z-10" />
      </h1>
      <p class="tagline">
        Share Your Knowledge!
      </p>
      <Play class="mt-10" />
    </header>

    <nav ref="mainNav" class="menu">
      <ul>
        <li class="home">
          <a href="#">
            <Logo class="h-10 w-10" />
          </a>
        </li>
        <li><a href="#">Participate</a></li>
        <li><a href="#">Talks</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </nav>
    <section class="slide">
      <section class="feature reverse">
        <figure>
          <img src="/img/brain.svg" />
        </figure>

        <article>
          <h3>Learn something new</h3>
          <p>
            Sit back, learn something new from the fascinating science world and
            get to know many interesting people, and all this for free!
          </p>
          <p>
            Get an impression of our previous talks and check out upcoming
            events.
          </p>
          <a class="btn" href="#">
            See events
          </a>
        </article>
      </section>
      <section class="feature">
        <figure>
          <img src="/img/speak.svg" />
        </figure>
        <article>
          <h3>Develop public speaking skills</h3>
          <p>
            Being a speaker in 15x4 means getting to share your knowledge with
            curious listeners, improving your presentation skills and getting in
            touch with new science enthusiasts.
          </p>
          <p>
            We believe anyone can be a good speaker, why don’t give it a try
            yourself?
          </p>
          <a class="btn" href="#">
            Become a speaker
          </a>
        </article>
      </section>
      <section class="feature reverse">
        <figure>
          <img src="/img/hands.svg" />
        </figure>
        <article>
          <h3>Be part of our team</h3>
          <p>
            Do you want to learn how 15x4 works from the inside and be part of
            it?
          </p>
          <p>
            Whether you like to organize, help with talks preparation, design or
            take pictures, we have the right task for you! Any help is highly
            valued.
          </p>
          <p>
            Join our international team of driven volunteers who believe in the
            power of knowledge sharing.
          </p>
          <a class="btn" href="#">
            Become a volunteer
          </a>
        </article>
      </section>
      <section class="feature">
        <figure>
          <img src="/img/heads.svg" />
        </figure>
        <article>
          <h3>Help us share knowledge</h3>
          <p>
            Does your organization share our passion for science, technology and
            knowledge?
          </p>
          <p>
            Do you want to reach an audience of science enthusiasts and tech
            geeks?
          </p>
          <p>
            If your reply is yes, we are very eager to hear from you for a
            partnership.
          </p>
          <a class="btn" href="#">
            Become a partner
          </a>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Logo3D from '~/components/Logo3D.vue'
import Play from '~/components/Play.vue'

export default {
  components: {
    Logo,
    Logo3D,
    Play
  },
  data: () => ({
    enableParticles: true,
    enable3d: true
  }),
  mounted() {
    if (window) {
      window.onscroll = this.onScroll
    }
    if (this.enableParticles && window) {
      require('particles.js')
      const config = require('assets/config/particlesjs.json')
      this.$nextTick(() => {
        this.initParticlesJS(config)
      })
    }
  },
  methods: {
    initParticlesJS(config) {
      /* eslint-disable */
      particlesJS('particles-js', config)
    },
    onScroll() {
      const scrollPosY = window.pageYOffset | document.body.scrollTop
      const triggerY = this.$refs.mainNav.getBoundingClientRect().top

      if (triggerY <= 0) {
        document.getElementsByTagName('body')[0].className = 'scrolled'
      } else {
        document.getElementsByTagName('body')[0].className = ''
      }
    }
  }
}
</script>

<style>
* { z-index: 2; }

.particle, .particle > canvas, #particles-js { z-index: -1 !important; } 

.menu {
  @apply sticky bg-white pt-0 z-50 pin-t w-full -mt-10;
}

/* @screen sm {
  .menu {
    @apply hidden;
  }
} */

.menu ul {
  @apply list-reset flex justify-center;
}
.menu ul li {
  @apply mr-12;
}
.menu ul li a {
  @apply text-black no-underline font-sans border-black border-t pt-4 pb-5 block w-24 text-xs uppercase;
}
.menu ul li a:hover {
  @apply border-white;
}
.scrolled .menu {
  @apply shadow;
}
.menu ul li a {
  @apply border-white w-auto pr-4 pt-5;
}
.menu .home {
  @apply hidden p-2 mr-12;
}
.scrolled .menu .home {
  @apply block;
}
.menu ul li.home a {
  @apply p-0 w-auto;
}
.menu ul li a:hover {
  @apply text-grey;
}
.tagline { 
  @apply text-4xl text-black font-bold font-sans;
}
.slide {
  @apply w-full min-h-screen justify-center align-bottom items-center text-center;
}
header.slide {
  @apply content-end -mt-16;
}
.particles-js-canvas-el {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.feature {
  @apply flex text-left m-auto w-5/6 overflow-hidden mt-20;
}
.feature.reverse {
  @apply flex-row-reverse;
}
.feature article {
  @apply w-2/3 flex flex-col p-10 content-between pr-32;
}
.feature h3 {
  @apply text-4xl text-black font-extrabold font-sans pb-4;
}
.feature p {
  @apply text-lg font-light pb-6 leading-normal;
}
.feature figure {
  @apply w-1/3 mx-32 mt-20 flex justify-center;
}
.feature figure::before {
  content: ' ';
  border-left: solid 18px config('colors.black');
  border-top: solid 18px config('colors.black');
  height: 138px;
  width: 138px;
  position: absolute;
  margin-left: -69px;
  margin-top: -26px;
}
.feature figure::after {
  content: ' ';
  border-right: solid 18px config('colors.black');
  border-bottom: solid 18px config('colors.black');
  height: 138px;
  width: 138px;
  position: absolute;
  margin-left: 70px;
  margin-top: 117px;
}
.feature figure img {
  @apply m-5 p-3 h-48 bg-grey-lighter;
}
.feature .btn {
  @apply self-start py-3 text-center bg-black text-xl font-medium text-white no-underline inline-block mt-4 shadow-md;
  width: 190px;
}
.btn::after {
  display: block;
  content: ' ';
  position: absolute;
  margin-left: 200px;
  margin-top: -24px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 13px 0 13px 13px;
  border-color: transparent transparent transparent config('colors.black');
}
.feature .btn:hover {
  @apply bg-grey-darker;
}
.feature .btn:hover::after {
  border-color: transparent transparent transparent config('colors.grey-darker');
}
</style>
