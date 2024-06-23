FROM python:3.10-slim

WORKDIR /

COPY ./api/requirements.txt ./api/

RUN pip install --no-cache-dir -r ./api/requirements.txt

COPY ./api/app.py ./api/

COPY ./template /template

# COPY ./.appdata /.appdata

EXPOSE 5000

CMD ["python", "./api/app.py"]