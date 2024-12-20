import './ProgressBar.css'

import { Flex, Grid } from '@chakra-ui/react'

import SingleCategory from './SingleCategory.jsx'
import SingleTopic from './SingleTopic.jsx'

const Content = ({
    data,
    setData,
    isHomeScreen,
    selectedContentIndex,
    searchValue,
}) => {
    const isDarkMode = data.data.header.darkMode
    const listOfTopics = data.data.content
    const listOfCategory = data.data.content[selectedContentIndex].categoryList

    return (
        <Flex
            className={'content'}
            my={2}
            w={'90vw'}
            flexGrow={'2'}
            flexDirection={'column'}
            borderColor={
                isHomeScreen
                    ? 'transparent'
                    : isDarkMode
                    ? 'borderColor_dark'
                    : 'borderColor'
            }
            borderWidth={'1px'}
            borderRadius={'8px'}
            p={4}
            overflowY={'scroll'}
            overflowX={'hidden'}
            backgroundColor={'transparent'}
        >
            {isHomeScreen ? (
                <>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(3, 1fr)',
                        
                        }}
                        gap={8}
                    >
                        {listOfTopics.map((contentData, index) => {
                            return (
                                <SingleTopic
                                    data={data}
                                    selectedContentIndex={index}
                                    key={index}
                                />
                            )
                        })}
                    </Grid>
                </>
            ) : (
                listOfCategory.map((categoryData, index) => {
                    return (
                        <SingleCategory
                            data={data}
                            setData={setData}
                            selectedContentIndex={selectedContentIndex}
                            selectedCategoryIndex={index}
                            key={index}
                            searchValue={searchValue}
                        />
                    )
                })
            )}
        </Flex>
    )
}

export default Content
