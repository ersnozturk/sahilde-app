# 🏖️ Sahilde App

Sahilde aktivitelerinize özel paket önerilerini keşfedin! Spor, sohbet, çalışma veya beslenme ihtiyaçlarınıza uygun özel paketler.

## 🚀 Development Workflow

### Branch Yapısı
- **`main`**: Production ready kod (Sadece merge ile güncellenir)
- **`future`**: Ana geliştirme branch'i
- **`feature/*`**: Yeni özellik geliştirme branch'leri
- **`bugfix/*`**: Bug fix branch'leri

### 📋 Geliştirme Kuralları

#### ⚠️ ÖNEMLİ: Main Branch Korumalı!
- `main` branch'ine **direkt push yasak**
- Tüm değişiklikler **Pull Request** ile yapılmalı
- **Code review** zorunlu
- **CI/CD testleri** geçmeli

#### 🔄 Çalışma Akışı
1. `future` branch'den yeni branch oluştur
```bash
git checkout future
git pull origin future
git checkout -b feature/new-feature-name
```

2. Geliştirme yap ve commit et
```bash
git add .
git commit -m "✨ feat: yeni özellik açıklaması"
```

3. Pull Request oluştur
```bash
git push origin feature/new-feature-name
# GitHub'da PR oluştur: feature/new-feature-name -> future
```

4. Future'dan main'e merge (Firebase deploy tetiklenir)
```bash
# Sadece maintainer tarafından yapılır
git checkout main
git merge future
git push origin main  # 🔥 Otomatik Firebase deploy
```

### 🤖 CI/CD Pipeline

#### Otomatik İşlemler
- **PR açıldığında**: Test + Build + Lint kontrolü
- **Main'e merge**: Test + Build + **Firebase Deploy**

#### Required Checks
- ✅ ESLint kontrolü
- ✅ TypeScript build
- ✅ Test suite (varsa)

### 🛡️ Branch Protection Rules

Main branch için GitHub'da şu kurallar aktif:
- Require pull request reviews before merging
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Restrict pushes that create files larger than 100MB

## 🔧 Getting Started

```bash
# Repo'yu clone et
git clone https://github.com/ersnozturk/sahilde-app.git
cd sahilde-app

# Dependencies yükle
npm install

# Development server başlat
npm run dev
```

Development server: [http://localhost:3000](http://localhost:3000)

## 📦 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint kontrolü
npm run lint:fix     # ESLint auto-fix
```

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Firebase Hosting
- **Functions**: Firebase Functions
- **CI/CD**: GitHub Actions

## 🔥 Firebase Deploy

### Manuel Deploy
```bash
npm run build
firebase deploy --only hosting
```

### Otomatik Deploy
- Main branch'e her merge sonrası otomatik deploy
- GitHub Actions tarafından yönetiliyor

## 🤝 Contributing

1. Bu repo'yu fork et
2. Feature branch oluştur (`git checkout -b feature/amazing-feature`)
3. Değişikliklerini commit et (`git commit -m 'Add amazing feature'`)
4. Branch'i push et (`git push origin feature/amazing-feature`)
5. Pull Request oluştur

## 📝 Commit Convention

```
✨ feat: yeni özellik
🐛 fix: bug düzeltmesi
📚 docs: dokümantasyon
🎨 style: kod formatı
🔧 refactor: kod refactor
⚡ perf: performans iyileştirmesi
🧪 test: test ekleme/düzeltme
🔖 chore: build, config değişiklikleri
```

## 📄 License

Bu proje MIT lisansı altındadır.
