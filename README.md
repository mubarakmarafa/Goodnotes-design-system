# Goodnotes Design System

Welcome to the Goodnotes Design System! This repository is the single source of truth for our shared UI components, built with React and Storybook. Our goal is to enable designers and developers to collaborate and build a consistent, scalable design system for all Goodnotes products.

## 🚀 Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/mubarakmarafa/Goodnotes-design-system.git
cd Goodnotes-design-system
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Run Storybook Locally

```sh
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006), where you can view and interact with all components.

---

## 🌱 How to Contribute

We use a branch-based workflow. Please follow these steps for every new feature or fix:

### 1. Create a New Branch

```sh
git checkout -b feature/your-feature-name
```

- Use a descriptive branch name, e.g., `feature/add-toast-component` or `fix/button-padding`.

### 2. Make Your Changes
- Add or update components in the `src/components` directory.
- Add or update stories in the `src/components` directory.
- Test your changes in Storybook.

### 3. Commit and Push

```sh
git add .
git commit -m "Describe your change here"
git push origin feature/your-feature-name
```

### 4. Open a Pull Request (PR)
- Go to the [GitHub repo](https://github.com/mubarakmarafa/Goodnotes-design-system).
- Click **Compare & pull request** for your branch.
- Add a clear description of your changes.
- Request a review from a teammate.

### 5. Review & Merge
- All PRs should be reviewed by at least one other team member before merging to `main`.
- Once approved, merge your PR.

---

## 📝 Guidelines
- **One feature/fix per branch/PR.**
- **Write clear commit messages and PR descriptions.**
- **Document new components and usage in Storybook.**
- **Keep the `main` branch clean and stable.**

---

## 📦 Project Structure

```
Goodnotes-design-system/
├── src/
│   └── components/   # All design system components and stories
├── .storybook/       # Storybook configuration
├── README.md         # This file
└── ...
```

---

## 💬 Questions?
If you have any questions, ask in the team chat or open an issue in this repo.

Happy contributing! 🎉
