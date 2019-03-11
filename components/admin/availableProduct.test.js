import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import AvailableProducts from './AvailableProducts';
import AvailableProductsReducer from '../../store/reducers/availableProductsReducer';

jest.mock('axios');

describe('Available Products', () => {
  it('Should render just Available produc component', () => {
    const component = shallow(
      <AvailableProducts />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Available Products Component', () => {
  const get = jest.fn();
  const initialState = {
    avaibleProducts: {
      message: '',
      pending: false,
      error: '',
      availableProducts: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const availableProducts = '';
  const pending = false;

  const props = {
    avaibleProducts: {
      availableProducts,
      pending,
      get,
    },
  };

  axios.get.mockImplementation(() => Promise.resolve({
    data: { availableProducts: [{ name: 'Maggi' }] },
  }));

  mount(
    <Provider store={store}>
      <BrowserRouter>
        <AvailableProducts {...props} />
      </BrowserRouter>
    </Provider>,
  );

  expect(dispatchMock).toHaveBeenCalled();
});
describe('Available Products Component', () => {
  const get = jest.fn();
  const initialState = {
    avaibleProducts: {
      message: '',
      pending: false,
      error: '',
      availableProducts: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const availableProducts = '';
  const pending = false;

  const props = {
    avaibleProducts: {
      availableProducts,
      pending,
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
        <AvailableProducts {...props} />
      </BrowserRouter>
    </Provider>,
  );

  expect(dispatchMock).toHaveBeenCalled();
});

it('should setup default state values', () => {
  const state = AvailableProductsReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    message: '',
    pending: false,
    error: '',
    availableProducts: '',
  });
});

it('should update state when action type is  AVAILABLE_PRODUCT_IN_PROGRESS', () => {
  const state = AvailableProductsReducer(undefined, {
    type: 'AVAILABLE_PRODUCT_IN_PROGRESS',
  });
  expect(state).toEqual({
    ...state,
    error: null,
    pending: true,
  });
});

it('should update state when action type is  AVAILABLE_PRODUCT_SUCCESS', () => {
  const state = AvailableProductsReducer(undefined, {
    type: 'AVAILABLE_PRODUCT_SUCCESS',
    payload: {
      message: '',
      availableProducts: '',
    },
  });
  expect(state).toEqual({
    ...state,
    message: '',
    availableProducts: '',
  });
});

it('should update state when action type is  AVAILABLE_PRODUCT_ERROR', () => {
  const state = AvailableProductsReducer(undefined, {
    type: 'AVAILABLE_PRODUCT_ERROR',
    error: '',
  });
  expect(state).toEqual({
    ...state,
    error: '',
    pending: false,
  });
});
