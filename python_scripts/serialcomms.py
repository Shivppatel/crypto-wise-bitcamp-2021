# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

# import requests
# import time
# import serial
# ser = serial.Serial('COM3',baudrate= 9600, timeout= 1)
# import json
# def gettotal():
#     from coinbase.wallet.client import Client
#     api_key = 'eb9a5cd6010258d200c97b2dd92f80f0d51b942b3d528140b81152d54781ec5c'
#     api_secret = 'b365059b642517b3e47e30a3fe46b7e7942c0ae68fdabdbbdccc1dbc202e1a63'
#     price = requests.get('https://api.coinbase.com/v2/prices/ETC-USD/buy')
#     return(price.json())
#
#     # Press Ctrl+F8 to toggle the breakpoint.
#
#
# # Press the green button in the gutter to run the script.
# while True:
#     total = gettotal()
#     num = total["data"]["amount"]
#     temp = num
#     print(temp)
#     ser.write(num.encode())
#     time.sleep(1)

import requests
import json
import time
import serial
import struct
ser = serial.Serial('COM3',baudrate= 9600, timeout= 1)
BASE_URL = 'https://api.coinbase.com/v2'
HEADER = {"Authorization": "Bearer a91f324582102ce66951e7d0176675b2e4c82d2e0c9587aeb444bf98961d0194"}
lastnum = 388
start = 388


def get_positions():
    # make a request to coinbase for account info
    account_url = BASE_URL + '/accounts'
    data = requests.get(account_url, headers=HEADER)
    if (data.json().get('data')):
        data_json = data.json()['data']
        position_dict = {}
        for coin in data_json:
            position_dict[coin['balance']['currency']] = float(coin['balance']['amount'])
        return position_dict
    return {'message': 'Key Expired'}


def convert_to_usd(coin, quantity):
    convert_url = BASE_URL + '/prices/{}-USD/spot'.format(coin.upper())
    data = requests.get(convert_url, headers=HEADER)
    data_json = data.json()['data']
    return (float(data_json['amount']) * quantity)


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
    start = calculate_total_usd(holdings)
    print(start)
    while(1==1):
        positions = get_positions()
        if (positions.get('message') != 'Key Expired'):
            holdings = get_holdings(positions)
            print(holdings)
            num = calculate_total_usd(holdings)
            slope = num-lastnum
            diff = num-start
            lastnum = num
            if (.2>slope>0 and diff>0):
                ser.write(b'r')
            if (.8>slope>.2 and diff>0):
                ser.write(b'g')
            if (slope>.8 and diff>0):
                ser.write(b'q')
            if (.2>slope>0 and diff<0):
                ser.write(b't')
            if (.8>slope>.2 and diff<0):
                ser.write(b'd')
            if (slope>.8 and diff<0):
                ser.write(b'z')
            if (0>slope>-.2 and diff<0):
                ser.write(b'n')
            if (-.2>slope>-.8 and diff<0):
                ser.write(b'b')
            if (-.8>slope and diff<0):
                ser.write(b'w')
            if (0>slope>-.2 and diff>0):
                ser.write(b'o')
            if (-.2>slope>-.8 and diff<0):
                ser.write(b'e')
            if (-.8>slope and diff<0):
                ser.write(b'a')
            if(slope == 0):
                ser.write(b'l')




        print(diff)
        print(slope)
        time.sleep(5)


# See PyCharm help at https://www.jetbrains.com/help/pycharm/
