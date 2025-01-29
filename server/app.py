# import requests
# import pandas as pd
# import numpy as np
# from sklearn.metrics import mean_squared_error
# from statsmodels.tsa.arima.model import ARIMA
# from prophet import Prophet
# import plotly.graph_objects as go
# from flask import Flask, jsonify

# # app = Flask(name)
# app = Flask(__name__)


# # Define top 5 memecoins
# TOP_MEMECOINS = ["dogecoin", "shiba-inu", "dogelon-mars", "floki-inu", "baby-doge-coin"]

# # Fetch historical data for a coin
# def fetch_historical_data(coin_id, days=365):
#     url = f"https://api.coingecko.com/api/v3/coins/{coin_id}/market_chart"
#     params = {
#         "vs_currency": "usd",
#         "days": days,
#         "interval": "daily"
#     }
#     try:
#         response = requests.get(url, params=params)
#         response.raise_for_status()
#         data = response.json()
#         prices = data.get("prices", [])
#         df = pd.DataFrame(prices, columns=["timestamp", "price"])
#         df["date"] = pd.to_datetime(df["timestamp"], unit="ms")
#         df.set_index("date", inplace=True)
#         df.drop(columns=["timestamp"], inplace=True)
#         return df
#     except requests.exceptions.RequestException as e:
#         print(f"Error fetching data for {coin_id}: {e}")
#         return pd.DataFrame()

# # Predict future prices using ARIMA
# def predict_with_arima(df, days=7):
#     model = ARIMA(df["price"], order=(5, 1, 0))  # ARIMA(p,d,q) parameters
#     model_fit = model.fit()
#     forecast = model_fit.forecast(steps=days)
#     return forecast

# # Predict future prices using Prophet
# def predict_with_prophet(df, days=7):
#     df_prophet = df.reset_index().rename(columns={"date": "ds", "price": "y"})
#     model = Prophet()
#     model.fit(df_prophet)
#     future = model.make_future_dataframe(periods=days)
#     forecast = model.predict(future)
#     return forecast.tail(days)["yhat"].values

# # Generate candlestick chart
# def generate_candlestick_chart(historical_data, predicted_prices, coin_id):
#     # Combine historical and predicted data
#     dates = pd.date_range(start=historical_data.index[-1], periods=len(predicted_prices) + 1, freq="D")[1:]
#     predicted_data = pd.DataFrame({"price": predicted_prices}, index=dates)
#     combined_data = pd.concat([historical_data, predicted_data])

#     # Create candlestick chart
#     fig = go.Figure(data=[go.Candlestick(
#         x=combined_data.index,
#         open=combined_data["price"].shift(1),  # Placeholder for open
#         high=combined_data["price"],           # Placeholder for high
#         low=combined_data["price"],            # Placeholder for low
#         close=combined_data["price"]           # Close price
#     )])
#     fig.update_layout(
#         title=f"Predicted Candlestick Chart for {coin_id.capitalize()}",
#         xaxis_title="Date",
#         yaxis_title="Price (USD)",
#         xaxis_rangeslider_visible=False
#     )
#     fig.show()

# # API endpoint for each coin
# @app.route('/predict/<coin_id>', methods=['GET'])
# def predict_coin(coin_id):
#     if coin_id not in TOP_MEMECOINS:
#         return jsonify({"error": "Coin not found in top memecoins"}), 404

#     # Fetch historical data
#     historical_data = fetch_historical_data(coin_id)
#     if historical_data.empty:
#         return jsonify({"error": "Failed to fetch historical data"}), 400

#     # Predict future prices using Prophet
#     predicted_prices = predict_with_prophet(historical_data, days=7)

#     # Generate candlestick chart
#     generate_candlestick_chart(historical_data, predicted_prices, coin_id)

#     # Prepare API response
#     response = {
#         "coin_id": coin_id,
#         "historical_data": historical_data["price"].tail(30).tolist(),  # Last 30 days
#         "predicted_prices": predicted_prices.tolist()
#     }
#     return jsonify(response)

# # Main function
# if __name__ == "__main__":

#     # Run Flask app
#     app.run(debug=True)







# # API endpoint for each coin
# @app.route('/predict/<coin_id>', methods=['GET'])
# def predict_coin(coin_id):
#     if coin_id not in TOP_MEMECOINS:
#         return jsonify({"error": "Coin not found in top memecoins"}), 404

#     # Fetch historical data
#     historical_data = fetch_historical_data(coin_id)
#     if historical_data.empty:
#         return jsonify({"error": "Failed to fetch historical data"}), 400

