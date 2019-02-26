package main

import (
  "fmt"
  "github.com/ellsol/gox/httpx"
  "github.com/ellsol/gox/utilx"
  "github.com/gorilla/mux"
  "github.com/justinas/alice"
  "github.com/rs/cors"
  "log"
  "net/http"
  "path"
  "strings"
)

const EnvPort = "PORT"
const DefaultPort = "8070"

func main() {
  log.Println("Starting server....")

  commonHandlers := alice.New(httpx.LoggingHandler)
  // main router
  router := mux.NewRouter().StrictSlash(true)
  router.PathPrefix("/").HandlerFunc(IndexHandler())

  router.Handle("/healthcheck", commonHandlers.ThenFunc(httpx.HealthcheckHandler)).Methods("GET")

  handler := cors.New(cors.Options{
    AllowedOrigins:   []string{"*"},
    AllowCredentials: true,
  }).Handler(router)
  log.Fatal(http.ListenAndServe(port(), handler))
}

func port() string {
  return fmt.Sprintf(":%v", utilx.EnvReadStringOr(EnvPort, DefaultPort))
}

var passURL = []string{
  "js",
  "favicon.ico",
  "css",
  "materialize",
  "media",
}

func IndexHandler() func(w http.ResponseWriter, request *http.Request) {

  fn := func(w http.ResponseWriter, r *http.Request) {
    upath := path.Clean(r.URL.Path)
    log.Println("Path: ", upath)

    for _, v := range passURL {
      if strings.Contains(upath, v) {
        http.ServeFile(w, r, "static/"+upath)
        return
      }
    }
    http.ServeFile(w, r, "static/index.html")
  }

  return http.HandlerFunc(fn)
}
