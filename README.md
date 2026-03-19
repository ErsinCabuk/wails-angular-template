# 🚀 Wails + Angular v21 Template

A starter template for building modern, fast, and lightweight desktop applications using Wails v2 and the latest release of Angular.

This template brings together the powerful Go-based backend of Wails with Angular's innovative features (Standalone Components, Signals, modern build system). It uses the speed-focused **Bun** as the package manager.

## ✨ Features

- **Wails v2:** A Go-based desktop framework offering native performance.
- **Angular v21:** The latest web framework featuring a modern, standalone architecture.
- **TailwindCSS v4:** A modern CSS framework configured for rapid UI development.
- **Bun Package Manager:** Lightning-fast frontend dependency management compared to `npm` or `yarn`.

## 🛠️ Requirements

Before you start, make sure you have the following installed on your system:

- [Go](https://go.dev/dl/) (1.18 or higher)
- [Wails v2 CLI](https://wails.io/docs/gettingstarted/installation)
- [Bun](https://bun.sh/) (For frontend package management and the dev server)

## 📦 Installation & Quick Start

To create a new Wails project using this template, simply run the following command in your terminal:

```bash
wails init -n my-project -t [https://github.com/ErsinCabuk/wails-angular-template](https://github.com/ErsinCabuk/wails-angular-template)
```

## 🔄 Keeping Angular Up to Date

Since this template uses Bun as the package manager, you can easily update Angular to its latest patch or minor versions using the Angular CLI via bunx.
To keep your framework updated and secure, navigate to your frontend directory and run:

```bash
cd frontend
bunx ng update
```
