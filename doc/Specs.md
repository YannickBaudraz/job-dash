# JobDash - Specifications

## Author

- [yannickcpnv (Yannick Baudraz) · GitHub](https://github.com/yannickcpnv)

## Introduction

**JobDash** is a job application platform that allows users to create and manage their job
applications. The goal is to provide a good user experience for job seekers, with responsive design
for multiple devices and user-friendly feedbacks.

## Features

The following features will be included in the application:

- Dashboard: A centralized view where the user can access and manage all their job applications.

- Sidebar Navigation: A navigation bar to help the user easily access different sections of the
  dashboard.

- Job Applications Management: Ability for users to view, add, edit, and delete job applications,
  including information such as the position, company, job location, job status, and job type.

- User authentication and authorization: Ability for users to log in and out of the application, as
  well as secure access to sensitive information.

- User-friendly feedbacks: Visual and interactive feedbacks to help the user understand the result
  of their actions, such as success or error messages.

- Responsive design: The application will be optimized for use on multiple devices, such as desktop,
  tablet, and mobile.

## Technologies

The following technologies will be used to build the project:

### Frontend

#### React

[React](https://fr.reactjs.org/) is a JavaScript library for building user interfaces. It is highly
popular and widely used due to its simplicity and ability to manage complex state and updates to the
UI efficiently. React allows for the creation of reusable UI components, making the development
process faster and more organized.

#### Redux

[Redux](https://redux.js.org/) is a state management library for Js applications. It helps to manage
the application state in a predictable way, making it easier to debug and maintain when the state
begin to be complex. With Redux, the state of the application is stored in a single place, making it
accessible from any component in the application.

##### Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org/) is a set of tools for writing Redux logic more
easily. It provides a simplified API for common Redux tasks and reduces the amount of boilerplate
code needed to manage application state. This makes the development process faster and more
efficient.

#### Material Tailwind

[Material Tailwind](https://www.material-tailwind.com/) is a CSS framework for
implementing `Material Design` with the `Tailwind CSS` library. Material Design is a design language
developed by Google, and is widely used in modern web applications. Material Tailwind provides a set
of pre-built components and styling that makes it easy to create a visually appealing and functional
user interface, and allow to still use tailwind for more custom ui.

#### React Router

[React Router](https://reactrouter.com) is a popular routing library for React applications. It
helps to manage the different pages and routes in the application, allowing for a seamless
navigation experience for the user. The library was chosen for this project as it provides a
comprehensive and flexible solution for routing in React applications. Its simplicity and ease of
use make it ideal for the job application tracking dashboard.

### Backend

#### Firebase Authentication

[Firebase Authentication](https://firebase.google.com/products/auth) is a backend service for
handling user authentication. It provides several authentication methods, including email and
password, making it simple to integrate into the job application management dashboard.

#### Cloud Firestore

[Cloud Firestore](https://firebase.google.com/products/firestore) is a flexible, scalable database
from Firebase and Google Cloud. It provides a database without the need to build a backend, making
it a great choice for web applications. The ease of use and integration with other Firebase
services, such as authentication, make it a good choice for this project.

### Dev tools

#### Typescript

[Typescript](https://www.typescriptlang.org/) is a statically typed language built on top of
JavaScript. It provides type checking at compile-time and can catch errors before they happen,
making the development process smoother and more efficient.

I have chosen to use Typescript because of its ability to help avoid common errors in large
codebases, as well as its compatibility with modern JavaScript libraries and tools. Additionally,
the use of Typescript can also make it easier for other developers to understand and work with the
codebase.

#### Vite

[Vite](https://vitejs.dev/) is a fast build tool for JavaScript applications. It is designed for
fast and efficient development, and provides instant updates to the application during development.
Vite also provide some plugins and basic configuration for multiple type of projects is a time saver

#### Pnpm

[Pnpm](https://pnpm.io/fr/) is a fast and efficient package manager. It uses a unique storage
mechanism to reduce the size of the node_modules directory, making builds faster and reducing disk
usage. Pnpm also uses a stricter approach to managing peer dependencies and requires the developer
to know which one is being used in the project.


