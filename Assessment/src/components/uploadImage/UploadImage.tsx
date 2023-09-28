import { useRef, useState } from 'react';
import './UploadImage.css';

function UploadImage() {

    const uploadImage : any = useRef(null);
    let [imageUrl, setImageUrl] = useState('');

    function setImage(e: any) {
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    }

    function clearImageUrl(){
        setImageUrl('');
    }

    return (
        <div className="container-fluid mt-5 upload-image">
            <div className="card mb-4 box-shadow subscription-transform" id="free">
                <div className="card-header d-flex align-items-center  ">
                    <h5 className="my-0 font-weight-normal">Upload cover image</h5>
                </div>
                <div className="card-body m-4 p-0" hidden={imageUrl != ''}>
                    <a href="#" className='p-3 d-flex flex-column justify-content-center align-items-center text-decoration-none ' onClick={(e: any) => { uploadImage.current?.click(); e.preventDefault() }} >
                        <img src="../src/assets/upload-svgrepo-com (1).svg" width="25" alt="" />
                        <p className='mb-1 mt-1 text-dark'>upload cover image</p>
                        <p><small className='small-text'>16:9 ratio is recommended. Max image size 1mb</small></p>
                    </a>
                </div>
                <div className="card-body m-4 p-0" hidden={imageUrl == ''}>
                    <img src={imageUrl} alt="" style={{width:'100%'}}/>
                    <div className='d-flex justify-content-start align-items-center '>
                        <img src="../src/assets/cancel-svgrepo-com.svg" alt="" className='ms-4 mb-2' style={{width:'15px',marginTop:'24.5px'}}/>
                        <a href="#" className='text-decoration-none ' onClick={clearImageUrl}><p className='text-danger ms-1 mt-4 mb-2'><strong><small><small>Delete & re-upload</small></small></strong></p></a>
                    </div>
                </div>
                <div>
                    <input type="file" name="uploadImage" id="uploadImage" ref={uploadImage} onChange={setImage} accept='image/*' hidden />
                </div>
            </div>
        </div>
    )
}

export default UploadImage;