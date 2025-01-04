import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getAndSaveMemos } from "../store/modules/memo";

export const useMemos = () => {
  console.log("useMemos Hook")
  const dispatch = useAppDispatch();
  const memos = useAppSelector((state) => state.memo);

  useEffect(() => {
    dispatch(getAndSaveMemos());
  }, []);

  return memos;
};