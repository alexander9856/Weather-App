import { Main } from "../Main/Main"
import { Search } from "../Search/Search"

export const Home = () => {
    return (
        <div className='container'>
            <Search />
            <Main />
        </div>
    )
}