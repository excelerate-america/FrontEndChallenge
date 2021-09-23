// https://i.ibb.co/fYBxhmK/article-image0x.png
// https://i.ibb.co/fp7vN8M/article-image05.png
// https://i.ibb.co/T0LKkrn/article-image04.png
// https://i.ibb.co/bd225rX/article-image03.png
// https://i.ibb.co/4Nzsb19/article-image02.png
// https://i.ibb.co/tLNpJr8/article-image01.png
const articles = [
  {
    articleId: '26c0d175-6092-4fa1-97bd-de41da064be1',
    articleCategory: ['nln'],
    articleTitle: 'Delectus necessitatibus libero ut.',
    articleTags: ['CASH'],
    publishedOn: '2021-08-04T19:54:22.468Z',
    imgUrl: 'tLNpJr8/article-image01.png'
  },
  {
    articleId: '450747c2-5530-4ca2-b78e-8cf8f6fc1c6f',
    articleCategory: ['nln'],
    articleTitle: 'Dicta et placeat libero ut.',
    articleTags: [],
    publishedOn: '2021-08-31T23:28:41.664Z',
    imgUrl: '4Nzsb19/article-image02.png'
  },
  {
    articleId: 'fa8787ff-65af-4090-aca3-ecc244423495',
    articleCategory: ['player pick'],
    articleTitle: 'Vel molestiae eum alias.',
    articleTags: ['CASH'],
    publishedOn: '2021-08-31T00:41:55.026Z',
    imgUrl: 'bd225rX/article-image03.png'
  },
  {
    articleId: 'e44caaa0-0be6-4134-8621-3fb223cceadc',
    articleCategory: ['player pick'],
    articleTitle: 'Qui voluptas natus et omnis magni quam accusamus amet.',
    articleTags: [],
    publishedOn: '2021-08-09T14:11:09.118Z',
    imgUrl: 'T0LKkrn/article-image04.png'
  },
  {
    articleId: '3e4f2ce6-2795-4622-b217-456c66da10a0',
    articleCategory: ['old school'],
    articleTitle: 'Unde ut dolores odio sed incidunt.',
    articleTags: [],
    publishedOn: '2021-08-14T09:58:30.448Z',
    imgUrl: 'fp7vN8M/article-image05.png'
  },
  {
    articleId: '9b6be457-6592-48d2-8159-f445a199752d',
    articleCategory: ['nln'],
    articleTitle: 'Nihil corrupti est veritatis sint.',
    articleTags: ['CASH', 'SAVE'],
    publishedOn: '2021-07-28T10:08:23.154Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '7df61069-5b35-41e1-9d31-96289c3ecc95',
    articleCategory: ['change game'],
    articleTitle: 'A ut sapiente incidunt alias omnis et harum rem eaque.',
    articleTags: ['SAVE'],
    publishedOn: '2021-08-30T20:22:46.193Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: 'e7ad9d7b-6896-4ad7-a09a-ce4d60429155',
    articleCategory: ['nln'],
    articleTitle: 'Officiis at atque suscipit ut.',
    articleTags: [],
    publishedOn: '2021-07-10T07:35:11.330Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '719af52e-98a0-4c48-9320-1193134aa488',
    articleCategory: ['nln'],
    articleTitle: 'Incidunt voluptate quaerat rem est enim autem enim dolore.',
    articleTags: ['SAVE'],
    publishedOn: '2021-07-30T06:59:28.787Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '5b6bc4e3-c3b0-4f92-9bc9-a98807c0865f',
    articleCategory: ['nln'],
    articleTitle: 'Minus eveniet et.',
    articleTags: ['CASH', 'SAVE'],
    publishedOn: '2021-07-16T00:14:48.035Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '7fa5493f-72b0-4b27-8008-8b059d1b05f4',
    articleCategory: ['change game'],
    articleTitle: 'Quidem corporis qui qui aut omnis iste a et.',
    articleTags: ['CASH'],
    publishedOn: '2021-08-29T22:54:36.852Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '6240207c-e12e-444b-8152-f557569e5be9',
    articleCategory: ['change game'],
    articleTitle: 'Numquam fugit odit illum maiores.',
    articleTags: ['CASH', 'SAVE'],
    publishedOn: '2021-08-09T17:45:11.236Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '76232f67-e990-4ce8-bd11-d4e1179dc5d4',
    articleCategory: ['old school'],
    articleTitle: 'Sed dolorem dolores est voluptatem laboriosam debitis.',
    articleTags: ['CASH', 'SAVE'],
    publishedOn: '2021-09-02T05:26:31.569Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '6f444779-c92f-4e57-bd1a-f1a426c62c73',
    articleCategory: ['old school'],
    articleTitle: 'Nam et veniam nisi totam ut libero.',
    articleTags: ['SAVE'],
    publishedOn: '2021-09-04T03:52:03.572Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '6f35dde5-8522-4f20-9b19-502e8048099a',
    articleCategory: ['change game'],
    articleTitle: 'Eos necessitatibus et.',
    articleTags: [],
    publishedOn: '2021-08-27T02:42:58.435Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '2970fce2-185a-442f-ae00-b0e2e12167a3',
    articleCategory: ['nln'],
    articleTitle: 'Inventore et est aspernatur dolor cum molestias est maxime.',
    articleTags: [],
    publishedOn: '2021-08-19T11:44:53.561Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: 'fe3dc719-0f4c-4e8c-b2e3-bd22a5f9f7ef',
    articleCategory: ['favs'],
    articleTitle: 'Minus adipisci aliquid cumque cum et saepe iste qui.',
    articleTags: ['SAVE'],
    publishedOn: '2021-08-17T05:02:46.642Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: 'b4c71122-8e0a-4fd5-8458-34d5992dabff',
    articleCategory: ['old school'],
    articleTitle: 'Nulla ratione aliquam ut facilis autem eos.',
    articleTags: [],
    publishedOn: '2021-08-03T18:38:05.712Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: 'e4b5f808-f567-4684-b3f0-00cd6aecfc21',
    articleCategory: ['nln'],
    articleTitle: 'Ipsa fugiat ut nihil nam dolorem eos illum enim rerum.',
    articleTags: [],
    publishedOn: '2021-07-10T19:56:46.139Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '3d022e0d-80d1-41ad-836f-df267015cb27',
    articleCategory: ['change game'],
    articleTitle: 'Reiciendis cum omnis eum saepe vitae id.',
    articleTags: ['CASH'],
    publishedOn: '2021-09-08T02:41:53.947Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '2a34c913-845a-415a-9d97-b1810433ffb8',
    articleCategory: ['favs'],
    articleTitle: 'Ad et sed dolorem consequuntur aut nobis.',
    articleTags: ['CASH', 'SAVE'],
    publishedOn: '2021-07-21T16:27:34.262Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: 'cd14d6d0-20f2-4f1d-84f7-e336f4440077',
    articleCategory: ['old school'],
    articleTitle:
      'Minus enim laudantium quia amet illo iusto consequatur quo accusantium.',
    articleTags: [],
    publishedOn: '2021-07-18T15:33:26.708Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: 'd32a616c-34d3-407b-861a-1aac0a6cf781',
    articleCategory: ['change game'],
    articleTitle: 'Autem blanditiis animi voluptatibus vitae quis nam.',
    articleTags: ['SAVE'],
    publishedOn: '2021-08-27T09:52:15.612Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '841687f2-7ee2-4bb3-a062-b455dd26622a',
    articleCategory: ['player pick'],
    articleTitle:
      'Quisquam et dolor aut dolorem recusandae aspernatur veritatis.',
    articleTags: ['SAVE', 'CASH'],
    publishedOn: '2021-09-05T19:17:04.276Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '2abcf9a9-efeb-43af-9b73-2c2f87fd8a18',
    articleCategory: ['change game'],
    articleTitle: 'Enim et quia dolore sit a rerum voluptatibus placeat ipsa.',
    articleTags: [],
    publishedOn: '2021-09-06T13:39:52.915Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '721ffbc5-e6e0-42ed-9318-883769603dc4',
    articleCategory: ['favs'],
    articleTitle:
      'Cum ea facilis error iure tenetur ea autem provident voluptatibus.',
    articleTags: ['SAVE', 'CASH'],
    publishedOn: '2021-09-01T13:03:40.179Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '41bd6380-7717-4b6f-b879-d2ccdbf124f3',
    articleCategory: ['nln'],
    articleTitle:
      'Consectetur harum ea hic consectetur voluptates accusantium suscipit est eos.',
    articleTags: ['CASH'],
    publishedOn: '2021-07-15T14:15:54.566Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: 'd730c1db-d1e6-43f1-b108-eae4a041b492',
    articleCategory: ['old school'],
    articleTitle: 'Eius quasi est aut.',
    articleTags: [],
    publishedOn: '2021-07-22T18:19:09.139Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '7fd3d99c-f5e2-490e-ada4-b5c4b11d28cf',
    articleCategory: ['old school'],
    articleTitle: 'Accusamus ad et porro dolorem voluptate.',
    articleTags: ['CASH', 'SAVE'],
    publishedOn: '2021-09-13T08:31:28.420Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  },
  {
    articleId: '09040b7d-71e3-4d17-a772-e4cfdb86ef81',
    articleCategory: ['nln'],
    articleTitle: 'Odit unde sint est distinctio aperiam iste.',
    articleTags: ['CASH', 'SAVE'],
    publishedOn: '2021-08-21T15:33:30.595Z',
    imgUrl: 'fYBxhmK/article-image0x.png'
  }
]
export default articles
