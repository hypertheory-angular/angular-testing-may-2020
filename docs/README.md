# Setup

Rough:

1. Get MongoDB Running in a Container
2. Get MongoExpress Running in a Container
3. Get the Backend Services Containerized and Running in a Container.

## "Real" Services

| Service  | Url                    | Port |
| -------- | ---------------------- | ---- |
| Proxy    | http://localhost:1337/ | 1337 |
| Schedule | /api/scheduling        | 1339 |
| Courses  | /api/course-catalog    | 1340 |

## "Development Environment" Services

| Service       | Url                        | Port  |
| ------------- | -------------------------- | ----- |
| Mongo Express | http://dev.localhost:1337/ | 8081  |
| MongoDb       | localhost                  | 27017 |

## The Proxy

In the Angular application we are using a `proxy.conf.json` to forward all the requests to `/api` to `localhost:1337`, which is the Tye ingress. Where it routs specfic requests are listed above.

# Our Work

## Add Tests for What We Have

### The Entry Point

_As an unauthenticated user of the application_
| User Story | Acceptance Criteria | Spec |
| ------------------------------------------------------------------------------- | --------------------------------- | ---- |
| When I visit the home page | The user is redirected to `/home` | |
| | The "Log In" Button is displayed | |
| | The "Log Out" Button is _not_ Displayed | |
| | The Home Component is Displayed | |

### Logging In

### The Course List

### Enrolling for a Course

## New Work

### Course Enrollment Confirmation

### Seeing Enrollment Status

### Cancelling an Enrollment

## Refactoring

### Moving Auth to a Library Module

### Adding Unit Tests for Auth
