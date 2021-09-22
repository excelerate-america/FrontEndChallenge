import Link from 'next/link'
import { Flex, Box } from '@chakra-ui/react'
import { AppBar, Footer } from '@/components'

export default function SiteLayout({ children }) {
  return (
    <Flex
      flexDir="column"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <AppBar />
      <Flex flexGrow="1" mt="60px" dir="column" alignItems="center">
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export const getLayout = (page) => (
  <SiteLayout {...page.props}>{page}</SiteLayout>
)
