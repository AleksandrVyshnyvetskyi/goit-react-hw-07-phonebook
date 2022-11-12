import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Phonebook from "./phonebook/Phonebook";
import PhonebookFilter from './phonebook/PhonebookFilter';
import PhonebookList from './phonebook/PhonebookList';
import { fetchContacts } from 'redux/operations/operations';
import { getFilteredContacts, getState } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filter/filterSlice';
import  Loader  from './loader/Loader'

import './phonebook/Phonebook.css';

  export function App() {
    const contacts = useSelector(getFilteredContacts);
    const { isLoading, error } = useSelector(getState);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
      <h1 className='phonebook-title'>Phonebook</h1>
        <Phonebook/>
          <>
            <h2>Contacts :</h2>
            <PhonebookFilter filter={filter} />
            {isLoading && <Loader/>} 
            {!isLoading && contacts.length > 0 && (
            <PhonebookList contactsList={contacts} />)}
            {error && <p>Oops... Something went wrong...</p>}
          </>
      </>
    );
   }
