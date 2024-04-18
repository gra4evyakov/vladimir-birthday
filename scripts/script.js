new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "SEX ИНСТРУКТОР",
          artist: "KO$HMAR",
          cover: "./img/ko$hmar.png",
          source: "./mp3/sex.mp3",
          text: `
          [ИНТРО] <br />
          Эй, девчонки, это Владимир, секс инструктор, плывите ко мне <br />
          Да, ты знаешь детка, я - ключ к твоей радости в судьбе <br />
          <br />
          [КУПЛЕТ] <br />
          Смело подходи, я не кусаюсь <br />
          Да я грешен бейби, и я в этом каюсь <br />
          От техники движений до вау эффекта <br />
          Со мной ты станешь, богиней момента <br />
          <br />
          Сексуальный магнит, я среди толпы <br />
          Обниму тебя крепко, вместе будем мы <br />
          И что хотят девчонки, я точно знаю <br />
          Сделать этот мир, сексуальным раем <br />
          <br />
          [ПРИПЕВ] <br />
          Я - Владимир, гуру секса <br />
          От меня никуда не деться <br />
          Бог страсти и момента <br />
          Я хочу тебя безответно<br />
          <br />
          Я - Владимир, гуру секса <br />
          От меня никуда не деться <br />
          Бог страсти и момента <br />
          Я хочу тебя безответно <br />
          <br />
          [БРИДЖ] <br />
          На стене календарь, ко мне места нет <br />
          Встречи с девчонками, вечером и в обед <br />
          От первого касания до последнего вздоха <br />
          После секса со мной, новая эпоха <br />
          <br />
          [ПРИПЕВ] <br />
          Я - Владимир, гуру секса <br />
          От меня никуда не деться <br />
          Бог страсти и момента <br />
          Я хочу тебя безответно <br />
          <br />
          Я - Владимир, гуру секса <br />
          От меня никуда не деться <br />
          Бог страсти и момента <br />
          Я хочу тебя безответно <br />
          <br />`,
          favorited: false,
        },
        {
          name: "МУЖ НА ЧАС",
          artist: "KO$HMAR",
          cover: "./img/ko$hmar.png",
          source: "./mp3/houre.mp3",
          text: `
          [ИНТРО] <br />
          Я не новичёк <br />
          Сделаю ремонт твоей маме это не в счет <br />
          Я не новичёк <br />
          Давай раздевайся сука, пока не пришел сынок <br />
          <br />
          [КУПЛЕТ] <br />
          Вот она открыла дверь, буду драть её как зверь <br />
          Говорит: "Повесь мне полку", сука как мне лень <br />
          Её жопа как желе Растишка, боже что за день <br />
          На её чуть мокрой шее натяну ремень <br />
          <br />
          Что ты сказала? Ты мужа на час вызывала? <br />
          Буду тебя вечность трахать и мне будет мало <br />
          Ты Украинка? я намажу твою жопу салом <br />
          Потом ремонт, а разъебу тебе очко сначала <br />
          <br />
          [ПРИПЕВ] <br />
          Ты моя клиентка, мамочка конфетка <br />
          Забиваю гвоздь и заряжаю тебе в жопу метко <br />
          Эй расслабься детка, ну расслабься детка <br />
          Пососи мой хуй он длинный будто кинолента <br />
          <br />
          Ты моя клиентка, мамочка конфетка <br />
          Забиваю гвоздь и заряжаю тебе в жопу метко <br />
          Эй расслабься детка, ну расслабься детка <br />
          Пососи мой хуй, он длинный будто кинолента <br />
          `,
          favorited: false,
        },
        {
          name: "ТАТУ МАСТЕР",
          artist: "KO$HMAR",
          cover: "./img/ko$hmar.png",
          source: "./mp3/tattoo.mp3",
          text: `
          [ИНТРО] <br />
          Я кошмар, а ты пидор <br />
          Застрелю тебя мигом <br />
          Ты хохол, а я киллер <br />
          Вам пизда будто вы Киев <br />
          <br />
          [КУПЛЕТ 1] <br />
          Я в своем клубе, босс в деле <br />
          Твоя мать - моя шлюха, люблю её клитор <br />
          На коже темные картины, а что вы суки хотели <br />
          Я рисую жизнь, это факт, не спорь пидор <br />
          <br />
          Каждая линия на моем теле - это драйв <br />
          Подсел на татушки, словно на чистый мет <br />
          Для меня трахать твою мать — это лютый кайф <br />
          На твоей коже отпечаток — это мой след <br />
          <br />
          [ПРИПЕВ] <br />
          В темном клубе, где звучит бит <br />
          Я встречаю клиентов, я вас всех ебал <br />
          На коже линии сжирают тебя, словно термит <br />
          Татуировщик, чей стиль — это криминал <br />
          <br />
          [КУПЛЕТ 2] <br />
          Студия моя — это зона света <br />
          После татухи я тебя обоссу, просто знай это <br />
          Нет ты не спишь, я кошмар наяву <br />
          Ложиcь на кушетку я тебе жопу порву <br />
          <br />
          Каждая моя черта, это как бэнг-бэнг <br />
          Ты просто хуесос не и шаришь за наш слэнг <br />
          Это кошмар и мои братья, лютый DRILL GANG <br />
          Приводи свою мамашу мы устроим гэнг-бэнг <br />
          <br />
          [ПРИПЕВ] <br />
          В темном клубе, где звучит бит <br />
          Я встречает клиентов, я вас всех ебал <br />
          На коже линии, сжирают тебя словно термит <br />
          Татуировщик, чей стиль — это криминал <br />`,
          favorited: false,
        },
        {
          name: "СЫН АЗЕРОТА",
          artist: "KO$HMAR",
          cover: "./img/ko$hmar.png",
          source: "./mp3/azeroth.mp3",
          text: `
          [ПРИПЕВ] <br />
          Залетает на сервер, варлок или шаман <br />
          Может мать его хантер и приручённый кабан <br />
          Близард ахуевает, кто ебёт весь сервак? <br />
          Тут Владимир ебашит, всем порвёт он пердак <br />
          <br />
          [КУПЛЕТ 1] <br />
          Азерот сосет хуй мой, с наслаждением и душой <br />
          Копи разъебал на чиле, выйграю я ролл любой <br />
          Трахнул короля Лича и на нем моя моча <br />
          Ледяная скорбь на мне теперь я в роли палача <br />
          <br />
          В глубинах Огненных Недр, где стоит Рагнарос <br />
          Там ебу его жестко и раскрошу ебасос <br />
          От Оргриммара до Штормграда ну ка живо пиздуй <br />
          Вы Олени на колени и сосите мой хуй <br />
          <br />
          [БРИДЖ] <br />
          Я Рождённый в Азероте <br />
          А ты пидор на работе <br />
          На Арене слышу гонг <br />
          Теперь ты жук, а я Кинг-Конг <br />
          <br />
          Я прист ЦП, ты ДЦП <br />
          Я фури вар и твой кошмар <br />
          Я фаер маг, а ты мудак <br />
          Я энх шаман, а ты еблан <br />
          <br />
          [ПРИПЕВ] <br />
          Залетает на сервер, варлок или шаман <br />
          Может мать его хантер и приручённый кабан <br />
          Близард ахуевает, кто ебёт весь сервак? <br />
          Тут Владимир ебашит, всем порвёт он пердак <br />
          `,
          favorited: false,
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null,
      dialogIsOpen: true,
      textIsOpen: false,
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited =
        !this.tracks[this.currentTrackIndex].favorited;
    },
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement("link");
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image";
      document.head.appendChild(link);
    }
  },
});
