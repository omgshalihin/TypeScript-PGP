## About TypeScript
...

## Create react application with typescript
```
npx create-react-app <app-name> --template typescript
npx gitignore node 
npm i typescript ts-node mocha
npm i @tsconfig/node16 @types/mocha @types/node
```
### Within `tsconfig.json` file, add these additional content to it:
```
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"],
}
```

<details>
  <summary>how my tsconfig.json file looks</summary>
  
  ```
  {
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

  ```
  
</details>

### Finally, update the `script` section in the `package.json` to this:
```
"scripts": {
  "build": "tsc",
  "dev": "ts-node src/index.ts",
  "test": "mocha -r ts-node/register src/**/*.test.ts"
},
```

## Linting for TypeScript
```
npm i eslint-config-salt-typescript
```
### add a file called `.eslintrc` with the following content:
```
{
  "extends": "salt-typescript",
  "parserOptions": {
    "project": "tsconfig.json"
  },
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "": "never"
      }
    ]
  }
}
```
### add this new script in the `package.json` file:
```
"lint": "eslint ./src/**/*.ts"
```
### run lint
```
npm run lint
or
npm run lint -- --fix
```
