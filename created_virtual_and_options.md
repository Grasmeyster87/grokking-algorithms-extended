JavaScript
npm init -y
// npm install express просто приклад
npm install

nvm list available
nvm install 18

Python
python -m venv .venv
.venv\Scripts\Activate.ps1
deactivate

pip freeze > requirements.txt
pip install -r requirements.txt

import locale

# Установить русскую локаль

locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')
