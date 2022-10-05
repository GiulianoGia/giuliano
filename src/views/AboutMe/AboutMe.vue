<template>
  <div class="about-me">
    <h1 class="about-me__title">About Me</h1>
    <div class="about-me__interduction">
      <div class="interduction__self-image">
        <img class="self-image__img" src="@/assets/img/self.png">
      </div>
      <div class="interduction__description">
          <h1>Hi 👋</h1>
          <h3>I am a <span class="description__highlight">Software Developer</span> and a big Hockey fan!</h3>
          <h3>At my current Project I am working at the MySwisscom App.</h3>
          <h3>Beside working at Swisscom I go to the <span class="description__highlight">BMS.</span></h3>
      </div>
    </div>
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
