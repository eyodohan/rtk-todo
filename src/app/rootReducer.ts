import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from '../features/todoList/todoSlice';
import visibilityFilterSlice from '../features/visibilityFilter/visibilityFilterSlice';

const rootReducer = combineReducers({
    todos:todoSlice,
    visibilityFilter:visibilityFilterSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer