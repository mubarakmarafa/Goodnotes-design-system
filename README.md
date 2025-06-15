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

## ✨ How Designers Can Contribute (with Cursor)

We encourage designers to contribute directly to the design system using [Cursor](https://cursor.so/), just like in this project! Cursor makes it easy to:
- Edit code and documentation with AI assistance
- Preview Storybook locally
- Push changes to GitHub

**To contribute as a designer:**

1. **Open the project in Cursor**
   - Use the "Open in Cursor" button or open the folder from your local machine.

2. **Create a new branch for your work**
   - Use Cursor's built-in git tools or run:
     ```sh
     git checkout -b feature/your-feature-name
     ```

3. **Make your changes**
   - Update or add components in `src/components`.
   - Update or add stories for your components.
   - Use Cursor's AI to help with code, documentation, or troubleshooting.

4. **Preview your changes in Storybook**
   - Run:
     ```sh
     npm run storybook
     ```
   - View your changes at [http://localhost:6006](http://localhost:6006).

5. **Commit and push your changes**
   - Use Cursor's git UI or run:
     ```sh
     git add .
     git commit -m "Describe your change here"
     git push origin feature/your-feature-name
     ```

6. **Open a Pull Request**
   - Go to the [GitHub repo](https://github.com/mubarakmarafa/Goodnotes-design-system).
   - Click **Compare & pull request** for your branch.
   - Add a clear description and request a review.

**Tip:** If you get stuck, use Cursor's AI chat to ask for help or troubleshooting!

---

## 🌱 How to Contribute (General)

We use a branch-based workflow. Please follow these steps for every new feature or fix:

1. Create a New Branch
2. Make Your Changes
3. Commit and Push
4. Open a Pull Request (PR)
5. Review & Merge

(See above for detailed steps.)

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

## 🎥 Video Tutorial Coming Soon
A step-by-step video walkthrough of contributing to this project (using Cursor and GitHub) will be added here soon!

---

## 💬 Questions?
If you have any questions, ask in the team chat or open an issue in this repo.

Happy contributing! 🎉

---

Test commit to trigger GitHub Actions deployment.
