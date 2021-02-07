import React,{useState} from 'react'

import CounterControl from '../CounterControl/CounterControl'
import CounterOutput from '../CounterOutput/CounterOutput'
import './Counter.css'
import {connect} from 'react-redux'
import Button from '../../../components/UI/button/button'
import { CSSTransitionGroup } from 'react-transition-group'

const Counter = (props) => {
  
    return (
      <div>
        <CounterOutput value={props.counter} />
        <CounterControl
          label="افزایش"
          clicked={props.onIncrement}
        />
        <CounterControl
          label="کاهش"
          clicked={props.onDecrement}
        />
        <CounterControl
          label="افزودن دو رقمی"
          clicked={props.add}
        />
        <CounterControl
          label="کاهش دو رقمی"
          clicked={props.sub}
        />
        <div>
        <Button btnType="primary" clicked={props.onResult}>نمایش Store</Button>
         <CSSTransitionGroup
            transitionName="flip"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={1000}
            transitionAppear={true}
            transitionAppearTimeout={1000}
          >
        {props.result.map((item) => {
          return <h1 
                  className="item" 
                  key={item}
                  >
                    Item: {item}
                  </h1>
        })}
        </CSSTransitionGroup>
        </div>
      </div>
    )
  }

const mapStateToProps = (state)=>{
  return{
    counter: state.counter,
    result: state.result,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    onIncrement: ()=> dispatch({ type: 'INCREMENT' }),
    onDecrement: ()=> dispatch({ type: 'DECREMENT' }),
    add: ()=> dispatch({ type: 'ADD', payload: 2 }),
    sub: ()=> dispatch({ type: 'SUB', payload: 2 }),
    onResult: ()=> dispatch({ type: "RESULT"})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)