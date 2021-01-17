# 11-Backend-for-React-Blog-Rendering
This is a node backend, the data for react front end UI which will render a blog page will be fetched using this backend

  ### Blog Backend API End points
  - Simple express server application that serves blog data . 
  - This data is stored in a simple json file on the local machine
  - i.e storage used is Json file
  - HTTP Methods are used for implementing the api endpoints
  > - get()
  > - post()
## Features
- The application provides end points for the following operations
  1. Get all the blogs
  2. Get a specific blog with a blogId sent as a route parameter.
  3. Add New Blogs
  4. Get blog using Query in url 
  
## Getting started
  1. Clone the repo
  2. Use "npm run start" command to start the server
  3. Test using **Postman**
  
#### The end points shall be tested using Postman using following requests
  > - data will be sent back as json objects
  
  1. Get all the blogs using 
   >Get : (http://localhost:3000/blogList/blogs)

  2. Get a specific blog with a blogId sent as a route parameter.
   >Get : (http://localhost:3000/blogList/blogs/4)
   >- here "4" is id of the blog
   
  3. Add New Blog
   >  Post : (http://localhost:3000/blogList/blogs)
   > - Then add the blog content in "Body"
   >- the blog should have following contents
   ```
    {
        "blogAuthor":" <required>",
        "blogHeader":"<required>",
        "blogContent":"<required>",
        "blogBannerImg":"<required>",
    }
   ``` 
   >- Hit send and Check the Json file 
  4. To search blog using Query through url use (example) request
   > Get : (http://localhost:3000/blogList/blogs?blogAuthor=Alex&blogHeader=Alex's blog)
   
   > - here "?blogAuthor=Alex&blogHeader=Alex's blog" is query
   > - this will return blog which has blogAuthor as "Alex" **and** blogHeader as "Alex's blog"
   > - **Regex** is used while implementing 
   > - so even if full name (value of property) is not entered it will still try to match the string and return the result
   > - here if you enter blogAuthor = Ale
   > - it will still return the blog with Author "Alex"
   
   5. Hosted on Heroku
    > Can access using following link
    > (https://backend-for-react-blog-render.herokuapp.com)
   
  
