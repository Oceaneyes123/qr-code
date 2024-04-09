import '../index.css'
import QRCode from 'qrcode'
import { useState, useEffect } from 'react'

const Generator = () => {

    const [qrValue, setQrValue] = useState('')
    const [qrImageUrl, setQrImageUrl] = useState('')

    //create a async useEffect function that will load a blank value for the QR code
    useEffect(() => {
        const generateQR = async () => {
            const newValue = 'Test Data';
            const response = await QRCode.toDataURL(newValue);
            setQrImageUrl(response);
        }
        
        generateQR()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const age = e.target[1].value
        const address = e.target[2].value
        const occupation = e.target[3].value
        setQrValue(`Name: ${name}\nAge: ${age}\nAddress: ${address}\nOccupation: ${occupation}`)
        console.log(qrValue)
        const response = await QRCode.toDataURL(qrValue)
        setQrImageUrl(response)
    }

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = qrImageUrl
        link.download = 'qrcode.png'
        link.click()
    }


  return (
    <div className="mt-3 form-container d-flex gap-5">
        <div className="card flex-grow-1 px-2 py-2 background-lpurple">
            <h3>Generator</h3>
            <div className="card-body">
                {/* create labels and inputs for name, age, address, occupation */}
                <form action="submit" onSubmit={handleSubmit}>
                    <label className="mb-2">Name</label>
                    <input type="text" id="name" className="form-control mb-4" />
                    <label  className="mb-2">Age</label>
                    <input type="number" id="age" className="form-control mb-4" />
                    <label  className="mb-2">Address</label>
                    <input type="text" id="address" className="form-control mb-4" />
                    <label  className="mb-2">Occupation</label>
                    <input type="text" id="occupation" className="form-control mb-4" />
                    <button className="btn btn-primary background-yellow mt-3">Generate</button>
                </form>
            </div>
        </div>
        <div className="flex-grow-1">
            <div className="card px-3 py-3 background-lpurple">
                <h3>QR Code</h3>
                <div className="card-body">
                    <img src={qrImageUrl} alt="QR Code" height={200} width={200}/>
                    <div className="d-flex">
                        <button type="button" className="btn btn-primary background-yellow mt-3" onClick={handleDownload}>Download</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Generator