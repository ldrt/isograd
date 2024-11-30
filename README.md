# Dev env for isograd coding challenge
Just playing around

## Usage
 - `"start": "tsc && node dist/index.js",`
    - it transpiles index.ts into dist/index.js
    - it runs the code and will display the console.log written in it into the terminal
    - it only runs once
  - `"dev": "ts-node-dev --respawn src/index.ts",`
    - it doesn't transpile the code 
    - it runs the code and will display the console.log written in it into the terminal
    - it automatically reruns each time the index.ts file is modified
  - `"build": "tsc",`
    - it transpiles index.ts into dist/index.js
    - it doesn't run the code and will not display anything in the terminal