import { useState, useEffect } from "react";
import EditableBlock from '../editableBlock';
import { objectId, setCaretToEnd } from '../../helper';
import usePrevious from '../../helper/usePrevious'


const EditableContainer = ({_id, fireType, fetchedBlocks, userId, err}) => {
  if (err) {
    return(
      <h1> Something went wrong</h1>
    );
  }

  const [blocks, setBlocks] = useState(fetchedBlocks);
  const [currentBlockId, setCurrentBlockId] = useState(null);

  const prevBlocks = usePrevious(blocks)

  if (!blocks) {
    return(
      <h1> Something went wrong</h1>
    )
  }

  // update database here if blocks get added or removed
  useEffect(() =>{
    const pushBulletsToServer = async (blocks) => {
      const pushBody = () => {
        if(fireType === "primaryFire"){
          return { userId: userId, primaryFire: blocks }
        }
        if(fireType === "secondaryFire"){
          return { userId: userId, secondaryFire: blocks }
        }
        if(fireType === "dumpsterFire"){
          return { userId: userId, dumpsterFire: blocks }
        }
      }
      try {
        await fetch (`${process.env.SERVER_URL}/fires`, {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pushBody()),
        })
      } catch(err) { console.log(err)}
    }
    if (prevBlocks && prevBlocks !== blocks) {
      pushBulletsToServer(blocks)
    }
  }, [blocks, prevBlocks])

  const updateBlockHandler = (currentBlock) => {
    const index = blocks.map((b) => b._id).indexOf(currentBlock._id)
    const updatedBlocks = [...blocks]
    updatedBlocks[index] = {
      ...currentBlock[index],
      _id: currentBlock._id,
      html: currentBlock.html,
      shot: currentBlock.shot,
    }
    setBlocks(updatedBlocks);
  }

  const addBlockHandler = (currentBlock) => {
    setCurrentBlockId(currentBlock._id)
    const newBlock = { _id: objectId(), html: "", shot: false}
    const index = blocks.map((b) => b._id).indexOf(currentBlock._id)
    const updatedBlocks = [...blocks]
    updatedBlocks.splice(index+1, 0, newBlock)
    setBlocks(updatedBlocks)
    // move focus on index+1
  }

  const deleteBlockHandler = (currentBlock) => {
    if (blocks.length > 1) {
      // move focus on index-1
      const index = blocks.map((b) => b._id).indexOf(currentBlock._id)
      const updatedBlocks = [...blocks]
      updatedBlocks.splice(index, 1)
      setBlocks(updatedBlocks)
    }
  }

  return(
    <div className="editableContainer">
      {blocks.map((block, index) => {
        return(
          <EditableBlock
            key={block._id}
            _id={block._id}
            html={block.html}
            updateBlock={updateBlockHandler}
            addBlock={addBlockHandler}
            deleteBlock={deleteBlockHandler}
            shot={block.shot}
          />
        )
      })}
    </div>
  )
}

export default EditableContainer
