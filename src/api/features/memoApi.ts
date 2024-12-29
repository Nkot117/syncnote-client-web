import axiosClient from "..";
import { MemoDetailResponse } from "../models/memo/MemoDetailResponse";
import { MemoListResponse } from "../models/memo/MemoListResponse";
import { MemoUpdateRequest } from "../models/memo/MemoUpdateRequest";

const memoApi = {
  createMemo: () => {
    return axiosClient.post("api/memo/create");
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