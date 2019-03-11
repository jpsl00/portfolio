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

      <a role="button" class="navbar-burger burger" data-target="burgerTarget">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="burgerTarget" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
      </div>
    </div>
  </nav>
</template>
