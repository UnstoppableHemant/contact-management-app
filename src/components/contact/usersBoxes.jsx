import { useDispatch, useSelector } from 'react-redux'
import { RemoveContact, EditContact, ViewContact } from '../../reduxFunc/action';

const ContactBoxesData = () => {
    const state = useSelector((stat) => stat.Contact);
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        const contactData = state.contactData.filter((item) => e.target.value != item.id);
        console.log(contactData);
        dispatch(RemoveContact(contactData));
    }

    const handleEdit = (e) => {
        const contactData = state.contactData.filter((item) => e.target.value == item.id);
        dispatch(EditContact(contactData));
    }

    const handleView = (e) => {
        const contactData = state.contactData.filter((item) => e.target.value == item.id);
        dispatch(ViewContact(contactData));
        console.log(contactData);
    }
    console.log(state);
    return (
        <div className='mt-6 py-2 px-3 grid grid-cols-4'>
            {state.contactData.map((item) => {
                return (
                    <div className='shadow-lg rounded-lg bg-gray-200 p-3 m-3'>
                        <p><strong>Name:</strong> {(item?.firstName ? item?.firstName : "") + " " + (item?.lastName ? item?.lastName : "")}</p>
                        <p><strong>Status:</strong> {item?.status ? item?.status : ""}</p>
                        <button value={item?.id ? item?.id : 0} className='bg-sky-300 px-3 py-1 shadow-lg rounded-lg mr-2 mt-4' onClick={handleView}>View</button>
                        <button value={item?.id ? item?.id : 0} className='bg-orange-300 px-3 py-1 shadow-lg rounded-lg mr-2 mt-4' onClick={handleEdit}>Edit</button>
                        <button value={item?.id ? item?.id : 0} className='bg-red-300 px-3 py-1 shadow-lg rounded-lg mr-2 mt-4' onClick={handleDelete}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ContactBoxesData;