export interface MemoListResponse {
  memoList: MemoInfo[];
}

interface MemoInfo {
  id: string;
  title: string;
  content: string;
}
