//@ts-ignore
export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple',
  timeout: 9000
})