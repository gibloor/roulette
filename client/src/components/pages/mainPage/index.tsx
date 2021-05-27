import {createStore, createEvent} from 'effector'
import {useStore} from 'effector-react'
import React, {Fragment} from 'react';
import './mainPage.css'

import ViewCases from '../../db/casesMenu/ViewCases'

import present from './presentImage.jpg';



// const turnOn = createEvent()
// const turnOff = createEvent()

// const status = createStore('offline')
//   .on(turnOn, () => 'online')
//   .on(turnOff, () => 'offline')

// status.watch(newStatus => {
//   console.log(`status changed: ${newStatus}`)
// })
// // for store watchs callback invokes immediately
// // "status changed: offline"

// turnOff() // nothing has changed, callback is not triggered
// turnOn() // "status changed: online"
// turnOff() // "status changed: offline"
// turnOff() // nothing has changed
// //
// const messageEvent = createEvent<string>()
// messageEvent.watch(text => console.log(`new message: ${text}`))
// messageEvent('hello world')
// //
// const increment = createEvent<React.FormEvent<HTMLButtonElement>>()
// const decrement = createEvent<React.FormEvent<HTMLButtonElement>>()
// const resetCounter = createEvent<React.FormEvent<HTMLButtonElement>>()

// const counter = createStore(0)
//   .on(increment, state => state + 1)
//   .on(decrement, state => state - 1)
//   .reset(resetCounter)

// counter.watch(console.log)

// const Counter = () => {
//   const value = useStore(counter)
//   return <div>{value}</div>
// }


const firstSet = "first kit"

const MainPage = () => {

  // const value = useStore(counter)

  return (
    <Fragment>
      <div className="greetingNews">
        <div className='presentWindow'>
          <img src={present}></img>
          <div className="authorizationButton">Зарегистрируйся</div>
          <span>И получи 10 ₽ на открытие первого кейса!</span>
        </div>
        <div className='recommendationOfSite'>
          <h1>САМЫЕ КАВАЙНЫЕ КЕЙСЫ DOTA 2</h1>
          <ul>
            <li>
              <span> АБСОЛЮТНАЯ ПРОЗРАЧНОСТЬ</span>
              <p>У нас открытая история трейдов и лайв-лента открытий от реальных пользователей. Нам нечего скрывать.</p>
            </li>

            <li>
              <span>УНИКАЛЬНЫЕ МЕХАНИКИ</span>
              <p>Multicast-кейсы, Кэшбек в виде TastyCoins, Secret Shop и другие уникальные фичи, о которых Вы еще не слышали. Получать скины еще никогда не было так интересно!</p>
            </li>
              
            <li>
              <span>ГАРАНТИРОВАННАЯ ДОСТАВКА</span>
              <p>Все предметы приходят в течение 1 минуты с момента покупки. И даже если возникнут какие-то проблемы, Вы всегда можете обратиться в нашу службу поддержки.</p>
            </li>

            <li>
              <span>РЕПУТАЦИЯ</span>
              <p>Четыре года успешной работы и тысячи положительных отзывов о нашем сайте. Мы знаем, как делать интересные кейсы и даем своим пользователям то, что им нужно.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="caseBlocks">
        <ViewCases kitName={firstSet}/>
      </div>

      {/* <Counter />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCounter}>reset</button> */}
    </Fragment>
  )
}

export default MainPage;
          