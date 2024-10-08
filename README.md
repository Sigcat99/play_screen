
# 🤖 Automatizacion 

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)


## 📋 Tabla de Contenidos
- [Sobre el Proyecto](#sobre-el-proyecto)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Instalación](#instalación)


## 📄 Sobre el Proyecto
En este proyecto se realizo la automatizacion de un proceso de compra de una tienda virtual utilizando el patron de screenplay de la mano de la libreria open source
Tesla screenplay core 

### 🖥️ Web :

Para el desarrollo de esta automatizacion se implemento con el Framework 
 ***playwright*** 🎭.

Dela mano de tecnologias como :

- 🟢 ***NODE JS***
- 🔷 ***TYPESCRIPT***
- 📊 ***ALLURE***
- 🏗️ **JENKINS**
- 🌿 **GIT**

## 📁 Estructura de Carpetas
```
📁 project-root/
│
├── 📁 src/
│   ├── 📁 Ability/
│   ├── 📁 actions/
│   ├── 📁 questions/
│   ├── 📁 tasks/
│   │   ├── 📜 AddCard.ts
│   │   ├── 📜 CheckoutProcess.ts
│   │   ├── 📜 FinishCheckout.ts
│   │   ├── 📜 GoCardView.ts
│   │   ├── 📜 Login.ts
│   │   └── 📜 SearchProduct.ts
│   └── 📁 userinterface/
│       ├── 📜 CardView.ts
│       ├── 📜 CheckoutComplete.ts
│       ├── 📜 ChekoutStepOne.ts
│       ├── 📜 ChekoutStepTwo.ts
│       ├── 📜 DetailProduct.ts
│       ├── 📜 SaucedemoLogin.ts
│       └── 📜 SwagLabsHome.ts
│
├── 📁 test-results/
│
├── 📁 tests/
│   ├── 🧪 add_card.spec.ts
│   ├── 🧪 buy_product_e2e.spec.ts
│   ├── 🧪 login.spec.ts
│   └── 🧪 search_product.spec.ts
│
├── 📄 .gitignore
├── 🔧 Jenkinsfile
├── 🔒 package-lock.json
├── 📦 package.json
├── ⚙️ playwright.config.ts
└── 📘 README.md

```
## 🛠️ Ejecucion Local

Teniendo ya Node js instalado los comandos para la ejecucion son los siguientes :

```bash
1. git clone 
2. cd proyecto
3. npm ci 
4. npm install  playwright 
5. npx playwright test   tests/buy_product_e2e.spec.ts --headed  
6. npx allure generate  --clean
7. npx allure open ./allure-report


1. Clona el repositorio
2. Instala las dependencias con `npm ci`
3.  para que descarge los drivers

```

