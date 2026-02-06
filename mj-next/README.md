# エムジェイ建工 HP（Next.js）

Vercel + GitHub で公開するための Next.js プロジェクトです。

## ローカルで動かす

```bash
cd mj-next
npm install   # 初回のみ
npm run dev
```

ブラウザで **http://localhost:3000** を開く。メニュー開閉やページ内リンクを確認してください。

## 画像を使う場合

- `logo.jpg` や `S__32850072.jpg` などは **`public/`** に置く
- コード内では **`/logo.jpg`** のように `/` から書く（例: `<img src="/logo.jpg" alt="..." />`）

## GitHub → Vercel で公開する

1. **GitHub にリポジトリを作る**
   - GitHub で New repository を作成
   - **リポジトリのルートを「mj-next の中身」にする**  
     例: リポジトリのルートに `package.json` と `src/` がある状態にする  
     （`エムジェイ建工HP` ごとではなく、**mj-next フォルダの中身だけ**を push する）

2. **push する**
   ```bash
   cd mj-next
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
   git branch -M main
   git push -u origin main
   ```

3. **Vercel でデプロイ**
   - [vercel.com](https://vercel.com) にログイン
   - **Add New** → **Project** → **Import Git Repository** で上記リポジトリを選択
   - Next.js は自動判定されるので **Deploy** する
   - 完了後、表示される URL でサイトが公開される

4. **以降**
   - `git push` するたびに Vercel が自動で再デプロイする

## 構成

- `src/app/page.jsx` … トップページ（玄関）
- `src/app/MJConstructionSite.jsx` … 本体コンポーネント
- `src/app/globals.css` … 共通スタイル
- `public/` … 画像などの静的ファイル
