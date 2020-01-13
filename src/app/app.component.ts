import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerScore: number;
  playerChoice: string;
  
  computerScore: number;
  computerChoiceNumber: number;
  computerChoice: string; 
  choices  =  { rock: {name: "Rock", defeats: ["scissors","lizard"]},
                paper: {name: "Paper", defeats: ["rock", "spock"]},
                scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
                lizard: {name: "Lizard", defeats: ["paper","spock"]},
                spock: {name: "Spock", defeats: ["scissors","rock"]}
              };
  loading = false;  //Delay to show computer's reaction, like it's thinking

  constructor() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  pick( choice: string ): void {
    this.playerChoice = choice; 
    console.log(this.playerChoice);
    this.playerScore++;
    this.computerChoiceNumber = Math.random();
    this.choiceMade();
    console.log(this.computerChoiceNumber);
  }

  choiceMade() {   
  if (this.computerChoiceNumber < 0.2) {
    this.computerChoice = "rock";
  } else if (this.computerChoiceNumber <= 0.4) {
      this.computerChoice = "paper";
  } else if (this.computerChoiceNumber <= 0.6) {
      this.computerChoice = "scissors";
  } else if (this.computerChoiceNumber <= 0.8) {
      this.computerChoice = "lizard";
  } else {
      this.computerChoice = "spock";
  };
    console.log(this.computerChoice); 
  }









//   title = 'spock-rock-game';
//   computerChoiceNumber: number = Math.random();
//   computerChoiceText: string; 
//   choices  =  {rock : {name: "Rock", defeats: ["scissors","lizard"]},
//                  paper: {name: "Paper", defeats: ["rock", "spock"]},
//                  scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
//                  lizard: {name: "Lizard", defeats:["paper","spock"]},
//                  spock: {name: "Spock", defeats:["scissors","rock"]}
//                 };

// selectWeapon() {
//   if (this.computerChoiceNumber < 0.2) {
//     this.computerChoiceText = "rock";
//   } else if (this.computerChoiceNumber <= 0.4) {
//       this.computerChoiceText = "paper";
//   } else if (this.computerChoiceNumber <= 0.6) {
//       this.computerChoiceText = "scissors";
//   } else if (this.computerChoiceNumber <= 0.8) {
//       this.computerChoiceText = "lizard";
//   } else {
//       this.computerChoiceText = "spock";
//   }; 
// }

// var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?").toLowerCase();

// alert("The computer chose " + this.computerChoice);

// if(this.computerChoice == userChoice){
//     alert("It's a tie");
// }else if(choices[userChoice] === undefined){
//     alert("Invalid Choice");
// }else{
//     userChoice = choices[userChoice];
    
//     var victory = userChoice.defeats.indexOf(this.computerChoice) > -1;
    
//     if(victory) {
//         alert("Vitory! " + userChoice.name + " wins!")
//     }else{
//         alert("Defeat, " + this.computerChoice + " wins!");
//     }   
// }
    
}
