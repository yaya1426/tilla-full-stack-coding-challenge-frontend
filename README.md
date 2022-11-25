# Till Coding Challenge

This is a demo project challenge that was already built using Next.js and had some modifications that were needed to be applied.

*Watch the Demo video*
Youtube Link: https://www.youtube.com/watch?v=xKcTtp29Elc

## Goals Breakdown
So to start approaching it correctly I broke down the goals into technical tasks that I approached in the implementation as shown in the video.

### Offers a better user experience
- Add a container for the page, where it has margins and padding
- Show airpots result counter
- Display 2 airport results per row.

### Considers performance bottlenecks
- Search debounce (500 ms)
- Keeps re-fetching data from api when navigating to other screens for the initial load.
- Lazy Loading / Pagination (Not implemented now - see Extra Questions)
- Limit of number of airports to display on screen (100)

### Mobile responsive
- Padding and margins should be less on mobile
- Stick to having 1 result per row

## Extra Questions
> What are some edge cases you would take care of before shipping this to production?

- The pagination is the most important part so it offers better user experience.
- Cleaning up the search query before sending request to API from any special characters to enhance security (avoiding injection).
- Install Redux.js Toolkit and use as proper state management for navigation between screens, and therefore the data can be cached in state memory to display the data and just do sync fetches for updating data if any. (In real-life airports data don't change that much, so we don't need to do lots of queries here for getting the data each time, except for the search query).
- Securing the API to be only called with an access token from my app instead of anyone having access to it publicly (not login, but more an API key).
- Database can be SQLite better than a Json file.

---

> What changes would you make to your solution to make it mobile responsive?

- Add a sticky header, or drawer menu.
- Improve user experiecne by doing more hover effects on cards that works well with mobile gestures
- Maybe add flags for countries, so its more easy to detect what I am searching for. (We can also group airports by country)

---

> What's important for you to work well in a fully remote team?

- The company has a well organized process on what needs to be done, and when it needs to be done, and who is responsible for what (SCRUM workflow)
- The developer has more focus time to work on tasks, and spend less time in meetings (Meeting should be short with a goal in mind, and not go off topic)
- Overlap time with other engineers in an Async manner (Any developer is available to chat/discuss with any topic within a set of defined hours - normally 5+/- hours)
- Product vision should always be updated and aligned with all engineers on the team so they are aware with each other's productivity work and impact.

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn dev
```

The app should be available via [http://localhost:3000](http://localhost:3000).

Good luck and talk soon!
