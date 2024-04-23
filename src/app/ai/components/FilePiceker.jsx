import Button from "./CustemButton"

const FilePiceker = ({file,setFile,readFile}) => {
    return (
      <div className="filepicker-container">
        <div className="flex-1 flex flex-col">
            <input 
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}            />
            <label htmlFor="file-upload" className="filepicker-label">
               Upload File                        
            </label>
            <p className="mt-2 text-gray-500 text-xs truncate">
              {file === "" ? "NO file selected" : file.name}
            </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-6">
           <Button
           type="outline"
           title="Logo"
           handleClick={() => readFile('logo')}
           customStyles="text-xs"
           >
              Logo
           </Button>
        </div>  
      </div>
    )
  }
  
  export default FilePiceker
  