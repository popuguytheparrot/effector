//@flow

import {createStore as createStoreEffector} from 'effector'
import {createStore} from 'redux'

const x = createStoreEffector(0)
const e = createEvent()

const reduxStore = createStore(() => 0)

function foo() {
  const val = createEffect()
}

import {createStore as createEffect} from 'redux'
