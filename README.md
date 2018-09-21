#  BeekeeperNative
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## Idea
You wake up in the morning... What the \*ack?! you're feeling really bad. You try to find your phone to ask your friends if they are ok and see where they are but the question you're intrested in is most likely "Who am I? and why does my face look like it's been bitten by bees?". Now you start to recall yesterday - beer, beer, beer again, wiskey, vodka.. oh so much vodka... Now you know your friends won't be feeling any better than you right now. And still, the main question of this morning "WHO IS THE BEST BEEKEEPER TODAY?!".

## Mockup
![Beekeeper video](https://github.com/vinfinit/BeekeeperNative/raw/master/mockup/beekeeper-video.gif)

## How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!
