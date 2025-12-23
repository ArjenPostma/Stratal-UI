# Stratal UI

A clean and simple Vue 3 component library, inspired by Chakra UI

## Installation

Install Stratal UI via npm:

```bash
npm install stratal-ui
```

Or with yarn:

```bash
yarn add stratal-ui
```

Make sure you have Vue 3 installed in your project.

## Usage

Import styles and optional fonts at the top of your project:

```ts
import 'stratal-ui/fonts.css'; // optional
import 'stratal-ui/index.css'; // required
```

You can register components **globally** in your main.ts:

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { StInput, StButton } from 'stratal-ui';

const app = createApp(App);

app.component('StInput', StInput);
app.component('StButton', StButton);

// Register other Stratal UI components here as needed

app.mount('#app');
```

Or register components **locally** directly in your Vue component:

```vue
<template>
    <div>
        <StInput v-model="text" placeholder="Type something..." />
        <StButton @click="submit">Click Me</StButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { StInput, StButton } from 'stratal-ui';

const text = ref('');

function submit() {
    console.log(text.value);
}
</script>
```

## Components

Currently available:

- **StInput**
- **StButton**
- **StCheckbox**

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/ArjenPostma/Stratal-UI.git
cd Stratal-UI
npm install
```

Run the playground:

```bash
npm run playground
```

Run tests:

```bash
npm run test
```

Build the library:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License
