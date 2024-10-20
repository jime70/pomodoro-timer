export const InputAnimal = ({ animales, handleOnChange }) => { // Default value if animal is undefined
    return (
        <div className="input-animal">
            <input 
                type="text" 
                placeholder="Juntos, construyamos una gran familia."
                value={animales} 
                onChange={handleOnChange} 
            />
        </div>
    );
};
