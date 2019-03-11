import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import FinishedProduct from './FinishedProduct';
import finishedProductReducer from '../../store/reducers/finisheProductReducer';

jest.mock('axios');

describe('Finished Products', () => {
  it('Should render just finished product component', () => {
    const component = shallow(
      <FinishedProduct />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Finished Products Component', () => {
  const get = jest.fn();
  const initialState = {
    finishedProducts: {
      message: '',
      pending: false,
      error: '',
      FinishedProduct: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const finishedProducts = [];

  const props = {
    finishedProducts: {
      finishedProducts,
      get,
    },
  };

  axios.get.mockImplementation(() => Promise.resolve({
    data: { finishedProducts: [{ name: 'Milo' }] },
  }));

  mount(
    <Provider store={store}>
      <BrowserRouter>
        <FinishedProduct {...props} finishedProducts />
      </BrowserRouter>
    </Provider>,
  );

  expect(dispatchMock).toHaveBeenCalled();
});

describe('Finished Products Component', () => {
  const get = jest.fn();
  const initialState = {
    finishedProducts: {
      message: '',
      pending: false,
      error: '',
      FinishedProduct: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const finishedProducts = [];

  const props = {
    finishedProducts: {
      finishedProducts,
      get,
    },
  };

  const error = {
    response: {
      data: {
        Message: 'An error occured',
      },
    },
  };
  axios.get.mockImplementation(() => Promise.reject(error));

  mount(
    <Provider store={store}>
      <BrowserRouter>
        <FinishedProduct {...props} finishedProducts />
      </BrowserRouter>
    </Provider>,
  );

  expect(dispatchMock).toHaveBeenCalled();
});

it('should setup default state values', () => {
  const state = finishedProductReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    message: '',
    pending: false,
    error: '',
    finishedProducts: '',
  });
});

it('should update state when action type is  FINISHED_PRODUCT_IN_PROGRESS', () => {
  const state = finishedProductReducer(undefined, {
    type: 'FINISHED_PRODUCT_IN_PROGRESS',
  });
  expect(state).toEqual({
    ...state,
    error: null,
    pending: true,
  });
});

it('should update state when action type is  FINISHED_PRODUCT_SUCCESS', () => {
  const state = finishedProductReducer(undefined, {
    type: 'FINISHED_PRODUCT_SUCCESS',
    payload: {
      finishedProducts: [{ tea: 'coffee' }],
    },
  });
  expect(state).toEqual({
    ...state,
    finishedProducts: [{ tea: 'coffee' }],
  });
});

it('should update state when action type is  FINISHED_PRODUCT_ERROR', () => {
  const state = finishedProductReducer(undefined, {
    type: 'FINISHED_PRODUCT_ERROR',
    error: 'failed',
  });
  expect(state).toEqual({
    ...state,
    error: 'failed',
    pending: false,
  });
});
