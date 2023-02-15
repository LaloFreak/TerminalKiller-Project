export const Section = (props) => {
    const s = props.style
    const title = props.title
    return (
        <div className={s.contSection}>
            <h1>{title}</h1>
        </div>
    )
}