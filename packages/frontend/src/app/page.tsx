'use client'
import ContractInfo from '@/components/ContractInfo'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Wallet from '@/components/Wallet'
import { ChakraProvider, VStack, extendTheme } from '@chakra-ui/react'

declare global {
    interface Window {
        ethereum?: any
    }
}

const theme = extendTheme({
    config: {
        useSystemColorMode: true,
    },
})

export default function Home() {
    return (
        <ChakraProvider theme={theme}>
            <Header />
            <VStack p={10} gap={5} w="full">
                <Wallet />
            </VStack>
            <Footer display={{ base: 'none', md: 'flex' }} />
        </ChakraProvider>
    )
}
