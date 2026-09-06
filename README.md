# Get Global

A country-information coding challenge with a React search interface and a separate Node.js service.

**React · Node.js · Express**

[Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

## What you can explore

- Search by country name.
- Display capital, population, currencies, languages and a flag.
- Loading state around the API request.

> **Project notes:** The client calls http://localhost:3001/country?name=.... Run the server as well as the frontend, and inspect the response shape when a country has multiple matches.

## Getting started

Requires Git, Node.js and npm. The frontend and backend are separate packages.

```bash
git clone https://github.com/SamOBrienOlinger/get-global.git
cd get-global
```

Start the backend in one terminal:

```bash
cd server
npm install
npm start
```

From the repository root in a second terminal, start the frontend:

```bash
cd get-global
npm install
npm start
```

Open [localhost:3000](http://localhost:3000). The backend listens on port 3001. Keep both development processes running.

## Repository guide

| Path | Purpose |
| --- | --- |
| [get-global/package.json](get-global/package.json) | Package dependencies and available commands |
| [server/package.json](server/package.json) | Package dependencies and available commands |

## Checks and review

Use Node.js and npm for the package commands below. Install the package dependencies first when the command uses a local build or test tool.

| Command | Purpose |
| --- | --- |
| `npm --prefix get-global run build` | Create the configured application build |
| `npm --prefix get-global test -- --watchAll=false` | Run the existing test suite |

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

Generate fresh results from the revision you are working on; historical test reports describe earlier runs.

## Deployment

No current hosted endpoint is established by this README. A backend deployment needs a configured runtime and its own service settings; GitHub Pages cannot execute the server-side application.

## Further reading

- [Documentation for get-global](get-global/README.md)

## Credits and reuse

Design decisions, original feature notes, historical testing evidence and detailed acknowledgements remain available in the preserved project record:

- [README.md · original project record](https://github.com/SamOBrienOlinger/get-global/blob/79a187f8f2f5aae602ee113239af7f0be92a7ade/README.md)

No repository-level licence file is present in this snapshot. This README does not grant additional reuse permissions. Check with the relevant rights holders before reusing code, written content or assets.

## Support

Repository maintained in [Sam O’Brien-Olinger’s GitHub account](https://github.com/SamOBrienOlinger). For a problem or suggested improvement, [open an issue](https://github.com/SamOBrienOlinger/get-global/issues) with the affected page or command, steps to reproduce, and expected behaviour.

[Back to top](#get-global)
