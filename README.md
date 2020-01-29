# React .env sample project (How to hide API key)
This is a sample project from my medium article about how to hide API key.  

[[React.js] How to hide your API key when uploading your code on GitHub](https://link.medium.com/bu8yzlYFE3)

<br/>

# Get started
### 1.Download project
```
git clone https://github.com/eastend-street/react-env-sample.git

yarn install

```

### 2. Create `.env.development.local` file on root directory like `.env.sample`

```
// .env.development.local

REACT_APP_SOME_API_KEY="this-is-apy-key"

```

### 3. Run and check it can load .env file

```
yarn start
```
