const getComputerChoice = () => {
  return Math.floor(Math.random() * 3)
}

const getHumanChoice = (options: string[]) => {
  const choices: string[] = options
  const choice = prompt("Choose rock, paper, or scissors:")
    ?.toString()
    .toLowerCase()

  if (!choice) {
    return getHumanChoice(choices)
  } else if (!choices.includes(choice)) {
    console.log("Please enter a valid choice:")
    return getHumanChoice(choices)
  }

  console.log(choice)
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

  if (
    (humanChoice === 0 && computerChoice === 2) ||
    (humanChoice === 1 && computerChoice === 0) ||
    (humanChoice === 2 && computerChoice === 1)
  ) {
    console.log(choices[computerChoice])
    console.log("You win")
    return
  }

  console.log(choices[computerChoice])
  console.log("You lose")

  return

  return
}

playRound()
