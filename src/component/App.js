import React, {Component} from 'react';

// propsは変更不可能な値（イミュータブル）親から子へ渡すことができる
// stateは変更可能な値（ミュータブル）コンポーネントの内部でのみ使用される

// AppがCounterコンポーネントを呼びます
const App = () => (<Counter></Counter>)
// このCounterコンポーネントの中で、Stateを使っていきたいので、classコンポーネントにします
// →これまではstateは、classコンポーネントの中でしか使用できなかった。しかし、React16.8で導入されたHookで、関数コンポーネントの中でも使えるようになった

class Counter extends Component {
  // stateに状態をもたせてみましょう
  // コンポーネントの初期化には、constructorを使用します。
    constructor(props) {
      // 親クラスで初期化
      super(props)
      this.state = { count: 0 }
    }

    handlePlusButton = () => {
      // 状態を変化させる（+1など）
      this.setState({ count: this.state.count +1 })
    }

    handleMinusButton = () => {
      this.setState({count: this.state.count -1})
    }
      render() {
        return (
        <>
        <div>counter: {this.state.count}</div>
        {/* まずは属性を書きます →onClick属性*/}
        {/* このクラスのインスタンスで、メソッドを呼び出し、そのメソッドの中でstateの値を変更する */}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        </>
        )
     }
  }

export default App;

// 【？】なぜsuperメソッドを指定しなければならないのか？？
// →該当のclassが、何か別のclassに依存しているから。今回は、既存のComponentクラスを継承している。
// →継承は便利な反面、初期化を行わなければならない。
// ただし、constructor内の記述が、super(props)だけということであれば、省略できる場合もある

// アロー関数で{}と()の違い


// メソッドは、定数定義const~は必要ない

// 【？】handlePlusButtonは関数なのに、なぜ引数()が必要ないのか？
// →onClickによるコールバック関数には()ありなしの方法がある
