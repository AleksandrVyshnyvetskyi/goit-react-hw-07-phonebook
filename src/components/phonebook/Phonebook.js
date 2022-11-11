import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contacts/contactsSlice';
import filterContact from 'redux/contacts/contactsSelector';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const contacts = useSelector(filterContact);
  const dispatch = useDispatch();

  const isDuplicate = contact => {
    const result = contacts.find(item => item.name === contact.name);
    return result;
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'gender':
        setGender(value);
        break;

      default:
        return;
    }
  };

  const handleSabmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
      gender,
    };
    setName('');
    setNumber('');
    setGender('');
    if (isDuplicate(contact)) {
      return Notiflix.Report.warning(
        'Oopps...',
        `${contact.name} already exists 🤪 Try entering the full name.`,
        'Close',
        {
          svgSize: '200px',
          titleFontSize: '24px',
          messageFontSize: '18px',
          buttonFontSize: '16px',
          width: '300px',
          backOverlay: true,
          backOverlayClickToClose: true,
        }
      );
    }
    dispatch(addContact(contact));
  };

  let nameId = nanoid();
  let numberId = nanoid();

  return (
    <form className="phonebook__form" onSubmit={handleSabmit}>
      <label htmlFor={nameId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameId}
        value={name}
        onChange={handleChange}
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className="input-phonebook"
      />
      <label htmlFor={numberId}>Number</label>
      <input
        type="tel"
        name="number"
        id={numberId}
        value={number}
        onChange={handleChange}
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className="input-phonebook"
      />
      <div className="form-gender">
        <div>
          <label htmlFor="man">Man</label>
          <input
            type="radio"
            name="gender"
            className="form-gender__btn"
            id="man"
            value="man"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="woman">Woman</label>
          <input
            type="radio"
            name="gender"
            className="form-gender__btn"
            id="woman"
            value="woman"
            onChange={handleChange}
            required
          ></input>
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Add contact
      </button>
    </form>
  );
}
