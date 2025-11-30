import React, { useState } from 'react';

const videos = [
  { id: 'M7lc1UVf-VE', title: 'Intro to Web Animations' },
  { id: 'dQw4w9WgXcQ', title: 'Design Patterns Explained' },
  { id: 'Ukg_U3CnJWI', title: 'React Basics Tutorial' }
];

export default function App(){
  const [current, setCurrent] = useState(null);

  return (
    <div style={{padding:'20px', color:'#fff', background:'#111', minHeight:'100vh'}}>
      <h1>Edlyn Media</h1>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))',gap:'20px'}}>
        {videos.map(v=>(
          <div key={v.id} style={{cursor:'pointer', background:'#222', borderRadius:'8px', overflow:'hidden'}}
               onClick={()=>setCurrent(v.id)}>
            <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} style={{width:'100%', display:'block'}}/>
            <div style={{padding:'10px'}}>{v.title}</div>
          </div>
        ))}
      </div>

      {current && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.7)'}}
             onClick={()=>setCurrent(null)}>
          <div style={{
              position:'absolute',left:'50%',top:'50%',
              transform:'translate(-50%,-50%)',
              width:'80%',maxWidth:'900px',aspectRatio:'16/9'
            }}>
            <iframe width="100%" height="100%"
              src={`https://www.youtube.com/embed/${current}?autoplay=1`}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}
