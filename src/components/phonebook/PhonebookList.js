import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { removeContact } from 'redux/contacts/contactsSlice';
import filterContact from 'redux/contacts/contactsSelector';
import man from './img/man.jpg';
import woman from './img/woman.jpg';
import nogender from './img/nogender.png';

export default function PhonebookList() {
  function icon(gender) {
    if (gender === 'man') {
      return <img src={man} alt="contact-icon" className="gender-icon" />;
    } else if (gender === 'woman') {
      return <img src={woman} alt="contact-icon" className="gender-icon" />;
    } else {
      return <img src={nogender} alt="contact-icon" className="gender-icon" />;
    }
  }
  const removeMessage = () => {
    return Notiflix.Report.failure('Remove', 'Contact removed', 'Close', {
      svgSize: '200px',
      titleFontSize: '24px',
      messageFontSize: '20px',
      buttonFontSize: '16px',
      width: '300px',
      backOverlay: true,
      backOverlayClickToClose: true,
    });
  };
  const dispatch = useDispatch();
  const itemList = useSelector(filterContact);
  const oneItemPhonebook = itemList.map(({ id, name, number, gender }) => {
    return (
      <li key={id} className="list-item">
        {icon(gender)}
        <p>
          {name}: {number}
        </p>
        <button
          className="delete-btn"
          type="button"
          onClick={() => dispatch(removeContact(id), removeMessage())}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul>{oneItemPhonebook}</ul>;
}
