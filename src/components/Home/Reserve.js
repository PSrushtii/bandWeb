import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Reserve.css';

function Reserve() {

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {name , date , time ,guests} = formData;
    const res = fetch(
      'https://band-30dea-default-rtdb.firebaseio.com/userReserve.json',
      {
        method : "POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          name,
          date,
          time, 
          guests
        })
    }
    );


    if(res){
      setFormData({
        name: '',
        date: '',
        time: '',
        guests: 1,
      });
      alert('Thank you for the booking!');
    }
    else {
      alert("Data not filled check again");
    }

  };


  return (
    <div className='reserveForm'>
      <h1>Booking Tickets</h1><br/>
      <p>Book a seat in the concert and have fun</p><br/>
      <form method='POST' onSubmit = {handleSubmit}>
        <TextField 
          color='primary' 
          type='text'
          name='name'
          value={formData.name}
          placeholder='Name of customers' 
          onChange={handleChange}   
          required>
        </TextField><br/><br/>



        <TextField 
          type="date" 
          name='date'
          value={formData.date}
          onChange={handleChange}
          InputProps={{inputProps: { min : new Date().toISOString().split('T')[0], }}}
          required>
        </TextField><br/><br/>


        <TextField
          placeholder='time'
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        /><br/><br/>


        <TextField
          placeholder="Number of Guests"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          inputProps={{ min: 1 }}
          required
        /><br/><br/>

        <Button variant='contained' type='submit' color='primary'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Reserve