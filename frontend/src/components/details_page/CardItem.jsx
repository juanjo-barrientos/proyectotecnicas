import PropTypes from "prop-types";

export default function CardItem({imagePath, title, text} ) {
    return(
        <div className="col-md-3 p-4 h-100 ">
            <div className="card shadow-sm">
                <img src={imagePath} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    )
}

CardItem.propTypes = {
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}