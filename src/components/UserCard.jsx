function UserCard({ user }) {
return(
<div className="card">
<h2>{user.name}</h2>
<p>{user.email}</P>
</div>
);
}

export default  function App(){
const user ={
name:"john",
email:"1@example.com",
};
return <UserCard user={user}/>;
