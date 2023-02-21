import { useEffect, useState } from 'react'
import Content from '../content'
import './index.css'
const SideBar = ()=>{
    const [image,setImage] = useState("")
    const [searchQuery,setSearchQuery] =useState("wild")
    const [search,setSearch] = useState("")
    const [data,setData] = useState([])
    useEffect(()=>{
fetch(`https://api.pexels.com/v1/search?${new URLSearchParams({query:searchQuery,per_page:1})}`).then(response => response.json())
.then(data => setData(data))
.catch(err => console.error(err));
    },[,search,searchQuery])
  
    const ricerca = ()=>setSearch(searchQuery)
    const selectImage = (image)=>setImage(image)
    return(
<>
        <div className="main">
            <input onChange={e=>setSearchQuery(e.target.value)} />
            {data?.photos?.map((photo)=>{
                return(
                    <button onClick={()=>selectImage(photo)}>{photo?.id}</button>
                )
            })}
                           
        </div>
        <div className='content'>
            <Content image={image} setImage={setImage}/>
        </div>
        </>
    )
}
export default SideBar