import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';

function App() {
  return (
    <div className="App">
      <PortalDemo />
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <StyleSheet primary = {true}/> */}
      {/* <Inline /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name =  "Bruce" heroName = "Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name = "Diana" heroName = "Wondar Woman"/>
      <Welcome name =  "Bruce" heroName = "Batman"/> */}
      {/* <Welcome name = "Clark" heroName = "Superman"/>
      <Welcome name = "Clark" heroName = "Superman"/>
      <Hello /> */}
    </div>
  );
}

export default App;
