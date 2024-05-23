const http = required('http')
const port = 3000

const server = http.serverCreate(function (req. res){
    
})

server.listen(port, function(error){
    if (error) {
        console.log ('Something Went Wrong', error)
    } else {
        console.log ('Server is listening on port' + port)
    }
})