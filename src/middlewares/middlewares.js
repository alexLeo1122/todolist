

export const cssRules1 = 'color:  #ff751a; font-size: 14px; font-style: italic';
export const cssRules2 = 'color: #4d79ff; font-size: 14px';
export const cssRules3 = 'color: #ff1aff; font-size: 14px';
export const cssRules4 = 'color: #009900; font-size: 14px';






  export const MyLogger = (store) => next => action =>{
    console.log("%c>>>Logger: %cprev-state",cssRules1,cssRules2,store.getState());
    console.log('%c>>>Logger: %cdispatch action', cssRules1,cssRules3 ,action)
   //passed {action} object to the next middlewares
     next(action);
    console.log('%c>>>Logger: %cnext-state', cssRules1,cssRules4, store.getState())
    // return result;
  }

