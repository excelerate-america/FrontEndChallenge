import react, { useState, useEffect } from 'react'
import { Link as ChakraLink, Box } from '@chakra-ui/react'
import { getSiteLayout } from '@/layouts'
import { SectionHeader } from '@/elements'
// import { articlesMake, articlesMakeRest } from 'data/mockdata'
import { getArticles } from '@/lib/fakeApi'
export default function IndexPage({ page }) {
  const [articles, setArticles] = useState()
  useEffect(() => {
    setArticles(() => getArticles())
    return
  }, [])

  return (
    <Box>
      <SectionHeader>Section Header</SectionHeader>
      {articles && (
        <>
          {articles.map((art, index) => (
            <Box w="100px" h="100px" color="pink" key={index}>
              {art.articleTitle}
            </Box>
          ))}
        </>
      )}
    </Box>
  )
}

IndexPage.getLayout = getSiteLayout
