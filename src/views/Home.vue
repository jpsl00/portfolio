<template>
  <section class="hero is-fullheight-with-navbar is-info is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          João Pedro
        </h1>
        <h2 class="subtitle">
          <!-- Full-stack developer --> <!-- I guess? -->
        </h2>
        <a href="https://github.com/jpsl00">
          <span class="icon is-medium">
            <fa :icon="['fab', 'github']" size="lg" />
          </span>
        </a>
        <a href="https://gitlab.com/jpsl00">
          <span class="icon is-medium">
            <fa :icon="['fab', 'gitlab']" size="lg" />
          </span>
        </a>
        <a href="https://twitter.com/jpsl00">
          <span class="icon is-medium">
            <fa :icon="['fab', 'twitter']" size="lg" />
          </span>
        </a>
      </div>
    </div>

    <div class="hero-foot">

    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
