import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { UserContext } from './context/userContext';



import Login from './components/Login/Login';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = () => {
    setIsAuth(true);
  }

  const logoutHandler = () => {
    setIsAuth(false);
  }

  // 2eme solution
  // let content;
  // if (isAuth) {
  //   content = <Home />
  // } else {
  //   content =
  //     <>
  //       <Header />
  //       <Login />
  //     </>
  // }

  return (
    <UserContext.Provider value={{authentification: isAuth, login:loginHandler, logout:logoutHandler} }>
      <View style={styles.container}>
        {/* 2eme solution */}
        {/* {content} */}

        {/* 1ere solution */}
        {isAuth ? <Home  /> :

          (<> <Header />

            <Login />
          </>)
        }

      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 20
  },
});


