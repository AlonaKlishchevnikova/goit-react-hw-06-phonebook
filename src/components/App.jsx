import MyPhonebookForm from '../modules/MyPhonebook/MyPhonebookForm/MyPhonebookForm';
import MyPhonebookList from '../modules/MyPhonebook/MyPhonebookList/MyPhonebookList';
import MyPhonebookFilter from '../modules/MyPhonebook/MyPhonebookFilter/MyPhonebookFilter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <MyPhonebookForm />
      <h2>Contacts</h2>
      <MyPhonebookFilter />
      <MyPhonebookList />
    </div>
  );
};

export default App;