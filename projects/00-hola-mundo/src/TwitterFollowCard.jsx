import{useState} from 'react'
export function TwitterFollowCard ({children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)



    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const imgSrc = `https://unavatar.io/github/${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imgSrc}
                    alt="Foto" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className = 'tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}