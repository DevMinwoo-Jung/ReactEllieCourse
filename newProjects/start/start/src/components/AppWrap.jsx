import React from 'react'

const AppWrap = () => {
  return (
    <div>
      {/* Navbar 안이 children인데 리액트 내부에서 알아서 한다; */}
      <Navbar>
        <Avatar
          image="https://www.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-600w-1799966587.jpg"
          name="bob"
          size={400}
        />
        <p>안녕하세요</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요</p>
      </Navbar>
    </div>
  )
}

function Navbar ({children}) {
  return (
    <header style={{backgroundColor: 'yellow'}}>
      {children}
    </header>
  )
}


const Avatar = ({ image, name, size }) => {

  return (
    <div>
      <img style={{ borderRadius: '50%'}}  src={image} alt={name} width={size} height={size} />
  </div>
  )
}


export default AppWrap