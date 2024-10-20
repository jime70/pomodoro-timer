import { useState } from 'react';
import { Header } from './Header'; 
import { DetalleAdoptame } from '../components/DetalleAdoptame';
import { ListadoAdoptame } from '../components/ListadoAdoptame';
//import { ErrorBoundary } from '../components/ErrorBoundary';
import { InputAnimal } from '../components/InputAnimal'; 

export const Home = () => {
    const [searchAnimal, setSearchAnimal] = useState('');

    const handleSearchChange = (event) => {
        setSearchAnimal(event.target.value);
    }

    return (
        <>
            <Header title="App-Adopcion" subtitle="Juntos, construyamos una gran familia."/>
            
            <section>
                <h3>Encuentra a tu compañero ideal</h3>
                <InputAnimal animal={searchAnimal} handleOnChange={handleSearchChange} />

                <div>
                {searchAnimal.length > 0 ? <DetalleAdoptame adoptame={searchAnimal} /> : null}

                </div>
            </section>

            <section>
                {/* <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}> */}
                    <ListadoAdoptame/>
                {/* </ErrorBoundary> */}
            </section>
        </>
    )
}
