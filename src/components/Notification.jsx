function Notification({ message , type }){
return(
  <div>
    <strong>{type}</strong>: {message}

  </div>
);
}

export default function App(){
return(
<Notification
type="success"
  message="updated"
/>
);
}
