<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered is-centered">
          <div class="column box is-narrow">
            <article class="media">
              <!-- <figure class="media-left"> -->
                <span class="media-left icon is-large has-text-warning">
                  <fa icon="exclamation-circle" size="2x"/>
                </span>
              <!-- </figure> -->
              <div class="media-content">
                <div class="field">
                  <h2 class="title is-2 has-text-warning">
                    404
                  </h2>
                  <h5 class="subtitle is-5 has-text-dark">
                    A página que você está procurando não existe...
                  </h5>
                </div>
                <router-link to="/" class="button is-text">
                  <span class="icon">
                    <fa icon="arrow-left" />
                  </span>
                  <span>
                    Home
                  </span>
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>
