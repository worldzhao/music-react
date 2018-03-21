## alert 组件

先看看zent API支持，如下图所示：

Property | Description | Type | Default | Alternative
---------|-------------|------|---------|------------
type | style of the Alert |string |'info' |'info' , 'warning' , 'danger'
size |size of the Alert| string |'normal' |'normal' , 'large'
rounded |determines whether the corners are rounded or not | bool | false | true , false
closable | determines whether the Alert can be closed or not |bool| false | true , false
onClose |callback for close func noop
className |custom extra class name string ''
prefix | custom prefix string 'zent'

先不考虑 `className` 与 `prefix`

控制外观：`type` / `size` / `rounded`

关闭相关：`closable` / `onClose`

使用如下：

```js
import {Alert} from 'zent'

ReactDOM.render(
  <Alert
  size="large"
  type="success"
  onClose={() => {console.log('callback')}}
  closable>
    <div className="content">
      <p className="text">Messages during the transacation will be pushed through the Marketing Center.</p>
      <p>Tel: 0571-88888888</p>
    </div>
    <br />
  </Alert>
  , mountNode
)
```

我们很容易写出下面的组件



