import react, { useState, useEffect } from 'react'
import { Link as ChakraLink, Box } from '@chakra-ui/react'
import { getSiteLayout } from '@/layouts'
import { SectionHeader } from '@/elements'
import Image from 'next/image'
import { ArticleCard } from '@/modules'
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
      {articles && (
        <>
          {articles.map((art, index) => (
            <ArticleCard key={index} article={art} />
          ))}
          <SectionHeader>Section Header</SectionHeader>
        </>
      )}
    </Box>
  )
}

IndexPage.getLayout = getSiteLayout
