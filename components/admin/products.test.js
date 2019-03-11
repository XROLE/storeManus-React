import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Products from './Products';
import getProducts from '../../store/reducers/getProducts';
import updateProductReducer from '../../store/reducers/updateProductReducer';
import createSalesReducer from '../../store/reducers/createSalesReducer';

jest.mock('axios');

describe('Product Products', () => {
  it('Should render just product component', () => {
    const component = shallow(
      <Products />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Products Component', () => {
  const get = jest.fn();
  const initialState = {
    getProduct: {
      message: '',
      pending: false,
      error: '',
      products: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const pending = false;
  const products = [];

  const props = {
    Productss: {
      products,
      pending,
      get,
    },
  };

  axios.get.mockImplementation(() => Promise.resolve({
    data: { products: { name: 'Salt' } },
  }));

  mount(
    <Provider store={store}>
      <BrowserRouter>
        <Products {...props} />
      </BrowserRouter>
    </Provider>,
  );

  expect(dispatchMock).toHaveBeenCalled();
});

describe('Products Component', () => {
  const get = jest.fn();
  const initialState = {
    getProduct: {
      message: '',
      pending: false,
      error: '',
      products: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const pending = false;
  const products = [];

  const props = {
    Productss: {
      products,
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
        <Products {...props} />
      </BrowserRouter>
    </Provider>,
  );

  expect(dispatchMock).toHaveBeenCalled();
});


it('should setup default state values', () => {
  const state = getProducts(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    message: '',
    pending: false,
    error: '',
    products: '',
  });
});

it('should update state when action type is  GET_PRODUCT_IN_PROGRESS', () => {
  const state = getProducts(undefined, {
    type: 'GET_PRODUCT_IN_PROGRESS',
    pending: true,
  });
  expect(state).toEqual({
    ...state,
    pending: true,
  });
});

it('should update state when action type is  GET_PRODUCT_SUCCESS', () => {
  const state = getProducts(undefined, {
    type: 'GET_PRODUCT_SUCCESS',
    payload: {
      products: '',
    },
  });
  expect(state).toEqual({
    ...state,
    products: '',
  });
});

it('should update state when action type is  GET_PRODUCT_ERROR', () => {
  const state = getProducts(undefined, {
    type: 'GET_PRODUCT_ERROR',
    error: 'failed',
  });
  expect(state).toEqual({
    ...state,
    error: 'failed',
    pending: false,
  });
});


it('should setup default state values', () => {
  const state = getProducts(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    message: '',
    pending: false,
    error: '',
    products: '',
  });
});

it('should update state when action type is  GET_PRODUCT_IN_PROGRESS', () => {
  const state = getProducts(undefined, {
    type: 'GET_PRODUCT_IN_PROGRESS',
    pending: true,
  });
  expect(state).toEqual({
    ...state,
    pending: true,
  });
});

it('should update state when action type is  GET_PRODUCT_SUCCESS', () => {
  const state = getProducts(undefined, {
    type: 'GET_PRODUCT_SUCCESS',
    payload: {
      products: '',
    },
  });
  expect(state).toEqual({
    ...state,
    products: '',
  });
});

it('should update state when action type is  GET_PRODUCT_ERROR', () => {
  const state = getProducts(undefined, {
    type: 'GET_PRODUCT_ERROR',
    error: 'failed',
  });
  expect(state).toEqual({
    ...state,
    error: 'failed',
    pending: false,
  });
});

describe('Update Products reducesr', () => {
  it('should setup default state values', () => {
    const state = updateProductReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      message: '',
      pending: false,
      error: '',
      success: false,
      updatedAvailableProduct: '',
    });
  });

  it('should update state when action type is  UPDATE_PRODUCT_IN_PROGRESS', () => {
    const state = updateProductReducer(undefined, {
      type: 'UPDATE_PRODUCT_IN_PROGRESS',
      error: null,
      pending: true,
    });
    expect(state).toEqual({
      ...state,
      error: null,
      pending: true,
    });
  });

  it('should update state when action type is  UPDATE_PRODUCT_SUCCESS', () => {
    const state = updateProductReducer(undefined, {
      type: 'UPDATE_PRODUCT_SUCCESS',
      payload: {
        success: true,
      },
    });
    expect(state).toEqual({
      ...state,
      success: true,
    });
  });

  it('should update state when action type is  UPDATE_PRODUCT_ERROR', () => {
    const state = updateProductReducer(undefined, {
      type: 'UPDATE_PRODUCT_ERROR',
      error: '',
      pending: false,
    });
    expect(state).toEqual({
      ...state,
      error: '',
      pending: false,
    });
  });
});

describe('Update Create Sales reducesr', () => {
  it('should setup default state values', () => {
    const state = createSalesReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      pending: false,
      error: '',
      success: false,
      message: '',
    });
  });

  it('should update state when action type is  CREATE_SALES_IN_PROGRESS', () => {
    const state = createSalesReducer(undefined, {
      type: 'CREATE_SALES_IN_PROGRESS',
      pending: true,
    });
    expect(state).toEqual({
      ...state,
      pending: true,
    });
  });

  it('should update state when action type is  CREATE_SALES_SUCCESS', () => {
    const state = createSalesReducer(undefined, {
      type: 'CREATE_SALES_SUCCESS',
      payload: {
        pending: false,
        success: true,
      },
    });
    expect(state).toEqual({
      ...state,
      success: true,
    });
  });

  it('should update state when action type is  CREATE_SALES_ERROR', () => {
    const state = createSalesReducer(undefined, {
      type: 'CREATE_SALES_ERROR',
      error: null,
      pending: false,
    });
    expect(state).toEqual({
      ...state,
      error: null,
      pending: false,
    });
  });
});
