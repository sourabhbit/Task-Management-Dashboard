import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatcher, RootState } from "slices/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatcher;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
