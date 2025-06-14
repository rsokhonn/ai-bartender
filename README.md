# AI Bartender

A prototype React application showcasing a mock "AI Bartender" experience. The project contains a single static page powered by React and Ant Design via CDN links. No build step or backend is required.

## Structure

- `src/config` stores configuration such as the list of bars and their drink menus.
- `src/services` contains simple service wrappers used by the UI. They are mocked for now.
- `src/components` hosts the React components used on the page.

## Features

- Select between different bars to view their drink menus.
- Menu cards display drink images, recipes, flavor profiles, strengths and types.
- "Recommend me a drink" workflow lets you describe your mood, preferred flavors and strength.
- Generates three mock recommendations with analysis, history and fun facts.
- Fully client side and works on both desktop and mobile thanks to Ant Design's responsive components.

## Running

Open `index.html` in any modern web browser. Internet access is required to load React, Ant Design and placeholder images from the CDN.

### GitHub Pages

The repository is configured with a GitHub Actions workflow that publishes the
current `main` branch to GitHub Pages. After changes are merged you can visit
`https://<username>.github.io/ai-bartender/` (replace `<username>` with your
GitHub handle) to try the live demo.
