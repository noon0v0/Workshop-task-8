# Workshop 8: Application Programming Interfaces (APIs)

## URL:
https://noon0v0.github.io/Workshop-task-8/


## Tasks:

- Create a sketch that makes an API call to gather data from an external source. Here is a [list of free and open APIsLinks to an external site.](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)
- Visual elements of the sketch should be determined by data retrieved from the external source.

## Note:

- **API Data Retrieval**: It uses the `fetch()` function to fetch data from a specified API endpoint and awaits the response using the `await` keyword. The response is then converted to JSON format using the `json()` method.
- **Handling API Data**: It extracts the required information, such as last update time, next update time, and the rate table, from the JSON data returned by the API.

## Project:

The eighth task of the workshop implemented fetching USD exchange rates from an API, displaying the exchange rates of USD against various currencies. A dropdown menu allows selection of different currency types, and upon selection, the corresponding exchange rate is displayed below.
