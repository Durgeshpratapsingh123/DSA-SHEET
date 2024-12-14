import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
    const originalDsaSheetLink =
        'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'
    const originalAuthorLinkedInLink = 'https://www.linkedin.com/in/striver/'
    const gitHubLink = 'https://github.com/Durgeshpratapsingh123'

    return (
        <Flex
            className={'footer'}
            bg={'footerBg'}
            w={'100vw'}
            px={8}
            py={4}
            flexGrow={'0'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            userSelect={'none'}
        >
            <Text
                fontWeight={'md'}
                fontSize={'lg'}
                fontFamily={'customFamily'}
                fontStyle={'normal'}
                color={'borderColor'}
                textAlign={'center'}
            >
                A Personal web-based progress tracker based on{' '}
                {
                    <a
                        href={originalDsaSheetLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>A2Z DSA Sheet</b>
                    </a>
                }{' '}
                by{' '}
                {
                    <a
                        href={originalAuthorLinkedInLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b>Striver</b>
                    </a>
                }
                .
            </Text>

            <Link
                href={gitHubLink}
                target={'_blank'}
                _hover={{}}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    w={'fit-content'}
                    h={'fit-content'}
                    px={8}
                    py={4}
                    bg={'black'}
                    borderRadius={'16px'}
                    fontWeight={'lg'}
                    fontSize={'md'}
                    fontFamily={'customFamily'}
                    fontStyle={'normal'}
                    color={'gray.100'}
                >
                    This Project
                </Text>
            </Link>
        </Flex>
    )
}

export default Footer
