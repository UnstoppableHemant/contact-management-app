import { useEffect, useState } from 'react'
import { SaveContact, UpdateContact } from '../../reduxFunc/action';
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
    const dispatch = useDispatch();
    const state = useSelector((stat) => stat.Contact)
    const [formData, setFormData] = useState({id:Math.ceil(Math.random() * 100000000000), firstName:"", lastName:"", status:""});
    const [disableInput, setDisableInput] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        const editData = state.editData;
        const viewData = state.viewData;
        if(editData.length != 0){
            setFormData({id: editData[0].id, firstName: editData[0].firstName, lastName: editData[0].lastName, status: editData[0].status}) 
        }
        else if(viewData.length != 0){
            setFormData({id: viewData[0].id, firstName: viewData[0].firstName, lastName: viewData[0].lastName, status: viewData[0].status}) 
            setDisableInput(true)
        }
        else{
            setFormData({id:Math.ceil(Math.random() * 100000000000), firstName:"", lastName:"", status:""})
            setDisableInput(false)
        }
    },[state])

    const handleUpdate = (e) => {
        state.contactData.map((item)=>{
            if(item.id == e.target.value){return item.firstName = formData.firstName , item.lastName = formData.lastName , item.status = formData.status }
        });
        // const contactData = state.contactData.filter((item) => e.target.value == item.id);
        // console.log(contactData);
        dispatch(UpdateContact(state.contactData));
    }
    console.log(formData);
    console.log(state);
    return (
        <div className='w-3/6 mx-auto text-left shadow-lg rounded-lg p-5 mt-5 text-xl'>
            <div className='grid grid-cols-3 mb-3'>
                <label htmlFor=''>First Name</label>
                <input name='firstName' className={`col-span-2 outline-none border-2 border-black rounded-md px-2 py-1 focus:border-blue-900 focus:shadow-lg ${disableInput ? "bg-gray-300 text-gray-600 border-gray-500":""}`} type='text' onChange={handleInput} value={formData.firstName} disabled={disableInput ? "disabled": ""}/>
            </div>
            <div className='grid grid-cols-3 mb-3'>
                <label htmlFor=''>Last Name</label>
                <input name='lastName' className={`col-span-2 outline-none border-2 border-black rounded-md px-2 py-1 focus:border-blue-900 focus:shadow-lg ${disableInput ? "bg-gray-300 text-gray-600 border-gray-500":""}`} type='text' onChange={handleInput} value={formData.lastName} disabled={disableInput ? "disabled": ""} />
            </div>
            <div className='grid grid-cols-3 mb-3'>
                <label htmlFor='status'>Status</label>
                <div>
                    <input className={`mx-2 col-span-2 ${disableInput ? "bg-gray-300 text-gray-600 border-gray-500":""}`} type='radio' name='status' id='active' value="Active" onClick={handleInput} checked={formData.status == "Active"} disabled={disableInput ? "disabled": ""} />
                    <label className={`${disableInput ? "text-gray-600":""}`} htmlFor='active'>Active</label>
                    <br />
                    <input className={`mx-2 col-span-2 ${disableInput ? "bg-gray-300 text-gray-600 border-gray-500":""}`} type='radio' name='status' id='inactive' value="Inactive" onClick={handleInput} checked={formData.status == "Inactive"} disabled={disableInput ? "disabled": ""} />
                    <label className={`${disableInput ? "text-gray-600":""}`} htmlFor='inactive'>Inactive</label>
                </div>
            </div>
            <div className='text-center'>
                {state.viewData.length == 0 ? (state.editData.length == 0 ?
                <button className='px-3 rounded py-1 mt-4 bg-blue-600 text-white' onClick={() => dispatch(SaveContact(formData))}>Save</button> :
                <button className='px-3 rounded py-1 mt-4 bg-yellow-600 text-white' value={formData.id} onClick={handleUpdate}>Update</button>) : <span></span>}
            </div>
        </div>
    )
}

export default Form