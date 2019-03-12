<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="../assets/logo320x320.png">
      </router-link>

      <span class="navbar-burger burger" data-target="burgerTarget">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div id="burgerTarget" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
        <router-link class="navbar-item" to="/about">
          About
        </router-link>
        <router-link class="navbar-item" to="/projects">
          Projects
        </router-link>
      </div>
    </div>
  </nav>
</template>
