## Config Eslint

Install:
```
@typescript-eslint/parser 
@typescript-eslint/eslint-plugin 
eslint
typescript
```

Create file `.eslintrc.js`

Copy default content into file `.eslintrc`

Add this config into file `tsconfig.json`
```
{
  "include": [
    "./.eslintrc.js",
    "src"
  ]
}
```

## Config Prettier

Install:
```
prettier
eslint-config-prettier
```

Add to file `.eslintrc`
```
extends: [
  'prettier',
]
```