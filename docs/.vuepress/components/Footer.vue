<template>
  <footer class="site-footer">
    <div class="site-description">
      I
      <a
        class="site-footer-link"
        href="https://github.com/crimx"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >code</a>,
      <a
        class="site-footer-link"
        href="https://codepen.io/straybugs"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >doodle</a>,
      <a
        class="site-footer-link"
        href="https://twitter.com/straybugs"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >tweet</a>
      &amp;
      <a
        class="site-footer-link"
        href="https://blog.crimx.com"
        target="_blank"
        rel="nofollow noreferrer noopener"
      >blog</a>.
    </div>
    <div class="copyright">
      © COPYRIGHT 2019 · Made With
      <svg
        viewBox="0 0 32 32"
        width="1em"
        height="1em"
        style="position: relative; top: -2px;"
      >
        <title>love</title>
        <path
          fill="#dd4b39"
          d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
        />
      </svg>
      by CRIMX
    </div>
  </footer>
</template>

<style lang="scss">
.site-footer {
  background-color: #1e1d1d;
  padding: 13px 13px;
  // padding-left: 20rem;
  color: #666;
  padding-top: 40px;
}

// .theme-container.no-sidebar .site-footer {
//   @media (min-width: 720px) {
//     padding-left: 13px;
//   }
// }

.site-footer-link {
  color: #209cee;
}

.site-description {
  margin-bottom: 6px;
  // padding-top: 50px;
  text-align: center;
  text-transform: uppercase;

  &::before {
    content: '';
    display: block;
    width: 50%;
    height: 5px;
    margin: 0 auto 25px;
    background-color: #209cee;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    margin: 13px auto;
    height: 1px;
    background: #4a4a4a;
    transform: scaleY(0.5);
  }
}

.copyright {
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.9em;
  }
}
</style>
