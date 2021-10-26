/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import fabric from '../assets/textile.png'
import Button from '@mui/material/Button'

const Header = () => {
    return (
        
            <header sx={{width: '100vw', height: '60px', borderBottom:'1px solid gray', zIndex:999}}>
                <nav sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                <div sx={{display: 'flex', alignItems: 'center'}}><Image src={fabric} alt='textile logo' height='30px' width='30px'  sx={{transform:'rotate(45deg)'}}/>
                <Link href='/'>
                    <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer', marginLeft:'10px'}}>Tweed HR</a>
                    </Link></div>

                    <div sx={{display: 'flex', alignItems: 'center'}}>
                    <Link href='/'>
                    <Button variant='text' sx={{marginRight:'10px', color: 'primary'}}>Log In</Button>
                    </Link>
                    <Link href='/signup'>
                    <Button variant='contained' sx={{marginRight:'10px', bg:'primary'}}>Sign Up</Button>
                    </Link>
                    </div>
                </nav>
                </header>
        
    )
}

export default Header;