#     # Predict future prices using Prophet
#     predicted_prices = predict_with_prophet(historical_data, days=7)

#     # Print data for debugging
#     print("\nHistorical Data (Last 10 entries):")
#     print(historical_data.tail(10))

#     print("\nPredicted Prices (Next 7 days):")
#     print(predicted_prices)

#     # Generate candlestick chart
#     generate_candlestick_chart(historical_data, predicted_prices, coin_id)

#     # Prepare API response
#     response = {
#         "coin_id": coin_id,
#         "historical_data": historical_data["price"].tail(30).tolist(),  # Last 30 days
#         "predicted_prices": predicted_prices.tolist()
#     }

#     # Print final response data
#     print("\nAPI Response Data:")
#     print(response)

#     return jsonify(response)









# import requests

# url = "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart"
# params = {"vs_currency": "usd", "days": 365, "interval": "daily"}
# response = requests.get(url, params=params)
# print(response.status_code)  # Should print 200
# print(response.json())  # Should return data
# print(historical_data.head())  # Ensure data exists






# import requests
# import pandas as pd
# import numpy as np
# from sklearn.metrics import mean_squared_error
# from statsmodels.tsa.arima.model import ARIMA
# from prophet import Prophet
# import plotly.graph_objects as go
# from flask import Flask, jsonify

# # ✅ Move this to the top
# app = Flask(__name__)

# # Define top 5 memecoins
# TOP_MEMECOINS = ["dogecoin", "shiba-inu", "dogelon-mars", "floki-inu", "baby-doge-coin"]

# # Fetch historical data
# def fetch_historical_data(coin_id, days=365):
#     url = f"https://api.coingecko.com/api/v3/coins/{coin_id}/market_chart"
#     params = {"vs_currency": "usd", "days": days, "interval": "daily"}
    
#     try:
#         response = requests.get(url, params=params)
#         response.raise_for_status()
#         data = response.json()
#         prices = data.get("prices", [])
#         df = pd.DataFrame(prices, columns=["timestamp", "price"])
#         df["date"] = pd.to_datetime(df["timestamp"], unit="ms")
#         df.set_index("date", inplace=True)
#         df.drop(columns=["timestamp"], inplace=True)
#         return df
#     except requests.exceptions.RequestException as e:
#         print(f"⚠️ Error fetching data for {coin_id}: {e}")
#         return pd.DataFrame()

# # Predict with Prophet
# def predict_with_prophet(df, days=7):
#     df_prophet = df.reset_index().rename(columns={"date": "ds", "price": "y"})
#     model = Prophet()
#     model.fit(df_prophet)
#     future = model.make_future_dataframe(periods=days)
#     forecast = model.predict(future)
#     return forecast.tail(days)["yhat"].values

# # Generate candlestick chart
# def generate_candlestick_chart(historical_data, predicted_prices, coin_id):
#     dates = pd.date_range(start=historical_data.index[-1], periods=len(predicted_prices) + 1, freq="D")[1:]
#     predicted_data = pd.DataFrame({"price": predicted_prices}, index=dates)
#     combined_data = pd.concat([historical_data, predicted_data])

#     fig = go.Figure(data=[go.Candlestick(
#         x=combined_data.index,
#         open=combined_data["price"].shift(1),
#         high=combined_data["price"],
#         low=combined_data["price"],
#         close=combined_data["price"]
#     )])
#     fig.update_layout(
#         title=f"Predicted Candlestick Chart for {coin_id.capitalize()}",
#         xaxis_title="Date",
#         yaxis_title="Price (USD)",
#         xaxis_rangeslider_visible=False
#     )
#     fig.show()

# # ✅ API Endpoint (Debugging prints added)
# @app.route('/predict/<coin_id>', methods=['GET'])
# def predict_coin(coin_id):
#     if coin_id not in TOP_MEMECOINS:
#         return jsonify({"error": "Coin not found in top memecoins"}), 404

#     # Fetch data
#     historical_data = fetch_historical_data(coin_id)

#     # ✅ Ensure data exists before proceeding
#     if historical_data.empty:
#         print(f"⚠️ No data found for {coin_id}")
#         return jsonify({"error": "Failed to fetch historical data"}), 400
#     else:
#         print(f"✅ Data for {coin_id}:")
#         print(historical_data.head())

#     # Predict future prices
#     predicted_prices = predict_with_prophet(historical_data, days=7)
#     print(f"📊 Predicted Prices for {coin_id}: {predicted_prices}")

