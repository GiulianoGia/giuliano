<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="container__flexbox">
        <div class="flexbox__item">
          <p v-if="windowWidth > 920" class="item__title">
            <a href="/">Giuliano Gianola</a>
          </p>
          <p v-else class="item__title"><a href="/">GG</a></p>
        </div>
        <div class="flexbox__item" v-if="windowWidth > 500">
          <p class="item__item"><a href="/projects">Projects</a></p>
          <p class="item__item"><a href="/about">About</a></p>
          <p class="item__item">
            <a href="https://github.com/GiulianoGia" target="_blank">Github</a>
          </p>
          <p class="item__item">
            <a
              href="https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaagigi3"
              target="_blank"
              >Intranet</a
            >
          </p>
        </div>
        <div v-else>
          <img class="flexbox__image" src="@/assets/img/more.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Navbar.ts"></script>
<style src="./Navbar.scss" lang="scss"></style>
