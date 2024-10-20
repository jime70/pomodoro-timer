import React from 'react';

export const TarjetaAdoptame = ({ adoptame }) => {
    return (
        <div className="card">
            <div className="card__header">
                <img src={adoptame.image} alt={`foto de ${adoptame.nombre}`} />
            </div>
            <div className="card__body">
                <h2 className="card__title">{adoptame.nombre}</h2>
                <p>ID: {adoptame.id}</p>
                <p>Edad: { adoptame.edad } - { adoptame.genero }</p>
                <p>Descripción: { adoptame.desc_personalidad }</p>
            </div>
        </div>
    );
}
