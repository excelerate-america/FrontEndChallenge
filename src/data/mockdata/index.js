import faker from 'faker'

const images = {
  0: 'https://ibb.co/XsRxHfm',
  1: 'https://ibb.co/hMQVtNm',
  2: 'https://ibb.co/B2JT8SC',
  3: 'https://ibb.co/d7X1Vp2',
  4: 'https://ibb.co/M7VrKyk',
  5: 'https://ibb.co/dPYqpSB'
}

const imagesArray = [
  'https://ibb.co/XsRxHfm',
  'https://ibb.co/hMQVtNm',
  'https://ibb.co/B2JT8SC',
  'https://ibb.co/d7X1Vp2',
  'https://ibb.co/M7VrKyk',
  'https://ibb.co/dPYqpSB'
]
export const articlesMake = ({ count }) =>
  Array.from({ length: count }, (count) => {
    return {
      articleId: faker.datatype.uuid(),
      articleCategory: faker.random.arrayElements(
        ['nln', 'player pick', 'change game', 'favs', 'old school'],
        1
      ),
      articleTitle: faker.lorem.sentence(),
      articleTags: faker.random.arrayElements(
        ['SAVE', 'CASH'],
        faker.datatype.number({ max: 2 })
      ),
      publishedOn: faker.date.between('07/10/2021', '09/21/2021'),
      imgUrl: ''
    }
  })
export const articlesMakeRest = ({ count }) =>
  Array.from({ length: count }, (count) => {
    return {
      articleId: faker.datatype.uuid(),
      articleCategory: faker.random.arrayElements(
        ['nln', 'player pick', 'change game', 'favs', 'old school'],
        1
      ),
      articleTitle: faker.lorem.sentence(),
      articleTags: faker.random.arrayElements(
        ['SAVE', 'CASH'],
        faker.datatype.number({ max: 2 })
      ),
      publishedOn: faker.date.between('07/10/2021', '09/21/2021'),
      imgUrl: 'https://ibb.co/hMQVtNm'
    }
  })

// const articlesm = _articlesMake(5)
// console.log(articlesm)
// const articlesRest = _articlesMakeRest(25)
