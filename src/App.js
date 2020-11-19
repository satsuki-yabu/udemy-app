

const App = () => {
  return (
    <>
        {/* Userコンポーネントに対して、nameというProps（属性）を与えている */}
          <User name={'Taro'} age={'10'}/>
          <User name={'Hanako'} age={'5'}/>
        </>
      )
    }
    
    const User = (props) => {
      return (
        <>
        <h1>Hi,I am{props.name}, and {props.age}years old</h1>
        </>
      )
    }


export default App;
