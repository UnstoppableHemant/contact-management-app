import Header from '../components/header'
import SideNav from '../components/sideNav'
import Form from '../components/contact/form'
import ContactBoxesData from '../components/contact/usersBoxes'
import NoContactFoundBox from '../components/contact/errorBox'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const FormPage = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const [contactBoxesDataDisplay, setContactBoxesDataDisplay] = useState(false);
  const state = useSelector((stat) => stat.Contact);

  useEffect(() => {
    state.contactData.length !== 0 ? setContactBoxesDataDisplay(true) : setContactBoxesDataDisplay(false);
    state.formDisplay ? setFormDisplay(true) : setFormDisplay(false);
  }, [state])

  return (
    <>
      {/* <Header />
      <div className='flex h-screen'>
        <SideNav /> */}
        {/* <div className='w-full p-4'> */}
          <div className='text-center'>
            <button className='mt-5 py-2 px-3 rounded-lg font-bold bg-green-400' onClick={() => setFormDisplay(true)}>Create Contact</button>
          </div>
          {formDisplay ? <Form /> : contactBoxesDataDisplay ? <ContactBoxesData /> : <NoContactFoundBox /> }
        {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default FormPage