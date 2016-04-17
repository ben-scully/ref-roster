
import Ground from "./objs/ground"
import Field from "./objs/field"
import Game from "./objs/game"
import Team from "./objs/team"
import Ref from "./objs/ref"

import groundTemp from '.././views/ground.jade'
import fieldTemp from '.././views/field.jade'
import gameTemp from '.././views/game.jade'
import teamTemp from '.././views/team.jade'
import refTemp from '.././views/ref.jade'


$(init)

function init () {
  
}


function testPrint1 () {
  console.log("Running 'script.js' ...\n...\n")

  var g = new Ground("Alex Moore")
  console.log(g.name)
  var f = new Field("Field2")
  console.log(f.name)
  var gm = new Game("INFAMOUS", "Lowkey", 3)
  console.log(gm.team1, gm.team2, gm.div)
  var t = new Team("INFAMOUS")
  console.log(t.name)
  var r = new Ref("Brian", 3)
  console.log(r.name, r.level)
}

function testPrint2 () {
  $('#ground').append(fieldTemp(f))
  $('.field:last').append(gameTemp(gm))
  $('.field:last').append(gameTemp(gm))

  $('#ground').append(fieldTemp(f))
  $('.field:last').append(gameTemp(gm))
  $('.field:last').append(gameTemp(gm))
}
