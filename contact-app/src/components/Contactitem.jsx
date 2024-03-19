

function Contactitem({data:{name, lastName , email , phone, id}, deleteHandler}) {
  return (
    <>
         <li key={id} className="item">
            <p className="item__name">
                {name}
                <span>-</span>
                {lastName}
            </p>
            <p className="item__email">
                <span></span>
                {email}
            </p>
            <p className="item__phone">
                <span></span>
                {phone}
            </p>
            <button className="item__btn" onClick={() => deleteHandler(id)} >Delete</button>
         </li>
    </>
  )
}

export default Contactitem