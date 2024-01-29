import { type FC } from 'react'
import cls from './ContactsPage.module.scss'

interface ContactsPageProps {
    className?: string
}

const ContactsPage: FC<ContactsPageProps> = (props) => {
    const { className } = props

    return <div className="">ContactsPage</div>
}

export default ContactsPage
