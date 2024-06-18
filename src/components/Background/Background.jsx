import "./Background.css"

const Background = () => {
  return (
    <div className="hero_bg-container">
        <div className="hero_bg-row_container">
            { Array.from({ length: 5 }, (_, i) => <div key={i} className="hero_border-row"></div>)}
        </div>

        <div className="hero_bg-column_container">
            { Array.from({ length: 6 }, (_, i) => <div key={i} className="hero_border-column"></div>)}
        </div>
    </div>
  )
}

export default Background