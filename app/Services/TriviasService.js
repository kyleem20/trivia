import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { api } from "./AxiosService.js";


class TriviasService {
  constructor() {
    console.log('Trivias service loaded');
  }

  async getTrivia() {
    console.log('service: getting questions')
    const res = await api.get()
    console.log('api response', res.data)
    ProxyState.question = res.data.results.map(q => new Trivia(q))
  }

}


export const triviasService = new TriviasService