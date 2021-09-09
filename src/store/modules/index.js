// 액션 타입 정의
const CHANGE_PERSON = 'CHANGE_PERSON';

// 액션 생성함수 정의
export const changePerson = person => ({ type : CHANGE_PERSON, person });

// 초기상태 정의
const initialState = {
  person : null
};

// 리듀서 작성
export default function change(state=initialState, action) {
  switch (action.type) {
    case CHANGE_PERSON :
      return {
        ...state,
        person : action.person,
      };
    default : 
      return state;
  }
}