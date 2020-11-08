import React from 'react';
import Picture from './profile/profile_component/MyProfilePhoto';
import Bio from './profile/profile_component/MyBio';
import FullName from './profile/profile_component/MyFullName';
import Profession from './profile/profile_component/MyProfession';
import './App.css';

function App() {
  const styleBody = {
    display: "flex",
    justifyContent: "space-between",
    padding : "50px"
  }
  return (
    <div style={styleBody} className="container">
      <Picture name='Tarantino' />
      <div>
      <FullName name='Quentin Tarantino' />
      <Profession profession='film director, script writer, actor, film producer, cameraman' />
      <Bio bio='Quentin Tarantino was born on March, 27th, 1963 in Noksvile, the State of Tennessee, the USA. 
      Worl fame has received after a picture "Pulp Fiction" (1994) which has brought to it "Golden Palm" of the 
      CANNES Film festival, and also awards "Oscar" and "the Golden Globe" for the best scenario.' />
      </div>
    </div>
  );
}

export default App;
