import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import ProfileUpdate from './ProfileUpdate';
import updateProfileReducer from '../../store/reducers/updateProfileReducer';

jest.mock('axios');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImZpcnN0bmFtZSI6InJhamkiLCJsYXN0bmFtZSI6ImVtbXkiLCJlbWFpbCI6InJhamlAZW1teS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRvL0MxQlNsd1hKd3IwRlp1ekdYN2V1ZmlsTFZJZzBsYmpmS3AzWHhJQ1c3R2subkJpOFdmTyIsInBob25lbm8iOiI4OCIsImdlbmRlciI6IkZlbWFsZSIsInByb2ZpbGVwaWNzIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20veHJvbGUvaW1hZ2UvdXBsb2FkL3YxNTUyMDUwOTc2L3QydGFyaWpjd3owbXVrY3ZkcWFtLmpwZyIsImlhdCI6MTU1MjI4OTcyNn0.JDf4zERSlM3vepD_9bxCIwMS4JBGYA859bEHqjMycTs';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
localStorage.setItem('accessToken', token);

describe('Profile component', () => {
  it('Should render just the Attendants component', () => {
    const component = shallow(
      <ProfileUpdate />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Update Profile Component', () => {
  const update = jest.fn();
  const initialState = {
    profile: {
      pending: false,
      error: '',
      success: false,
      message: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(() => initialState);
  const dispatchMock = jest.spyOn(store, 'dispatch');
  const pending = false;
  const updateError = '';
  const success = false;

  const props = {
    profile: {
      update,
      pending,
      updateError,
      token,
      success,
    },
  };

  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ProfileUpdate {...props} />
      </BrowserRouter>
    </Provider>,
  );

  it('should call the update Profile function', () => {
    wrapper.find('#phoneno').simulate(
      'change', {
        target: {
          id: 'phoneno', value: '07087653446',
        },
      },
    );

    wrapper.find('#password').simulate(
      'change', {
        target: {
          id: 'password', value: 'sameWhiteLady',
        },
      },
    );

    wrapper.find('#confirmpassword').simulate(
      'change', {
        target: {
          id: 'confirmpassword', value: 'sameWhiteLady',
        },
      },
    );

    wrapper.find('#gender').simulate(
      'change', {
        target: {
          id: 'gender', value: 'Male',
        },
      },
    );
    const file = new Blob([{
      lastModified: 1551810827095,
      name: 'dddd.png',
      size: 3516,
      type: 'image/png',
      webkitRelativePath: '',
    }]);
    wrapper.find('#profilepics').simulate(
      'change', {
        target: {
          id: 'profilepics',
          files: [file],
        },
      },
    );
    axios.put.mockImplementation(() => Promise.resolve({
      data: { Success: true, Message: 'profile updated successfully' },
    }));
    wrapper.find('#updateProfileButton').simulate(
      'click',
      {
        preventDefault: () => {},
      },
    );

    expect(dispatchMock).toHaveBeenCalled();
  });


  it('should throw error there is an empty input field', () => {
    wrapper.find('#phoneno').simulate(
      'change', {
        target: {
          id: 'phoneno', value: '07087653446',
        },
      },
    );

    wrapper.find('#password').simulate(
      'change', {
        target: {
          id: 'password', value: 'sameWhiteLady',
        },
      },
    );

    wrapper.find('#confirmpassword').simulate(
      'change', {
        target: {
          id: 'confirmpassword', value: 'sameWhiteLady',
        },
      },
    );

    wrapper.find('#gender').simulate(
      'change', {
        target: {
          id: 'gender', value: '',
        },
      },
    );
    const file = new Blob([{
      lastModified: 1551810827095,
      name: 'dddd.png',
      size: 3516,
      type: 'image/png',
      webkitRelativePath: '',
    }]);
    wrapper.find('#profilepics').simulate(
      'change', {
        target: {
          id: 'profilepics',
          files: [file],
        },
      },
    );
    const error = {
      response: {
        data: {
          Message: 'No empty field is allowed',
        },
      },
    };
    axios.put.mockImplementation(() => Promise.reject(error));
    wrapper.find('#updateProfileButton').simulate(
      'click',
      {
        preventDefault: () => {},
      },
    );

    expect(dispatchMock).toHaveBeenCalled();
  });

  it('should setup default state values', () => {
    const state = updateProfileReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      pending: false,
      error: '',
      success: false,
      message: '',
    });
  });

  it('should update state when action type is  UPDATE_IN_PROGRESS', () => {
    const state = updateProfileReducer(undefined, {
      type: 'UPDATE_IN_PROGRESS',
    });
    expect(state).toEqual({
      ...state,
      pending: true,
    });
  });

  it('should update state when action type is  UPDATE_SUCCESS', () => {
    const state = updateProfileReducer(undefined, {
      type: 'UPDATE_SUCCESS',
      payload: {
        success: true,
      },
    });
    expect(state).toEqual({
      ...state,
      success: true,
    });
  });

  it('should update state when action type is  UPDATE_ERROR', () => {
    const state = updateProfileReducer(undefined, {
      type: 'UPDATE_ERROR',
      error: '',
    });
    expect(state).toEqual({
      ...state,
      error: '',
      pending: false,
    });
  });
});
