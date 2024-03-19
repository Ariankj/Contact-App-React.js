import Contactitem from "./Contactitem"

function List({contacts, deleteHandler}) {
  return (
    <div className="contact">
        <h1 className="contact__title">Contact List</h1>
      {
        contacts.length ? (  
        <ul className="contact__list">
        {contacts.map((contact) => (<Contactitem key={contact.id} data={contact} deleteHandler={deleteHandler}/>))}
    </ul>) : <p className="no__contact">no contact</p>
      }
      
    </div>
  )
}

export default List