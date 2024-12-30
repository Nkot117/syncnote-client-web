import axiosClient from "..";
import { MemoDetailResponse } from "../models/memo/MemoDetailResponse";
import { MemoInfo } from "../models/memo/MemoInfo";
import { MemoListResponse } from "../models/memo/MemoListResponse";
import { MemoUpdateRequest } from "../models/memo/MemoUpdateRequest";

const memoApi = {
  createMemo: (data: { title: string; content: string }) => {
    return axiosClient.post<MemoInfo>("api/memo/create", data);
  },
  getMemoList: () => {
    return axiosClient
      .get<MemoListResponse>("api/memo/list")
      .then((response) => response.data);
  },
  getMemoDetail: (id: string) => {
    return axiosClient
      .get<MemoDetailResponse>(`api/memo/${id}`)
      .then((response) => response.data);
  },
  updateMemo: (id: string, data: MemoUpdateRequest) => {
    return axiosClient
      .patch<MemoDetailResponse>(`api/memo/${id}`, data)
      .then((response) => response.data);
  },
  deleteMemo: (id: string) => {
    axiosClient.delete(`api/memo/${id}`);
  },
};

export default memoApi;
