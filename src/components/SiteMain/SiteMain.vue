<template>
  <main>
    <div class="container">
      <About />
      <Line />
      <TizimCase :datas="imkoniyat" />
      <Line />
      <TizimCase :datas="people" />
      <Line />
      <Startedw />
      <Line />
      <TizimCase :datas="addFunc" />
      <Line />
      <TizimCase :datas="advantage" />
    </div>
  </main>
</template>
<script>
import About from '../About/About.vue';
import Line from '../Line/Line.vue';
import TizimCase from '../TizimCase/TizimCase.vue';
import Startedw from '../Startedw/Startedw.vue';

export default {
  components: { About, Line, TizimCase, Startedw },
  data() {
    return {
      imkoniyat: {
        titleC: 'Тизим',
        title: 'имкониятлари',
        text1: 'Ўқувчиларнинг юзларини таниб олиш орқали давомат юритиш;',
        text2: 'Ўқувчиларнинг дарсни қолдириш ҳолатларини қайд этиш ва ота-онага хабар бериш;',
        text3: 'Ходимларнинг ишга келиш-кетиш вақтларини қайд этиш ва ҳисоблаш;',
        imgsrc: './src/assets/images/ca.png',
      },
      people: {
        titleC: 'Тизимда',
        title: 'ҳал қиладиган масалалар',
        text1: 'ўқувчи ва ўқитувчилар интизомини кучайиб, кеч қолишлар камаяди;',
        text2: 'Фаол ва фойдали ходимларни рағбатлантириш(KPI) орқали маблағлар мақсадли йўналтирилади;',
        text3: 'Дарслар сифатини янги босқичга чиқиб, уларнинг сермаҳсуллиги оширилади;',
        imgsrc: './src/assets/images/people.png',
      },
      addFunc: {
        titleC: 'Чакана савдогарлар',
        title: 'учун қўшимча функциялар',
        text1: 'Мижозларнинг ташриш буюриш вақтини ҳисобга олиш',
        text2: 'Харид амалга оширган мижозларнинг ҳисобини юритиш',
        text3: '',
        imgsrc: './src/assets/images/bag.svg',
      },
      advantage: {
        titleC: 'Heгa айнан',
        title: 'iStream ва у нимаси билан афзал?',
        text1: 'Осон созлама;',
        text2: 'Қисқа фурсатда шахсий кабинет яратиш. Анъанавий дастурий таъминот ўрнига булутли хизмат;',
        text3: 'Сифатли техник ёрдам. Доимий янгиланиш ва янги имкониятлар қўшилиб борилиши;',
        imgsrc: './src/assets/images/layers.svg',
      }

    }
  }
}

</script>
<style></style>