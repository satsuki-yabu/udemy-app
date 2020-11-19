
// divタグで囲む制約がある。しかし囲むといらないタグが→<></>で囲むと消える
function App() {
  return (
    <>
      <input type='text' onChange={()=>{console.log('I am clicked')}} />
    </>
  )
  
}

export default App;
