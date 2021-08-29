import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Movies() {
    const [data, setData] = useState({movies: []})

    // fetch
    useEffect(async () => {
    const res = await axios(
      'http://127.0.0.1:8000/api/movies/',
    );
    console.log(res.data)
    setData(res.data);
  });

 return (
    <ul>
      {data.movies.map(item => (
        <li key={item.id}>
          <a href={item.id}>{item.title}</a>
        </li>
      ))}
    </ul>
  );

}
