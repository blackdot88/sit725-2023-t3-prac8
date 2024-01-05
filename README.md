# sit725-2023-t3-prac8

## BUILD THE IMAGE OF THE APPLICATION

`docker build -t <image-name> .`

## START A NEW CONTAINER FROM THE IMAGE

`docker run -d -p 5000:8080 <image-name>`

In above example, 5000 is a host's available port, 8080 is the app's port.

#### Open a browser on http://localhost:5000/

## LIST DOCKER CONTAINERS

`docker ps -a`

## STOP THE CONTAINER

`docker stop <the-container-id>`
