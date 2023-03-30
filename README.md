# JobDash

A job application platform that allows users to create and manage their job applications.

## Specifications

For specifications, see [Specs.md](doc/Specs.md).

## Requirements

| Requirement                       | Version |
|-----------------------------------|---------|
| [Node.js](https://nodejs.org/en/) | 16.18.0 |
| [pnpm](https://pnpm.io/)          | 7.27.1  |

## Installation

1. Clone the repository
2. Run `pnpm install` to install dependencies

## Usage

### Development

Start the development server

```shell
pnpm dev
```

Go to <127.0.0.1:5173> to view the application.

There already is a user created for you to test the application. The user's credentials are:

| Field    | Value         |
|----------|---------------|
| Email    | test@user.dev |
| password | password      |

You can also create a new one, by clicking to the register link and choose between Google, GitHub
and email+password.

The logout button is in the top right corner, after clicking on the user's dropdown.

### Production

Build the application and start the production server

```shell
pnpm build
pnpm preview
```
