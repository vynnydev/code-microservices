const serverHandler = async () => {
  const { setupApp } = await import('./app')
  const app = await setupApp()
  
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
  })
}

serverHandler()