/* -----------------> Importing Components */
import { CharacterReel } from '../../components/CharacterReel/charaterReel'
import { Navbar } from '../../components/Navbar/Navbar'

/*----------------Component----------------*/

export function Lobby(
   ) {
    return (
        <section>
            <section>
                <Navbar />
            </section>
            <section className='lobby_header-label'> 
                <h3>A lot of heroes to travel with :3</h3>
            </section>
            <CharacterReel></CharacterReel>
        </section>
    );
}