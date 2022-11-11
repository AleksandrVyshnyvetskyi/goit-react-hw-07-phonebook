import { Oval } from 'react-loader-spinner';
import Phonebook from "./phonebook/Phonebook";
import PhonebookFilter from './phonebook/PhonebookFilter';
import PhonebookList from './phonebook/PhonebookList';
import './phonebook/Phonebook.css';

  export function App() {
    return (
      <>
      <h1>Phonebook</h1>
        <Phonebook/>
          <>
            <h2>Contacts :</h2>
            <PhonebookFilter />
            <PhonebookList/>
          </>
          <Oval
          ariaLabel="loading-indicator"
          height={150}
          width={150}
          strokeWidth={2}
          strokeWidthSecondary={5}
          color="#ffa200"
          secondaryColor="#8bd3e1"
        />
      </>
    );
   }
