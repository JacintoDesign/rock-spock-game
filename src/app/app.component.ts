import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  playerScore: number;
  computerScore: number;
  playerChoice: string;
  computerChoice: string; 
  computerChoiceNumber: number;
  // resultText: string;
  // playerWins: boolean; 

  choices  =  { rock: {name: "Rock", defeats: ["scissors","lizard"]},
                paper: {name: "Paper", defeats: ["rock", "spock"]},
                scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
                lizard: {name: "Lizard", defeats: ["paper","spock"]},
                spock: {name: "Spock", defeats: ["scissors","rock"]}
              };

  ngOnInit() {
    this.playerScore = 0;
    this.computerScore = 0;
  }

  // reset() {
  //   this.playerScore = 0;
  //   this.computerScore = 0;
  //   this.resultText = "";
  //   this.playerChoice = "";
  //   this.computerChoice = "";
  // }

  select( choice: string ) {
    this.playerChoice = choice; 
    console.log(this.playerChoice);
    this.computerChoiceNumber = Math.random();
    console.log(this.computerChoiceNumber);
    this.computerChoiceMade();
    // this.checkResult();
  }

  computerChoiceMade() {   
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

  // checkResult() {
  //   if(this.playerChoice == this.computerChoice) {
  //     this.resultText = "It's a tie.";
  //   } else {
  //     var choice;
  //     choice = this.choices[this.playerChoice];
  //     this.playerWins = choice.defeats.indexOf(this.computerChoice) > -1;
  //     console.log(this.playerWins);
  //     if (this.playerWins == true) {
  //       this.resultText = "You Won!";
  //       this.playerScore++
  //     } else {
  //       this.resultText = "You Lost!"
  //       this.computerScore++;
  //     }
  //   }
  // }

    
}
