import axios from 'axios';

export const handleShares = ({id, likes, setEventList}) => {

    axios.put(`http://localhost:5000/api/event/add-share/${id}`, {
        likes: likes + 1
    })
        .then((response) => {
            console.log(response.data)
            axios.get(`http://localhost:5000/api/event/all/`)
                .then(({data})=>{
                    setEventList(data)
                })
        })
        .catch((err) => console.log(err))
    console.log(likes + 1, 'this should work')
}

