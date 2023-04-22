<template>
<v-container-fluid>

  <v-row>
    <v-col cols="12">
      <div class="px-8 ma-4">
        <h1 style="font-size: 60px;">Our Class</h1>
      </div>
    </v-col>
  </v-row>
  <v-row class="px-8 ma-4 justify-center align-center text-center">
    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h2 style="font-size: 40px;">Our Class Committee</h2>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" v-for="student in classComm" :key="student.name">
      <v-card height="100%" class="card justify-center align-center text-center">
        <div class="cover"></div>
        <div class="card-img-wrapper">
            <img :src="`/src/assets/${student.img}`" width="400px" />
        </div>
        <h1 class="card-title">{{ student.name }}</h1>
        <p class="card-desc">{{ student.bio }}</p>
        <div class="card-footer">
            <div class="footer-box">
                <div class="box-wrapper">
                    <div class="count">{{ student.role }}</div>
                </div>
            </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="px-8 ma-4 justify-center align-center text-center">
    <v-col cols="12">
      <div class="ma-4 text-left align-left">
        <h2 style="font-size: 40px;">Our Students</h2>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="4" v-for="organiser in organisers" :key="organiser.name">
      <v-card height="100%" class="card justify-center align-center text-center">
        <div class="cover"></div>
        <div class="card-img-wrapper">
            <img :src="`/src/assets/${organiser.img}`" width="400px" />
        </div>
        <h1 class="card-title">{{ organiser.name }}</h1>
        <p class="card-desc">{{ organiser.bio }}</p>
      </v-card>
    </v-col>
  </v-row>

</v-container-fluid>
</template>
<script lang="ts" setup>

const classComm = [
  {
    "name": "Vikram Ramanathan",
    "img": "ppl/vikram.png",
    "role": "Class Rep",
    "bio": ""
  },
  {
    "name": "Chng Yaw Tia",
    "img": "ppl/yawtia.png",
    "role": "Class Rep",
    "bio": ""
  },
  {
    "name": "Daniel Chan Lok Jing",
    "img": "ppl/daniel.png",
    "role": "Environment Rep",
    "bio": ""
  },
  {
    "name": "Quek Yu Pin",
    "img": "ppl/yupin.png",
    "role": "Well-Being Rep",
    "bio": ""
  },
  {
    "name": "Edden Chew Keyn-Hantz",
    "img": "ppl/edden.png",
    "role": "Cyber Rep",
    "bio": ""
  }
]

const organisers = [
  {
    "name": "Prannaya Gupta",
    "img": "ppl/prannay.jpg",
    "bio": "Hi I'm Prannaya, a JC2 Student at NUSH and I like training AI, developing software and golfing the hell out of some code 🙂."
  },
  {
    "name": "Yap Yuan Xi",
    "bio": "Hi, I'm Yuan Xi and I'm a JC2 student in NUSH. I like CTFing, IOing and Software Development.",
    "img": "ppl/yuanxi.jpg"
  },
  {
    "name": "Kannan Vishal",
    "img": "ppl/vishal.png",
    "bio": "Hey, I'm a sixth year from NUSH who likes post-punk, post-industrial and post-hardcore."
  }
].sort((a, b) => a.name.localeCompare(b.name))

</script>
<style scoped>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

a {
    text-decoration: none;
    color: #1867C0;
    /* font-weight: bold; */
}

.cover {
    height: 120px;
    width: 100%;
    background: #FF9900;
    position: absolute;
    left: 0px;
    top: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.card {
    position: relative;
    display: inline-block;
    background: #ffffff;
    border-radius: 5px;
    box-shadow:  0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    text-align: center;
    padding: 20px;
    margin: 5px;
    padding-top: 5px;
    transition: all 0.5s;
}
.card .fa-github {
    position: absolute;
    color: #646464;
    font-size: 20px;
    top: 10px;
    right: 10px;
}
.card .card-title {
    color: #434343;
    margin-bottom: -8px;
    font-size: 22px;
    font-weight: 600;
}

.card .card-responsename {
    margin-bottom: 20px;
    color: #797979;
}
.card .card-desc {
    font-weight: 500;
    width: 240px;
    margin: auto;
    display: block;
    color: #3c3c3c;
    height: 120px;
}
.card .card-img-wrapper {
    position: relative;
    height: 160px;
    width: 160px;
    margin: 10px auto;
    margin-bottom: 20px;
}
.card .card-img-wrapper img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}
.card .card-footer {
    margin-top: 40px;
}
.card .card-footer .footer-box {
    position: relative;
    border-top: 2px solid #FF9900;
    box-shadow: 0 3px 6px -1px rgb(0 0 0 / 26%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    border-radius: 5px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: space-around;
}
.card .card-footer .footer-box .box-wrapper {
    position: relative;
}
.card .card-footer .footer-box .box-wrapper .count {
    font-family: 'consolas';
    color: #434343;
    font-size: 20px;
    font-weight: 600;
}
.card .card-footer .footer-box .box-wrapper .box-text {
    font-size: 12px;
    font-weight: 600;
    color: #00000085;
    letter-spacing: 0.5px;
}
</style>
