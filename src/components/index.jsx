import { Flex } from '@chakra-ui/react'
import { useState } from 'react'

import Content from './content/Content.jsx'
import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'

const DSA = ({ data, setData, isHomeScreen, selectedContentIndex }) => {
    let [searchValue, setSearchValue] = useState('')
    const isDarkMode = data.data.header.darkMode
    return (
        <>
        <Flex 
            className={isDarkMode ? '' : 'bg-lines-light'}
            position={'fixed'}
            zIndex={-1}
            top={0}
            left={0} 
            w={'100vw'} 
            minH={'100vh'}
            h={'auto'}
            flexDirection={'column'} 
            alignItems={'center'} 
            justifyContent={'space-between'}
            bg={isDarkMode ? 'fullPageColor_dark' : ''}

        />
        <Flex
            className={'app'}
            w={'100vw'}
            minH={'100vh'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
            // bg={isDarkMode ? 'fullPageColor_dark' : 'fullPageColor'}
        >
            <Header
                data={data}
                setData={setData}
                isHomeScreen={isHomeScreen}
                selectedContentIndex={selectedContentIndex}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Content
                data={data}
                setData={setData}
                isHomeScreen={isHomeScreen}
                selectedContentIndex={selectedContentIndex}
                searchValue={searchValue}
            />
            <Footer data={data} />
        </Flex>
        </>
    )
}

export default DSA
