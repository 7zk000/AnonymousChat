【使用技術】
コンポーネント指向
フロント：ReactNative
バックエンド：Nodejs
DB：Firebase

【機能詳細】
・完全招待制
・美しいUI/UXの設計
・直感的な操作性の確保
・通話機能
・グループ機能
・個人チャット機能
・Telegram同様に相互チャット削除機能
・ログを残さない機能（端末の送信履歴などはすべて削除、何も残らないようにする）
・ユーザーが通知を細かく設定できる機能

【実現するための機能（検討段階）】
・招待コードによるユーザー登録
・端末にデータを残さない設計
・複数デバイス間でのメッセージ同期機能
・エンドツーエンド暗号化の実装
・データ漏洩防止のための強固な認証・認可機構
・Firebaseのセキュリティルールの厳格な設定
・Firebaseのリアルタイムデータベースの最適化
・大量のユーザーをサポートするためのスケーラブルなアーキテクチャ設計
・リアルタイム通信の遅延を最小限に抑える
・React Nativeのパフォーマンス最適化
・UID以外の個人情報を一切収集しない設計
・匿名性を重視したユーザーインターフェース
・スクリーンショット防止機能や、閲覧履歴を残さない機能

【バージョン】
・React Native: 0.74.1
・Node.js: 20.11.1
・npm: 10.2.4

chat-apps@0.0.1
├── @babel/core@7.24.6
├── @babel/preset-env@7.24.6
├── @babel/runtime@7.24.6
├── @react-native-firebase/app@20.0.0
├── @react-native-firebase/auth@20.0.0
├── @react-native-firebase/firestore@20.0.0
├── @react-native/babel-preset@0.74.83
├── @react-native/eslint-config@0.74.83
├── @react-native/metro-config@0.74.83
├── @react-native/typescript-config@0.74.83
├── @types/react-test-renderer@18.3.0
├── @types/react@18.3.3
├── @typescript-eslint/eslint-plugin@5.0.0
├── babel-jest@29.7.0
├── eslint-plugin-jest@28.5.0
├── eslint@8.57.0
├── jest@29.7.0
├── prettier@2.8.8
├── react-native@0.74.1
├── react-test-renderer@18.2.0
├── react@18.2.0
└── typescript@5.0.4
