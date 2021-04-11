import requests
import json
BASE_URL = 'https://api.coinbase.com/v2'
HEADER = {"Authorization" : "Bearer 544bb8971043d95705eedf2c6985884d3f53fa518c1c4440517497c8a0d58c79"}

def get_positions():
    # make a request to coinbase for account info
    account_url = BASE_URL+ '/accounts'
    data = requests.get(account_url, headers=HEADER)
    if(data.json().get('data')):
        data_json = data.json()['data']
        position_dict = {}
        for coin in data_json:
            position_dict[coin['balance']['currency']] = float(coin['balance']['amount'])
        return position_dict
    return {'message': 'Key Expired'}

def convert_to_usd(coin, quantity):
    convert_url = BASE_URL +'/prices/{}-USD/spot'.format(coin.upper())
    data = requests.get(convert_url, headers=HEADER)
    if(data.json().get('data')):
        data_json = data.json()['data']
        return( float(data_json['amount']) * quantity)
    return {'message': 'Key Expired'}

def get_holdings(wallet):
    holdings = {}
    for coin in wallet:
        if (wallet[coin] > 0.00):
            holdings[coin] = convert_to_usd(coin, wallet[coin])
    return holdings

def calculate_total_usd(holdings):
    positions = list(holdings.values())
    current_sum = 0
    for position in positions:
        current_sum += position
    return current_sum

if __name__ == '__main__':
    positions = get_positions()
    holdings = get_holdings(positions)
    print(positions)
    print(holdings)
    print(calculate_total_usd(holdings))