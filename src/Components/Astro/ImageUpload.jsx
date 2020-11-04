import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const ImageUpload = () => {
    const [file, setfile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
       let selected = e.target.files[0];

       if (selected && types.includes(selected.type)) {
           setfile(selected);
           setError('');
       } else {
           setfile(null);
           setError('Please select an image file (png or jpeg)');
       }
    }

    return (
        <>
            <form>
            <label className="imageLabel">
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
               { error && <div className="error">{ error }</div>}
               { file && <div>{ file.name }</div> }
               { file && <ProgressBar file={file} setfile={setfile} /> }
            </div>
            </form>
        </>
    );
}
export default ImageUpload;