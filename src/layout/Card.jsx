
const Card = ({icon:Icon,title,desc}) => {
    return (
        <div>
            <div>{Icon && <Icon size={45} />}</div>
            <div className="break-words">{title}</div>
            <div>{desc}</div>
        </div>
    )
}

export default Card;