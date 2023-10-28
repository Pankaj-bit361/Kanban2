import logo from './logo.svg';
import './App.css';
import { Box, Button, Flex, SimpleGrid, Text, Textarea, Toast, useToast } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Card from './components/Card';

export const dummyBacklogData = [{ id: "1", title: "Good Morning" }, { id: "2", title: "Good Evening" }, { id: "3", title: "Good Night" }]
export const dummyDoingData = [{ id: "20", title: "Good Morning" }, { id: "4", title: "Good Evening" }, { id: "6", title: "Good Night" }]
export const dummyReviewData = [{ id: "7", title: "Good Morning" }, { id: "8", title: "Good Evening" }, { id: "9", title: "Good Night" }]
export const dummyDoneData = [{ id: "10", title: "Good Morning" }, { id: "11", title: "Good Evening" }, { id: "12", title: "Good Night" }]
function App() {

  const [getbacklogData, setBacklogData] = useState(dummyBacklogData)
  const [getDoingData, setDoingData] = useState(dummyDoingData)
  const [getReviewData, setReviewData] = useState(dummyReviewData)
  const [getDoneData, setDoneData] = useState(dummyDoneData)
  const toast = useToast()

  const handleChangeBacklog = (result) => {
    if (!result.destination) {
      toast({
        title: `This functionality wil; be soon available`,
        position: 'center',
        isClosable: true,
      })
      return
    }
    const items = Array.from(getbacklogData);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items)
    setBacklogData(items)
  }
  const handleChangeDoing = (result) => {
    if (!result.destination) {
      toast({
        title: `This functionality wil; be soon available`,
        position: 'center',
        isClosable: true,
      })
      return
    }
    const items = Array.from(getDoingData);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items)
    setDoingData(items)
  }
  const handleChangeDone = (result) => {
    if (!result.destination) {
      toast({
        title: `This functionality wil; be soon available`,
        position: 'center',
        isClosable: true,
      })
      return
    }
    const items = Array.from(getDoneData);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items)
    setDoneData(items)
  }

  const handleChangeReview = (result) => {
    if (!result.destination) {
      toast({
        title: `This functionality wil; be soon available`,
        position: 'center',
        isClosable: true,
      })
      return
    }
    const items = Array.from(getReviewData);
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items)
    setReviewData(items)
  }
  return (
    <Box className="App" bg={'#008299'}>
      <Box w={'100%'} height={'100vh'} pt={'5%'}>
        <Box w={"90%"} m={'auto'} height={'80vh'}>
          <SimpleGrid columns={4} gap={2}>
            <DragDropContext onDragEnd={handleChangeBacklog}>
              <Droppable droppableId='droppable1'>
                {(provided, snapshot) => (
                  <div className='characters1' {...provided.droppableProps} ref={provided.innerRef}>
                    <Card name={"Backlog"} data={getbacklogData} setData={setBacklogData} back={'#ed8492'} />
                    {provided.placeholder}
                  </div>

                )}
              </Droppable>
            </DragDropContext>
            <DragDropContext onDragEnd={handleChangeDoing}>
              <Droppable droppableId='droppable2'>
                {(provided, snapshot) => (
                  <div className='characters2' {...provided.droppableProps} ref={provided.innerRef}>

                    <Card name={"Doing"} data={getDoingData} setData={setDoingData} back={"#f5e688"} />
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <DragDropContext onDragEnd={handleChangeReview}>
              <Droppable droppableId='droppable3'>
                {(provided, snapshot) => (
                  <div className='characters3' {...provided.droppableProps} ref={provided.innerRef}>
                    <Card name={'Review'} data={getReviewData} setData={setReviewData} back={'#88f48e'} />
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <DragDropContext onDragEnd={handleChangeDone}>
              <Droppable droppableId='droppable4'>
                {(provided, snapshot) => (
                  <div className='characters4' {...provided.droppableProps} ref={provided.innerRef}>
                    <Card name={'Done'} data={getDoneData} setData={setDoneData} back={'#158cf7'} />
                    {provided.placeholder}
                  </div>


                )}
              </Droppable>
            </DragDropContext>

          </SimpleGrid>

        </Box>
      </Box>

    </Box>
  );
}

export default App;
