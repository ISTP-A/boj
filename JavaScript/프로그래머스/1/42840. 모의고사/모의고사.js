function countCorrectAnswers(answers, pattern) {
  return answers.reduce(
    (count, answer, i) => count + (answer === pattern[i % pattern.length] ? 1 : 0),
    0
  )
}

function getScores(answers, patterns) {
  return patterns.map(pattern => countCorrectAnswers(answers, pattern))
}

function findTopScorers(scores) {
  const maxScore = Math.max(...scores)
  return scores
    .map((score, idx) => ({ score, idx: idx + 1 }))
    .filter(({ score }) => score === maxScore)
    .map(({ idx }) => idx)
    .sort((a, b) => a - b)
}

function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ]
    
  const scores = getScores(answers, patterns)
  return findTopScorers(scores)
}