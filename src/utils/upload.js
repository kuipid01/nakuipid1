import axios from "axios"

const upload = async  (userimage) => {
    const data =  new FormData()
    data.append("file",userimage)
    data.append("upload_preset", 'nakuipid')
    try {
       const res = await axios.post('https://api.cloudinary.com/v1_1/ddd97shfv/image/upload',data)
       const {url} = res.data
       return url
    } catch (error) {
      console.log(error)
    }
  }

  export default upload