import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { removeContact } from 'redux/operations/operations';
import man from './img/man.jpg';
import woman from './img/woman.jpg';
import nogender from './img/nogender.png';

export default function PhonebookList({ contactsList }) {
  function icon(gender) {
    if (gender === 'man') {
      return man;
    } else if (gender === 'woman') {
      return woman;
    } else {
      return nogender;
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
  const oneContacts = contactsList.map(({ id, name, number, gender }) => {
    return (
      <li key={id} className="list-item">
        <img src={icon(gender)} alt="contact-icon" className="gender-icon" />
        <p>
          {name}: {number}
          {''}
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

  return <ul>{oneContacts}</ul>;
}
