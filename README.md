[![Netlify Status](https://api.netlify.com/api/v1/badges/8a7ce451-b997-4325-a2b0-1429ddcd2c72/deploy-status)](https://app.netlify.com/sites/graceful-sage-db0ff/deploys)

# DevOps Party Games

DevOps Party Games takes the idea of "online party games" and tilts it on its head by adding DevOps-inspired content to existing games, and then streams it live via Twitch for a worldwide audience to watch, comment, and hopefully be entertained.

## Overview

This is the website for [DevOps Party Games](https://devopspartygames.com) built using Gatsby and hosted on Netlify.

## Creating/updating episodes and people

There are a few steps to go about when creating a new episode. You will need to do the following:
1. Add an entry to `/data/episodes/episodes.json` for the episodes
1. Add entries to `/data/people/people.json` for any new players/hosts
1. Add the episode social card image
1. Add the players' headshot images

### Data files
There are two main data files that need to be updated when there are new episodes; one for the episode and one for the players.

#### `episodes.json`

*location: /data/episodes/episodes.json*

Example for an episode:

```json
{
  "id": "2.4.na",
  "date": "2021-02-23T20:00:00-05:00",
  "title": "Now We're Cooking (Americas)",
  "slug": "s02e04",
  "region": "North America",
  "image": "s02e04.png",
  "ogimage": "s02e04-twittercard.png",
  "players": [
    {
      "id": "julian.dunn",
      "score": 12
    },
...
    {
      "id": "alex.hidalgo",
      "score": 9
    }
  ],
  "hosts": [
    "matt.stratton",
    "jeremy.meiss"
  ],
  "games": [
    {
      "name": "quiplash",
      "result": "https://games.jackbox.tv/artifact/quiplash3Game/.../"
    },
    {
      "name": "drawful",
      "result": "https://games.jackbox.tv/artifact/drawfulGame/.../"
    }
  ]
}
```

* `id` A unique identifier for the epsiode. We follow the convention of `SEASON.EPISODE.REGION`, i.e., `2.4.na` or `2.5.emea`
* `date` The date and time the episode will air. Format is `YYYY-MM-DDTHH:MM:SS-OFFSET`. Example for an Americas episode: `2021-02-23T20:00:00-05:00`
* `title` Clever title for the episode. Do *not* prefix it with "DevOps Party Games -" as that gets added automatically
* `slug` The path for `devopspartygames.com/episodes`. Example: `s02e04`
* `region` The "league" for the episode. Valid entries are `North America` or `EMEA`
* `image`[optional] The thumbnail image for the episode. If not provided, the default image will be used. This is relative to `/static/images/episodes/` in the repo
* `ogimage` The social media card for the episode. This is relative to `/static/images/episodes/` in the repo
* `players[]` The players for the episode. Fields for each player:
* * `id` The identifier of the player from `/data/people/people.json`
* * `score` [optional] The score for this player for the episode
* `hosts[]` A string array of the episode hosts, using `id` from `/data/people/people.json`
* `games[]` List of games for the episode. Fields for each game:
* * `name` The name of the game (should be lowercase) mapped to a game in `/data/games/games.json`
* * `result` [optional] Link to the game result URL on Jackbox. 

#### `people.json`

*location: /data/people/people.json*

Example for a player:

```json
{
  "id": "pete.cheslock",
  "name": "Pete Cheslock",
  "twitter": "petecheslock",
  "image": "pete-cheslock.jpg",
  "episodes": [
    "s01e01",
    "s01e03",
    "s01e05"
  ]
}
```

* `id` The ID for the person. Used in the `players` and `hosts` fields for `episodes.json`
* `name` Full name of the person
* `twitter` Twitter handle with the `@`
* `image` The filename for the person's photo. This should be 500px square. This path is relative to `/static/images/people/` in the repo

### Images

These are the details on the various images that need to be created

* **Player headshot** - Should be 500px square and named after the player's ID. Headshots should be stored in `/static/images/people/`. Example: `/static/images/people/george.bluth.png`
* **Episode Social Media Card** - Use the template in Google Drive. Should be named `SLUG-twittercard.png` and stored in `/static/images/episodes`. Example: `/static/images/episodes/s01e01-twittercard.png`
* **Episode Image** - This is optional, and is usually added after the episode (by taking a screenshot of a particually funny part of the game). You can create this in advance for some use cases if you want. Should be stored in `/static/images/episodes/`. Example: `/static/images/episodes/s01e02.png`