<template>
  <section>
    <h2><span>Тизимда</span>ишлаш нимадан бошланади</h2>
    <ul>
      <WorkItem v-for="item in workitems" :workitem="item" />
    </ul>
  </section>
</template>
<script>
import WorkItem from '../WorkItem/WorkItem.vue';

export default {
  components: { WorkItem },
  data() {
    return {
      workitems: [
        {
          text: 'Рўйхатдан ўтиш',
          id: 1,
          logo: '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="none"><path fill="#9BAEC7" d="M69 72.297h-2.913c-3.067 0-5.98 1.188-8.127 3.335l-6.555 6.478c-2.99 2.952-7.858 2.952-10.848 0l-6.555-6.478c-2.147-2.147-5.099-3.335-8.127-3.335H23c-6.363 0-11.5-5.099-11.5-11.385V19.09c0-6.287 5.137-11.385 11.5-11.385h46c6.363 0 11.5 5.098 11.5 11.385v41.822c0 6.248-5.137 11.385-11.5 11.385Z" opacity=".4"/><path fill="#9BAEC7" d="M46 39.905a8.932 8.932 0 1 0 0-17.863 8.932 8.932 0 0 0 0 17.863ZM56.273 57.73c3.105 0 4.907-3.45 3.182-6.018-2.607-3.872-7.667-6.479-13.455-6.479S35.15 47.84 32.545 51.712c-1.725 2.568.076 6.018 3.181 6.018h20.547Z"/></svg>',
        },
        {
          text: 'Мобил телефон/ижтимоий тармоқ / ЭРИ калити орқали авторизациядан ўтиш',
          id: 2,
          logo: '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="none"><path fill="#9BAEC7" d="M62.253 7.667H29.747c-10.58 0-14.414 3.833-14.414 14.605v47.456c0 10.772 3.834 14.605 14.414 14.605h32.468c10.618 0 14.452-3.833 14.452-14.605V22.272c0-10.772-3.834-14.605-14.414-14.605Z" opacity=".4"/><path fill="#9BAEC7" d="M53.667 23.958H38.333a2.896 2.896 0 0 1-2.875-2.875 2.896 2.896 0 0 1 2.875-2.875h15.334a2.896 2.896 0 0 1 2.875 2.875 2.896 2.896 0 0 1-2.875 2.875ZM46 73.983a6.708 6.708 0 1 0 0-13.416 6.708 6.708 0 0 0 0 13.416Z"/></svg>',
        },
        {
          text: 'Модерациядан ўтиш',
          id: 3,
          logo: '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="none"><path fill="#20B2FF" d="M78.238 26.68v10.887l-49.871 36.57-10.082-7.552c-2.492-1.878-4.523-5.903-4.523-9.008V26.68c0-4.293 3.296-9.047 7.321-10.542L42.052 8.28c2.185-.805 5.711-.805 7.896 0l20.969 7.858c4.025 1.495 7.321 6.249 7.321 10.542Z" opacity=".4"/><path fill="#20B2FF" d="M78.238 42.818v14.759c0 3.105-2.031 7.13-4.523 9.008L52.747 82.263c-1.84 1.38-4.294 2.07-6.747 2.07-2.453 0-4.907-.69-6.747-2.07l-7.36-5.481 46.345-33.964Z"/></svg>',
        },
        {
          text: 'Бирламчи маълумотларни қўшиш/юр. шахснинг реквизитлари',
          id: 4,
          logo: '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="none"><path fill="#9BAEC7" d="M80.845 82.417a1.898 1.898 0 0 1-1.917 1.916H13.072a1.898 1.898 0 0 1-1.917-1.916c0-15.87 15.64-28.75 34.845-28.75 3.948 0 7.782.536 11.308 1.571a15.417 15.417 0 0 0-3.641 9.929c0 2.875.805 5.596 2.223 7.896a14.118 14.118 0 0 0 2.913 3.489A15.03 15.03 0 0 0 69 80.5a15.19 15.19 0 0 0 10.925-4.6c.613 2.07.92 4.255.92 6.517Z" opacity=".4"/><path fill="#9BAEC7" d="M80.385 54.932c-2.76-3.144-6.862-5.099-11.385-5.099a15.313 15.313 0 0 0-11.002 4.639 15.328 15.328 0 0 0-4.331 10.695c0 2.875.805 5.596 2.223 7.896a14.121 14.121 0 0 0 2.913 3.489A15.03 15.03 0 0 0 69 80.5c5.597 0 10.465-2.99 13.11-7.437a14.314 14.314 0 0 0 1.763-4.331c.307-1.15.46-2.339.46-3.565 0-3.91-1.495-7.514-3.948-10.235ZM74.75 67.965h-2.875v2.99A2.896 2.896 0 0 1 69 73.83a2.896 2.896 0 0 1-2.875-2.875v-2.99H63.25a2.896 2.896 0 0 1-2.875-2.875 2.896 2.896 0 0 1 2.875-2.875h2.875v-2.722A2.896 2.896 0 0 1 69 56.618a2.896 2.896 0 0 1 2.875 2.875v2.722h2.875a2.896 2.896 0 0 1 2.875 2.875 2.896 2.896 0 0 1-2.875 2.875ZM46 46c10.585 0 19.167-8.581 19.167-19.167 0-10.585-8.582-19.166-19.167-19.166-10.586 0-19.167 8.581-19.167 19.166C26.833 37.42 35.414 46 46 46Z"/></svg>',
        },
        {
          text: 'Кузатув ва стриминг учун хоналарни қўшиш',
          id: 5,
          logo: '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="none"><path fill="#9BAEC7" d="M69 72.297h-2.913c-3.067 0-5.98 1.188-8.127 3.335l-6.555 6.478c-2.99 2.952-7.858 2.952-10.848 0l-6.555-6.478c-2.147-2.147-5.099-3.335-8.127-3.335H23c-6.363 0-11.5-5.099-11.5-11.385V19.09c0-6.287 5.137-11.385 11.5-11.385h46c6.363 0 11.5 5.098 11.5 11.385v41.822c0 6.248-5.137 11.385-11.5 11.385Z" opacity=".4"/><path fill="#9BAEC7" d="M46 39.905a8.932 8.932 0 1 0 0-17.863 8.932 8.932 0 0 0 0 17.863ZM56.273 57.73c3.105 0 4.907-3.45 3.182-6.018-2.607-3.872-7.667-6.479-13.455-6.479S35.15 47.84 32.545 51.712c-1.725 2.568.076 6.018 3.181 6.018h20.547Z"/></svg>',
        },
      ]
    }
  }
}
</script>
<style scoped>
section {
  margin-top: 160px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 160px;
}

