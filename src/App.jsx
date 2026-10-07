import { useEffect,useState } from "react";
import CounterClass from "./components/CounterClass";
import Student from "./components/Student";
//import FetchApi from "./components/FetchApi";
export default function App() {
  const name = "student";
  const course = "Full stack development-II";
  const message1 = `Hello ${name},welcome to ${course}!`;
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("waiting...");
  const increase=()=>setCount(prev=>prev+1);
  const[posts,setPosts]=useState([]);
  const[error,setError]=useState(" ");
  const[form,setForm]=useState({name:"",email:""});
  const[submitted,setSubmitted]=useState(false);
  const subjects=["JavaScript","React.js","Node.js","Express.js","MySql"];
  function handleClick() {
    setMessage("Button clicked successfully!");
  }
  useEffect(()=>{
    fetch("https://jsonplaceholder.typcode.com/posts?-limit=5")
    .then(r=>{
      if(!r.ok)throw new Error("network error");
      return r.json();
    })
    .then(data=>setPosts(data)) 
    .catch(err=>setError(err.message));
  },[]);
  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <div>
      <CounterClass />
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>
      <h2>{loggedIn ? "welcome,user!" : "please log in."}</h2>
      <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "Log out" : "log in"}</button>
      <h2>{message1}</h2>
      <h2>Counter:{count}</h2>
      <button onClick={increase}>Increase</button>
      <h2>posts</h2>
      {error && <p>{error}</p>}
      <ul>
        {posts.map(post=><li key={post.id}>{post.title}</li>)}
      </ul>
      <Student
       name="Desitha"
       branch="CSE"
       />
       <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name"/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
        <button type="submit">Submit</button>
       </form>
       {submitted && <p>{form.name} - {form.email}</p>}
       <h2>Subjects</h2>
       <ul>
        {subjects.map(subject=>(<li key={subject}>{subjects}</li>))}
       </ul>


    </div>





  );
}