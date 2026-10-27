import os
import re
import unicodedata

EMOJI = re.compile(
    '[\U0001F000-\U0001FAFF'    # emoji, biểu tượng
    '☀-➿'                     # ☀ ✨ ✅ ➖ ...
    '⬀-⯿'                      # ⬆ ⭐ ...
    '️‍]+'                        # ký tự nối / biến thể của emoji
)

DT = r'(?:\d{1,2}:\d{2} )?\d{1,2}/\d{1,2}/\d{4}'
SPAN = rf'{DT}(?: *[-–] *{DT})?'

ROW = re.compile(
    r'^(.*), *(?:[Tt]ừ +)?'                    # content (bỏ qua dấu cách / chữ "Từ" thừa trước event_time)
    rf'((?:{SPAN}(?: ?; ?{SPAN})*)?,'          # event_time
    r'(?:"(?:[^"]|"")*"|[^,"]*),'              # location
    r'(?:"(?:[^"]|"")*"|[^,"]*),'              # participant
    r'[^,]*)$'                                 # output
)


def preprocess(text, remove_emoji=True):
    text = text.replace('\\n', '\n')              # "\n" dạng chữ -> xuống dòng thật
    text = unicodedata.normalize('NFKC', text)    # in thường chữ
    if remove_emoji:
        text = EMOJI.sub(' ', text)
    text = re.sub(r'[ \t]+', ' ', text)
    text = '\n'.join(line.strip() for line in text.split('\n'))
    text = re.sub(r'\n{2,}', '\n', text)
    return text.lower().strip()


def preprocess_file(folder, input_name='dataset.csv', output_name='dataset_processed.csv'):
    with open(os.path.join(folder, input_name), encoding='utf-8') as f:
        lines = f.read().split('\n')

    out = [lines[0]]  # giữ header
    for i, line in enumerate(lines[1:], start=2):
        if not line:
            continue
        m = ROW.match(line)
        if not m:
            print(f'Dòng {i} sai định dạng, bỏ qua')
            continue
        content, rest = m.groups()
        if content.startswith('"') and content.endswith('"'):
            content = content[1:-1]
        content = preprocess(content).replace('\n', '\\n')
        out.append(f'"{content}",{rest}')

    with open(os.path.join(folder, output_name), 'w', encoding='utf-8') as f:
        f.write('\n'.join(out) + '\n')
        print("Processed")


if __name__ == '__main__':
    preprocess_file(os.path.join(os.path.dirname(__file__), '..', 'data'))
