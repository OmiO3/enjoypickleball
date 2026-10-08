# ピックルボール はじめてガイド

ピックルボール初心者向けの日本語ガイドです。スマートフォンでの利用を中心に、ホーム、基本ルール、コート図、ダブルス、ショット、戦術、用語、歴史を収録しています。

## 起動方法

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
npm run preview
```

React 18、Vite、TypeScript、Wouter、Framer Motion、Lucide React を使っています。画面遷移はWouter（ハッシュルーティング）、ページ表示とショットカードの動きはFramer Motionで実装しています。

## デプロイ

`main` ブランチへ push すると、GitHub Actions（`.github/workflows/deploy.yml`）で `dist` をビルドし GitHub Pages に公開します。公開パスは `vite.config.ts` の `base`（`/enjoypickleball/`）です。GitHub Pages でも各ページを直接開けるよう、URLは `#/rules` のようなハッシュ形式にしています。

ルールは大会・開催形式によって異なる場合があります。競技で利用する場合は、主催者の案内と最新の公式ルールを確認してください。
