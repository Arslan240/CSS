## Fetch API

Fetch API is based on promises and we can fetch data from a file or from a url.

### JSON Data 

To fetch data we use `.json()` function which returns an array of objects

>`response.json()`

### Image Data

To fetch image we `.blob()` function of response. The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data. It can represent data that is not necessarily native format of javascript.

>`response.blob()`

#### How to Use blob to create image in dom?

><code>
>fetch(url)<br>
>&nbsp;.then(response => response.blob())<br>
>&nbsp;.then(blob => {<br>
>&nbsp;&nbsp;let img = document.createElement('img');<br>
>&nbsp;&nbsp;img.src = URL.createObjectURL(blob);<br>
>&nbsp;&nbsp;document.querySelector('body').appendChild>(img);<br>
>}) </code>

