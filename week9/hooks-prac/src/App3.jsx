import { useEffect,useState } from "react";

function useIsOnline(){
    const [isOnline,setIsOnline] = useState(window.navigator.onLine);
    useEffect(()=>{
        window.addEventListener('online',()=>setIsOnline(true));
        window.addEventListener('offline',()=>setIsOnline(false));
    },[])
    return isOnline;
}

function App(){
    const isOnline = useIsOnline();
    if(isOnline)
    {
        return "You are onLine Yay!"
    }
    return "You are offline, please connect to the internet"

}


export default App;