li:nth-child(2n) {
  margin-left: auto;
  opacity: 0.84;
}

li:nth-child(1)::after {
  content: '';
  position: absolute;
  width: 410px;
  height: 80px;
  right: -320px;
  top: 70px;
  background-image: url(../../assets/images/vectorR.svg);
  background-repeat: no-repeat;
}

li:nth-child(3)::after {
  content: '';
  position: absolute;
  width: 410px;
  height: 80px;
  right: -320px;
  top: 70px;
  background-image: url(../../assets/images/vectorB.svg);
  background-repeat: no-repeat;
  z-index: -1;
}

li:nth-child(2n)::before {
  content: '';
  position: absolute;
  width: 360px;
  height: 77px;
  /* display: block; */
  left: -370px;
  bottom: 3px;
  background-image: url(../../assets/images/vector.svg);

}

li:nth-child(3) {
  border-radius: 12px;
  background: #535F6F;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 8px 18px 0px rgba(0, 0, 0, 0.10), 0px 32px 32px 0px rgba(0, 0, 0, 0.09), 0px 73px 44px 0px rgba(0, 0, 0, 0.05), 0px 129px 52px 0px rgba(0, 0, 0, 0.01), 0px 202px 56px 0px rgba(0, 0, 0, 0.00);
}



span {
  display: block;
  color: #D1D1D1;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

h2 {
  max-width: 631px;
  color: #FFF;
  text-shadow: 0px 0px 0px rgba(22, 25, 29, 0.10), 0px 2px 4px rgba(22, 25, 29, 0.10), 0px 7px 7px rgba(22, 25, 29, 0.09), 0px 15px 9px rgba(22, 25, 29, 0.05), 0px 26px 10px rgba(22, 25, 29, 0.01), 0px 41px 11px rgba(22, 25, 29, 0.00);
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 50px;
}
</style>