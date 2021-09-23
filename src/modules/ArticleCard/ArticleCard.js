import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import Image from 'next/image'

const myLoader = ({ src }) => {
  return `https://i.ibb.co/${src}`
}
const ArticleCard = (props) => {
  const { article } = props
  return (
    <Box width="268px" color="grey.200">
      <Image
        alt="Art iMage"
        loader={myLoader}
        src={`${article.imgUrl}`}
        height="616px"
        width="1005px"
        layout="responsive"
      />

      {article.articleTitle}
    </Box>
  )
}

export default ArticleCard
