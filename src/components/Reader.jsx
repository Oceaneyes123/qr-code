import { useRef, useState } from 'react'
import QRScanner from 'qr-scanner'
const Reader = () => {

    const [file, setFile] = useState(null)
    const [data, setData] = useState(null)
    const fileRef = useRef()
    const newFileRef = useRef()
  
  return (
    <>
        {/* create an upload box */}
        <div className="upload-box d-flex justify-content-center gap-2 mt-5">
            { !file ? 
                <>
                    <label htmlFor="file" className="upload-box-label mr-5">Upload QR Code</label>
                    <input ref={fileRef} 
                    className="" 
                    onChange={() => {
                        setFile(fileRef.current.files[0])
                        QRScanner.scanImage(fileRef.current.files[0])
                        .then(result => {
                            setData(result)
                        })
                    }}
                    type="file" 
                    id="file" 
                    accept="image/*" />
                </>
                :
                <div>
                    <div className="d-flex gap-4">
                        <img src={URL.createObjectURL(file)} alt="qr code" height={200} width={200} />
                        {data && <div className='data-wrap'>{data}</div>}
                    </div>
                    <input className='mt-5' 
                    onChange={() => {
                        setFile(newFileRef.current.files[0])
                        QRScanner.scanImage(newFileRef.current.files[0])
                        .then(result => {
                            setData(result)
                        })
                    }} type="file" ref={newFileRef}  accept="image/*"/>
                </div>
            }
        </div>
    </>
  )
}

export default Reader