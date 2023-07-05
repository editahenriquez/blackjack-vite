/**
 * 
 * @param {Array<string>} pointsPlayers 
 * @param {Array<any>} score 
 */

export const defineWinner = (pointsPlayers,score ) => {
    const [pointsMinimun, pointsComputer] = pointsPlayers;

    setTimeout(() => {
        if (pointsComputer === pointsMinimun) {
            score[0].innerText = '  Tie!';
            score[pointsPlayers.length - 1].innerText = '  Tie!';
          } else if (pointsComputer > 21 && pointsMinimun <= 21) {
            score[0].innerText = '  Winner!🥇';
          } else {
            score[pointsPlayers.length - 1].innerText = '  Winner!🥇';
          };
    }, 150);
};