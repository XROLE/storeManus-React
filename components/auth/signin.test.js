import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SignIn } from './SignIn';
import loginReducer from '../../store/reducers/loginReducer';


describe('Login Component', () => {
  it('Should render just the SignIn component', () => {
    const mockLoginfn = jest.fn();
    const token = '';
    const pending = false;
    const component = shallow(
      <SignIn
        login={mockLoginfn}
        token={token}
        pending={pending}
      />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Login Component', () => {
  const mockLoginfn = jest.fn();
  const token = '';
  const pending = false;
  const wrapper = shallow(<SignIn
    login={mockLoginfn}
    token={token}
    pending={pending}
  />);

  it('should call the mock login function', () => {
    wrapper.setState({ email: '', password: '', shouldShowError: false });
    wrapper.find('form').simulate(
      'submit',
      {
        preventDefault: () => {},
        target: {
          name: {
            email: { value: 'johndoe@joe.com' },
            password: { value: 'johndoe88' },
          },
        },
      },
    );
    expect(mockLoginfn).toHaveBeenCalled();
  });
});


describe('Login Functionality ', () => {
  const login = jest.fn();
  const initialState = {
    login: {
      token: '',
      user: '',
      pending: false,
      error: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  // const dispatchMock = jest.spyOn(store, 'dispatch');
  const pending = false;
  const loginError = '';
  const token = '';
  const success = false;

  const props = {
    profile: {
      login,
      pending,
      loginError,
      token,
      success,
    },
  };

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn {...props} />
      </BrowserRouter>
    </Provider>,
  );

  //   it('should call the login function', () => {
  //     wrapper.find('#signInEmail').simulate(
  //       'change', {
  //         target: {
  //           name: 'email',
  //           value: 'jade@gmail.com',
  //         },
  //       },
  //     );

  //     wrapper.find('#signInPassword').simulate(
  //       'change', {
  //         target: {
  //           name: 'password', value: 'tedTryCatch',
  //         },
  //       },
  //     );

//     wrapper.find('.signin-button').simulate('click');
//     expect(dispatchMock).toHaveBeenCalled();
//   });
});

it('should setup default state values', () => {
  const state = loginReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    token: '',
    user: '',
    pending: false,
    error: '',
  });
});

it('should update state when action type is  LOGIN_PENDING', () => {
  const state = loginReducer(undefined, {
    type: 'LOGIN_PENDING',
  });
  expect(state).toEqual({
    ...state,
    pending: true,
  });
});

it('should update state when action type is  LOGIN_SUCCESS', () => {
  const state = loginReducer(undefined, {
    type: 'LOGIN_SUCCESS',
    payload: {
      success: true,
    },
  });
  expect(state).toEqual({
    ...state,
    success: true,
  });
});

it('should update state when action type is  LOGIN_ERROR', () => {
  const state = loginReducer(undefined, {
    type: 'LOGIN_ERROR',
    error: '',
  });
  expect(state).toEqual({
    ...state,
    error: '',
    pending: false,
  });
});
