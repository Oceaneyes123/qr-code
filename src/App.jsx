import { useState } from 'react';
import Generator from './components/Generator';
import Reader from './components/Reader';

function App() {
  const [activeTab, setActiveTab] = useState('QR Generator');

  return (
    <>
      <div className="justify-content-center align-items-center d-flex flex-column pt-5 parent-wrapper">
        <ul className="nav justify-content-center main-container">
            <li className="">
                <h5 className={activeTab === 'QR Generator' ? "nav-active" : "not-active"} onClick={() => setActiveTab('QR Generator')} href="#">QR Generator</h5>
            </li>
            <li className="">
                <h5 className={activeTab === 'QR Reader' ? "nav-active" : "not-active"} onClick={() => setActiveTab('QR Reader')} href="#">QR Reader</h5>
            </li>
        </ul>
        {activeTab === 'QR Generator' && <Generator></Generator>}
        {activeTab === 'QR Reader' && <Reader></Reader>}
      </div>
    </>
  )
}

export default App