<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id_iv"
        class="d-flex child-flex"
        cols="2"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            id="cardIV"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img
              :src="item.thumnail"
              aspect-ratio="1"
              class="grey lighten-2"
              @click.stop="onClickIV(item)"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <!-- <div class="infoIV">
            <v-btn class="mx-2" fab dark small color="primary">
              <v-icon dark> mdi-information-variant </v-icon>
            </v-btn>
          </div> -->
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="720">
      <v-card>
        <v-card-title>Image-Video ID: {{ idiv }}</v-card-title>
        <v-card-text>
          <div v-if="typeiv.includes('image')">
            <img width="100%" :src="linkIV" />
          </div>
          <div v-else>
            <video width="100%" :src="linkIV" autoplay>
                <source :src="linkIV" :type="typeiv">
            </video>
          </div>
        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Đóng
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          _id: "5fed816f8114aa36c198e277",
          id_iv: "fR3inlY",
          type: "image/jpeg",
          link: "https://i.imgur.com/fR3inlY.jpg",
          datetime: 1601370173,
          thumnail: "https://i.imgur.com/fR3inlYm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e278",
          id_iv: "Kgt1kCo",
          type: "image/gif",
          link: "https://i.imgur.com/Kgt1kCo.gif",
          datetime: 1609311425,
          thumnail: "https://i.imgur.com/Kgt1kCom.gif",
        },
        {
          _id: "5fed816f8114aa36c198e279",
          id_iv: "4S0HItg",
          type: "image/gif",
          link: "https://i.imgur.com/4S0HItg.gif",
          datetime: 1609311831,
          thumnail: "https://i.imgur.com/4S0HItgm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e27a",
          id_iv: "lCjelty",
          type: "image/gif",
          link: "https://i.imgur.com/lCjelty.gif",
          datetime: 1609312387,
          thumnail: "https://i.imgur.com/lCjeltym.gif",
        },
        {
          _id: "5fed816f8114aa36c198e27b",
          id_iv: "GP2p2qf",
          type: "image/gif",
          link: "https://i.imgur.com/GP2p2qf.gif",
          datetime: 1609312421,
          thumnail: "https://i.imgur.com/GP2p2qfm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e27c",
          id_iv: "OUAEpAv",
          type: "image/gif",
          link: "https://i.imgur.com/OUAEpAv.gif",
          datetime: 1609322826,
          thumnail: "https://i.imgur.com/OUAEpAvm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e27d",
          id_iv: "swbQPNm",
          type: "image/gif",
          link: "https://i.imgur.com/swbQPNm.gif",
          datetime: 1609323063,
          thumnail: "https://i.imgur.com/swbQPNmm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e27e",
          id_iv: "NdvBG0f",
          type: "image/gif",
          link: "https://i.imgur.com/NdvBG0f.gif",
          datetime: 1609329269,
          thumnail: "https://i.imgur.com/NdvBG0fm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e27f",
          id_iv: "oQXRmQi",
          type: "image/gif",
          link: "https://i.imgur.com/oQXRmQi.gif",
          datetime: 1609334352,
          thumnail: "https://i.imgur.com/oQXRmQim.gif",
        },
        {
          _id: "5fed816f8114aa36c198e280",
          id_iv: "sZROhrN",
          type: "image/jpeg",
          link: "https://i.imgur.com/sZROhrN.jpg",
          datetime: 1609339324,
          thumnail: "https://i.imgur.com/sZROhrNm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e281",
          id_iv: "UlnXq8M",
          type: "image/gif",
          link: "https://i.imgur.com/UlnXq8M.gif",
          datetime: 1609347771,
          thumnail: "https://i.imgur.com/UlnXq8Mm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e282",
          id_iv: "A7HMg65",
          type: "image/gif",
          link: "https://i.imgur.com/A7HMg65.gif",
          datetime: 1609349276,
          thumnail: "https://i.imgur.com/A7HMg65m.gif",
        },
        {
          _id: "5fed816f8114aa36c198e283",
          id_iv: "WXvs6Nt",
          type: "image/gif",
          link: "https://i.imgur.com/WXvs6Nt.gif",
          datetime: 1609393283,
          thumnail: "https://i.imgur.com/WXvs6Ntm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e284",
          id_iv: "3V8Au00",
          type: "image/gif",
          link: "https://i.imgur.com/3V8Au00.gif",
          datetime: 1609393400,
          thumnail: "https://i.imgur.com/3V8Au00m.gif",
        },
        {
          _id: "5fed816f8114aa36c198e285",
          id_iv: "DWUfIve",
          type: "image/gif",
          link: "https://i.imgur.com/DWUfIve.gif",
          datetime: 1609393570,
          thumnail: "https://i.imgur.com/DWUfIvem.gif",
        },
        {
          _id: "5fed816f8114aa36c198e286",
          id_iv: "9hdiWT9",
          type: "image/jpeg",
          link: "https://i.imgur.com/9hdiWT9.jpg",
          datetime: 1601370173,
          thumnail: "https://i.imgur.com/9hdiWT9m.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e287",
          id_iv: "A12rKuY",
          type: "image/jpeg",
          link: "https://i.imgur.com/A12rKuY.jpg",
          datetime: 1601370173,
          thumnail: "https://i.imgur.com/A12rKuYm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e288",
          id_iv: "n49jnjM",
          type: "image/jpeg",
          link: "https://i.imgur.com/n49jnjM.jpg",
          datetime: 1601370173,
          thumnail: "https://i.imgur.com/n49jnjMm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e289",
          id_iv: "7QpSog8",
          type: "image/jpeg",
          link: "https://i.imgur.com/7QpSog8.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/7QpSog8m.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e28a",
          id_iv: "XCbgRwV",
          type: "image/jpeg",
          link: "https://i.imgur.com/XCbgRwV.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/XCbgRwVm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e28b",
          id_iv: "b6N39rE",
          type: "image/jpeg",
          link: "https://i.imgur.com/b6N39rE.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/b6N39rEm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e28c",
          id_iv: "qqlIotA",
          type: "image/jpeg",
          link: "https://i.imgur.com/qqlIotA.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/qqlIotAm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e28d",
          id_iv: "yhK7ySQ",
          type: "image/jpeg",
          link: "https://i.imgur.com/yhK7ySQ.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/yhK7ySQm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e28e",
          id_iv: "Hu6FoQw",
          type: "image/jpeg",
          link: "https://i.imgur.com/Hu6FoQw.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/Hu6FoQwm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e28f",
          id_iv: "4OwHtRL",
          type: "image/jpeg",
          link: "https://i.imgur.com/4OwHtRL.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/4OwHtRLm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e290",
          id_iv: "2a5Jcfv",
          type: "image/jpeg",
          link: "https://i.imgur.com/2a5Jcfv.jpg",
          datetime: 1601370172,
          thumnail: "https://i.imgur.com/2a5Jcfvm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e291",
          id_iv: "4JloS2X",
          type: "image/jpeg",
          link: "https://i.imgur.com/4JloS2X.jpg",
          datetime: 1601370171,
          thumnail: "https://i.imgur.com/4JloS2Xm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e292",
          id_iv: "0HvtnWo",
          type: "image/jpeg",
          link: "https://i.imgur.com/0HvtnWo.jpg",
          datetime: 1601284272,
          thumnail: "https://i.imgur.com/0HvtnWom.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e293",
          id_iv: "AUQm630",
          type: "video/mp4",
          link: "https://i.imgur.com/AUQm630.mp4",
          datetime: 1601279606,
          thumnail: "https://i.imgur.com/AUQm630m.mp4",
        },
        {
          _id: "5fed816f8114aa36c198e294",
          id_iv: "Ge8tIne",
          type: "image/jpeg",
          link: "https://i.imgur.com/Ge8tIne.jpg",
          datetime: 1601279600,
          thumnail: "https://i.imgur.com/Ge8tInem.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e295",
          id_iv: "NiK1pX1",
          type: "image/png",
          link: "https://i.imgur.com/NiK1pX1.png",
          datetime: 1606805541,
          thumnail: "https://i.imgur.com/NiK1pX1m.png",
        },
        {
          _id: "5fed816f8114aa36c198e296",
          id_iv: "bXSAK6T",
          type: "image/gif",
          link: "https://i.imgur.com/bXSAK6T.gif",
          datetime: 1606806187,
          thumnail: "https://i.imgur.com/bXSAK6Tm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e297",
          id_iv: "nJhzWdh",
          type: "image/jpeg",
          link: "https://i.imgur.com/nJhzWdh.jpg",
          datetime: 1606816683,
          thumnail: "https://i.imgur.com/nJhzWdhm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e298",
          id_iv: "F3opOY5",
          type: "image/jpeg",
          link: "https://i.imgur.com/F3opOY5.jpg",
          datetime: 1607504739,
          thumnail: "https://i.imgur.com/F3opOY5m.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e299",
          id_iv: "o8AL7sW",
          type: "image/gif",
          link: "https://i.imgur.com/o8AL7sW.gif",
          datetime: 1607507766,
          thumnail: "https://i.imgur.com/o8AL7sWm.gif",
        },
        {
          _id: "5fed816f8114aa36c198e29a",
          id_iv: "dgAWL9Y",
          type: "image/jpeg",
          link: "https://i.imgur.com/dgAWL9Y.jpg",
          datetime: 1607504749,
          thumnail: "https://i.imgur.com/dgAWL9Ym.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e29b",
          id_iv: "fBV47X0",
          type: "image/jpeg",
          link: "https://i.imgur.com/fBV47X0.jpg",
          datetime: 1607504737,
          thumnail: "https://i.imgur.com/fBV47X0m.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e29c",
          id_iv: "PR6VodF",
          type: "image/jpeg",
          link: "https://i.imgur.com/PR6VodF.jpg",
          datetime: 1607504735,
          thumnail: "https://i.imgur.com/PR6VodFm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e29d",
          id_iv: "VFJ4Xgv",
          type: "image/jpeg",
          link: "https://i.imgur.com/VFJ4Xgv.jpg",
          datetime: 1607504704,
          thumnail: "https://i.imgur.com/VFJ4Xgvm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e29e",
          id_iv: "TAiwl7I",
          type: "image/jpeg",
          link: "https://i.imgur.com/TAiwl7I.jpg",
          datetime: 1607504747,
          thumnail: "https://i.imgur.com/TAiwl7Im.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e29f",
          id_iv: "NiDs2IT",
          type: "image/jpeg",
          link: "https://i.imgur.com/NiDs2IT.jpg",
          datetime: 1607504746,
          thumnail: "https://i.imgur.com/NiDs2ITm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a0",
          id_iv: "spo72Ov",
          type: "image/jpeg",
          link: "https://i.imgur.com/spo72Ov.jpg",
          datetime: 1607504702,
          thumnail: "https://i.imgur.com/spo72Ovm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a1",
          id_iv: "UVgTOuA",
          type: "image/jpeg",
          link: "https://i.imgur.com/UVgTOuA.jpg",
          datetime: 1607504679,
          thumnail: "https://i.imgur.com/UVgTOuAm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a2",
          id_iv: "c6fb05B",
          type: "image/jpeg",
          link: "https://i.imgur.com/c6fb05B.jpg",
          datetime: 1607504744,
          thumnail: "https://i.imgur.com/c6fb05Bm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a3",
          id_iv: "Bqox5wl",
          type: "image/jpeg",
          link: "https://i.imgur.com/Bqox5wl.jpg",
          datetime: 1607504743,
          thumnail: "https://i.imgur.com/Bqox5wlm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a4",
          id_iv: "FhSXOcr",
          type: "image/jpeg",
          link: "https://i.imgur.com/FhSXOcr.jpg",
          datetime: 1607504741,
          thumnail: "https://i.imgur.com/FhSXOcrm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a5",
          id_iv: "UWC74Cu",
          type: "image/jpeg",
          link: "https://i.imgur.com/UWC74Cu.jpg",
          datetime: 1607503532,
          thumnail: "https://i.imgur.com/UWC74Cum.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a6",
          id_iv: "QruB1yx",
          type: "image/jpeg",
          link: "https://i.imgur.com/QruB1yx.jpg",
          datetime: 1607504061,
          thumnail: "https://i.imgur.com/QruB1yxm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a7",
          id_iv: "YTGJcTR",
          type: "image/jpeg",
          link: "https://i.imgur.com/YTGJcTR.jpg",
          datetime: 1609307703,
          thumnail: "https://i.imgur.com/YTGJcTRm.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a8",
          id_iv: "Du8meE3",
          type: "image/jpeg",
          link: "https://i.imgur.com/Du8meE3.jpg",
          datetime: 1609303942,
          thumnail: "https://i.imgur.com/Du8meE3m.jpg",
        },
        {
          _id: "5fed816f8114aa36c198e2a9",
          id_iv: "Vz1UfEd",
          type: "image/jpeg",
          link: "https://i.imgur.com/Vz1UfEd.jpg",
          datetime: 1609303936,
          thumnail: "https://i.imgur.com/Vz1UfEdm.jpg",
        },
      ],
      dialog: false,
      linkIV: "",
      idiv: "",
      typeiv: "",
    };
  },
  methods: {
    onClickIV(item) {
      this.dialog = true;
      this.linkIV = item.link;
      this.idiv = item.id_iv;
      this.typeiv = item.type;
    },
  },
};
</script>

<style scoped>
#cardIV.v-card {
  transition: opacity 0.4s ease-in-out;
}

#cardIV.v-card:not(.on-hover) {
  opacity: 0.6;
}
</style>