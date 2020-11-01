import React, { setState } from 'react';
// import styled from 'styled-components';
import { Background, PopupWrap, PopupImg, PopupContent, ClosePopupButton } from './PopupStyles';

export const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup ? (
        <Background>
          <PopupWrap showPopup={showPopup}>
            <PopupImg /*src={require('./popup')}*/ alt="popup">BILD FFS</PopupImg>
            <PopupContent>
              <h1>Denna modul kommer ev användas</h1>
              <p>jag hoppas denna kommer till användning suttit väldigt länge för att få det att funka</p>
              <button>JOIN NOW</button>
            </PopupContent>
            <ClosePopupButton
              aria-label="Close popup"
              onClick={() => setShowPopup(prev => !prev)}
            />
          </PopupWrap>
        </Background>
      ) : null}
    </>
  )
};

export default Popup;



// import React, { useState } from 'react';
// import Modal from 'react-modal';
// // import { PopupWrap } from './PopupStyles';

// Modal.setAppElement('#root')
// const Popup = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false)

//   return (
//     <div className="Popup">
//       <button onClick={() => setModalIsOpen(true)}>ÖPPNA</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}

//         style={
//           {
//             overlay: {
//               backgroundColor: 'green'
//             },
//             content: {
//               color: 'pink'
//             }
//           }
//         }
//       >
//         <h2>Modal titel</h2>
//         <p>modal body</p>
//         <div>
//           <button onClick={() => setModalIsOpen(false)}>STÄNG</button>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// export default Popup;