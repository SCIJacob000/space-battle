//thius is an array holdinfg all the alien ship objects
let alienShips = [];
//this array represents the defeated alien ships
let graveyard = [];
//this is our ship
const playership = {
	hull: 20,
	firepower: 5,
	accuracy: 1,
	name: "Uss Assembly",
	playerAttack() {
	let damage = alienship1.hull - this.firepower 	
	return damage
	}
}
//This is the alien ship
class AlienShip {
	constructor (name) {
		this.name = name
		this.hull = Math.floor(Math.random()*4)+3
		this.firepower=Math.floor(Math.random()*3)+2
		this.accuracy=(Math.floor(Math.random()*3)+6)/10
	}
	alienAttack() {
 	let damage = playership.hull - this.firepower
 	return damage
 	}
}
 for (let i = 0; i < 6; i++){
 	let alienToBePushed = new AlienShip(i)
 	alienShips.push(alienToBePushed)
 }
 console.log(alienShips[0]);
 console.log(playership);
const battle = {
	playerChoice () {
		let answer = prompt("YOU CAN ATTACK OR RETREAT -enter response as it is shown here")
		return answer
	}
	ifPlayerAttack() {
		if(answer === "ATTACK"){
			playership.playerAttack()
		}
	}
}


// // this fiunction represents the players attack
// const playerAttack = function () {
// 	let damage = alienship1.hull - playership.firepower 	
// 	return damage
// }
// // //this function represents ther aliens attack 
//  	alienAttack = function () {
//  	let damage = playership.hull - alienship1.firepower
//  	return dam
//  }

// const playerAccuracy = function() {
// 	return Math.random()

// }

// const alienAccuracy = function() {
// 	return Math.random()
// }

const userChoice = prompt("YOU CAN ATTACK OR RETREAT -enter response as it is shown here");
// const playerMove = function() {
// if(userChoice === "ATTACK" && playerAccuracy() < playership.accuracy){
// 	return playerAttack()
// 	}
// 	else if (userChoice === "ATTACK" && playerAccuracy() > playership.accuracy){
// 		console.log("Attack missed!");
// 	}
// 	else{
// 	console.log("Game Over");
// 	}
// }
// playerMove();

// const alienMove = function() {
// 	if (alienAccuracy() < alienship1.accuracy){
// 		return alienAttack()
// 	}
// }

// console.log(playerMove()); 

// if(alienship1.hull <= 0){
// 	graveyard.push(alienship1)
// }









