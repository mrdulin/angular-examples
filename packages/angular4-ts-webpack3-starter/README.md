# FE开发实战总结

_移动端坑爹问题总结_

1. `react`开发时，`ios`设备`onClick`事件不触发。

  解决办法：定义`css`，给需要on

  ```css
  .clickable{
      cursor: pointer;
  }
  ```

2. 人民币符号`¥`，使用转义符号`#&165;`在部分安卓机上无法显示（代表机型：华为荣耀6）。

  原因：`OSX`系统下的自带输入法可能对中文字符的支持不好。

  解决办法：安装第三方输入法，直接使用中文拼音输入`¥`即可。

3. 软键盘唤起后，页面的 fixed 元素将失效（即无法浮动，也可以理解为变成了 absolute 定位），所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。这便是 iOS 上 fixed 元素和输入框的 bug 。其中不仅限于 type=text 的输入框，凡是软键盘（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。

4. 一个现象：`ios`设备中，系统环境：`ios 9.3.2`，测试例子：倒计时组件， `safari`,`chrome`滚动过程中不会阻塞js代码执行（倒计时会继续执行），不论是自然文档流布局还是，定位布局；在`webview`中，微信等应用中，自然文档流布局的滚动会阻塞js代码（倒计时组件`setInterval`停止执行），但是用绝对定位布局，如下
   ```css
   .xxx{
       position: absolute;
       top: 44px;
       bottom: 50px;
       width: 100%;
       overflow-y: auto;
       -webkit-overflow-scrolling: touch;
   }
   ```
   在该定位的元素中滚动时，不会阻塞js代码，`setInterval`继续执行。但是当滚动到边界拉出`ios`特有的弹性边界时，又开始阻塞js代码。

5. 通过编程的方式（不是用户与UI交互的方式），无法使用`input.focus()`让移动设备的虚拟键盘弹出。
    通过设置`cordova.xml`文件的`<preference name="KeyboardDisplayRequiresUserAction" value="false" />`,可以实现
    测试机型：Iphone 5s ios 8.1.2 , Ipod Touch5 ios 9.3.3 通过
    安卓 4.3, 6.0.1 不通过

6. `html5`的`<input type="range">`在移动设备上无法对`slider`进行拖拽或者点击到某个位置

7.  `input`获得焦点后，弹出虚拟键盘，此时，安卓机点击虚拟键盘上的收起键盘，虚拟键盘被收起，但`input`依旧处于获得焦点的状态。`IOS`中点击虚拟键盘上的收起键盘，`input`会失去焦点。

8. 开发中，应用中可能接入多个应用，例如：开发的应用的域名地址是`www.test.xxx.com/aaa`, 然后要接入`www.test.xxx.com/bbb`的应用，可能是广告模块，或者是什么狗屎模块。
`bbb`提供了给`aaa`提供了客户端代码，`aaa`用来在适当的时机对`bbb`进行初始化，还有一些其他操作，`ajax`, `dom`操作等等。`bbb`还提供了线上`js`脚本，`aaa`将其通过`script`标签引入。
首先要考虑的是脚本的加载时机，例如`async`属性等。`bbb`的线上`js`和提供给客户端的`js`通过`window`作为钩子进行联系。线上`js`会通过客户端初始化方法传的参数进行数据请求等操作。

9. `hybird`应用一个常见的问题就是，`native`返回按键和`h5`返回按钮的逻辑处理。使用`native`返回按钮，需要`native`提供支持，`h5`通过在`window`对象上绑定类似`window.nativeGoBack = function() {}`这样的方法，
`native`的`webview`劫持到用户点击物理返回或者返回按钮时，就可以调用`h5`的`nativeGoBack`方法。执行相应的逻辑，可能是`history.go`，也可能是`native`提供的关闭`webview`的方法。当`history.go`时，如果是在同一个`webview`中从`bbb`的`h5`应用返回到了`aaa`的`h5`引用，那么可能还需要`native`提供释放`nativeGoBack`返回按钮劫持的方法。因为`aaa`的`h5`应用，也可能定义了自己的返回按钮方法`nativeGoBackaaa`。

10. 两个`webview`中的内存是不能共用的，因此，出现的典型问题就是，两个`webview`之间数据不共享的问题。
典型例子：应用首页有很多跳转链接，这些链接不是普通的`h5`跳转方法，诸如`<a href='http://xxx'></a>`，`window.location.href = http://xxx`。而是`native`客户端提供的新开`webview`的方法，是客户端自己实现了一个协议，我们称之为`schema`跳转，形如`myapp://Business name?content={Json}`，通过调用这个方法，会打开一个新的`webview`加载`h5`页面，好了，这时候问题来了，我首页的`redux`的`store`里有一些全局的数据，在新开的`webview`中就拿不到。解决方案是：放在`localStorage`中，可以写一个`redux middleware`来实现。

11. `hybird`应用中，由于`native`权限的问题，可能会导致`<input type='file'>`不能唤起原生的上传拍照控件，这点在`ios`和`android`都需要确认。

12. 例如公司有10个应用，域名收敛之前可能一个应用一个域名，（为什么要域名收敛，自己`google`）域名收敛以后，就成了`www.test.xxx.com/aaa/index.html`, `www.test.xxx.com/bbb/index.html`等等。 
应用之间有跳转，那么有时候需要知道“来源”，从哪个应用跳转过来的，一个办法是用`document.referrer`，__注意:__一种`document.referrer`会变成空字符串`''`的情况是，一个应用的协议是`https`，另一个
应用的协议是`http`，那么从`https://www.test.xxx.com/aaa/index.html`跳转到`http://www.test.xxx.com/bbb/index.html`时，在`http://www.test.xxx.com/bbb/index.html`应用中通过`document.referrer`拿到的值是空字符串`''`，
而不是`https://www.test.xxx.com/aaa/index.html`。
    