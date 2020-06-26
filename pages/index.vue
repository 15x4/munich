<template>
  <div :class="{ video: enableVideo }">
    <div id="particles-js"></div>
    <div v-show="enableVideo" class="video-background">
      <div class="video-foreground">
        <iframe
          src="https://www.youtube.com/embed/Bd8HqeNM9Ow?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <header class="slide flex flex-col">
      <h1 class="flex align-center justify-center">
        <span class="hidden">15x4 Munich</span>
        <component
          :is="enable3d && !enableVideo ? 'Logo3D' : 'Logo'"
          class="h-64 w-64 z-10"
        />
      </h1>
      <p class="tagline" :class="{ 'mt-10': !enable3d }">
        Share Your Knowledge!
      </p>
      <a href="#" class="play" @click="enableVideo = !enableVideo">
        <Play />
      </a>
      <section id="scroll-arrow">
        <a href="#participate"><span></span>Scroll</a>
      </section>
    </header>

    <nav ref="mainNav" class="menu">
      <ul>
        <li class="home">
          <a href="#">
            <Logo class="h-10 w-10" />
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-Z-wGW1yWX1Bm_ZPyCeeYluhyOuONiguwPS05_IuZiYJITg/viewform"
            target="_blank"
            >Contact Us</a
          >
        </li>
        <li>
          <a href="https://shop.spreadshirt.de/15x4-munich" target="_blank"
            >Fan Shop</a
          >
        </li>
      </ul>
    </nav>
    <section class="intro">
      <article>
        <h3>What is 15x4?</h3>
        <p>
          15x4 is a series of non-commercial science communication events
          happening in different countries around the world.
        </p>
        <p>
          We organize free educational meetings, which feature four popular
          science talks of fifteen minutes each.
        </p>
        <p>
          Our goal is to promote the idea of science communication and make
          knowledge more approachable.
        </p>
        <p>
          Speak out and share your knowledge!
        </p>
      </article>
      <figure>
        <img src="/img/we.jpg" />
      </figure>
    </section>
    <section id="participate" class="slide">
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
          <a
            class="btn"
            href="https://www.eventbrite.com/o/15x4-munich-18733203881"
            target="_blank"
          >
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
          <a
            class="btn"
            href="https://goo.gl/forms/G8Cfk3DYO7OsPIWf2"
            target="_blank"
          >
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
          <a
            class="btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLScEcvp6Dtfgm_ZexvODfGD3d2zX15yUXhBL_MkX4IT_w6anGA/viewform"
          >
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
          <a
            class="btn"
            href="https://docs.google.com/forms/d/e/1FAIpQLScdVynxfnrx_ebskWez3mT3Y7EBLmZGRtOhxm1DaWrkrAu-ow/viewform"
          >
            Become a partner
          </a>
        </article>
      </section>
    </section>
    <section class="feature reverse">
      <article>
        <h3>Stay updated and subscribe to our newsletter!</h3>
        <p>
          <a class="btn" href="http://eepurl.com/cRRmZ9" target="_blank"
            >Subscribe</a
          >
        </p>
      </article>
    </section>

    <section class="feature social">
      <article>
        <h3>Follow us on</h3>
        <p>
          <a href="https://www.facebook.com/15x4munich/" target="_blank">
            <i class="fab fa-facebook-square"></i><span>Facebook</span></a
          >
          <a href="https://www.instagram.com/15x4munich/" target="_blank">
            <i class="fab fa-instagram"></i><span>Instagram</span></a
          >
          <a href="https://www.meetup.com/de-DE/15x4munich/" target="_blank">
            <i class="fab fa-meetup"></i><span>Meetup</span></a
          >
          <a href="https://twitter.com/15x4Munich" target="_blank">
            <i class="fab fa-twitter-square"></i><span>Twitter</span></a
          >
          <a
            href="https://www.youtube.com/channel/UCdYIq_Qa_XsQ7bqbokjVsvw"
            target="_blank"
          >
            <i class="fab fa-youtube-square"></i><span>YouTube</span>
          </a>
        </p>
      </article>
    </section>

    <section class="feature reverse">
      <article>
        <p><strong>Impressum</strong></p>
        <p>15x4 Munich e.V.</p>
        <p>Vereins ID: München VR 208332</p>
      </article>
    </section>
    <section class="feature reverse">
      <article>
        <p>
          Source code of this website is available at
          <a href="https://github.com/15x4/munich" target="_blank">GitHub</a>.
        </p>
      </article>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Logo3D from '~/components/Logo3D.vue'
