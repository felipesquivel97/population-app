import { Link } from 'react-router-dom'
import './LinksSection.css'

interface Props {
  links: { name: string; to: string }[]
}

export const LinksSection = ({ links }: Props) => {
  return (
    <div className='links-section'>
      {links.map((link) => (
        <Link className='link' key={link.name} to={`/${link.to}`}>
          {link.name}
        </Link>
      ))}
    </div>
  )
}
