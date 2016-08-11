# FE-mobile

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
    通过设置`cordova.xml`文件的,可以实现
    测试机型：Iphone 5s ios 8.1.2 , Ipod Touch5 ios 9.3.3 通过
    安卓 4.3, 6.0.1 不通过


6. `html5`的`<input type="range">`在移动设备上无法对`slider`进行拖拽或者点击到某个位置