#     # Generate chart
#     generate_candlestick_chart(historical_data, predicted_prices, coin_id)

#     return jsonify({
#         "coin_id": coin_id,
#         "historical_data": historical_data["price"].tail(30).tolist(),
#         "predicted_prices": predicted_prices.tolist()
#     })

# # ✅ Main function
# if __name__ == "__main__":
#     app.run(debug=True)













import requests
import pandas as pd
import numpy as np
from flask import Flask, jsonify
from flask_cors import CORS  # Allow frontend to fetch data
from statsmodels.tsa.arima.model import ARIMA
from prophet import Prophet
import plotly.graph_objects as go
import plotly.io as pio

# ✅ Initialize Flask App
app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

# Define top 5 memecoins
TOP_MEMECOINS = ["dogecoin", "shiba-inu", "dogelon-mars", "floki-inu", "baby-doge-coin"]

# Fetch historical data
def fetch_historical_data(coin_id, days=365):
    url = f"https://api.coingecko.com/api/v3/coins/{coin_id}/market_chart"
    params = {"vs_currency": "usd", "days": days, "interval": "daily"}
    
    try:
        response = requests.get(url, params=params)
        print(f"✅ Fetched data for {coin_id}: {response.status_code}")
        response.raise_for_status()
        data = response.json()
        prices = data.get("prices", [])
        df = pd.DataFrame(prices, columns=["timestamp", "price"])
        df["date"] = pd.to_datetime(df["timestamp"], unit="ms")
        df.set_index("date", inplace=True)
        df.drop(columns=["timestamp"], inplace=True)
        return df
    except requests.exceptions.RequestException as e:
        print(f"⚠️ Error fetching data for {coin_id}: {e}")
        return pd.DataFrame()

# Predict with Prophet
def predict_with_prophet(df, days=7):
    df_prophet = df.reset_index().rename(columns={"date": "ds", "price": "y"})
    model = Prophet()
    model.fit(df_prophet)
    future = model.make_future_dataframe(periods=days)
    forecast = model.predict(future)
    return forecast.tail(days)["yhat"].values

# Generate candlestick chart
def generate_candlestick_chart(historical_data, predicted_prices, coin_id):
    dates = pd.date_range(start=historical_data.index[-1], periods=len(predicted_prices) + 1, freq="D")[1:]
    predicted_data = pd.DataFrame({"price": predicted_prices}, index=dates)
    combined_data = pd.concat([historical_data, predicted_data])

    fig = go.Figure(data=[go.Candlestick(
        x=combined_data.index,
        open=combined_data["price"].shift(1),
        high=combined_data["price"],
        low=combined_data["price"],
        close=combined_data["price"]
    )])
    fig.update_layout(
        title=f"Predicted Candlestick Chart for {coin_id.capitalize()}",
        xaxis_title="Date",
        yaxis_title="Price (USD)",
        xaxis_rangeslider_visible=False
    )
    
    return pio.to_json(fig)  # ✅ Convert figure to JSON for frontend
 
# API Endpoint
# API Endpoint
@app.route('/predict/<coin_id>', methods=['GET'])
def predict_coin(coin_id):
    if coin_id not in TOP_MEMECOINS:
        return jsonify({"error": "Coin not found in top memecoins"}), 404

    # Fetch data
    historical_data = fetch_historical_data(coin_id)
    print(f"✅ Data for {coin_id}:")
    
    # Print the first few rows of the data for inspection
    if not historical_data.empty:
        print(historical_data.head())  # Show the first few rows of data to verify
    else:
        print(f"⚠️ No data found for {coin_id}")
    
    # Ensure data exists before proceeding
    if historical_data.empty:
        print(f"⚠️ No data found for {coin_id}")
        return jsonify({"error": "Failed to fetch historical data"}), 400

    # Predict future prices
    predicted_prices = predict_with_prophet(historical_data, days=7)

    # Print predicted prices for debugging
    print(f"✅ Predicted prices for {coin_id}:")
    print(predicted_prices)

    # Generate chart JSON
    chart_json = generate_candlestick_chart(historical_data, predicted_prices, coin_id)

    return jsonify({
        "coin_id": coin_id,
        "historical_data": historical_data["price"].tail(30).tolist(),
        "predicted_prices": predicted_prices.tolist(),
        "chart": chart_json  # Send chart JSON to frontend
    })





# Main function
if __name__ == "__main__":
    app.run(debug=True)
