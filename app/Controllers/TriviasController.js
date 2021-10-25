import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";


function _draw() {
  let question = ProxyState.question
  let template = ''
  question.forEach(q => template += q.Template)
  document.getElementById('app').innerHTML = template
}



export class TriviasController {

  constructor() {
    console.log('Trivias Controller loaded');
    ProxyState.on('trivia', _draw)
    ProxyState.on('question', _draw)
    this.getTrivia()
  }

  async getTrivia() {
    try {
      await triviasService.getTrivia()
      console.log('controller: get question finished');
    } catch (error) {
      console.error('no questions', error)
    }
  }


}