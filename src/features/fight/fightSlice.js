import { createSlice } from "@reduxjs/toolkit";
import monster from "./monster.json";
import students from "./students.json";

let randomNumber1 = Math.floor(Math.random() * 7)
let randomNumber2 = Math.floor(Math.random() * 13)


const initialState = {
  players: [
    { name: students[randomNumber1].name, pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 0, image: students[randomNumber1].image, home: students[randomNumber1].house },
    { name: students[randomNumber1 + 1].name, pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, image: students[randomNumber1 + 1].image, home: students[randomNumber1 + 1].house  },
    { name: students[randomNumber1 + 2].name, pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, image: students[randomNumber1 + 2].image, home: students[randomNumber1 +2].house  },
    { name: students[randomNumber1 + 3].name, pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, image: students[randomNumber1 + 3].image, home: students[randomNumber1 + 3].house  }
  ],

  monster: {name: monster[randomNumber2].name, pv: 1000, pvMax: 1000, image: monster[randomNumber2].image},

  countLap: 0
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster.pv = state.monster.pv - action.payload.hit
      state.players[action.payload.id].mana = state.players[action.payload.id].mana - action.payload.mana
      
      document.querySelector("#monster").className = "img-fluid mb-3 rounded-5";
      window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
          document.querySelector("#monster").className = "img-fluid mb-3 rounded-5 animationDegatsCard";
        });
      });

      document.querySelector(".degatSpanMonster").innerHTML = '- ' + action.payload.hit + ' PV'

      document.querySelector(".degatSpanMonster").className = "degatSpanMonster";
      window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
          document.querySelector(".degatSpanMonster").className = "degatSpanMonster animateSpanMonster";
        });
      });
    },

    hitBack: (state, action) => {
      let hit = action.payload.hit + Math.floor(Math.random() * 5)

      if (state.countLap % 4 === 0) {
        for (let i = 0; i < 4; i++) {
          state.players[i].pv = state.players[i].pv - (hit * 4)

         
          document.querySelector("#spanHero" + i).innerHTML = '- ' + hit  + ' PV'

      document.querySelector("#spanHero"  + i).className = "degatSpanHero"
      window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
          document.querySelector("#spanHero"  + i).className = "degatSpanHero animateSpanHero"
        });
      });
        }

          document.querySelector("#card0").className = "card-body text-center m-0 p-0";
          window.requestAnimationFrame(function (time) {
          window.requestAnimationFrame(function (time) {
          document.querySelector("#card0").className = "card-body text-center m-0 p-0 animationDegatsCard";
          });
        
      });

      document.querySelector("#card1").className = "card-body text-center m-0 p-0";
        window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
        document.querySelector("#card1").className = "card-body text-center m-0 p-0 animationDegatsCard";
        });
      });

      document.querySelector("#card2").className = "card-body text-center m-0 p-0";
        window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
        document.querySelector("#card2").className = "card-body text-center m-0 p-0 animationDegatsCard";
        });
      });

      document.querySelector("#card3").className = "card-body text-center m-0 p-0";
        window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
        document.querySelector("#card3").className = "card-body text-center m-0 p-0 animationDegatsCard";
        });
      });
      }

      state.players[action.payload.id].pv = state.players[action.payload.id].pv - hit

      document.querySelector("#card" + action.payload.id).className = "card-body text-center m-0 p-0";
      window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
          document.querySelector("#card" + action.payload.id).className = "card-body text-center m-0 p-0 animationDegatsCard";
        });
      });

      document.querySelector("#spanHero" + action.payload.id).innerHTML = '- ' + hit + ' PV'

      document.querySelector("#spanHero"  + action.payload.id).className = "degatSpanHero";
      window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
          document.querySelector("#spanHero"  + action.payload.id).className = "degatSpanHero animateSpanHero";
        });
      });
    },

    // animationFrame: (state, action) => {
    //   document.querySelector(action.payload.div + action.payload.id).innerHTML = '- ' + action.payload.hit + ' PV'
    //   document.querySelector(action.payload.div  + action.payload.id).className = action.payload.classStart;
    //   window.requestAnimationFrame(function (time) {
    //     window.requestAnimationFrame(function (time) {
    //       document.querySelector(action.payload.div  + action.payload.id).className = action.payload.classAnimate;
    //     });
    //   });
    // },

    healing: (state, action) => {

      state.players[action.payload.id].pv = state.players[action.payload.id].pv + action.payload.heal
      state.players[action.payload.id].mana = state.players[action.payload.id].mana - action.payload.mana
      
      document.querySelector("#card" + action.payload.id).className = "card-body text-center m-0 p-0";
      window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
          document.querySelector("#card" + action.payload.id).className = "card-body text-center m-0 p-0 AnimationHeal";
        });
      });

    

      document.querySelector("#healingHero" + action.payload.id).innerHTML = '+ ' + action.payload.heal + ' PV'

      document.querySelector("#healingHero"  + action.payload.id).className = "healinigSpanHero";
      window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
          document.querySelector("#healingHero"  + action.payload.id).className = "healinigSpanHero animateHealingHero";
        });
      });
    
    },

    hitMana: (state, action) => {
      state.players[action.payload.id].mana = action.payload.mana
      state.players[action.payload.id].pv = state.players[action.payload.id].pv - action.payload.hit
      const queryAll = document.querySelectorAll('#spelljoueur' + action.payload.id)
        for (var i = 0; i < queryAll.length; ++i) {
          var item = queryAll[i].classList.remove('disabledbutton');
        }

      const queryAll2 = document.querySelectorAll('#spellSpecialjoueur' + action.payload.id)
        for (var i = 0; i < queryAll2.length; ++i) {
          var item = queryAll2[i].classList.remove('disabledbutton');
          queryAll2[i].childNodes[0].classList.add('pulse')
          
        }

        document.querySelector("#manaHero" + action.payload.id).innerHTML = '+ ' + action.payload.mana + ' PM'

        document.querySelector("#manaHero"  + action.payload.id).className = "healinigSpanHero";
        window.requestAnimationFrame(function (time) {
          window.requestAnimationFrame(function (time) {
            document.querySelector("#manaHero"  + action.payload.id).className = "healinigSpanHero animateManaHero";
          });
        });
    },

    checkMana: (state, action) => {
      state.players.map((key, value) => {
        if (key.mana < 5) {
          let allSpell = document.querySelectorAll('#spelljoueur' + value)
          allSpell.forEach((element) => element.classList.add('disabledbutton'))
        } 
        
        if (key.mana < 30 ) {
          let queryAll = document.querySelectorAll('#spellSpecialjoueur' + value)
          queryAll.forEach((element) => {
            element.classList.add('disabledbutton')
            element.childNodes[0].classList.remove('pulse')
        })
        }
      })

    },

    countLap: (state, action) => {
      state.countLap = state.countLap + 1
    },

    checkTurn: (state, action) => {
      let id = action.payload.id + 1
      let idNext = action.payload.id

      if (action.payload.id >= 3) {
        id = 0
        idNext = action.payload.id

        while(document.querySelector('#joueur' + id).className.includes('disabledbutton')) {
          id = id + 1
          
        }
      } 

      while(document.querySelector('#joueur' + id).className.includes('disabledbutton')) {
        id = id + 1
        
      }
      document.querySelector('#joueur' + id).classList.add('card-shadow')
      document.querySelector('#joueur' + idNext).classList.remove('card-shadow')
      document.querySelector('#disabled' + id).classList.remove('disabledbutton')
    },

    disabledButton: (state, action) => {
      let id = action.payload.id + 1
      let idNext = action.payload.id

      if (action.payload.id >= 3) {
        id = 0
        idNext = action.payload.id

        while(document.querySelector('#joueur' + id).className.includes('disabledbutton')) {
          id = id + 1
          
        }
      } 

      while(document.querySelector('#joueur' + id).className.includes('disabledbutton')) {
        id = id + 1
        
      }
      
      document.querySelector('#disabled' + idNext).classList.add('disabledbutton')

    },

    checkWin: (state, action) => {
      if (state.monster.pv <= 0) {
        alert('WIN, NEXT !')
        let randomMonster = Math.floor(Math.random() * 7);

        state.monster = {name: monster[randomMonster].name, pv: 1000, pvMax: 1000, image: monster[randomMonster].image}
      }

      state.players.map((key, value) => {

        if (state.players[value].pv <= 0) {
         document.querySelector('#joueur' + value).classList.add("disabledbutton", "dead")
        }
      })

      let countPlayer = 0

      state.players.map((key, value) => {
        if (state.players[value].pv <= 0) {
          countPlayer++
        } 

        if (countPlayer >= 4) {
          alert('GAME OVER, you make ' + state.countLap + ' turns.')
          window.location.reload()
        }
      })
    }
  },
});

export const { hitMonster } = fightSlice.actions
export default fightSlice.reducer;