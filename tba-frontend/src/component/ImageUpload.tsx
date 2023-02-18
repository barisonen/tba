import {useEffect, useState} from "react";

export const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState<string>()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    }

    return (
        <div className="flex flex-col items-center">
            <label htmlFor="image" className="rounded-lg text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-3 rounded-md text-sm font-medium bg-teal-900">Upload image</label>
            <input id="image" className="hidden mt-4 rounded mb-4 rounded-lg" type='file' onChange={onSelectFile}/>
            {selectedFile &&  <img className="mt-4" src={preview} /> }
        </div>
    )
}