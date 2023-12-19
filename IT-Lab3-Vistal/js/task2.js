let totalWin = 0;

function startGame() {
  const start = confirm("Чи бажаєте почати гру?");

  if (!start) {
    console.log("Сьогодні ви не виграли мільйон, а могли");
    return;
  }

  let attempts = 3;
  let multiplier = 1;
  let randomNums = 5;

  while (attempts > 0) {
    let numberToGuess = Math.floor(Math.random() * 6);
    console.log(numberToGuess);
    const userGuess = parseInt(prompt(`Введіть число від 0 до ${randomNums}:`));
    if (userGuess === numberToGuess) {
      switch (attempts) {
        case 3:
          totalWin += 10 * multiplier;
          break;
        case 2:
          totalWin += 5 * multiplier;
          break;
        case 1:
          totalWin += 2 * multiplier;
          break;
      }

      console.log(`Ви виграли ${totalWin}$!`);

      const continueGame = confirm("Хочете продовжити гру?");
      if (!continueGame) {
        console.log(`Дякуємо за гру, ваш виграш становить ${totalWin}$`);
        totalWin = 0;
        multiplier = 1;
        return;
      } else {
        multiplier *= 3;
        randomNums *= 2;
        numberToGuess = Math.floor(Math.random() * (randomNums + 1));
        console.log(numberToGuess);
        attempts = 3;
      }
    } else {
      attempts--;
      if (attempts === 0) {
        console.log("Ваш виграш - 0$");
        totalWin = 0;
        numberToGuess = Math.floor(Math.random() * 6);
        const playAgain = confirm("Хочете зіграти ще раз?");
        if (!playAgain) {
          console.log(`Дякуємо за гру, ваш виграш становить ${totalWin}$`);
          return;
        } else {
          randomNums = 5;
          multiplier = 1;
          attempts = 3;
          console.log(numberToGuess);
        }
      } else {
        console.log(`Неправильно! У вас залишилося ${attempts} спроб`);
      }
    }
  }
}

startGame();