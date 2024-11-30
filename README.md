# Typescript dev env seed
The most basic seed possible. I just wanted to be able to do some typescript without having to reload anything myself for a coding challenge. Nothing fancy here.

## Process to create this
- Create the project folder structure
- Install node.js (from official website to get a version that also ships npm)
- Install `typescript` : `npm install -g typescript`
- Check if typescript is working with : `tsc --version`
- Install `ts-node` to enable REPL for typescript, with auto-restarting, to be able to see the code working in real-time, without manual compilation : `npm install ts-node-dev --dev`
- Create package.json with : `npm init -y`
- Change package.json to add these scripts :
  - `"start": "tsc && node dist/index.js",`
  - `"dev": "ts-node-dev --respawn src/index.ts",`
  - `"build": "tsc",`
- Create tsconfig.json with : `tsc --init`
- Change tsconfig.json to uncomment and set values :
  - `"outDir": "./dist",`
  - `"rootDir": "./src"`


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