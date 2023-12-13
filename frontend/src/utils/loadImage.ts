

const loadImage = (imageFile: File) => new Promise<string>((resolve, reject)=> {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(imageFile)
    fileReader.onload = (ev) => {
      if(!ev.target) {
        reject(new Error('Couldn\'t convert image to base64 string'))
        return
      }
      const base64image = ev.target.result;
      if(!base64image){
        reject(new Error('Couldn\'t convert image to base64 string'))
        return
      }
      resolve(base64image as string)
    }
})

export default loadImage