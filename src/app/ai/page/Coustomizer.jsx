"use client";
// import node module
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config";
import { DecalTypes, EditorTabs, FilterTabs } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { TabletsIcon } from "lucide-react";

// import else 
import state from "../staore";
import {
  Tab,
  AiPiceker,
  ColorPiceker,
  FilePiceker,
  CustomButton
} from "../components/indexs";
import { reader } from "../config/helpers";


const Customize = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatingImag, setGeneratingImag] = useState(false);
    const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishshirt: false,
  });

  // sow tab content depending on the activeTab
  const generatingTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPiceker />;
      case "filepicker":
        return <FilePiceker 
            file={file}
            setFile={setFile}
            readFile ={readFile}
        />;
      case "aipicker":
        return <AiPiceker 
        prompt={prompt}
        setPrompt={setPrompt}
          generatingImg={generatingImag}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    if(!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImag(true);

      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
      })

      const data = await response.json();

      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImag(false);
      setActiveEditorTab("");
    }
  }
 

  function handleDecals(type, res) {
    
    const decalTypes = DecalTypes[type]
       state[decalTypes.stateProperty] = res;

  if(!activeEditorTab[DecalTypes.filterTab]){
      handleActiveFilterTab(decalTypes.filterTab)
    }

  }
  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
       default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }
    const readFile = (type) =>{
      reader(file).
      then((res) => { // Change 'never' to 'any' or a more specific type
        handleDecals(type, res);
        setActiveEditorTab("");
      })
    }

  return (
    <AnimatePresence>
      
      <>
        <motion.div
          key='custom'
          className='absolute top-0 left-0 z-10'
          {...slideAnimation("left")}>
          <div className='flex items-center min-h-screen'>
            <div className='editortabs-container tabs'>
              {EditorTabs.map((tab) => {
              return <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} isFilterTab={false} isActiveTab={false} />;
})}
               {generatingTabContent()}
            </div>
          </div>
        </motion.div>

        <motion.div className='filtertabs-container' {...slideAnimation("up")}>
          {FilterTabs.map((tab) => {
            return (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            );
          })}
        </motion.div>

      </>
    </AnimatePresence>
  );
};
export default Customize;