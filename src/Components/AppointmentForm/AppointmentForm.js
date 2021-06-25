import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

const AppointmentForm = ({closeModal,modalIsOpen,appointment,date}) => {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
    console.log(data)
    closeModal()
  };
    return (
        <div>
            
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-brand' >{appointment}</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>First Name:</label><br/>
      <input {...register("firstName")}  /><br/>
      <label>Last Name:</label><br/>
      <input {...register("lastName")} /><br/>
      <label>Age:</label><br/>
      <input {...register("age")} /><br/>
      <label>Mobile Number:</label><br/>
      <input {...register("number")} /><br/>
      
      <input type="submit" />
    </form>
        
                 
      </Modal>
        </div>
    );
};

export default AppointmentForm;