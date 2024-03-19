import { useState } from "react"
import { v4 } from "uuid";
import List from "./List";

const inputs = [
{type:"text", name:"name", placeholder:"Name"},
{type:"text", name:"lastName", placeholder:"lastName"},
{type:"email", name:"email", placeholder:"email"},
{type:"number", name:"phone", placeholder:"phone"}
]
function Form() {
    const [contacts , setContacts] = useState([]);
    const [alert , setAlert] = useState("");
    const [contact, setContact] = useState({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:"",
    });

    const changeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({...contact, [name]:value}))
    }
    const deleteHandler = (id) => {
        const newContact = contacts.filter((contact) => contact.id !== id)
        setContacts(newContact)
    }
    const addHandler = () => {
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("لطفا همه اطلاعات رو پر کنید")
            return;
        }
        const newContact = {...contact , id: v4()}
        setAlert("");
        setContacts((contacts) => [...contacts, newContact])
        setContact({
            name:"",
            lastName:"",
            email:"",
            phone:"",
        })
    }

  return (
    <>
         <div className="form">
        {
            inputs.map((input , index) => (<input key={index} className="form__input" type={input.type} name={input.name} placeholder={input.placeholder} value={contact[input.name]} onChange={changeHandler}></input>))
        }
        <button type="button" className="form__input-btn" onClick={addHandler}>Add contact</button>
    </div>
    <div className="alert">
            {alert ? <p className="alert__text">{alert}</p> : null}
    </div>
    <List contacts ={contacts} deleteHandler={deleteHandler}/>
    </>
   
  )
}

export default Form