import json
from datetime import datetime, timedelta, timezone

import logger

INPUT_FILE = "output/scraped_posts.json"
OUTPUT_FILE = "output/posts_short.json"

UTC7 = timezone(timedelta(hours=7))

with open(INPUT_FILE, "r", encoding="utf-8") as file:
    posts = json.load(file)

short_posts = []
for post in posts:
    if "error" in post:
        continue

    user = post.get("user") or {}
    short_posts.append({
        "facebookUrl": post.get("facebookUrl"),
        "postId": post.get("postId"),
        "url": post.get("url"),
        "timestamp": datetime.fromtimestamp(post["timestamp"], UTC7).isoformat(),
        "user": {
            "id": user.get("id"),
            "name": user.get("name"),
            "profileUrl": user.get("profileUrl"),
        },
        "text": post.get("text", ""),
    })

with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
    json.dump(short_posts, file, ensure_ascii=False, indent=2)

print(f"Shortened {len(short_posts)} post(s) and saved to {OUTPUT_FILE} ({len(posts) - len(short_posts)} skipped)")
logger.log(f"Shortened {len(short_posts)} post(s) and saved to {OUTPUT_FILE} ({len(posts) - len(short_posts)} skipped)")
