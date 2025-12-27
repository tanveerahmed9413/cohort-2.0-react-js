import React from 'react'
import Card from './components/Card'

const App = () => {
  const profiles = [
  {
    id: 1,
    coverImg: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800",
    userImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    name: "Tanveer Ahmed",
    username: "@tanveer.ahmed.9413",
    role: "Front-End Developer",
    desc: "Passionate front-end developer focused on clean and modern UI.",
    media: 40,
    likes: "500K",
    followers: 100
  },
  {
    id: 2,
    coverImg: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=800",
    userImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400",
    name: "Aman Verma",
    username: "@aman.verma",
    role: "UI/UX Designer",
    desc: "Designing minimal and user-friendly digital experiences.",
    media: 28,
    likes: "210K",
    followers: 85
  },
  {
    id: 3,
    coverImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    userImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    name: "Riya Sharma",
    username: "@riya.codes",
    role: "React Developer",
    desc: "React developer building scalable and performant web apps.",
    media: 62,
    likes: "720K",
    followers: 190
  },
  {
    id: 4,
    coverImg: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800",
    userImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    name: "Rahul Mehta",
    username: "@rahul.mehta",
    role: "Full Stack Developer",
    desc: "Building complete web solutions with modern tech stacks.",
    media: 55,
    likes: "430K",
    followers: 160
  },
  {
    id: 5,
    coverImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    userImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    name: "Neha Kapoor",
    username: "@neha.designs",
    role: "Graphic Designer",
    desc: "Creative designer with a love for colors and typography.",
    media: 34,
    likes: "310K",
    followers: 120
  },
  {
    id: 6,
    coverImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400",
    name: "Sneha Iyer",
    username: "@sneha.dev",
    role: "JavaScript Developer",
    desc: "Focused on writing clean, efficient, and reusable JS code.",
    media: 48,
    likes: "390K",
    followers: 145
  },
  {
    id: 7,
    coverImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    userImg: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400",
    name: "Kunal Singh",
    username: "@kunal.codes",
    role: "Web Engineer",
    desc: "Engineering fast and responsive web applications.",
    media: 29,
    likes: "260K",
    followers: 98
  },
  {
    id: 8,
    coverImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    userImg: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=400",
    name: "Pooja Nair",
    username: "@pooja.nair",
    role: "Content Creator",
    desc: "Creating engaging tech content and tutorials.",
    media: 70,
    likes: "850K",
    followers: 230
  },
  {
    id: 9,
    coverImg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
    userImg: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400",
    name: "Arjun Patel",
    username: "@arjun.patel",
    role: "Backend Developer",
    desc: "Specialized in APIs, databases, and server-side logic.",
    media: 41,
    likes: "340K",
    followers: 132
  },
  {
    id: 10,
    coverImg: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800",
    userImg: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=400",
    name: "Simran Kaur",
    username: "@simran.kaur",
    role: "Software Engineer",
    desc: "Software engineer passionate about building impactful products.",
    media: 52,
    likes: "610K",
    followers: 175
  }
];
  return (
    <div>
       <div className="all-cards gap-5 h-screen grid grid-cols-3 place-items-center">
      {profiles.map((elm)=>{
        return <Card key={elm.id} data={elm}/>
      })}
      
      </div>
    </div>
  )
}

export default App
