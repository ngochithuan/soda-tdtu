import re
import pandas as pd

DT = r'(?:\d{1,2}:\d{2} )?\d{1,2}/\d{1,2}/\d{4}'
SPAN = rf'{DT}(?: [-–] {DT})?'                 # mốc hoặc khoảng "bắt đầu - kết thúc"

ROW = re.compile(
    r'^(.*),'                                  # content
    rf'({SPAN}(?: ?; ?{SPAN})*)?,'             # event_time: một hoặc nhiều SPAN, cách nhau bởi ";"
    r'("(?:[^"]|"")*"|[^,"]*),'                # location
    r'("(?:[^"]|"")*"|[^,"]*),'                # participant
    r'([^,]*)$'                                # output
)

rows = []
with open('dataset.csv', encoding='utf-8') as f:
    next(f)  # bỏ header
    for i, line in enumerate(f, start=2):
        line = line.rstrip('\n')
        if not line:
            continue
        m = ROW.match(line)
        if not m:
            print(f'Dòng {i} sai định dạng')
            continue
        content, event_time, location, participant, output = m.groups()
        if content.startswith('"') and content.endswith('"'):
            content = content[1:-1]
        rows.append({
            'content': content,
            'event_time': event_time,
            'location': location.strip().strip('"').replace('""', '"'),
            'participant': participant.strip().strip('"').replace('""', '"'),
            'output': output.strip(),
        })

df = pd.DataFrame(rows, columns=['content', 'event_time', 'location', 'participant', 'output'])
pd.set_option('display.max_columns', None)
print(df)