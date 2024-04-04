import './MyPets.css'
import { Header } from '../../components/pages/Header/Header';
import { PetContainer } from '../../components/pages/PetContainer/PetContainer';
import AddPetButton from '../../components/ui/addPetButton/AddPetButton';
import getPets from '../../services/getPets'; //reemplazar con una funcion que haga toda la peticion a la api

const MyPets = () => {

    const pets:{name:string,age:number,_id:string}[] = getPets();
    
    return(
        <main className='myPets-container'>
            <Header>PetMaps</Header>
            <p className='myPets-title'>Todas mis mascotas</p>
            <AddPetButton />
            <section className='pet-list-container'>
                {pets.length !== 0 ? pets.map((pet,index) => (
                    <PetContainer age={pet.age} id={pet._id} customDeleteColor={index % 2 === 0 ? 'white' : 'orange'}>
                        {pet.name}
                    </PetContainer>
                )) : null}
            </section>
        </main>
    )
}

export default MyPets;