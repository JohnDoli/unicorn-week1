import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./Usergreeting.jsx"

function App() {

  return(
    <>
      <Header/>
      <UserGreeting isLoggedIn={true} username="John"/>
      <Student name="Spongebob" age={30} isStudent={false}/>
      <Student name="Harry Potter" age={17} isStudent={true}/>
      <Student name="Joel" age={56} isStudent={false}/>
      <Student/>
      <Button/>
      <Food/>
      <Card/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App
