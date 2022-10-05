<template>
  <div class="about-me">
    <h1 class="about-me__title">About Me</h1>
    <div class="about-me__interduction">
      <div class="interduction__self-image">
        <img class="self-image__img" src="@/assets/img/self.webp">
      </div>
      <div class="interduction__description">
      <div class="description__information">
          <h2 class="information__subtitle">Hi 👋</h2>
          <h3>I am a <span class="information__highlight">Software Developer</span> and a big Hockey fan!</h3>
          <h3>At my current Project I am working at the MySwisscom App.</h3>
          <h3>Beside working at Swisscom I go to the <span class="description__highlight">BMS.</span></h3>
      </div>
      </div>
    </div>
    <h2 class="about-me__subtitle">Knowledge 💪</h2>
    <div class="about-me__knowledge">
        <div class="knowledge__container" v-for="tech in technologies" :key="tech">
          <img class="container__img" :src="require(`@/assets/img/${tech.img}`)">
          <p>{{ tech.name }}</p>
          <Progressbar :procent="tech.procent" />
        </div>
    </div>
    <h2 class="about-me__subtitle">My Interests  🤓</h2>
    <div class="about-me__interests">
      <div class="interests__list" @click="logInterests(interest)" v-for="interest in interests" :key="interest.name">
        <p class="list__title">{{ interest.name }}</p>
        <p>{{ interest.description }}</p>
        <div class="list__tags">
            <p class="tags__item" v-for="tag in interest.tags" :key="tag">{{ tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./AboutMe.ts"></script>
<style lang="scss" scoped src="./AboutMe.scss"></style>
