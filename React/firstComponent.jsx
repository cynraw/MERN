function Profile(){
  return(
    <img 
      src= 'https://i.imgur.com/MK3eW3As.jpg'
      alt = "Katherine Johnstone"   
    />
  );
}

export default function Gallery(){
  return(
    <section>
      <h1>Amaizing Scientists</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </section>
  );
}

