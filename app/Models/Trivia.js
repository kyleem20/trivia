

export class Trivia {
  constructor(data) {
    console.log('Trivia loaded');
    this.question = data.question
    this.correct = data.correct
    this.incorrect = data.incorrect
  }

  get Template() {
    return `<li>${this.question}</li>
    <li>${this.correct}</li>
    <li>${this.incorrect}</li>
    `
  }
}
