import React, {Component} from 'react';

/**
 * 应用的根组件
 * 
 * 定义组件的两种方式：
 *      1。 简单的：函数
 *      2。 复杂的：类
 * 如何判断复杂度？
 *      组件是否有状态
 */

 export default class App extends Component {
     
    render() {
        return <div>Hello React!</div>
    }
 }