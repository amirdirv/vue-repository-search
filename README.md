# 🔍 Vue Repository Search

A clean and minimal Vue 3 application that allows users to search for GitHub repositories using the GitHub Search API. The app features pagination, loading indicators, and proper error handling. It's built with Vuex for state management and follows best practices for clean code and component-based architecture.

---

## 🚀 Features

- 🔎 Live search for GitHub repositories
- 📦 Paginated results (Next/Previous)
- ⚡ Loading spinner for user feedback
- 📭 Friendly message for no results
- 🎯 Clean and modular Vue components
- 🎨 Minimal and responsive UI using Bulma CSS

---

## 🧠 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Axios](https://axios-http.com/)
- [Bulma CSS](https://bulma.io/)
- [Font Awesome](https://fontawesome.com/)

---

## 📁 Project Structure

```
vue-repository-search/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── SearchInput.vue
│   │   ├── RepoList.vue
│   │   └── PaginationControl.vue
│   ├── store/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/amirdirv/vue-repository-search.git
cd vue-repository-search
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run serve
```

The application will be available at: [http://localhost:8080](http://localhost:8080)

---

## 🛠 Available Scripts

| Command             | Description                            |
|---------------------|----------------------------------------|
| `npm run serve`     | Starts local development server        |
| `npm run build`     | Builds the app for production          |
| `npm run lint`      | Lints and fixes code                   |

---

## 📝 Notes

- GitHub Search API is rate-limited for unauthenticated requests. If you hit the limit (403 errors), consider authenticating the requests via a token.
- You can extend this app by adding more filters, authentication, or even routing (e.g. with Vue Router).

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- GitHub REST API
- Vue.js & Vue CLI
- Bulma CSS
- Font Awesome Icons

---

## ✨ Author

Made with ❤️ by [Amir Mohammad Iravani](https://amir-iravani.com)  
[LinkedIn](https://linkedin.com/in/amirmohammad-iravani)
