import './App.css';
import AppCounter from './components/AppCounter';
import AppProfile from './components/AppProfile';
import Avatar from './components/Avatar';

function App() {
  const profileInfo = {
    devOne: {
      name: '김아무개',
      position: 'back-end',
      isNew: false,
      profileUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
    },
    devTwo: {
      name: '정민우',
      position: 'front-end',
      isNew: true,
      profileUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    devThree: {
      name: '푸바푸스',
      position: '바이킹같당',
      isNew: false,
      profileUrl: '',
    }
  }
  console.log(Object.values(profileInfo));
  return (
    <div className="App">
      {/* {
        Object.values(profileInfo).map(devInfo => (
          <>
            <AppProfile profileInfo={devInfo} key={devInfo.profileUrl}/>
          </>
        ))
      } */}
      <AppCounter/>
    </div>
  );
}

export default App;
