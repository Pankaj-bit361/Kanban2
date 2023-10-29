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

  const handleChangeBacklog = (result) => {
    console.log(result)
    if (!result.destination) {
      return
    }
   const {source,destination} =result
   const resulted = (
    source.droppableId === 'backlog' ? getbacklogData
    : source.droppableId === 'doing' ? getDoingData
    : source.droppableId === 'review'? getReviewData
    : getDoneData
  );
  const resultedDestination=(
    destination.droppableId === 'backlog' ? getbacklogData
    : destination.droppableId === 'doing' ? getDoingData
    : destination.droppableId === 'review'? getReviewData
    : getDoneData
  )
   if(source.droppableId===destination.droppableId){
    const [reorderedItem] = resulted.splice(result.source.index, 1);
    resulted.splice(result.destination.index, 0, reorderedItem);
    source.droppableId === 'backlog' ? setBacklogData(resulted)
    : source.droppableId === 'doing'?setDoingData(resulted):source.droppableId === 'review' ? setReviewData(resulted)
    : setDoneData(resulted);  
   }else {
    const [reorderedItem] = resulted.splice(result.source.index, 1);
    source.droppableId === 'backlog' ? setBacklogData(resulted)
    : source.droppableId === 'doing'?setDoingData(resulted):source.droppableId === 'review' ? setReviewData(resulted)
    : setDoneData(resulted);  
    resultedDestination.splice(result.destination.index,0,reorderedItem)
    destination.droppableId === 'backlog' ? setBacklogData(resultedDestination)
    : destination.droppableId === 'doing'?setDoingData(resultedDestination):destination.droppableId === 'review' ? setReviewData(resultedDestination)
    : setDoneData(resultedDestination);  

   }
    
  }


  return (
    <Box className="App" >
      <Box w={'100%'} height={'100vh'} pt={'5%'}>
        <Box w={"90%"} m={'auto'} height={'80vh'}>
          <DragDropContext onDragEnd={handleChangeBacklog}>
            <SimpleGrid columns={[1, 2, 3, 4]} gap={2}>
              <Droppable droppableId='backlog'>
                {(provided, snapshot) => (
                  <div className='characters1' {...provided.droppableProps} ref={provided.innerRef}>
                    <Card name={"Backlog"} data={getbacklogData} setData={setBacklogData} back={'#ed8492'} />
                    {provided.placeholder}
                  </div>

                )}
              </Droppable>
              <Droppable droppableId='doing'>
                {(provided, snapshot) => (
                  <div className='characters2' {...provided.droppableProps} ref={provided.innerRef}>
                    <Card name={"Doing"} data={getDoingData} setData={setDoingData} back={"#f5e688"} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId='review'>
                {(provided, snapshot) => (
                  <div className='characters3' {...provided.droppableProps} ref={provided.innerRef}>
                    <Card name={'Review'} data={getReviewData} setData={setReviewData} back={'#88f48e'} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId='done'>
                {(provided, snapshot) => (
                  <div className='characters4' {...provided.droppableProps} ref={provided.innerRef}>
                    <Card name={'Done'} data={getDoneData} setData={setDoneData} back={'#158cf7'} />
                    {provided.placeholder}
                  </div>


                )}
              </Droppable>
            </SimpleGrid>
          </DragDropContext>
        </Box>
      </Box>

    </Box>
  );
}

export default App;
