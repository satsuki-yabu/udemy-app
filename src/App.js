
// 親コンポーネント
const App = () => {

const profiles = [
  // arrayの中にハッシュを入れます。ハッシュ→:の前がkey,:の後ろがvalue。keyに基づいたvalueを受け取ることができる。
  {name: 'Taro', age: '10'},
  {name: 'Hanako', age: '5'},
  {name: 'Noname'}
]
  return (
    <>
      {/* map関数は一つのハッシュを受け取りますmap()→()の中にハッシュを書く。（）はアロー関数で、上記で設定したハッシュを回す */}
      {/* 関数はJSXの記法で書く→{}で囲わないといけない */}
      {/* Reactには仮想DOMがあり、どのDOMが変更になったのかを管理しています */}
      {/* それぞれのDOMにkeyを与えて、必要最低限のDOMの範囲を管理しています、DOMを指し示す。keyが必要になってくる。mapで受け取るindexを利用して、keyを与えてあげる */}
      {profiles.map((profile,index) => {
        return (
          <User name={profile.name} age={profile.age} key={index}/>
        )
      })}
        </>
      )
    }

    // 子コンポーネント

    const User = (props) => {
      return (
        <>
        <h1>Hi,I am{props.name}, and {props.age}years old</h1>
        </>
      )
    }
  
  User.defaultProps = {
    age: 1
  }
  
    
export default App;
