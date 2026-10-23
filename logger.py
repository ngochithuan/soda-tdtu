from datetime import datetime

LOG_FILE="log.txt"

def log(msg: str):
    with open(LOG_FILE, "a", encoding="utf-8") as file:
        file.write(datetime.now().strftime("%Y-%m-%d %H:%M:%S") +' | '+ msg +'\n')
