# Frontend Coding Challenge

Our main goal for this exercise is to get an idea of how you are to work with and how you approach your engineering work. That insight is more important than your actual working solution at the end of this exercise.

Please record your screen and talk us through the coding exercise as you work through it. Don't hesitate to think out loud—that's the interesting part!

We expect this to take around an hour.

## Brief

You'll be working on a tiny app that looks up airport information. In its current state, we render a list of all airports (around 6000), and have a basic typeahead search feature so the user can look up airports by searching by name, IATA, city, or country.

The designer gave you this mock-up as a reference:

![image](https://user-images.githubusercontent.com/144075/144594282-68de44cd-bef2-4d9d-8c5d-398862cbc964.png)

Your goal is to improve this app as provided in the mockup in a way that it offers a better user experience, considers performance bottlenecks, and is also mobile responsive to make the overall experience much more efficient.

## Assumptions

- Tilla uses [Next.JS](http://nextjs.org) and TypeScript. It'd be cool if you use that same tech stack for this exercise.
- The database is currently a JSON file with airport data. We don't expect you to move this into a database layer.
- The IATA code is a unique identifier for an airport.
- While we care more about your thought process than your outcome, we're still interested in how you write code. Don't cut corners there, and write the code as if you'd write a real-world, production-quality product.

## Extra questions

We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

- What are some edge cases you would take care of before shipping this to production?
- What changes would you make to your solution to make it mobile responsive?
- What's important for you to work well in a fully remote team?

## Deliverables

- Invite [@pieterbeulque](https://github.com/pieterbeulque) and [@umartayyab](https://github.com/umartayyab) to a GitHub repo with your completed project
- A video of your screen recording (unlisted YouTube video, Loom, … anything works)
- Answers to the questions above can be either in the video or written down in the README of your repo

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn dev
```

The app should be available via [http://localhost:3000](http://localhost:3000).

Good luck and talk soon!
