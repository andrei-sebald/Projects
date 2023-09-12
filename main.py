from fastapi import FastAPI
from twilio.rest import Client
import os

import requests

import google.auth.transport.requests
import google.oauth2.id_token


def make_authorized_get_request(endpoint):
    """
    make_authorized_get_request makes a GET request to the specified HTTP endpoint
    by authenticating with the ID token obtained from the google-auth client library
    using the specified audience value.
    """

    # Cloud Functions uses your function's URL as the `audience` value
    # audience = https://project-region-projectid.cloudfunctions.net/myFunction
    # For Cloud Functions, `endpoint` and `audience` should be equal

    auth_req = google.auth.transport.requests.Request()
    id_token = google.oauth2.id_token.fetch_id_token(auth_req, endpoint)
    r = requests.get(endpoint, headers={"Authorization": f"Bearer {id_token}"})
    return r


app = FastAPI()
credential_path = '/Users/andreisebald/Downloads/occipital-project-33acbdd89314.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path


@app.get("/webhook")
def webhook(event):
    print("Webok Received!!")
    print('event')
    urlEndpoint = f'https://us-central1-occipital-project.cloudfunctions.net/occipital'
    message = make_authorized_get_request(urlEndpoint)

    return message.text
