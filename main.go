package main

import (
	"github.com/fastrodev/fastrex"
)

func main() {
	app := fastrex.New()
	app.Template("web/modules/root/build/index.html")
	app.Static("web/modules/root/build")
	app.Get("/", func(req fastrex.Request, res fastrex.Response) {
		err := res.Render()
		if err != nil {
			panic(err)
		}
	})
	err := app.Listen(8080)
	if err != nil {
		panic(err)
	}
}
