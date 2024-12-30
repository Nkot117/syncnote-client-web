import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getAndSaveMemos } from "../store/modules/memo";

export const useMemos = () => {
  const dispatch = useAppDispatch();
  const memos = useAppSelector((state) => state.memo);

  useEffect(() => {
    dispatch(getAndSaveMemos());
  }, [dispatch]);

  return memos;
};