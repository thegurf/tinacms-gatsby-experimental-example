# Gatsby + TinCMS

> Warning: This is experimental. We are still working on finding the best way to integrate TinCMS with Gatsby. Any ideas or contributions are welcome on the [TinaCMS github repo](https://github.com/tinacms/tinacms).
>
> Check out at [this discussion]() for more info

## Setup

- Fork this repo
- Clone the fork your local machine.

## Local Development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
yarn build
```

## Deploying the Site

This project can easily be deployed using services like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

### Environment variables

When setting up the Netlify/Vercel project, apply the `TINA_CLIENT_ID` & `TINA_TOKEN` environment variables from your [app.tina.io](https://app.tina.io) project.

## Learn More

To learn more about Tina, take a look at the following resources:

- [Tina Docs](https://tina.io/docs)
- [Getting Started Guide](https://tina.io/guides/tinacms/non-react-based-ssg/guide/)

You can check out the [Tina GitHub repository](https://github.com/tinacms/tinacms) - your feedback and contributions are welcome!
