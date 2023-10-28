import React, { useRef } from 'react'
import { Box, Button, Flex, SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDeleteSweep } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ data, setData, name, back }) => {
    const backlogRef = useRef()
    const Addbacklog = () => {
        const newId = String(Math.random() * 10000 + Date.now());
        const newItem = {
            id: newId,
            title: backlogRef.current.value
        };

        if (backlogRef.current.value.length > 0) {
            setData([...data, newItem]);
        }
        backlogRef.current.value = '';
    }

    const handledelete = (id) => {
        console.log(id)
        console.log(data)
        const filteredData = data.filter((item) => item.id != id)
        console.log(filteredData, '25')
        setData(filteredData)
    }

    return (
        <div>
            <Box h={'80vh'} boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;'} bg={'white'}>
                <Box bg={back}>
                    <Text textAlign={'center'} p={'1%'} fontFamily={'inter'} fontWeight={700} fontSize={['5vw','3vw','2vw','1.5vw']}>{name}</Text>
                </Box>
                <Box h={'59vh'} overflowX={'hidden'}>
                    {data && data.map((item, index) => (
                        <Draggable draggableId={item?.id?.toString()} index={index} key={item?.id?.toString()}>
                            {(provided) => (
                                <Flex
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    margin={'1%'}
                                    p={'1%'}
                                    placeItems={'center'}
                                >
                                    <Box w={'90%'}>
                                        <Text
                                            borderRadius={'10px'}
                                            bgColor={back}
                                            p={'1%'}
                                            pl={'3%'}
                                            color={'black'}
                                            fontWeight={500}
                                            fontFamily={'inter'}
                                            fontSize={['3vw','2vw','1.5vw','1.1vw']}
                                        >
                                            {item.title}
                                        </Text>
                                    </Box>

                                    <Box onClick={() => handledelete(item.id)}>
                                        <MdDeleteSweep color='red' size={'1.4em'} />
                                    </Box>
                                </Flex>
                            )}
                        </Draggable>


                    ))}
                </Box>

                <Box>
                    <Textarea maxHeight={'15vh'} background={'white'} border={'2px solid black'} ref={backlogRef} placeholder='Add the Task' />
                    <Button bg={'black'} onClick={Addbacklog} color={'white'} w={'100%'} display={'block'} m={'auto'}>
                        Add
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Card