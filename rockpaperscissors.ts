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

  console.log(`You chose: ${choice}`)
  return choice!
}

const playRound = () => {
  const choices = ["rock", "paper", "scissors"]
  const humanChoice = choices.indexOf(getHumanChoice(choices))
  const computerChoice = getComputerChoice()

  if (humanChoice === computerChoice) {
    console.log(`They chose: ${choices[computerChoice]}`)
    console.log("Draw\n")
    return [0, 0]
  }

  if (
    (humanChoice === 0 && computerChoice === 2) ||
    (humanChoice === 1 && computerChoice === 0) ||
    (humanChoice === 2 && computerChoice === 1)
  ) {
    console.log(`They chose: ${choices[computerChoice]}`)
    console.log("You win\n")
    return [1, 0]
  }

  console.log(`They chose: ${choices[computerChoice]}`)
  console.log("You lose\n")
  return [0, 1]
}

const game = (humanScore = 0, computerScore = 0) => {
  const updateScore = (scores: number[]) => {
    humanScore += scores[0]
    computerScore += scores[1]
    return
  }

  if (humanScore < 3 && computerScore < 3) {
    updateScore(playRound())
    console.log(`You: ${humanScore}`)
    console.log(`Computer ${computerScore}\n`)
    return game(humanScore, computerScore)
  }

  if (humanScore > computerScore) {
    console.log("Congrats, you win!\n")
    return
  }

  console.log("Sorry, you lose\n")
  return
}

game()
