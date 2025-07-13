import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard  userName="Jhonmcr" initialIsFollowing={true}>
                Jhon Cariaco
            </TwitterFollowCard>

            <TwitterFollowCard  userName="GNJG">
                Genesis Jimenez
            </TwitterFollowCard>
            
            <TwitterFollowCard userName="Venevision">
                Venevision
            </TwitterFollowCard>
        </section>  
    )
}