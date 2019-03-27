//thius is an array holdinfg all the alien ship objects
let alienShips = [];
//this array represents the defeated alien ships
let graveyard = [];
//this is our ship
const playership = {
	hull: 20,
	firepower: 5,
	accuracy: 1,
	name: "Uss Assembly"
}
//This is the alien ship
class alienship = {
	constructor (name) {
		hull: Math.floor(Math.random()*4)+3
		firepower:Math.floor(Math.random()*3)+2
		accuracy:(Math.floor(Math.random()*3)+6)/10
	}
}

// this fiunction represents the players attack
const playerAttack = function () {
	let damage = alienship1.hull - playership.firepower
	return damage
}
//this function represents ther aliens attack 
const alienAttack = function () {
	let damage = playership.hull - alienship1.firepower
	return damage
}

const playerAccuracy = function() {
	return Math.random()
}

const alienAccuracy = function() {
	return Math.random()
}

const userChoice = prompt("YOU CAN ATTACK OR RETREAT -enter response as it is shown here");
const playerMove = function() {
if(userChoice === "ATTACK" && playerAccuracy() < playership.accuracy){
	return playerAttack()
	}
	else if (userChoice === "ATTACK" && playerAccuracy() > playership.accuracy){
		console.log("Attack missed!");
	}
	else{
	console.log("Game Over");
	}
}
playerMove();

const alienMove = function() {
	if (alienAccuracy() < alienship1.accuracy){
		return alienAttack()
	}
}

console.log(playerMove()); 

if(alienship1.hull <= 0){
	graveyard.push(alienship1)
}










