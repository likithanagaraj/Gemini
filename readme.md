# Backend docs for frontend engineers

Routes
* `/` -> Check if API is working
* `/generate` POST -> which accepts a {prompt} in body to return data as   
  ```json
  {success: true, AIResponse: "data from ai"}
  ```

*  


## Status code meaning

* `200` Request successfully
* `201` Created successfully
* `400` Missing data in body
* 