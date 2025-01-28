## 概要
ユーザー情報を登録することで、気軽にメモを作成・保存できるWebアプリです。 サーバーサイドは [syncnote-server](https://github.com/Nkot117/syncnote-server/tree/main) とAPI通信でやりとりします。

## 機能
- ユーザー情報
  - 作成
  - 削除
- メモ情報
  - メモの一覧表示、詳細表示
  - メモの新規作成
  - メモ内容の編集
  - メモの削除
- 認証管理
  - サーバーサイドアプリから払い出されるJWTトークンをアプリ内で保持し、APIリクエスト時にヘッダーに付与して認証チェック
 
## スクリーンショット
| ログイン画面 | サインアップ画面 | メモ画面 | アカウント画面 |
| :---: | :---: | :---: | :---:
| ![ログイン](https://github.com/user-attachments/assets/73754925-1125-46c4-a2eb-8ef6329aaac3)| ![サインアップ](https://github.com/user-attachments/assets/8ec00f70-47f3-4641-9c2a-a86bdeb8e98f)| ![メモ画面](https://github.com/user-attachments/assets/f8514597-f632-44ab-a6eb-bb8816a777ca) | ![アカウント画面](https://github.com/user-attachments/assets/992d23ce-e9ff-45d8-8c4c-98f947a56bcb)


## 使用技術
- 言語・アーキテクチャ
  - TypeScript
  - React
- 状態管理
  - Redux
- ルーティング
  - React Router
- HTTPクライアント
  - Axios
- ビルドツール
  - Vite
