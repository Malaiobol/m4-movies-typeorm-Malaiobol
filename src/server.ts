import app from './app'

const PORT: number = 3000
const runningMsg: string = `Server is running on port ${PORT}`
app.listen(3000, ()=>{
    console.log(runningMsg)
})