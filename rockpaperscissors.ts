const getComputerChoice = () => {
  return Math.floor(Math.random() * 3)
}

const getHumanChoice = (options: string[]) => {
  const choices: string[] = options
  const choice = prompt("Choose rock, paper, or scissors:")?.toString()
  if (!choice) {
    getHumanChoice(choices)
  } else if (!choices.includes(choice)) {
    getHumanChoice(choices)
  }
  return choice!
}

const playRound = () => {
  const choices = ["rock", "paper", "scissors"]
  const humanChoice = choices.indexOf(getHumanChoice(choices))
  const computerChoice = getComputerChoice()

  if (humanChoice === computerChoice) {
    console.log("draw")
    return
  }

  console.log(humanChoice)
  console.log(computerChoice)

  return
}

playRound()
