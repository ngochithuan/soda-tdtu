import json
import os
from dotenv import load_dotenv
from apify_client import ApifyClient

import logger

POST_NUM = 2
OUTPUT_FILE = "data/scraped_posts.json"

load_dotenv()
api_token = os.getenv("API_TOKEN")

with open("private/pages.txt", "r", encoding="utf-8") as file:
    page_list = [line.strip() for line in file]

# print(page_list)

client = ApifyClient(api_token)

run_input = {
    "startUrls": [{"url": url} for url in page_list],
    "resultsLimit": POST_NUM,
}

run = client.actor("apify/facebook-posts-scraper").call(run_input=run_input)

dataset_id = run["defaultDatasetId"]
posts = list(client.dataset(dataset_id).iterate_items())

with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
    json.dump(posts, file, ensure_ascii=False, indent=2)

print(f"Saved {len(posts)} post(s) to {OUTPUT_FILE}")

logger.log(f"Saved {len(posts)} post(s) to {OUTPUT_FILE}")

client.dataset(dataset_id).delete()