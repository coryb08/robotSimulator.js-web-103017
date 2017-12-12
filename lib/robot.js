'use strict';

function Robot() {

  this.at= function(x, y) {
    if (this.coordinates === []) {
      this.coordinates = [0, 0]
    } else {
      this.coordinates = [x, y]
    }
  }


  this.orient = function(orientation) {
    var orientations = ["north", "east", "south", "west"];
    if (orientations.indexOf(orientation) === -1){
      throw new Error ('Invalid Robot Bearing')
    } else {
      this.bearing = orientation
    }

}

  this.turnRight = function(){

    var orientations = ["north", "east", "south", "west"];

    let currentBearing = orientations.indexOf(this.bearing)
    console.log(currentBearing)
    if (currentBearing === 3) {
      this.bearing = "north"
    } else {
      this.bearing = orientations[currentBearing +1]
    }

    console.log(this.bearing)
  }

  this.turnLeft = function(){

    var orientations = ["north", "east", "south", "west"];

    let currentBearing = orientations.indexOf(this.bearing)
    if (currentBearing === 0) {
      this.bearing = "west"

    } else {
      this.bearing = orientations[currentBearing -1]
    }

  }

  this.advance = function() {
    let currentBearing = this.bearing
    if (currentBearing === "north") {
      this.coordinates[1] += 1
    } else if (currentBearing === "south") {
      this.coordinates[1] -= 1
    } else if (currentBearing === "east") {
      this.coordinates[0] += 1
    } else if (currentBearing === "west") {
      this.coordinates[0] -= 1
    }
  }

  this.place = function(obj){
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }


  this.instructions = function(string) {
    let newArr = []
    let stringSplit = string.split("")
    stringSplit.forEach(letter => {
      // debugger
      if (letter === "R") {
        newArr.push("turnRight")
      } else if (letter === "L") {
        newArr.push("turnLeft")
      } else if (letter === "A") {
        newArr.push("advance")
      }
    })
    return newArr
  }

  //
  this.evaluate = function(string) {
    let stringSplit = string.split("")
    stringSplit.forEach(letter => {
      // debugger
      if (letter === "R") {
        this.turnRight()
      } else if (letter === "L") {
        this.turnLeft()
      } else if (letter === "A") {
        this.advance()
      }
    })
  }

}
