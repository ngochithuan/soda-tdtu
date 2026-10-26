# soda-tdtu

## scrape
18:00 - 2post/page (at first)

-> log each time scrape
[18:00:00 - dd:mm:YYYY] - get x post(s)

## log_extractor
from main log file
extract logs by page -> main purpose is changing the number of post to suitable for each page's posting frequency

## Get new post
If already have post -> skip, not add into data

## Shorten post output json file
```json
{
    "facebookUrl": Page's url,
    "postId": Post id,
    "url": Post url,
    "timestamp": convert unix epoch time into local time (UTC+7)
    "user": {
      "id": Page's id,
      "name": Page's name,
      "profileUrl": Page's url,
    },
    "text": Page's post content,
},
```
