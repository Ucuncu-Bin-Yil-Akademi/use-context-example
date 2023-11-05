import { useRouter } from "next/router"
import { Message_data } from "@/context/context";
import { useContext } from "react";
export default function Home() {

  const {message, setMessage} = useContext(Message_data);
  let router = useRouter();

  function sendData(){
    const gonderilecek_mesaj = 'Hello world!'
    setMessage(gonderilecek_mesaj);
  }

  return (
   <>
    <header>
      <div style={{
        marginTop: '50px'
      }}>
        <button onClick={() => router.push("/share")}>Second Component</button>
      </div>

      <button onClick={() => sendData()} style={{
        marginTop: '50px'
      }}>
        send message
      </button>
    </header>
   </>
  )
}
