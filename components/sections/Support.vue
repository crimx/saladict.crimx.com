<template>
  <section>
    <b-container>
      <h1 class="text-md-center text-capitalize mb-4">支持本项目</h1>
      <b-row class="justify-content-md-center">
        <b-col md="10">
          <i18n path="support.content" tag="p">
            <kbd place="star">★Star</kbd>
            <a
              place="github"
              href="https://github.com/crimx/ext-saladict"
              target="_blank"
              rel="nofollow noopener noreferrer"
              v-text="'Github'"
            />
            <a
              v-t="'cws'"
              place="chrome"
              href="https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg/reviews?hl=en"
              target="_blank"
              rel="nofollow noopener noreferrer"
            />
            <a
              v-t="'amo'"
              place="firefox"
              href="https://addons.mozilla.org/firefox/addon/ext-saladict/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            />
            <a
              v-t="'support.contribute'"
              place="contribute"
              href="https://github.com/crimx/ext-saladict/graphs/contributors"
              target="_blank"
              rel="nofollow noopener noreferrer"
            />
          </i18n>
        </b-col>
        <b-col md="10">
          <p class="d-flex justify-content-center">
            <img
              class="mx-md-4"
              src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/wechat.png"
              alt="Wecaht QR code"
              width="200"
              height="200"
            />
            <img
              class="mx-md-4"
              style="background: #000"
              src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/alipay.png"
              alt="Alipay QR code"
              width="200"
              height="200"
            />
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
