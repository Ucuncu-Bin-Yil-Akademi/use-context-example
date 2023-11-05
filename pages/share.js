import { useRouter } from "next/router"
import { Message_data } from "@/context/context";
import { useContext } from "react";

export default function Share(){
    const {message, setMessage} = useContext(Message_data)
    const router = useRouter();
    
    return(
        <>
        <h2>Share Component</h2>
        <div>
        <button onClick={() => router.push("/")}>First Component</button>
      </div>
        <h3>Mesaj: {message}</h3>
        </>
    )
}