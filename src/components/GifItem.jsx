
export const GifItem = ({ title, url, id }) => {

  return (
    <div className="cardd">
        <img src={ url } alt={ title } />
        <a href={url}>{title}</a>
    </div>
  )
}
