export const DetalleAdoptame = ({ adoptame }) => {
    return (
        <div className="card">
            <div className="card__header">
                <img src={adoptame.images[0].href} alt={`Foto de ${adoptame.name}`} />
                <h2>{adoptame.name}</h2>
                <p>ID: {adoptame.id}</p>
            </div>
            <div className="card__body">
                <p>Nivel: {adoptame.edad}</p>
                {adoptame.attributes.map(attribute => (
                    <p key={attribute.id}>{attribute.attribute}</p>
                ))}
                <p>Personalidad: {adoptame.desc_personalidad}</p>
                
            </div>
        </div>
    )
}
