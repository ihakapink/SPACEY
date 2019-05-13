import request from 'superagent'
import { requestCards, receiveCards } from '../actions/cards'

const cardUrl = '/cards'

export function getCards () {
  return (dispatch) => {
    dispatch(requestCards())
    return request
      .get('/cards')
      .then(res => {
        const newCard = res.body
        dispatch(receiveCards(newCard))
      })
      .catch(err => {
      // eslint-disable-next-line no-console
        console.error(err)
      })
  }
}

export function addCard (card, callback) {
  return request
    .post(cardUrl)
    .send(card)
    .end((err, res) => {
      callback(err)
    })
}

export function updateCard (card) {
  return request
  .put(`/cards/${card.id}`) 
  .send(card)
  .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}

// export function updateCard (card, callback) {
//   return request
//   .put(cardUrl) 
//   .send(card)
//   .end((err, res) => {
//     callback(err)
//   })
// }