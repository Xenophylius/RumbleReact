import { createSlice } from "@reduxjs/toolkit";
import monster from "./json/monster.json";
import students from "./json/students.json";
import got from "./json/got.json";
import disney from "./json/disney.json";
import marvel from "./json/marvel.json";
import toaster from "./functions/toaster";
import animate from "./functions/animate";

let randomNumber1 = Math.floor(Math.random() * 7)
let randomNumber2 = Math.floor(Math.random() * 13)

const initialState = {
  players: [
    { name: '', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 0, image: '', home: students[randomNumber1].house},
    { name: '', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, image: '', home: students[randomNumber1 + 1].house },
    { name: '', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, image: '', home: students[randomNumber1 +2].house },
    { name: '', pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, image: '', home: students[randomNumber1 + 3].house }
  ],
  monster: {name: 'Fight Heros', pv: 1000, pvMax: 1000, image: ''},
  countLap: 0,
  gallions: 0,
  killMonster: 1,
  hitBase: 50,
  historic: ['Bienvenue au club de duel'],
  victory: false,
  theme: 'hogwarts'
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      if (action.payload.maxima && state.gallions < 150) {
        return state
      } else {
      state.monster.pv = state.monster.pv - action.payload.hit
      state.players[action.payload.id].mana = state.players[action.payload.id].mana - action.payload.mana
      
      if (action.payload.maxima) {
        let message = 'Vous utilisez une potion Maxima, vous infligez ' + action.payload.hit + ' points de dégats.'
        state.historic.push(message)
      }

      if (action.payload.special) {
        let id = '#card' +  action.payload.id
        animate(id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 animationSpecial")
      }

      animate("#monster", "img-fluid mb-3 rounded-5", "img-fluid mb-3 rounded-5 animationDegatsCard")
      toaster(".degatSpanMonster", "", action.payload.hit, "-", "degatSpanMonster", "degatSpanMonster animateSpanMonster")
      if (!action.payload.maxima) {
        let message = state.players[action.payload.id].name + ' inflige ' + action.payload.hit + ' points de dégats à ' + state.monster.name
        state.historic.push(message)
      }
      return state
    
    }},

    hitBack: (state, action) => {
      let hit = (action.payload.hit + Math.floor(Math.random() * 5)) * state.killMonster
      if (state.countLap % 4 === 0) {
        for (let i = 0; i < 4; i++) {
          if (state.players[i].pv > 0) {
            state.players[i].pv = state.players[i].pv - (hit * 3)
            toaster("#spanHero", i, hit * 3, "-", "degatSpanHero", "degatSpanHero animateSpanHero")
            animate("#card" + i,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 animationDegatsCard")
          }
        } let message = state.monster.name + ' inflige ' + (hit * 3) + ' points de dégats à tous les élèves.'
        state.historic.push(message)
      } else {
      state.players[action.payload.id].pv = state.players[action.payload.id].pv - hit
      toaster("#spanHero", action.payload.id, hit, '-', "degatSpanHero", "degatSpanHero animateSpanHero")
      animate("#card" + action.payload.id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 animationDegatsCard")
      let message = state.monster.name + ' inflige ' + hit + ' points de dégats à ' + state.players[action.payload.id].name
      state.historic.push(message)
      }
      return state
    },

    healing: (state, action) => {
      let pvGiven = state.players[action.payload.id].pvMax -  state.players[action.payload.id].pv
      state.players[action.payload.id].pv = state.players[action.payload.id].pvMax
      state.players[action.payload.id].mana = state.players[action.payload.id].mana - action.payload.mana
      
      let id = '#card' +  action.payload.id
      animate(id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 AnimationHeal")
      toaster("#healingHero", action.payload.id, pvGiven, "+", "healinigSpanHero", "healinigSpanHero animateHealingHero")
      let message = state.players[action.payload.id].name + ' se soigne de ' + pvGiven + ' points de vies.'
      state.historic.push(message)
      return state
    },

    hitMana: (state, action) => {
      let manaGiven = state.players[action.payload.id].manaMax - state.players[action.payload.id].mana
      state.players[action.payload.id].mana = state.players[action.payload.id].manaMax
      state.players[action.payload.id].pv = state.players[action.payload.id].pv - action.payload.hit

      toaster("#spanHero", action.payload.id, action.payload.hit, '-', "degatSpanHero", "degatSpanHero animateSpanHero")
      animate("#card" + action.payload.id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 animationDegatsCard")  
      let message = state.players[action.payload.id].name + ' récupère ' + action.payload.hit + ' points de mana.'
      state.historic.push(message)

      const queryAll = document.querySelectorAll('#spelljoueur' + action.payload.id)
        for (let i = 0; i < queryAll.length; ++i) {
          queryAll[i].classList.remove('disabledbutton');
        }

      const queryAll2 = document.querySelectorAll('#spellSpecialjoueur' + action.payload.id)
        for (let i = 0; i < queryAll2.length; ++i) {
          queryAll2[i].classList.remove('disabledbutton');
          queryAll2[i].childNodes[0].classList.add('pulse')
        }

        setTimeout(() => {
          let id = '#card' +  action.payload.id
          animate(id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 AnimationMana")
          toaster("#manaHero", action.payload.id, manaGiven, "+", "healinigSpanHero", "healinigSpanHero animateManaHero", ' PM')
      }, 200);
      
      return state
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
        return true
      })

    },

    countLap: (state, action) => {
      state.countLap = state.countLap + 1
      return state
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

      if(document.querySelector('#joueur' + id).className.includes('disabledbutton') && id === 3) {
        id = 0
      }

      if(document.querySelector('#joueur' + id).className.includes('disabledbutton') && document.querySelector('#joueur' + (id + 1)).className.includes('disabledbutton') && id === 2) {
        id = 0
      }

      if(document.querySelector('#joueur' + id).className.includes('disabledbutton') && document.querySelector('#joueur' + (id + 1)).className.includes('disabledbutton') && document.querySelector('#joueur' + (id + 2)).className.includes('disabledbutton') && id === 1) {
        id = 0
      }



      while(document.querySelector('#joueur' + id).className.includes('disabledbutton')) {
        id = id + 1
      }
      document.querySelector('#joueur' + idNext).classList.remove('card-shadow')
      document.querySelector('#joueur' + id).classList.add('card-shadow')
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
      
      document.querySelector('#disabled' + idNext).classList.add('disabledbutton')
    },

    checkWin: (state, action) => {
      if (state.monster.pv <= 0) {
        state.killMonster = state.killMonster + 1
        state.victory = true
        let randomMonster = Math.floor(Math.random() * 7);
        state.monster = {name: monster[randomMonster].name, pv: (1000 * state.killMonster), pvMax: (1000 * state.killMonster), image: monster[randomMonster].image}
        state.gallions = state.gallions + 100
        toaster("#gallionsAnimate", '', 100, '+', "me-3 pt-2 h5", "me-3 pt-2 h5 AnimationGallions", ' Gal')
        document.querySelector('#horcruxeDisplay').classList.toggle('d-none')
        document.querySelector('#shopHorcruxeId').classList.toggle('shopFlask')
        state.historic = ['Round ' + state.killMonster]
      }

      state.players.map((key, value) => {
        if (state.players[value].pv <= 0) {
         document.querySelector('#joueur' + value).classList.add("disabledbutton", "dead")
         state.players[value].mana = 0
         document.querySelector('#spellSpecialjoueur' + action.payload).childNodes[0].classList.remove('pulse')
         let message = state.players[value].name + 'n\'a plus de points de vies.'
         state.historic.push(message)
        }
        return true
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
        return true
      })
    }, 

    gallionsUp: (state, action) => {
      state.gallions = state.gallions + action.payload;
      toaster("#gallionsAnimate", '', action.payload, '+', "me-3 pt-2 h5", "me-3 pt-2 h5 AnimationGallions", ' Gal')
      if (state.gallions >= 50) {
        document.querySelector('#shopFlaskId').setAttribute('class', 'svg-inline--fa fa-flask fa-2xl text-warning shopFlask')
      }
      return state
    },

    gallionsDown: (state, action) => {
      if(action.payload <= state.gallions) {
      state.gallions = state.gallions - action.payload;
      toaster("#gallionsAnimate", '', action.payload, '-', "me-3 pt-2 h5", "me-3 pt-2 h5 AnimationGallions", ' Gal')
      if (state.gallions < 50) {
        document.querySelector('#shopFlaskId').setAttribute('class', 'svg-inline--fa fa-flask fa-2xl text-warning')
      }
      return state
    } else {
      let galManquant = action.payload - state.gallions
      toaster("#gallionsAnimate", '', galManquant, '', "me-3 pt-2 h5", "me-3 pt-2 h5 AnimationGallions", ' Gal Manquant')
    }
    },

    lifeUpAll: (state, action) => {
    if(action.payload <= state.gallions) {
      state.players.map((key, value) => {
        if (state.players[value].pv > 0) {
          state.players[value].pv = state.players[value].pv + 50
          let pvGiven = state.players[value].pvMax -  state.players[value].pv
          if (state.players[value].pv > state.players[value].pvMax) {state.players[value].pv = state.players[value].pvMax}
          let id = '#card' +  value
          animate(id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 AnimationHeal")
          toaster("#healingHero", value, pvGiven, "+", "healinigSpanHero", "healinigSpanHero animateHealingHero")
        }
        let message = 'Vous utilisez une potion Wiggenweld, vos élèves récupérent 50 points de vies.'
        state.historic.push(message)
        return state
      })
    }
    
    },

    manaUpAll: (state, action) => {
      if(action.payload <= state.gallions) {
        state.players.map((key, value) => {
          if (state.players[value].pv > 0) {
            state.players[value].mana = state.players[value].mana + action.payload
            let manaGiven = state.players[value].manaMax -  state.players[value].mana
            if (state.players[value].mana > state.players[value].manaMax) {state.players[value].mana = state.players[value].manaMax}
            let id = '#card' +  value
            animate(id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 AnimationMana")
            toaster("#manaHero", value, manaGiven, "+", "healinigSpanHero", "healinigSpanHero animateManaHero", ' PM')
          }      
          return state   
        })
        let message = 'Vous utilisez une potion de Concentration, vos élèves récupérent leur mana.'
        state.historic.push(message)
        // Check les disabledButton pour mana et activer si mana OK
        for (let x = 0; x < 3; ++x) {
        const queryAll = document.querySelectorAll('#spelljoueur' + x)
        for (let i = 0; i < queryAll.length; ++i) {
          queryAll[i].classList.remove('disabledbutton');
        }}

        for (let x = 0; x < 3; ++x) {
      const queryAll2 = document.querySelectorAll('#spellSpecialjoueur' + x)
        for (let i = 0; i < queryAll2.length; ++i) {
          queryAll2[i].classList.remove('disabledbutton');
          queryAll2[i].childNodes[0].classList.add('pulse')
        }}
      } return state
    },

    doubleLife: (state, action) => {
        state.players.map((key, value) => {
          state.players[value].pvMax = state.players[value].pvMax * 2
          let message = 'Vous avez sélectionné le Médaillon de Serpentard. Vos points de vies sont doublés et les élèves sont soignés.'
          state.historic.push(message)
          return state
        })
    },

    doubleMana: (state, action) => {
      state.players.map((key, value) => {
        state.players[value].manaMax = state.players[value].manaMax * 2
        let message = 'Vous avez sélectionné la Coupe de Poufsouffle. Vos points de mana sont doublés.'
        state.historic.push(message)
        return state
      })
    },

    doubleMaxima: (state, action) => {
        state.hitBase = state.hitBase * 2
        let message = 'Vous avez sélectionné la Bague de Gaunt. Vos dégats sont doublés.'
        state.historic.push(message)
        return state
    },
    
    animateHorcruxe: (state, action) => {
      state.players.map((key, value) => {
        let id = '#card' +  value
        animate(id,"card-body text-center m-0 p-0", "card-body text-center m-0 p-0 animationSpecial")
        return state
      })
    },

    displayNone: (state, action) => {
      document.querySelector(action.payload).classList.toggle('d-none')
      document.querySelector('#shopHorcruxeId').classList.toggle('shopFlask')
    },

    displayToggleDiv: (state, action) => {
      document.querySelector(action.payload).classList.toggle('d-none')      
    },

    displayToggleDivAll: (state, action) => {
      const queryAll = document.querySelectorAll(action.payload)
        for (let i = 0; i < queryAll.length; ++i) {
          queryAll[i].classList.remove('d-none');
        }    
    },

    changeForGot: (state, action) => {
      let randomMonster = Math.floor(Math.random() * 48)
      state.monster.name = got[randomMonster].fullName
      state.monster.image = got[randomMonster].imageUrl
      state.theme = 'got'

      let i = 1
      state.players.forEach(element => {
        element.name = got[randomMonster + i].fullName
        element.image = got[randomMonster + i].imageUrl
        i++
      });
      return state
    },

    changeForDisney: (state, action) => {
      let randomMonster = Math.floor(Math.random() * 45)
      state.monster.name = disney[randomMonster].name
      state.monster.image = disney[randomMonster].imageUrl
      state.theme = 'disney'

      let i = 1
      state.players.forEach(element => {
        element.name = disney[randomMonster + i].name
        if (!disney[randomMonster + i].imageUrl) { 
          element.image = '../../images/disney2.png'
         } else {
        element.image = disney[randomMonster + i].imageUrl
         }
        i++
      });
      return state
    },

    changeForMarvel: (state, action) => {
      let randomMonster = Math.floor(Math.random() * 23)
      state.monster.name = marvel[randomMonster].name
      state.monster.image = marvel[randomMonster].thumbnail.path + '.' + marvel[randomMonster].thumbnail.extension
      state.theme = 'marvel'

      let i = 1
      state.players.forEach(element => {
        element.name = marvel[randomMonster + i].name
        element.image = marvel[randomMonster + i].thumbnail.path + '.' + marvel[randomMonster + i].thumbnail.extension
        i++
      });
      return state
    },

    changeForHogwarts: (state, action) => {
      state.monster.name = monster[randomNumber2].name
      state.monster.image = monster[randomNumber2].image
      state.theme = 'hogwarts'

      let i = 0
      state.players.forEach(element => {
        element.name = students[randomNumber1 + i].name
        element.image = students[randomNumber1 + i].image
        i++
      });
      return state
    },

    openModal2: (state, action) => {
      state.victory = action.payload     
    }
  }
  },
);

export const { hitMonster, hitBack, hitMana, healing, checkMana, checkTurn, checkWin, disabledButton, countLap, gallionsUp, gallionsDown, lifeUpAll, manaUpAll, doubleLife, doubleMana, doubleMaxima, animateHorcruxe, displayNone, displayToggleDiv, addHorcruxeApply, displayToggleDivAll, changeForGot, changeForDisney, changeForMarvel, changeForHogwarts, openModal2} = fightSlice.actions
export default fightSlice.reducer;