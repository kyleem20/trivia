

export class Trivia {
  constructor(data) {
    console.log('Trivia loaded');
    this.question = data.question
  }

  get Template() {
    return `<li>${this.question}</li>`
  }
}