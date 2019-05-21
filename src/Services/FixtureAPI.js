
export default  {
request_threads : () => {
 return [ {
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "subject" : "Meeting Today!",
    "time" : "2015-07-20T15:49:04-07:00",
    "read" : true,
    "deleted" : true,
    "creator" : {
      "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
      "email" : "example@dzconseil.com",
      "username" : "administrator"
    },
    "messages" : [ {
      "id" : "d290f1ee-6c52-4b02-90e6-d701748f9854",
      "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien facilisis, semper nunc a, pellentesque ex. Ut convallis odio vestibulum dui posuere commodo.",
      "time" : "2015-07-20T15:49:04-07:00",
      "creator" : {
        "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
        "email" : "example@dzconseil.com",
        "username" : "administrator"
      }
    } ]
  } ]
 
},

request_messages : (thread)=>{
  return(
     {
      "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "subject" : "Meeting Today!",
      "time" : "2015-07-20T15:49:04-07:00",
      "read" : true,
      "deleted" : true,
      "creator" : {
        "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
        "email" : "example@dzconseil.com",
        "username" : "administrator"
      },
      "messages" : [ {
        "id" : "d290f1ee-6c52-4b02-90e6-d701748f9854",
        "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien facilisis, semper nunc a, pellentesque ex. Ut convallis odio vestibulum dui posuere commodo.",
        "time" : "2015-07-20T15:49:04-07:00",
        "creator" : {
          "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
          "email" : "example@dzconseil.com",
          "username" : "administrator"
        }
      } ]
    } 
   )
}
}
