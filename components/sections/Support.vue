<template>
  <section>
    <b-container>
      <h1 v-t="'support.title'" class="text-md-center text-capitalize mb-4" />
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
          <i18n path="support.periodically" tag="p" class="text-center">
            <a
              place="patreon"
              href="https://www.patreon.com/saladict"
              target="_blank"
              >Patreon</a
            >
            <a place="afdian" href="https://afdian.net/@crimx" target="_blank"
              >爱发电</a
            >
          </i18n>
        </b-col>
        <b-col md="10 mb-1">
          <div class="d-flex justify-content-center mb-4">
            <div class="mx-md-4">
              <a
                href="https://www.patreon.com/saladict"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <b-img
                  fluid
                  src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/patreon.png"
                  alt="Patreon Saladict"
                  width="217"
                  height="51"
                />
              </a>
            </div>
            <div class="mx-md-4">
              <a
                href="https://afdian.net/@crimx"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <b-img
                  class="mx-md-4"
                  fluid
                  src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/afdian.png"
                  alt="爱发电 Saladict"
                  width="217"
                  height="51"
                />
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="10">
          <p v-t="'support.scanqr'" class="text-center" />
        </b-col>
        <b-col md="10">
          <div class="d-flex justify-content-center mb-4">
            <div class="mx-md-4">
              <b-img
                fluid
                src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/wechat.png"
                alt="Wecaht QR code"
                width="200"
                height="200"
              />
            </div>
            <div class="mx-md-4">
              <b-img
                class="mx-md-4"
                fluid
                src="https://raw.githubusercontent.com/wiki/crimx/ext-saladict/images/alipay.png"
                alt="Alipay QR code"
                width="200"
                height="200"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
