import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    const categoryUpperCase = category.toUpperCase()
    
    return (
        <>
            <h3 className='text-white p-4'>{ categoryUpperCase }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-gridd">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
