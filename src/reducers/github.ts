import { Reducer } from 'redux';

interface TestAction {
  type: 'testActionType';
}

interface TestAction2 {
  type: 'testActionType2';
}

type Action = TestAction | TestAction2;

interface TestState {
  organization: string;
}

const initialState = {
  organization: 'testName',
};

const testReducer: Reducer<TestState, Action> = (
  state: TestState = initialState,
  action: Action,
): TestState => {
  switch (action.type) {
    case 'testActionType':
      return {
        ...state,
        organization: 'update!',
      };
    case 'testActionType2':
      return {
        ...state,
        organization: 'update2!!',
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default testReducer;
