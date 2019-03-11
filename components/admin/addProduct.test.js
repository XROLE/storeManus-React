import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import AddProduct from './AddProduct';
import addProductReducer from '../../store/reducers/addProductReducer';

jest.mock('axios');

describe('Admin Add Products', () => {
  it('Should render just the Admin Add Attendant component', () => {
    const component = shallow(
      <AddProduct />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Add Product Component', () => {
  const add = jest.fn();
  const initialState = {
    addProduct: {
      message: '',
      pending: false,
      error: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const addProductMessage = '';
  const addProductError = '';
  const pending = false;
  const success = '';

  const props = {
    registerAttendant: {
      add,
      addProductMessage,
      addProductError,
      pending,
      success,
    },
  };

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <AddProduct {...props} />
      </BrowserRouter>
    </Provider>,
  );

  it('should call the add function', () => {
    wrapper.find('#product-Name').simulate(
      'change', {
        target: {
          name: 'name', value: 'coffee',
        },
      },
    );

    wrapper.find('#product-Quantity').simulate(
      'change', {
        target: {
          name: 'quantity', value: 50,
        },
      },
    );

    wrapper.find('#product-Price').simulate(
      'change', {
        target: {
          name: 'price', value: 30,
        },
      },
    );

    wrapper.find('#product-Type').simulate(
      'change', {
        target: {
          name: 'type', value: 'Tea',
        },
      },
    );

    wrapper.find('#product-Category').simulate(
      'change', {
        target: {
          name: 'category', value: 'Beverage',
        },
      },
    );

    axios.post.mockImplementation(() => Promise.resolve({
      data: { Success: true, Message: 'profile updated successfully' },
    }));

    wrapper.find('form').simulate(
      'submit',
      {
        preventDefault: () => {},
      },
    );
    expect(dispatchMock).toHaveBeenCalled();
  });

  it('should cnot add product when a field is empty', () => {
    wrapper.find('#product-Name').simulate(
      'change', {
        target: {
          name: 'name', value: '',
        },
      },
    );

    wrapper.find('#product-Quantity').simulate(
      'change', {
        target: {
          name: 'quantity', value: 50,
        },
      },
    );

    wrapper.find('#product-Price').simulate(
      'change', {
        target: {
          name: 'price', value: 30,
        },
      },
    );

    wrapper.find('#product-Type').simulate(
      'change', {
        target: {
          name: 'type', value: 'Tea',
        },
      },
    );

    wrapper.find('#product-Category').simulate(
      'change', {
        target: {
          name: 'category', value: 'Beverage',
        },
      },
    );

    const error = {
      response: {
        data: {
          Message: 'No empty field is allowed',
          Success: false,
        },
      },
    };
    axios.post.mockImplementation(() => Promise.reject(error));

    wrapper.find('form').simulate(
      'submit',
      {
        preventDefault: () => {},
      },
    );
    expect(dispatchMock).toHaveBeenCalled();
  });
});

it('should setup default state values', () => {
  const state = addProductReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    message: '',
    pending: false,
    error: '',
  });
});

it('should update state when action type is  ADD_PRODUCT_IN_PROGRESS', () => {
  const state = addProductReducer(undefined, {
    type: 'ADD_PRODUCT_IN_PROGRESS',
  });
  expect(state).toEqual({
    ...state,
    pending: true,
  });
});

it('should update state when action type is  ADD_PRODUCT_SUCCESS', () => {
  const state = addProductReducer(undefined, {
    type: 'ADD_PRODUCT_SUCCESS',
    payload: {
      success: true,
    },
  });
  expect(state).toEqual({
    ...state,
    success: true,
  });
});

it('should update state when action type is  ADD_PRODUCT_ERROR', () => {
  const state = addProductReducer(undefined, {
    type: 'ADD_PRODUCT_ERROR',
    error: 'failed',
  });
  expect(state).toEqual({
    ...state,
    error: 'failed',
  });
});
