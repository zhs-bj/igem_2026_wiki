<template>
  <footer class="custom-footer">
    <div class="footer-wrapper">
      <div class="logos">
        <a href="https://www.yfc.cn/" target="_blank">
          <img class="logo" src="https://static.igem.wiki/teams/5115/czh/yf-lyh.svg" alt="yfc.cn">
        </a>
        <a href="https://www.fudan.edu.cn/en/" target="_blank">
          <img class="logo" src="https://static.igem.wiki/teams/5115/czh/fudan-lyh.svg" alt="www.fudan.edu.cn">
        </a>
        <a href="/fudan/description/" target="_blank">
          <img class="logo-description" src="https://static.igem.wiki/teams/5115/czh/description.svg" alt="description">
        </a>
        <a href="https://life.fudan.edu.cn/main.htm" target="_blank">
          <img class="logo" src="https://static.igem.wiki/teams/5115/czh/life-lyh.svg" alt="life.fudan.edu.cn">
        </a>
        <a href="https://2026.igem.wiki/fudan/">
          <img class="logo home-logo" src="https://static.igem.wiki/teams/5115/czh/logo-trans.svg" alt="Team Fudan #iGEM2026">
        </a>
      </div>
      <hr />
      <div class="footer-contact">
        <p><small>&copy; 2026 - Content on this site is licensed under a
            <a class="custom-link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license</a>.
        </small>
        <br><small>The repository used to create this website is available at
            <a class="custom-link" href="https://gitlab.igem.org/2026/fudan" target="_blank">gitlab.igem.org/2026/fudan</a>.
        </small></p>
      </div>
      <div class="social-links" style="padding-bottom:2rem !important">
        Contact&nbsp;us:&nbsp;<a class="custom-link" href="mailto:igem@fudan.edu.cn" target="_blank">igem@fudan.edu.cn</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  background: linear-gradient(180deg, #f0f9f4 0%, #e0f0e8 100%);
  border-top: 1px solid rgba(138, 192, 168, 0.2);
  padding-top: 3rem;
}

.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
}

.logo {
  height: 50px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 1;
}

.logo-description {
  height: 60px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.logo-description:hover {
  opacity: 1;
}

.home-logo {
  height: 70px;
}

hr {
  border: none;
  border-top: 1px solid rgba(138, 192, 168, 0.3);
  margin: 1.5rem 0;
}

.footer-contact {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.8;
}

.custom-link {
  color: #3A7D8C;
  text-decoration: none;
  border-bottom: 1px dashed #3A7D8C;
  transition: all 0.3s ease;
}

.custom-link:hover {
  color: #5BA8B0;
  border-bottom-style: solid;
}

.social-links {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .logos {
    gap: 1rem;
  }
  .logo {
    height: 36px;
  }
  .logo-description {
    height: 44px;
  }
  .home-logo {
    height: 50px;
  }
}
</style>
