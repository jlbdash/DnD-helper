const One = 'GET_ALL';

const DEFAULT_STATE = {
  One: [],
};

const DEFAULT_ACTION = {};

export default function pages(state = DEFAULT_STATE, action = DEFAULT_ACTION) {
  switch (action.type) {
    case One: {
      return  { ...state , One: ['happy,']};
    }

    default:
      return { ...state };
  }
}
