
// import React from 'react'
import {Provider} from 'react-redux'
// import { store } from '../redux/store';
import storeRoot from '../redux/storeroot';
import LessonTwo from "./lesson_two";
import HookContainer from './hooksContainer';
import LessonThree from './lesson_three';
import NewCakeContainer from './newCakeContainer';
import SecondnewCakeComponent from './secondnewCakeComponent';

function Main() {
  return (
    <>
    <Provider store={storeRoot}>
    <div>
      <SecondnewCakeComponent cakes/>
      <SecondnewCakeComponent/>
      <LessonTwo/>
      <HookContainer/>
      <LessonThree/>
      <NewCakeContainer/>
    </div>
    </Provider>

    </>
  )
}

export default Main;
