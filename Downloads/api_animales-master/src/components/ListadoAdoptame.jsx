//listado para llamar después a los animalitos
//import React from 'react';
import { TarjetaAdoptame } from './TarjetaAdoptame'; // Exportación nombrada
import { FetchAnimalitos } from '../hooks/FetchAnimalitos';

export const ListadoAdoptame = () => {
    const { animales, loading } = FetchAnimalitos();

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="listado-adoptame">
            {animales.map((adoptame) => (
                <TarjetaAdoptame key={adoptame.id} adoptame={adoptame} />
            ))}
        </div>
    );
};
