# React Learning Notes

## Creating a React App with Vite

To initiate a React application structure:

1. Navigate to the folder where you want to create the application.
2. In the terminal, run:

```bash
npm create vite@latest
```

3. Move into the project folder:

```bash
cd <project-folder-name>
```

4. Install dependencies:

```bash
npm install
# or
npm i
```

## Running the Development Server

To go live (start the dev server):

```bash
npm run dev
```

---

## Creating a React Component (Shortcut)

Using a code editor shortcut to generate a React arrow function component with default export:

```text
rafce
```

---

## Installing Tailwind CSS with Vite

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Update `vite.config.js`

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

### Update `index.css`

```css
@import "tailwindcss";
```

---

## Props

**Props** are used to pass data from one component to another.

Example:

```jsx
<Card title="prop name" />
```

Props can be:
- Strings
- Numbers
- Booleans
- Objects
- Arrays

---

## State

**State** is the component’s memory (its “brain”).  
It holds information that can change over time.

Example use case:
- Tracking whether a user liked a movie or not.

---

## React Hooks

In React, hooks usually start with `use`.

Hooks allow you to build components in a simpler and more organized way.

### Commonly Used Hooks

#### `useState()`
Used to remember and update values.

Example:

```jsx
const [count, setCount] = useState(0);
```

- `count` starts at `0`
- `setCount()` updates the value of `count`

#### `useEffect()`
Used to perform side effects (do things when something happens).

Example:

```jsx
useEffect(() => {
  console.log("Hey! Count changed!");
}, [count]);
```

- This runs every time `count` changes.
- The **dependency array** is the second argument.

If the dependency array is empty:

```jsx
useEffect(() => {
  console.log("Runs only once");
}, []);
```

This effect runs **only once**, when the component mounts.

---

## Dependency Array

- Passed as the second parameter to `useEffect()`.
- React checks the variables inside it.
- If a variable changes, the effect runs.
- If nothing changes, the effect does not run.