import Play from '~/components/Play.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  components: {
    Logo,
    Logo3D,
    Play
  },
  data: () => ({
    enableParticles: true,
    enable3d: true,
    enableVideo: false
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
      const classes = []

      if (scrollPosY > 0) {
        classes.push('scrolled')
      }
      if (triggerY <= 0) {
        classes.push('menu-scrolled')
      }

      document.getElementsByTagName('body')[0].className = classes.join(' ')
    }
  }
}
</script>

<style>
* {
  z-index: 2;
}

.social,
.social article {
  width: 100% !important;
}
.social span {
  display: none;
}
.social a {
  font-size: 60px;
  margin: 10px;
  color: #333333;
}
.social a:hover {
  color: #666666;
}
.particle,
.particle > canvas,
#particles-js {
  z-index: -1 !important;
}

.menu {
  @apply block sticky pt-0 z-50 pin-t w-full -mt-10;
  transition: all 0.5s;
}

.menu ul {
  @apply list-reset flex flex-wrap justify-center;
}
.menu ul li {
  @apply mr-12;
}
.menu ul li a {
  @apply text-black no-underline font-sans pt-4 pb-5 block w-24 text-xs uppercase;
}
.menu ul li a:hover {
  @apply border-white;
}
.menu-scrolled .menu {
  @apply shadow bg-white;
}
.menu ul li a {
  @apply border-white w-auto pr-4 pt-5;
}
.menu .home {
  @apply hidden p-2 mr-12;
}
.menu-scrolled .menu .home {
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
  @apply w-full min-h-screen justify-center align-bottom items-center text-center pt-1;
}
header.slide {
  @apply content-end -mt-16;
}
.video h1,
.video header p {
  @apply invisible;
}
.video .menu a {
  @apply text-white;
}
.menu-scrolled .video .menu a {
  @apply text-black;
}
.play {
  @apply mt-10 mb-2;
}
.video .play {
  @apply text-white fill-current;
}
.particles-js-canvas-el {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.video .particles-js-canvas-el {
  display: none;
}
.intro {
  @apply flex flex-col p-10;
}
.intro article {
  @apply flex flex-col;
}
.intro figure {
  @apply flex flex-col;
}
.intro p {
  @apply text-lg font-light pb-6 leading-normal;
}
.feature {
  @apply overflow-hidden mt-20;
}
.feature article {
  @apply flex flex-col p-10;
}
h3 {
  @apply text-4xl text-black font-extrabold font-sans pb-4;
}
.feature p {
  @apply text-lg font-light pb-6 leading-normal;
}
.feature figure {
  @apply mt-20 flex justify-center;
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
  @apply m-5 h-48 w-48 bg-grey-lighter;
  padding: 15px;
}
.feature .btn {
  @apply py-3 text-center bg-black text-xl font-medium text-white no-underline inline-block mt-4 shadow-md;
  width: 190px;
}

.feature,
.feature.reverse {
  @apply flex flex-col w-full text-left;
}
.feature article {
  @apply w-full;
}
.feature figure {
  @apply w-full;
}
.feature .btn {
  @apply mx-auto;
}
.feature h3 {
  @apply mt-10;
}

@screen md {
  .feature,
  .feature.reverse {
    @apply m-auto flex flex-row w-5/6 text-left;
  }
  .intro {
    @apply flex flex-row-reverse;
  }
  .intro article,
  .intro figure {
    @apply flex-col p-5;
  }
  .feature.reverse {
    @apply flex-row-reverse;
  }
  .feature article {
    @apply w-2/3 content-between pr-32;
  }
  .feature figure {
    @apply w-1/3 mx-32;
  }
  .feature .btn {
    @apply self-start m-0;
  }
  .feature h3 {
    @apply text-left mt-0;
  }
  .feature p {
    @apply text-left;
  }
  .menu {
    @apply block;
  }
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

#scroll-arrow a {
  @apply font-sans text-black;
  position: absolute;
  bottom: 0px;
  right: 30px;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
  padding-top: 70px;
}

#scroll-arrow a:hover {
  opacity: 0.5;
}

#scroll-arrow a span {
  position: absolute;
  right: 14px;
  top: 0;
  width: 24px;
  height: 24px;
  border-left: 1px solid #333333;
  border-bottom: 1px solid #333;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}

.scrolled #scroll-arrow {
  @apply hidden;
}

.video #scroll-arrow a {
  @apply text-white;
}

.video #scroll-arrow a span {
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

.video-background {
  background: #000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
