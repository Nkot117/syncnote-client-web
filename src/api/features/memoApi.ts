import axiosClient from "..";
import { MemoDetail } from "../../models/memo/MemoDetail";
import { MemoList } from "../../models/memo/MemoList";
import { MemoRequest } from "../../models/memo/MemoRequest";

const memoApi = {
  createMemo: (data: MemoRequest) => {
    return axiosClient
      .post<MemoDetail>("api/memo/create", data)
      .then((response) => response.data);
  },
  getMemoList: () => {
    return axiosClient
      .get<MemoList>("api/memo/list")
      .then((response) => response.data);
  },
  getMemoDetail: (id: string) => {
    return axiosClient
      .get<MemoDetail>(`api/memo/${id}`)
      .then((response) => response.data);
  },
  updateMemo: (id: string, data: MemoRequest) => {
    return axiosClient
      .patch<MemoDetail>(`api/memo/${id}`, data)
      .then((response) => response.data);
  },
  deleteMemo: (id: string) => {
    axiosClient.delete(`api/memo/${id}`);
  },
};

export default memoApi;
