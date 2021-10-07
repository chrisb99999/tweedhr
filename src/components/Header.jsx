/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import fabric from '../assets/textile.png'

const Header = () => {
    return (
        
            <header sx={{width: '100vw', height: '60px', bg: 'muted'}}>
                <nav sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                <div sx={{display: 'flex', alignItems: 'center'}}><Image src={fabric} alt='textile logo' height='30px' width='30px'  sx={{transform:'rotate(45deg)'}}/>
                <Link href='/'>
                    <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer', marginLeft:'10px'}}>Tweed HR</a>
                    </Link></div>

                    <div sx={{display: 'flex', alignItems: 'center'}}>
                    <Link href='/'>
                    <a sx={{variant: 'containers.secondaryButton'}}>Log In</a>
                    </Link>
                    <Link href='/'>
                    <a sx={{variant: 'containers.primaryButton'}}>Sign Up</a>
                    </Link>
                    </div>
                </nav>
                </header>
        
    )
}

export default Header;