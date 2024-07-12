<script>
import Saluto from './components/Saluto.vue'
import Modale from './components/Modale.vue'

export default {
  data() {
    return {
      testoMessaggio: "CIAOO",
    }
  },
  components: {
    Saluto,
    Modale
  },
  methods: {
    salutaClasse(testo) {
      alert(`CIAOO CLASSE 128 siete stanchi? Il valore specificato è: ${testo}`);
    },

    salutaPubblico() {
      alert('ciao pubblico');
    },
    insultaPubblico() {
      alert('cattivo pubblico');
    },

    noVoglia() {
      alert('zitto');
    }
  }
}
</script>

<template>
  <Saluto :messaggio="testoMessaggio" @bottoneCliccato="salutaClasse"/>

  <Modale title="Vuoi salutare il pubblico?" @ok="salutaPubblico()" @cancel="insultaPubblico()" />
  <Modale title="hai voglia di lavorare?" @ok="noVoglia()" @cancel="noVoglia()" />

</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
